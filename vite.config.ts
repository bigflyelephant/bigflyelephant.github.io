import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";
import Compression from "vite-plugin-compression2";
import mkcert from "vite-plugin-mkcert";
import { VitePWA } from "vite-plugin-pwa";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  resolve: {
    // 别名
    alias: {
      "@": path.join(__dirname, "./src"),
    },
    // extensions: [".ts", ".js"],
  },
  server: {
    https: true,
  },
  css: {
    modules: {
      localsConvention: "camelCaseOnly",
    },
    postcss:'./postcss.config.cjs'
  },
  plugins: [
    react(),
    mkcert(),
    legacy({
      targets: ["> 0.001%", "> 0.01%", "> 0.1%", "IE 6"],
    }),
    VitePWA({
      injectRegister: "auto",
      registerType: "autoUpdate",
      workbox: {
        clientsClaim: true,
        skipWaiting: true,
        globPatterns: [
          "**/*.{js,css,ico,png,svg,jpg,jpeg,gif,bmp}",
          "**/*.{js,css,ico,png,svg,jpg,jpeg,gif,bmp}.gz",
        ],
      },
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: "ZQA's HomePage",
        short_name: "ZQA!!!!",
        description: "ZQA's HomePage, want to have some fun, please enjoy",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
        icons: [
          {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
    Compression({
      algorithm: "gzip",
      exclude: [/\.(br)$/, /\.(gz)$/],
      threshold: 40 * 1024,
    }),
    Compression({
      algorithm: "brotliCompress",
      exclude: [/\.(br)$/, /\.(gz)$/],
      threshold: 40 * 1024,
    }),
    visualizer({
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "classnames",
      "@reduxjs/toolkit",
      "react-helmet",
      "react-redux",
    ],
  },
});
