/// <reference types="vitest" />

import path from 'path';

// eslint-disable-next-line import/no-extraneous-dependencies
import react from '@vitejs/plugin-react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vitest/config';
// eslint-disable-next-line import/no-extraneous-dependencies
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: path.resolve(__dirname, 'vitest.setup.js'),
  },
});
