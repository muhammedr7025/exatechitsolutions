import { createClient } from '@sanity/client';
import { projectId, dataset, apiVersion } from './env';

// Safe to import from the marketing bundle (it only pulls in @sanity/client).
// Without VITE_SANITY_PROJECT_ID (e.g. a fresh clone with no .env) there is no
// client and the site renders its built-in content instead of crashing.
export const isCmsConfigured = Boolean(projectId);

export const client = isCmsConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
    })
  : null;
