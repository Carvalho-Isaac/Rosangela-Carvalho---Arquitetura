import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr"

export default defineConfig({
  base: '/Rosangela-Carvalho---Arquitetura/',
  plugins: [
    svgr({
      exportAsDefault: true,
      icon: true,
    }), 
    react()
  ],
  assetsInclude: ['**/*.jpg', '**/*.jpeg', '**/*.png', '**/*.svg', '**/*.webp'],
  build: {
    assetsInlineLimit: 0, // Alterado para forçar arquivos separados
    outDir: 'dist',
    emptyOutDir: true,
    manifest: true, // Gera manifest.json
    sourcemap: true, // Facilita debug
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]'
      }
    }
  },
  resolve: {
    alias: {
      '@assets': '/src/assets'
    }
  }
})