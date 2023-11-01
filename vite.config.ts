import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import dts from 'vite-plugin-dts';
import tsConfigPaths from 'vite-tsconfig-paths';
import { copy } from 'vite-plugin-copy';


export default defineConfig((configEnv) => {
  const plugins = [
    react({
      babel: {
        presets: ['@babel/preset-typescript'],
        plugins: [
          '@babel/plugin-transform-typescript',
          [
            'babel-plugin-styled-components',
            {
              ssr: false,
              pure: true,
              displayName: true,
              fileName: false,
            },
          ],
        ],
      },
    }),
    tsConfigPaths(),
    dts({
      insertTypesEntry: true,
      include: ['src/'],
    }),
    copy({
      patterns: [
        {
          from: 'src/styles',
          to: 'dist',
        },
      ],
    }),
  ];

  return {
    plugins,
    server: {
      open: true,
    },
    build: {
      lib: {
        entry: path.resolve(__dirname, './src/index.ts'),
        name: 'PlugNPlayUiKit',
        formats: ['es', 'umd'],
        fileName: (format) => `plug-n-play-ui-kit.${format}.js`,
      },
      copyPublicDir: false,
      outDir: 'dist',
      rollupOptions: {
        external: ['react', 'react-dom', 'styled-components', 'react/jsx-runtime'],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
            'styled-components': 'styled',
            'react/jsx-runtime': 'jsxRuntime',
          },
        },
        input: './src/index.ts',
      },
    },
    optimizeDeps: {
      include: ['styled-components'],
    },
    resolve: {
      alias: {
        'styled-components': 'styled-components',
        'plug-n-play-ui-kit': 'dist/plug-n-play-ui-kit.es.js',
      },
    },
  };
});
