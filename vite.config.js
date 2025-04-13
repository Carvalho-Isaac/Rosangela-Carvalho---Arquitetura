import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr"

// https://vite.dev/config/
export default defineConfig({
  plugins: [svgr({
    exportAsDefault: true,
    icon: true,
  }), react(), ], 
  assetsInclude: ['**/*.jpg', '**/*.jpeg', '**/*.png', '**/*.svg', '**/*.webp'],
  build: {
    assetsInlineLimit: 4096
  },
  resolve: {
    alias: {
      '@assets': '/src/assets'
    }
  }
})
