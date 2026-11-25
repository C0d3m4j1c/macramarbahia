# Macramar Bahía

Static storefront/brand site built with [Astro](https://astro.build). Spanish-language, mobile-first, orders via WhatsApp today, with a clear path to card payments later. Hosting cost: $0 (Cloudflare Pages) + the domain (~$10/yr).

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs ./dist
npm run preview
```

Requires Node 18.20+ (20+ recommended).

## Where to edit things

| What | File |
|---|---|
| Brand name, WhatsApp number, Instagram, site URL | `src/config.ts` (+ `site` in `astro.config.mjs`, and `public/robots.txt`) |
| Products, prices, sold-out flag, categories | `src/data/products.ts` |
| Product photos | `src/assets/products/` (Astro resizes and converts to WebP/AVIF at build) |
| Colors and fonts | CSS variables at the top of `src/styles/global.css` |
| Home page copy (brand story is placeholder text) | `src/pages/index.astro` |

**Adding a product:** drop the photo in `src/assets/products/`, add an entry to `products` in `src/data/products.ts`. A page at `/producto/<slug>` is generated automatically. Set `price: null` to show "Cotiza por WhatsApp".

## Deploy to Cloudflare Pages

1. Push this repo to GitHub.
2. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git.
3. Build command: `npm run build` — Output directory: `dist` — Node version env var: `NODE_VERSION=20`.
4. After the first deploy, add your custom domain under the project's Custom domains. If the domain is registered at Cloudflare, DNS is configured for you.
5. Update `site` in `astro.config.mjs`, `src/config.ts` and `public/robots.txt` to the final domain.

Optional: enable Cloudflare Web Analytics and paste the token in the commented snippet in `src/layouts/Base.astro`.

## Adding card payments later (no monthly fees)

Keep the site static and add one small serverless function:

1. Create `functions/api/checkout.ts` (Cloudflare Pages Functions).
2. It receives a product slug, looks up the price server-side (never trust prices from the browser), creates a Stripe Checkout Session or Mercado Pago preference, and returns the redirect URL.
3. Replace the WhatsApp button on `src/pages/producto/[slug].astro` with a "Comprar" button that calls it. Keep the WhatsApp link as a secondary option.
4. Store secret keys as Cloudflare Pages environment variables.
5. For one-of-a-kind pieces, mark a product `sold: true` after payment (webhook → commit to the repo, or move the catalog to Cloudflare D1/KV when you outgrow the file).

Stripe and Mercado Pago in Mexico both support cards, OXXO and SPEI. Shipping labels can be automated with Envía.com or Skydropx.

## Photos

Prefer real photos of finished pieces on a neutral background. A few supplied images have visible "Dola AI" watermarks or Instagram UI (mute icon) baked in; swap them with clean originals when you have them, keeping the same file names or updating `src/data/products.ts`.
