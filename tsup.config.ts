import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  dts: true,
  external: ['react'],
  format: ['cjs'],
  esbuildOptions(options) {
    options.assetNames = 'assets/images/pdf-report/[name]';
  },
  loader: {
    '.svg': 'file',
    '.png': 'file',
  },
});