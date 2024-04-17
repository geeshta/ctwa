import { defineConfig } from "vite";

import { resolve } from "path";

const staticDir = "static";

export default defineConfig({
  build: {
    minify: false,
    target: "es2020",
    assetsDir: staticDir,
    emptyOutDir: true,
    modulePreload: {
      polyfill: false
    },
    cssCodeSplit: false,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "site/about.html"),
        components: resolve(__dirname, `${staticDir}/js/components.js`)
      },
      output: {
        entryFileNames: `${staticDir}/[name].js`,
        chunkFileNames: `${staticDir}/js/[name].js`,
        assetFileNames: `${staticDir}/style/[name].[ext]`,
      }
    }
  }
});
