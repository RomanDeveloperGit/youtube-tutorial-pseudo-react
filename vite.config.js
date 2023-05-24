import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  esbuild: {
    jsxInject: 'import { React } from "../src"',
    jsxFactory: 'React.createElement',
  },
});
