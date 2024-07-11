import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],  // Ensures React and JSX are properly handled
  build: {
    outDir: 'dist',  // Sets the output directory for build files
    rollupOptions: {
      input: '/index.html'  // Explicitly set the entry point if necessary
    }
  }
});
