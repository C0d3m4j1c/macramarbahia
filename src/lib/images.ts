import type { ImageMetadata } from 'astro';

// Resolves a file in src/assets/products/ so Astro can optimize it at build time.
const modules = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/products/*.{jpg,jpeg,png,webp}',
  { eager: true },
);

export function getImage(file: string): ImageMetadata {
  const entry = modules[`/src/assets/products/${file}`];
  if (!entry) throw new Error(`Image not found in src/assets/products: ${file}`);
  return entry.default;
}
