#!/usr/bin/env node
// Copies the site's built-in content into Sanity so it becomes editable in Studio.
//
//   npm run seed -- --dry-run     show what would happen, change nothing
//   npm run seed                  do it
//
// Safe to run repeatedly: it only creates what is missing and fills blank
// fields; it never overwrites anything an editor has already changed.
//
// Needs (in .env or the environment):
//   VITE_SANITY_PROJECT_ID, VITE_SANITY_DATASET (default "production")
//   SANITY_WRITE_TOKEN   an "Editor" token from sanity.io/manage -> API -> Tokens
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@sanity/client';
import { buildDocuments, assetsNeeded, SINGLETON_IDS, LOGO_FILE } from './seed/buildDocuments.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dryRun = process.argv.includes('--dry-run');

const projectId = process.env.VITE_SANITY_PROJECT_ID;
const dataset = process.env.VITE_SANITY_DATASET || 'production';
const token = process.env.SANITY_WRITE_TOKEN;
// Keep in sync with src/sanity/env.js (that file uses import.meta.env, which Node doesn't have).
const apiVersion = '2026-08-11';

const fail = (msg) => {
  console.error(`\n✖ ${msg}\n`);
  process.exit(1);
};

if (!projectId) fail('VITE_SANITY_PROJECT_ID is not set. Copy .env.example to .env and fill it in.');
if (!dryRun && !token) fail('SANITY_WRITE_TOKEN is not set. Create an Editor token at sanity.io/manage → your project → API → Tokens, and put it in .env.');

const client = createClient({ projectId, dataset, apiVersion, token, useCdn: false, perspective: 'raw' });

async function fetchExisting() {
  const draftIds = SINGLETON_IDS.map((id) => `drafts.${id}`);
  const data = await client.fetch(
    `{
      "singletons": *[_id in $ids],
      "drafts": *[_id in $draftIds]._id,
      "services": *[_type == "service" && !(_id in path("drafts.**"))]{ _id, "slug": slug.current },
      "subServices": *[_type == "subService" && !(_id in path("drafts.**"))]{ _id, "slug": slug.current, "parentSlug": parentService->slug.current },
      "portfolio": *[_type == "portfolioItem" && !(_id in path("drafts.**"))]{ _id, url }
    }`,
    { ids: SINGLETON_IDS, draftIds }
  );
  return {
    singletons: Object.fromEntries(data.singletons.map((d) => [d._id, d])),
    drafts: data.drafts,
    services: data.services,
    subServices: data.subServices,
    portfolio: data.portfolio,
  };
}

async function upload(file) {
  const full = path.join(root, file.replace(/^\//, ''));
  const asset = await client.assets.upload('image', fs.createReadStream(full), { filename: path.basename(full) });
  return asset._id;
}

async function main() {
  console.log(`${dryRun ? '[dry run] ' : ''}Sanity project ${projectId}, dataset "${dataset}"\n`);

  let existing;
  try {
    existing = await fetchExisting();
  } catch (error) {
    if (!dryRun) fail(`Could not read from Sanity: ${error.message}`);
    console.log('(could not read the dataset; assuming it is empty)\n');
    existing = { singletons: {}, drafts: [], services: [], subServices: [], portfolio: [] };
  }

  // Images: upload only what the new documents need.
  const need = assetsNeeded(existing);
  const assets = { bg: {} };
  if (need.logo) assets.logo = dryRun ? 'image-dry-run-logo' : await upload(LOGO_FILE);
  for (const file of need.bg) assets.bg[file] = dryRun ? `image-dry-run-${file}` : await upload(file);

  const plan = buildDocuments(existing, assets);

  const byType = plan.create.reduce((acc, d) => ({ ...acc, [d._type]: (acc[d._type] || 0) + 1 }), {});
  console.log('Will create:');
  Object.entries(byType).forEach(([type, n]) => console.log(`  ${String(n).padStart(3)}  ${type}`));
  if (!plan.create.length) console.log('  (nothing)');
  console.log('\nWill fill in missing fields on existing documents:');
  plan.patch.forEach((p) => console.log(`  ${p.id}: ${Object.keys(p.set).join(', ')}`));
  if (!plan.patch.length) console.log('  (nothing)');
  console.log(`\nLeaving untouched: ${plan.skipped.length} item(s)`);

  if (existing.drafts.length) {
    console.log(`\n⚠ Unpublished edits exist for: ${existing.drafts.map((d) => d.replace('drafts.', '')).join(', ')}.`);
    console.log('  The website only shows PUBLISHED content — open each in Studio and click Publish.');
  }

  if (dryRun) return console.log('\nDry run — nothing was written.');

  // Commit in ordered batches so references (sub-service -> service, home -> service) resolve.
  const BATCH = 20;
  for (let i = 0; i < plan.create.length; i += BATCH) {
    const tx = client.transaction();
    plan.create.slice(i, i + BATCH).forEach((doc) => tx.createIfNotExists(doc));
    await tx.commit();
    process.stdout.write(`\rCreated ${Math.min(i + BATCH, plan.create.length)} / ${plan.create.length} documents`);
  }
  if (plan.create.length) process.stdout.write('\n');
  for (const { id, set } of plan.patch) await client.patch(id).set(set).commit();

  console.log('\n✔ Done. Open /studio to edit the content.');
}

main().catch((error) => fail(error.message));
