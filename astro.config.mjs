import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Keep this in sync with `site.url` in src/config.ts
export default defineConfig({
  site: 'https://macramar.com',
  integrations: [sitemap()],
  // Fully static output: deploys to Cloudflare Pages with no adapter.
  output: 'static',
});
