import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  devOptions: {
    devToolbar: false,
  },
  integrations: [tailwind()]
});