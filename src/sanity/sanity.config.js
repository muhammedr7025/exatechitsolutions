// Warning: this module (and anything it imports) pulls in the full Sanity
// Studio dependency tree. Never import from src/sanity/* in a file reachable
// from the main marketing bundle — only src/pages/Studio.jsx (lazy-loaded)
// should import this config. (client.js and env.js are the two safe ones.)
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { projectId, dataset, apiVersion } from './env';
import { schemaTypes, singletonTypes } from './schemaTypes';
import { structure } from './structure';

// Singletons can be edited and published, but not created a second time,
// duplicated, unpublished or deleted from Studio.
const singletonActions = new Set(['publish', 'discardChanges', 'restore']);

export default defineConfig({
  name: 'exatech',
  title: 'Exatech IT Solutions',
  basePath: '/studio',
  projectId,
  dataset,
  schema: {
    types: schemaTypes,
    templates: (templates) => templates.filter(({ schemaType }) => !singletonTypes.includes(schemaType)),
  },
  document: {
    actions: (prev, { schemaType }) =>
      singletonTypes.includes(schemaType) ? prev.filter(({ action }) => action && singletonActions.has(action)) : prev,
  },
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
