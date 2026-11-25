// All translatable UI text + locale-aware URL helpers.
// To add or edit a translation, change the matching key in BOTH `es` and `en`.
// TypeScript will complain if the two objects get out of sync.

export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'es';

export const localeMeta: Record<
  Locale,
  { short: string; label: string; htmlLang: string; hreflang: string; og: string; numberLocale: string }
> = {
  es: { short: 'ES', label: 'Español', htmlLang: 'es', hreflang: 'es-MX', og: 'es_MX', numberLocale: 'es-MX' },
  en: { short: 'EN', label: 'English', htmlLang: 'en', hreflang: 'en-US', og: 'en_US', numberLocale: 'en-US' },
};

// ---- URLs (always with trailing slash, matching the static build output) ----
export const homePath = (l: Locale) => (l === 'es' ? '/' : '/en/');
export const shopPath = (l: Locale, category?: string) => {
  const base = l === 'es' ? '/tienda/' : '/en/shop/';
  return category ? `${base}?cat=${category}` : base;
};
export const productPath = (l: Locale, slug: string) =>
  l === 'es' ? `/producto/${slug}/` : `/en/product/${slug}/`;

// ---- Text ----
const es = {
  meta: {
    tagline: 'Arte que decora tu vida',
    description:
      'Macramé artesanal hecho a mano: tapices, bolsos, colgantes para plantas y accesorios. Piezas únicas con alma, desde Bahía.',
  },
  nav: {
    label: 'Principal',
    home: 'Inicio',
    shop: 'Tienda',
    about: 'Nosotros',
    contact: 'Contacto',
    whatsapp: 'WhatsApp',
    openMenu: 'Abrir menú',
    language: 'Idioma',
    homeAria: 'Macramar Bahía — inicio',
  },
  hero: {
    eyebrow: 'Macramé artesanal',
    lead: 'Tapices, bolsos, colgantes para plantas y accesorios tejidos a mano, nudo por nudo. Piezas únicas para llenar tu espacio de naturaleza, diseño y alma.',
    ctaCollection: 'Ver la colección',
    ctaDesign: 'Pide tu diseño',
    imageAlt: 'Mini tapiz de macramé colgado en una pared de madera con luz cálida',
  },
  values: { handmade: 'Hecho a mano', unique: 'Piezas únicas', soul: 'Decoración con alma' },
  featured: { eyebrow: 'Selección', title: 'Piezas destacadas', all: 'Ver todo' },
  categories: { eyebrow: 'Explora', title: 'Por categoría' },
  story: {
    eyebrow: 'Nuestra marca',
    title: 'Naturaleza, diseño, tu espacio',
    p1: 'En Macramar Bahía cada pieza nace de las manos: se teje despacio, con cuerda de algodón, nudos tradicionales y mucho cuidado por el detalle. Nada se produce en serie, por eso cada tapiz, bolso o colgante tiene su propio carácter.',
    p2: 'Creemos en la decoración con alma: objetos que cuentan algo, que se sienten cálidos y que acompañan tu vida diaria. Si imaginas una medida, un color o un diseño especial, lo tejemos para ti.',
    cta: 'Cotiza una pieza a tu medida',
    imageAlt: 'Vestido de macramé azul junto a plantas y luz natural',
  },
  contact: {
    eyebrow: 'Contacto',
    title: 'Hablemos de tu próxima pieza',
    lead: 'Escríbenos por WhatsApp o síguenos en Instagram para ver trabajos nuevos.',
  },
  footer: { tagline: 'Hecho a mano con alma.' },
  shop: {
    eyebrow: 'Colección',
    title: 'Tienda',
    all: 'Todo',
    filterLabel: 'Filtrar por categoría',
    metaDescription:
      'Explora tapices, bolsos, colgantes para plantas y accesorios de macramé hechos a mano.',
  },
  product: {
    breadcrumb: 'Ruta',
    sold: 'Vendido',
    quote: 'Cotiza por WhatsApp',
    order: 'Pedir por WhatsApp',
    handmade: 'Hecho a mano',
    unique: 'Pieza única',
    custom: '¿Otro color o medida? Escríbenos y lo tejemos para ti',
    related: 'También te puede gustar',
  },
  notFound: {
    title: 'Este nudo se deshizo',
    text: 'No encontramos la página que buscas.',
    cta: 'Ir a la tienda',
  },
  floatWhatsapp: 'Escríbenos por WhatsApp',
  wa: {
    hello: 'Hola Macramar Bahía 👋',
    info: 'Hola Macramar Bahía 👋 Quisiera más información sobre sus piezas.',
    design: 'Hola Macramar Bahía 👋 Quiero un diseño personalizado.',
    custom: 'Hola Macramar Bahía 👋 Quiero cotizar una pieza a mi medida.',
    product: (name: string) => `Hola Macramar Bahía 👋 Me interesa "${name}". ¿Está disponible?`,
  },
};

