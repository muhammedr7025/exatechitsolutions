import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // Sanity Studio bundles its own React tree reference; dedupe so the
    // Studio and the main app share a single React instance (avoids
    // "Invalid hook call" errors from two copies of React mounting).
    dedupe: ['react', 'react-dom'],
  },
})
