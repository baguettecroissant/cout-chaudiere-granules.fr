import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://cout-chaudiere-granules.fr',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
    server: {
      fs: {
        allow: ['.', '/Users/wade/Sites/prix-pac-air-eau.fr/node_modules']
      }
    }
  },
});
