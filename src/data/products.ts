// Your catalog. Edit this file to add products, set prices or mark pieces as sold.
// Put the photo in src/assets/products/ and reference the file name in `image`.
//
// price: number in MXN, or null to show "Cotiza por WhatsApp" / "Ask for a quote on WhatsApp".
// sold:  true shows a "Vendido"/"Sold" badge.
// text:  name, photo description (alt) and description in each language.

import type { Locale } from '../i18n/ui';

export type Category = 'tapices' | 'bolsos' | 'macetas' | 'moda';

export interface ProductText {
  name: string;
  alt: string;
  description: string;
}

export interface Product {
  slug: string;
  category: Category;
  image: string;
  price: number | null;
  sold?: boolean;
  featured?: boolean;
  text: Record<Locale, ProductText>;
}

export const categories: Record<Category, Record<Locale, { label: string; blurb: string }>> = {
  tapices: {
    es: { label: 'Tapices', blurb: 'Para vestir tus paredes' },
    en: { label: 'Wall hangings', blurb: 'To dress your walls' },
  },
  bolsos: {
    es: { label: 'Bolsos', blurb: 'Tejidos para llevar contigo' },
    en: { label: 'Bags', blurb: 'Knotted to carry with you' },
  },
  macetas: {
    es: { label: 'Colgantes para plantas', blurb: 'Naturaleza que cuelga' },
    en: { label: 'Plant hangers', blurb: 'Nature, hanging' },
  },
  moda: {
    es: { label: 'Moda y accesorios', blurb: 'Macramé para usar' },
    en: { label: 'Fashion & accessories', blurb: 'Macramé to wear' },
  },
};

