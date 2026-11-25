// Your catalog. Edit this file to add products, set prices or mark pieces as sold.
// Put the photo in src/assets/products/ and reference the file name in `image`.
//
// price: number in MXN, or null to show "Cotiza por WhatsApp".
// sold:  true shows a "Vendido" badge and disables ordering.

export type Category = 'tapices' | 'bolsos' | 'macetas' | 'moda';

export interface Product {
  slug: string;
  name: string;
  category: Category;
  image: string;
  alt: string;
  description: string;
  price: number | null;
  sold?: boolean;
  featured?: boolean;
}

export const categories: Record<Category, { label: string; blurb: string }> = {
  tapices: { label: 'Tapices', blurb: 'Para vestir tus paredes' },
  bolsos: { label: 'Bolsos', blurb: 'Tejidos para llevar contigo' },
  macetas: { label: 'Colgantes para plantas', blurb: 'Naturaleza que cuelga' },
  moda: { label: 'Moda y accesorios', blurb: 'Macramé para usar' },
};

export const products: Product[] = [
  {
    slug: 'mini-tapiz-canela',
    name: 'Mini tapiz con vara de canela',
    category: 'tapices',
    image: 'mini-tapiz-canela.jpg',
    alt: 'Mini tapiz de macramé color crudo colgado de una vara de canela',
    description:
      'Un pequeño tapiz tejido a mano y montado sobre una vara de canela. Ideal para un rincón, un regalo o para empezar tu colección.',
    price: null,
    featured: true,
  },
  {
    slug: 'bolso-flecos-azul',
    name: 'Bolso de flecos azul noche',
    category: 'bolsos',
    image: 'bolso-flecos-azul.jpg',
    alt: 'Bolso cruzado de macramé azul marino con flecos largos y detalles dorados',
    description:
      'Bolso cruzado con diseño de rombos y flecos largos. Tejido a mano, con correa trenzada ajustable al cuerpo.',
    price: null,
    featured: true,
  },
  {
    slug: 'vestido-macrame-azul',
    name: 'Vestido de macramé azul',
    category: 'moda',
    image: 'vestido-azul.jpg',
    alt: 'Vestido largo de macramé azul marino colgado de una rama',
    description:
      'Prenda larga de macramé en azul profundo con destellos de color. Perfecta sobre un traje de baño o para una ocasión especial.',
    price: null,
    featured: true,
  },
  {
    slug: 'colgante-planta-borla',
    name: 'Colgante para plantas con borla',
    category: 'macetas',
    image: 'colgante-planta-borla.jpg',
    alt: 'Colgante de macramé crudo con una maceta blanca y una planta',
    description:
      'Portamacetas de macramé con trenzado en espiral y borla. Hecho para llevar tus plantas a la altura de la luz.',
    price: null,
    featured: true,
  },
  {
    slug: 'mini-tapices-colores',
    name: 'Mini tapices de colores',
    category: 'tapices',
    image: 'mini-tapices-colores.jpg',
    alt: 'Cinco mini tapices de macramé en tonos terracota, crudo, verde, azul y petróleo sobre una rama',
    description:
      'Mini tapices en una paleta de tonos tierra y mar. Se venden por pieza; escríbenos el color que prefieres.',
    price: null,
    featured: true,
  },
  {
    slug: 'bolso-red-crudo',
    name: 'Bolso de red en crudo',
    category: 'bolsos',
    image: 'bolso-red-crudo.jpg',
    alt: 'Bolso tipo red de macramé color crudo con asas',
    description:
      'Bolso de red con nudos en diamante, ligero y espacioso. Un clásico para la playa o el mercado.',
    price: null,
  },
  {
    slug: 'colgantes-maceta-botella',
    name: 'Colgantes para maceta y botella',
    category: 'macetas',
    image: 'colgantes-maceta-botella.jpg',
    alt: 'Dos colgantes de macramé sosteniendo una botella con planta y una maceta blanca',
    description:
      'Colgantes en distintos formatos: para maceta o para reutilizar una botella de vidrio como florero.',
    price: null,
  },
  {
    slug: 'tapiz-cabecera',
    name: 'Tapiz grande para cabecera',
    category: 'tapices',
    image: 'tapiz-cabecera.jpg',
    alt: 'Tapiz grande de macramé en una rama sobre la cabecera de una cama',
    description:
      'Tapiz de gran formato con flecos y detalle en borla, pensado para ser el centro de atención sobre tu cama o sala.',
    price: null,
  },
  {
    slug: 'bolso-redondo-blanco',
    name: 'Bolso redondo blanco',
    category: 'bolsos',
    image: 'bolso-redondo-blanco.jpg',
    alt: 'Bolso cruzado redondo de macramé blanco con correa trenzada',
    description:
      'Bolso redondo con textura de concha y correa trenzada. Un detalle artesanal para cualquier look.',
    price: null,
  },
  {
    slug: 'sombrero-flecos',
    name: 'Sombrero con macramé y flecos',
    category: 'moda',
    image: 'sombrero-flecos.jpg',
    alt: 'Sombrero con ala de macramé en tono arena y flecos',
    description:
      'Sombrero con ala de macramé y flecos suaves. Sombra, estilo y trabajo hecho a mano en una sola pieza.',
    price: null,
  },
];

export const formatPrice = (n: number) =>
  new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    maximumFractionDigits: 0,
  }).format(n);
