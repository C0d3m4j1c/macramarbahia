// Single place to edit brand + contact details.
// Translatable text (taglines, descriptions, buttons...) lives in src/i18n/ui.ts.
export const site = {
  name: 'Macramar Bahía',
  handle: 'macramar.bahia',
  url: 'https://macramarbahia.com', // keep in sync with astro.config.mjs
  // WhatsApp number in international format, digits only (52 = Mexico).
  whatsapp: '523227289675',
  whatsappDisplay: '322 728 9675',
  instagram: 'https://www.instagram.com/macramar.bahia',
  currency: 'MXN',
};

export const waLink = (message: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
