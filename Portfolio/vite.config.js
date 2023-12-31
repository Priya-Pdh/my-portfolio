import React from 'react';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // This should match the "publish" directory in netlify.toml
  },
});
