// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Optionally configure the resolve options
  resolve: {
    dedupe: ['react', 'react-dom']  // Avoid duplicating these dependencies
  }
});