type Dict = typeof es;

const en: Dict = {
  meta: {
    tagline: 'Art that decorates your life',
    description:
      'Handmade macramé: wall hangings, bags, plant hangers and accessories. One-of-a-kind pieces with soul, from Bahía.',
  },
  nav: {
    label: 'Main',
    home: 'Home',
    shop: 'Shop',
    about: 'About',
    contact: 'Contact',
    whatsapp: 'WhatsApp',
    openMenu: 'Open menu',
    language: 'Language',
    homeAria: 'Macramar Bahía — home',
  },
  hero: {
    eyebrow: 'Handmade macramé',
    lead: 'Wall hangings, bags, plant hangers and accessories, knotted by hand. One-of-a-kind pieces to fill your space with nature, design and soul.',
    ctaCollection: 'See the collection',
    ctaDesign: 'Request your design',
    imageAlt: 'Small macramé wall hanging on a wooden wall in warm light',
  },
  values: { handmade: 'Handmade', unique: 'One of a kind', soul: 'Decor with soul' },
  featured: { eyebrow: 'Selection', title: 'Featured pieces', all: 'See all' },
  categories: { eyebrow: 'Explore', title: 'By category' },
  story: {
    eyebrow: 'Our brand',
    title: 'Nature, design, your space',
    p1: 'At Macramar Bahía every piece is born from hands: woven slowly, with cotton cord, traditional knots and great care for detail. Nothing is mass-produced, so every wall hanging, bag or plant hanger has its own character.',
    p2: "We believe in decor with soul: objects that tell a story, feel warm and keep you company in daily life. If you imagine a particular size, color or design, we'll knot it for you.",
    cta: 'Quote a custom piece',
    imageAlt: 'Blue macramé dress next to plants and natural light',
  },
  contact: {
    eyebrow: 'Contact',
    title: "Let's talk about your next piece",
    lead: 'Message us on WhatsApp or follow us on Instagram to see new work.',
  },
  footer: { tagline: 'Handmade with soul.' },
  shop: {
    eyebrow: 'Collection',
    title: 'Shop',
    all: 'All',
    filterLabel: 'Filter by category',
    metaDescription:
      'Explore handmade macramé wall hangings, bags, plant hangers and accessories.',
  },
  product: {
    breadcrumb: 'Breadcrumb',
    sold: 'Sold',
    quote: 'Ask for a quote on WhatsApp',
    order: 'Order on WhatsApp',
    handmade: 'Handmade',
    unique: 'One of a kind',
    custom: "Want another color or size? Message us and we'll knot it for you",
    related: 'You might also like',
  },
  notFound: {
    title: 'This knot came undone',
    text: "We couldn't find the page you're looking for.",
    cta: 'Go to the shop',
  },
  floatWhatsapp: 'Message us on WhatsApp',
  wa: {
    hello: 'Hi Macramar Bahía 👋',
    info: "Hi Macramar Bahía 👋 I'd like more information about your pieces.",
    design: "Hi Macramar Bahía 👋 I'd like a custom design.",
    custom: "Hi Macramar Bahía 👋 I'd like a quote for a made-to-measure piece.",
    product: (name: string) => `Hi Macramar Bahía 👋 I'm interested in "${name}". Is it available?`,
  },
};

const dictionaries: Record<Locale, Dict> = { es, en };
export const t = (locale: Locale): Dict => dictionaries[locale];
