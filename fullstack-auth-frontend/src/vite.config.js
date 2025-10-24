import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,          // Frontend port
    open: true,          // Automatically open in browser
    proxy: {
      // Proxy API requests to your NestJS backend
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  resolve: {
    alias: {
      '@': '/src', // Optional: use @ as alias to src
    },
  },
});
