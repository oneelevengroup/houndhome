// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Update `site` once the production domain is secured (see CLAUDE.md §9).
export default defineConfig({
  site: 'https://houndandhome.com',
  // applyBaseStyles: false — our src/styles/global.css owns the @tailwind
  // directives and base layer, so the integration shouldn't inject its own.
  integrations: [tailwind({ applyBaseStyles: false }), sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
