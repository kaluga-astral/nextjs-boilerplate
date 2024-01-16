import { resolve } from 'path';

import react from '@vitejs/plugin-react-swc';
import { type AliasOptions, defineConfig, splitVendorChunkPlugin } from 'vite';
import svgrPlugin from 'vite-plugin-svgr';
import legacy from '@vitejs/plugin-legacy';
import dotenv from 'dotenv';

import { compilerOptions } from './tsconfig.json';

const alias: AliasOptions = Object.entries(compilerOptions.paths).reduce(
  (res, [key, [value]]) => ({
    ...res,
    [key.replace('/*', '')]: resolve(__dirname, value.replace('*', '')),
  }),
  {},
);

dotenv.config();

const isLocalOrDevStand =
  process.env.VITE_STAND === 'local' || process.env.VITE_STAND === 'dev';

export default defineConfig({
  plugins: [
    splitVendorChunkPlugin(),
    react(),
    svgrPlugin({ svgrOptions: { icon: true } }),
    legacy({
      targets: ['last 3 versions', 'safari >= 12'],
    }),
  ],
  root: 'pages',
  logLevel: isLocalOrDevStand ? 'info' : 'error',
  resolve: {
    alias,
  },
  build: {
    sourcemap: isLocalOrDevStand,
    outDir: resolve(__dirname, 'dist'),
  },
});