export const products: Product[] = [
  {
    slug: 'mini-tapiz-canela',
    category: 'tapices',
    image: 'mini-tapiz-canela.jpg',
    price: null,
    featured: true,
    text: {
      es: {
        name: 'Mini tapiz con vara de canela',
        alt: 'Mini tapiz de macramé color crudo colgado de una vara de canela',
        description:
          'Un pequeño tapiz tejido a mano y montado sobre una vara de canela. Ideal para un rincón, un regalo o para empezar tu colección.',
      },
      en: {
        name: 'Mini wall hanging with cinnamon stick',
        alt: 'Small cream macramé wall hanging on a cinnamon stick',
        description:
          'A small wall hanging, hand-knotted and mounted on a cinnamon stick. Perfect for a corner, a gift, or the start of your collection.',
      },
    },
  },
  {
    slug: 'bolso-flecos-azul',
    category: 'bolsos',
    image: 'bolso-flecos-azul.jpg',
    price: null,
    featured: true,
    text: {
      es: {
        name: 'Bolso de flecos azul noche',
        alt: 'Bolso cruzado de macramé azul marino con flecos largos y detalles dorados',
        description:
          'Bolso cruzado con diseño de rombos y flecos largos. Tejido a mano, con correa trenzada ajustable al cuerpo.',
      },
      en: {
        name: 'Midnight blue fringe bag',
        alt: 'Navy blue macramé crossbody bag with long fringe and gold details',
        description:
          'Crossbody bag with a diamond pattern and long fringe. Hand-knotted, with an adjustable braided strap.',
      },
    },
  },
  {
    slug: 'vestido-macrame-azul',
    category: 'moda',
    image: 'vestido-azul.jpg',
    price: null,
    featured: true,
    text: {
      es: {
        name: 'Vestido de macramé azul',
        alt: 'Vestido largo de macramé azul marino colgado de una rama',
        description:
          'Prenda larga de macramé en azul profundo con destellos de color. Perfecta sobre un traje de baño o para una ocasión especial.',
      },
      en: {
        name: 'Blue macramé dress',
        alt: 'Long navy blue macramé dress hanging from a branch',
        description:
          'A long macramé piece in deep blue with flecks of color. Beautiful over a swimsuit or for a special occasion.',
      },
    },
  },
  {
    slug: 'colgante-planta-borla',
    category: 'macetas',
    image: 'colgante-planta-borla.jpg',
    price: null,
    featured: true,
    text: {
      es: {
        name: 'Colgante para plantas con borla',
        alt: 'Colgante de macramé crudo con una maceta blanca y una planta',
        description:
          'Portamacetas de macramé con trenzado en espiral y borla. Hecho para llevar tus plantas a la altura de la luz.',
      },
      en: {
        name: 'Plant hanger with tassel',
        alt: 'Cream macramé plant hanger holding a white pot and a plant',
        description:
          'Macramé plant hanger with a spiral braid and tassel. Made to bring your plants up into the light.',
      },
    },
  },
  {
    slug: 'mini-tapices-colores',
    category: 'tapices',
    image: 'mini-tapices-colores.jpg',
    price: null,
    featured: true,
    text: {
      es: {
        name: 'Mini tapices de colores',
        alt: 'Cinco mini tapices de macramé en tonos terracota, crudo, verde, azul y petróleo sobre una rama',
        description:
          'Mini tapices en una paleta de tonos tierra y mar. Se venden por pieza; escríbenos el color que prefieres.',
      },
      en: {
        name: 'Colorful mini wall hangings',
        alt: 'Five macramé mini wall hangings in terracotta, cream, green, blue and teal on a branch',
        description:
          'Mini wall hangings in a palette of earth and sea tones. Sold individually; message us with the color you prefer.',
      },
    },
  },
  {
    slug: 'bolso-red-crudo',
    category: 'bolsos',
    image: 'bolso-red-crudo.jpg',
    price: null,
    text: {
      es: {
        name: 'Bolso de red en crudo',
        alt: 'Bolso tipo red de macramé color crudo con asas',
        description:
          'Bolso de red con nudos en diamante, ligero y espacioso. Un clásico para la playa o el mercado.',
      },
      en: {
        name: 'Natural net bag',
        alt: 'Cream macramé net bag with handles',
        description:
          'Net bag with diamond knots, light and roomy. A classic for the beach or the market.',
      },
    },
  },
  {
    slug: 'colgantes-maceta-botella',
    category: 'macetas',
    image: 'colgantes-maceta-botella.jpg',
    price: null,
    text: {
      es: {
        name: 'Colgantes para maceta y botella',
        alt: 'Dos colgantes de macramé sosteniendo una botella con planta y una maceta blanca',
        description:
          'Colgantes en distintos formatos: para maceta o para reutilizar una botella de vidrio como florero.',
      },
      en: {
        name: 'Pot and bottle hangers',
        alt: 'Two macramé hangers holding a bottle with a plant and a white pot',
        description:
          'Hangers in different formats: for a plant pot, or to reuse a glass bottle as a vase.',
      },
    },
  },
  {
    slug: 'tapiz-cabecera',
    category: 'tapices',
    image: 'tapiz-cabecera.jpg',
    price: null,
    text: {
      es: {
        name: 'Tapiz grande para cabecera',
        alt: 'Tapiz grande de macramé en una rama sobre la cabecera de una cama',
        description:
          'Tapiz de gran formato con flecos y detalle en borla, pensado para ser el centro de atención sobre tu cama o sala.',
      },
      en: {
        name: 'Large headboard wall hanging',
        alt: 'Large macramé wall hanging on a branch above a bed headboard',
        description:
          'A large-format wall hanging with fringe and a tassel detail, made to be the centerpiece above your bed or living room.',
      },
    },
  },
  {
    slug: 'bolso-redondo-blanco',
    category: 'bolsos',
    image: 'bolso-redondo-blanco.jpg',
    price: null,
    text: {
      es: {
        name: 'Bolso redondo blanco',
        alt: 'Bolso cruzado redondo de macramé blanco con correa trenzada',
        description:
          'Bolso redondo con textura de concha y correa trenzada. Un detalle artesanal para cualquier look.',
      },
      en: {
        name: 'Round white bag',
        alt: 'Round white macramé crossbody bag with braided strap',
        description:
          'Round bag with a shell-like texture and braided strap. A handmade touch for any look.',
      },
    },
  },
  {
    slug: 'sombrero-flecos',
    category: 'moda',
    image: 'sombrero-flecos.jpg',
    price: null,
    text: {
      es: {
        name: 'Sombrero con macramé y flecos',
        alt: 'Sombrero con ala de macramé en tono arena y flecos',
        description:
          'Sombrero con ala de macramé y flecos suaves. Sombra, estilo y trabajo hecho a mano en una sola pieza.',
      },
      en: {
        name: 'Hat with macramé brim and fringe',
        alt: 'Hat with a sand-colored macramé brim and fringe',
        description:
          'Hat with a macramé brim and soft fringe. Shade, style and handwork in a single piece.',
      },
    },
  },
];

export const formatPrice = (n: number, locale: Locale) =>
  new Intl.NumberFormat(locale === 'es' ? 'es-MX' : 'en-US', {
    style: 'currency',
    currency: 'MXN',
    maximumFractionDigits: 0,
  }).format(n);
