import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
 plugins: [
   react(),
   VitePWA({
     registerType: 'autoUpdate',
     includeAssets: [
       'favicon.svg',
       'favicon.ico',
       'robots.txt',
       'apple-touch-icon.png',
     ],
     manifest: {
       name: 'Films Roulet + PWA',
       short_name: 'Films roulet App',
       description: 'Rede Social de Filmes utilizando ReactJS e PWA',
       theme_color: '#027506',
       background_color: '#141111',
       display: 'standalone',
       icons: [
         {
           src: 'icons/logofast_.svg',
           sizes: '192x192',
           type: 'image/svg+xml',
         },
         {
           src: 'icons/logofast_.svg',
           sizes: '512x512',
           type: 'image/svg+xml',
         },
       ],
     },
   }),
 ],
});
