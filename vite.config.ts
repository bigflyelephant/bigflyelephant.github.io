import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";
import Compression from "vite-compression-plugin";
import mkcert from "vite-plugin-mkcert";
import { terser } from "rollup-plugin-terser";
import { VitePWA } from "vite-plugin-pwa";
import path from "path";

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
  build: {
    rollupOptions: {
      plugins: [
        terser({
          compress: {
            drop_console:true,
            drop_debugger:true,
            passes:10
          },
        }),
      ],
    },
  },
  css: {
    modules: {
      localsConvention: "camelCaseOnly",
    },
  },
  plugins: [
    react(),
    mkcert(),
    legacy({
      targets: ["defaults", "> 0.001%"],
    }),
    Compression({
      threshold: 128000,
      algorithm: "gzip",
      loginfo: "silent",
    }),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*.{js,css,ico,png,svg,jpg,jpeg,gif,bmp}","**/*.{js,css,ico,png,svg,jpg,jpeg,gif,bmp}.gz"],
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
