import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import dts from "vite-plugin-dts";
import EsLint from 'vite-plugin-linter';
import tsConfigPaths from 'vite-tsconfig-paths'
const { EsLinter, linterPlugin } = EsLint;

export default defineConfig((configEnv)=>({
  plugins: [
    react({
      babel: {
        presets: ["@babel/preset-typescript"],
        plugins: [
          "@babel/plugin-transform-typescript",
          [
            "babel-plugin-styled-components",
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
    linterPlugin({
      include: ['./src}/**/*.{ts,tsx}'],
      linters: [new EsLinter({ configEnv })],
    }),
    dts({
      insertTypesEntry: true,
      include: ['src/components/'],
    }),
  ],
  server: {
    open: true, // Open the default browser when running the development server.
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "./src/components/index.ts"),
      name: "PlugNPlayUiKit",
      formats: ["es", 'umd'],
      fileName: (format) => `plug-n-play-ui-kit.${format}.js`,
    },
    copyPublicDir: false,
    outDir: "dist", // The directory where the production build will be placed.
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "styled-components",
        "react/jsx-runtime",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "styled-components": "styled",
        },
      },
      input: "./src/index.ts", // Specify the entry JavaScript/TypeScript file
    },
  },
  optimizeDeps: {
    include: ["styled-components"], // Add dependencies you want to include in the build here.
  },
  resolve: {
    alias: {
      "styled-components": "styled-components",
    },
  },
}));
