import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://Ricardo-Alan-Escobar.github.io',
  base: '/GrupoMaquirsa',
  integrations: [tailwind()],
});
