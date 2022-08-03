import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'
import Compression from 'vite-compression-plugin';
import { terser } from "rollup-plugin-terser";

// https://vitejs.dev/config/
export default defineConfig({
    build:{
        target:'es2015',
        rollupOptions:{
            plugins:[terser()]
        }
    },
    plugins: [
        react(),
        // legacy({
        //     targets: ['defaults', '> 0.5%']
        // }),
        // Compression({
        //     algorithm:'gzip'
        // }),
        // Compression({
        //     algorithm:'deflateRaw'
        // }),
        // Compression({
        //     algorithm:'brotliCompress'
        // }),
    ],

})
