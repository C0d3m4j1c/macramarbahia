import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Keep `site` in sync with `site.url` in src/config.ts
export default defineConfig({
  site: 'https://macramarbahia.com',
  // Spanish lives at /, English at /en/
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      // Adds hreflang alternates between the ES and EN versions of each URL.
      i18n: { defaultLocale: 'es', locales: { es: 'es-MX', en: 'en-US' } },
    }),
  ],
  // Fully static output, served by Cloudflare as static assets.
  output: 'static',
});
