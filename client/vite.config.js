import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';

// base is switchable — dev + 3levelsofgame.live use '/',
// preview at 3levelsofgame.com/main/ uses '/main/'.
const base = process.env.VITE_BASE || '/';

export default defineConfig({
  base,
  define: { 'import.meta.env.VITE_SINGLEFILE': JSON.stringify(process.env.VITE_SINGLEFILE ?? '0') },
  // VITE_SINGLEFILE=1 builds one self-contained HTML file (hash routing) for shareable previews.
  plugins: [react(), ...(process.env.VITE_SINGLEFILE === '1' ? [viteSingleFile()] : [])],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:3005',
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: process.env.VITE_SINGLEFILE === '1' ? 'dist-preview' : 'dist',
    sourcemap: false,
  },
});
