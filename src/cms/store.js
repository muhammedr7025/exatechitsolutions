import { useEffect, useSyncExternalStore } from 'react';
import { client } from '../sanity/client';

// A tiny cache in front of the Sanity client.
//  - Every query result is kept in memory, and mirrored to localStorage so a
//    returning visitor sees the last-known content instantly (then it refreshes).
//  - Identical in-flight requests are shared.
//  - Nothing here throws: if Sanity is unreachable the caller just keeps
//    getting `status: 'error'` and renders the built-in content.

const STORAGE_PREFIX = 'exatech-cms:v1:';
const STALE_AFTER_MS = 60_000;
const MAX_STORED_CHARS = 400_000;

const entries = new Map(); // key -> { status, data, updatedAt }
const inflight = new Map(); // key -> Promise
const listeners = new Set();

const DISABLED = Object.freeze({ status: 'disabled', data: undefined, updatedAt: 0 });
const IDLE = Object.freeze({ status: 'idle', data: undefined, updatedAt: 0 });

function hash(str) {
  let h = 5381;
  for (let i = 0; i < str.length; i++) h = ((h << 5) + h + str.charCodeAt(i)) | 0;
  return (h >>> 0).toString(36);
}

const cacheKey = (query, params) => hash(query.replace(/\s+/g, ' ') + JSON.stringify(params ?? {}));

function readStored(key) {
  try {
    const raw = localStorage.getItem(STORAGE_PREFIX + key);
    return raw == null ? undefined : JSON.parse(raw);
  } catch {
    return undefined;
  }
}

function writeStored(key, data) {
  try {
    const raw = JSON.stringify(data);
    if (raw.length <= MAX_STORED_CHARS) localStorage.setItem(STORAGE_PREFIX + key, raw);
  } catch {
    /* private mode / quota: the in-memory cache is enough */
  }
}

function setEntry(key, entry) {
  entries.set(key, entry);
  listeners.forEach((l) => l());
}

function getEntry(key) {
  if (!client) return DISABLED;
  if (!entries.has(key)) {
    const stored = readStored(key);
    entries.set(key, stored === undefined ? IDLE : { status: 'idle', data: stored, updatedAt: 0 });
  }
  return entries.get(key);
}

function revalidate(key, query, params) {
  if (!client || inflight.has(key)) return;
  const current = getEntry(key);
  if (current.status === 'ready' && Date.now() - current.updatedAt < STALE_AFTER_MS) return;

  setEntry(key, { ...current, status: 'loading' });
  const request = client
    .fetch(query, params)
    .then((data) => {
      setEntry(key, { status: 'ready', data, updatedAt: Date.now() });
      writeStored(key, data);
    })
    .catch((error) => {
      console.warn('[cms] Could not load content from Sanity — showing built-in content.', error);
      setEntry(key, { ...getEntry(key), status: 'error' });
    })
    .finally(() => inflight.delete(key));
  inflight.set(key, request);
}

const subscribe = (listener) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

/**
 * Run a GROQ query.
 * Returns { data, status } where status is 'idle' | 'loading' | 'ready' | 'error' | 'disabled'.
 * `data` is the last known result (possibly from the previous visit) or undefined;
 * `null` data with status 'ready' means "Sanity answered: nothing there".
 */
export function useCms(query, params, { enabled = true } = {}) {
  const key = cacheKey(query, params);
  const entry = useSyncExternalStore(subscribe, () => (enabled ? getEntry(key) : IDLE));

  const paramsJson = JSON.stringify(params ?? {});
  useEffect(() => {
    if (enabled) revalidate(key, query, JSON.parse(paramsJson));
  }, [enabled, key, query, paramsJson]);

  return entry;
}

/**
 * Decide what to render for something that can come from Sanity or from the
 * built-in defaults.
 *  - Sanity has it            -> Sanity.
 *  - still loading / offline  -> the default (so the page is never blank).
 *  - Sanity answered "no":
 *      authoritative (Sanity is in charge of this collection) -> nothing (404),
 *      otherwise (Sanity has none of this collection yet)     -> the default.
 */
export function pickSource({ cms, status, fallback, authoritative }) {
  if (cms) return cms;
  if (status === 'ready') return authoritative ? null : fallback ?? null;
  return fallback ?? null;
}
