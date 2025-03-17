import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  esbuild: {
    treeShaking: true,
  },
  build: {
    sourcemap: false,
    chunkSizeWarningLimit: 500,
    minify: 'esbuild',
  },
  server: {
    hmr: true,
    open: true,
  },
});
