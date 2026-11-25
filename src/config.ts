// Single place to edit brand + contact details.
export const site = {
  name: 'Macramar Bahía',
  handle: 'macramar.bahia',
  tagline: 'Arte que decora tu vida',
  description:
    'Macramé artesanal hecho a mano: tapices, bolsos, colgantes para plantas y accesorios. Piezas únicas con alma, desde Bahía.',
  url: 'https://macramar.com', // keep in sync with astro.config.mjs
  // WhatsApp number in international format, digits only (52 = Mexico).
  whatsapp: '523227289675',
  whatsappDisplay: '322 728 9675',
  instagram: 'https://www.instagram.com/macramar.bahia',
  locale: 'es_MX',
  currency: 'MXN',
};

export const waLink = (message: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
