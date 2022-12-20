import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  // ==> DEV <==
  // MANUAL ABSOLUTE PATH SUPPORT
  // Use if there's an issue with [vite-tsconfig-paths] plugin
  // ----------------------------------------------------------
  resolve: {
    alias: [
      // { find: '@/*', replacement: '/src/*' },
      { find: '@utils/*', replacement: 'src/features/utils/*' },
    ],
  },
  plugins: [
    tsconfigPaths(),
    react(),
  ],
});
