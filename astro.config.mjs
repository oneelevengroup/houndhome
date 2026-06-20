// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Update `site` once the production domain is secured (see CLAUDE.md §9).
// Sitemap is hand-authored at public/sitemap.xml (the @astrojs/sitemap
// integration's build:done hook is incompatible with this Astro line).
export default defineConfig({
  site: 'https://houndandhome.com',
  // applyBaseStyles: false — our src/styles/global.css owns the @tailwind
  // directives and base layer, so the integration shouldn't inject its own.
  integrations: [tailwind({ applyBaseStyles: false })],
  build: {
    inlineStylesheets: 'auto',
  },
});
