// Warning: this module (and anything it imports) pulls in the full Sanity
// Studio dependency tree. Never import from src/sanity/* in a file reachable
// from the main marketing bundle — only src/pages/Studio.jsx (lazy-loaded)
// should import this config.
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { projectId, dataset, apiVersion } from './env';
import { schemaTypes } from './schemaTypes';
import { structure } from './structure';

export default defineConfig({
  name: 'exatech',
  title: 'Exatech IT Solutions',
  basePath: '/studio',
  projectId,
  dataset,
  schema: { types: schemaTypes },
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
