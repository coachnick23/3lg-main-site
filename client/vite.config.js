import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base is switchable — dev + 3levelsofgame.live use '/',
// preview at 3levelsofgame.com/main/ uses '/main/'.
const base = process.env.VITE_BASE || '/';

export default defineConfig({
  base,
  plugins: [react()],
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
    outDir: 'dist',
    sourcemap: false,
  },
});
