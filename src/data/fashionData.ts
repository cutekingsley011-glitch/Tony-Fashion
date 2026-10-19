import { LookbookItem, Pillar, AcademyProgram, JournalArticle } from '../types';

import heroImg from '../assets/images/hero_editorial_denim_1790849950703.jpg';
import atelierImg from '../assets/images/atelier_bespoke_craft_1790849962108.jpg';
import productionImg from '../assets/images/production_manufacturing_1790849973065.jpg';
import academyImg from '../assets/images/academy_pattern_cutting_1790849983459.jpg';
import crazyJeansImg from '../assets/images/lookbook_crazy_jeans_1790849994813.jpg';
import runwayTailoringImg from '../assets/images/lookbook_runway_tailoring_1790850006938.jpg';
import denimDetailsImg from '../assets/images/lookbook_denim_details_1790850017137.jpg';
import journalCraftImg from '../assets/images/journal_craft_textile_1790850028361.jpg';

// Authentic Tony Fashion Pieces from User Uploads
import tonyRealOliveMonogram from '../assets/images/tony_real_olive_monogram_1790851348262.jpg';
import tonyRealWhitePipedSet from '../assets/images/tony_real_white_piped_set_1790851361088.jpg';
import tonyRealTweedWideTrousers from '../assets/images/tony_real_tweed_wide_trousers_1790851372344.jpg';
import tonyRealAtelierCollectionRack from '../assets/images/tony_real_atelier_collection_rack_1790851383745.jpg';

export const BRAND_ASSETS = {
  hero: heroImg,
  atelier: atelierImg,
  production: productionImg,
  academy: academyImg,
  crazyJeans: crazyJeansImg,
  runwayTailoring: runwayTailoringImg,
  denimDetails: denimDetailsImg,
  journalCraft: journalCraftImg,
  // Real Tony Fashion Work
  oliveMonogram: tonyRealOliveMonogram,
  whitePipedSet: tonyRealWhitePipedSet,
  tweedWideTrousers: tonyRealTweedWideTrousers,
  atelierCollectionRack: tonyRealAtelierCollectionRack,
};

export const BRAND_INFO = {
  name: 'TONY FASHION',
  alias: 'TONYFASHIONFIT',
  tagline: 'Custom Tailoring · Crazy Jeans · Bulk Clothes Sewing · Fashion Academy',
  subline: 'Professional tailoring house and clothing factory in Port Harcourt. We sew sharp custom clothes, design famous crazy jeans, produce bulk clothes for brands, and teach practical fashion design.',
  experience: '10+ Years of Quality Tailoring',
  engine: ['Custom Tailoring', 'Bulk Factory Sewing', 'Fashion Academy', 'Creative Design'],
  contactEmail: 'inquiries@tonyfashionfit.com',
  studioHours: 'Monday – Saturday: 09:00 – 18:00',
  phone: '+234 704 989 6447',
  whatsappNumber: '2347049896447',
  whatsappDisplay: '+234 704 989 6447',
  whatsappDefaultMessage: 'Hi Tony Fashion, I came from the website, I want to make enquiries about your clothes and sewing services.',
  physicalStore: 'Delta Park UniPort, Port Harcourt, Rivers State, Nigeria',
  shortAddress: 'Delta Park UniPort, Port Harcourt, Rivers State',
  coordinates: 'Physical Store & Workshop, Delta Park UniPort, Port Harcourt, Rivers State',
  socials: {
    instagram: 'https://www.instagram.com/tonyfashion.fit?xtok=OTE5aDU1cmk4ODdi',
    instagramHandle: '@tonyfashion.fit',
    tiktok: 'https://www.tiktok.com/@tonyfashion.fit?_r=1&_t=ZS-9Abrb5NlpPU',
    tiktokHandle: '@tonyfashion.fit',
  },
};

export function getWhatsAppUrl(customMessage?: string): string {
  const msg = customMessage || BRAND_INFO.whatsappDefaultMessage;
  return `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`;
}

export const PILLARS: Pillar[] = [
  {
    id: 'atelier',
    number: '01',
    title: 'Custom Sewing & Crazy Jeans',
    tagline: 'Bespoke Tailoring, Native Wear, Suits & Unique Denim',
    summary: 'We sew clothes that fit your exact body shape and style. From custom shirts, suits, and native wear to our famous handcrafted crazy jeans.',
    description: 'When you bring your fabric or choose from our fabrics, we take your accurate body measurements and cut clothes that give you confidence. No loose fitting or tight choking — just clean seams, perfect fitting, and neat styling.',
    image: atelierImg,
    quote: 'A well-tailored outfit changes how people address you. We sew clean clothes that make you stand out.',
    capabilities: [
      {
        title: 'Custom Native & Suit Tailoring',
        description: 'Senators, kaftans, blazers, trousers, and 2-piece sets sewn cleanly to your exact body measurements.',
      },
      {
        title: 'Famous Handcrafted Crazy Jeans',
        description: 'Our signature denim trousers: unique pocket arrangements, patchwork cuts, stylish knee darts, and sharp leg fittings.',
      },
      {
        title: 'Ready-to-Wear Outfits',
        description: 'Quality ready-made tops, trousers, and shirts you can pick and wear immediately without waiting.',
      },
      {
        title: 'Special Occasion & Event Wear',
        description: 'Classy outfits tailored for weddings, birthday photo shoots, music video shoots, and executive events.',
      },
    ],
  },
  {
    id: 'production',
    number: '02',
    title: 'Bulk Clothes Sewing',
    tagline: 'Factory Sewing for Clothing Brands, Schools & Uniforms',
    summary: 'Need 20, 50, or 200 pieces of clothes for your brand, school, church, or company? We cut and sew neat clothes in bulk and deliver on time.',
    description: 'Running a clothing line or need uniforms in Rivers State or anywhere in Nigeria? We have heavy-duty industrial sewing machines, straight cutters, and skilled tailors to handle bulk orders with neat finishing.',
    image: productionImg,
    quote: 'Neat stitches and on-time delivery — that is why clothing brands and schools trust our workshop.',
    capabilities: [
      {
        title: 'Bulk Production for Clothing Brands',
        description: 'We help brand owners produce their shirts, trousers, cargo pants, and denim collections in quantity.',
      },
      {
        title: 'Uniforms & Corporate Wear',
        description: 'Durable, neat uniforms for private schools, corporate workers, hotel staff, and event teams.',
      },
      {
        title: 'Sample Making & Size Grading',
        description: 'We sew a first sample for your approval, then cut and grade across all sizes from Small to XXL.',
      },
      {
        title: 'Thorough Quality Check & Ironing',
        description: 'Every single piece is trimmed, checked for loose threads, neatly steam-pressed, and packed.',
      },
    ],
  },
  {
    id: 'academy',
    number: '03',
    title: 'Tony Fashion Academy',
    tagline: 'Learn Tailoring & Fashion Design from Scratch (100% Practical)',
    summary: 'Learn how to cut and sew like a professional. You sit at real industrial sewing machines, learn pattern drafting, and make your own complete outfits.',
    description: 'You cannot learn real tailoring by only watching YouTube videos. At Tony Fashion Academy in Port Harcourt, you practice on real fabrics and sewing machines alongside experienced tailors until you become a master.',
    image: academyImg,
    quote: 'Skill is wealth. Once your hands can cut and sew clean clothes, you will always earn money.',
    capabilities: [
      {
        title: 'Hands-on Sewing Machine Practice',
        description: 'Learn how to operate industrial straight-stitch machines, weaving/overlocking machines, and buttonholers.',
      },
      {
        title: 'Accurate Measurement & Pattern Cutting',
        description: 'Master the science of cutting trousers, shirts, and native wear so they fit clients without errors.',
      },
      {
        title: 'Crazy Jeans & Denim Sewing',
        description: 'Special training on cutting and sewing heavy jeans fabric, creating cargo pockets, and installing metal zippers.',
      },
      {
        title: 'Fashion Business & Workshop Setup',
        description: 'Learn how to price your sewing, talk to clients, source fabrics in Port Harcourt and Lagos, and start your own brand.',
      },
    ],
  },
];

export const LOOKBOOK_ITEMS: LookbookItem[] = [
  {
    id: 'look-real-01',
    title: 'Olive Green 2-Piece Set with TF Signature Logo',
    category: 'Custom 2-Piece Set',
    season: 'Latest Collection',
    description: 'A clean, stylish two-piece outfit in olive green and deep forest green. Features our neat hand-embroidered TF brand logo at the hem and comfortable matching wide-leg trousers.',
    silhouette: 'Relaxed drop-shoulder top with matching wide-leg trousers',
    fabrics: ['Soft Textured Cotton', 'Black Suiting Fabric'],
    details: ['Neat embroidered TF brand logo', 'Comfortable open collar', 'Double front pleats on trousers'],
    image: tonyRealOliveMonogram,
    featured: true,
  },
  {
    id: 'look-real-02',
    title: 'White 2-Piece Short-Sleeve Set with Black Piping',
    category: 'Senator & Native Wear',
    season: 'Latest Collection',
    description: 'Clean white short-sleeve top and matching trousers designed with neat black lines down the front and sides. Very comfortable, breathable, and sharp for church, weddings, and casual outings.',
    silhouette: 'Short-sleeve casual fit with matching straight/wide-leg trousers',
    fabrics: ['Heavy Soft White Crepe', 'Black Satin Piping'],
    details: ['Neat black vertical pin lines', 'Elastic drawstring waist for easy wearing', 'Two side pockets'],
    image: tonyRealWhitePipedSet,
    featured: true,
  },
  {
    id: 'look-real-03',
    title: 'Short Grey Tweed Jacket with Wide-Leg Flowing Trousers',
    category: 'Suit & Trousers',
    season: 'Latest Collection',
    description: 'A stylish cropped jacket paired with free-flowing wide trousers. Made with quality grey textured tweed fabric that gives you a smart, clean corporate or event look.',
    silhouette: 'Cropped tailored jacket with high-waist wide palazzo trousers',
    fabrics: ['Quality Grey Tweed Fabric', 'Comfortable Inner Lining'],
    details: ['Single front button', 'Deep comfortable trouser pleats', 'Neat tailored hem finish'],
    image: tonyRealTweedWideTrousers,
    featured: true,
  },
  {
    id: 'look-real-04',
    title: 'Tailored Waistcoat Vest & Ready-to-Wear Trouser Rack',
    category: 'Workshop Samples',
    season: 'Studio Collection',
    description: 'Inside our Port Harcourt workshop: a smart charcoal vest with wooden button toggles displayed in front of our colourful tailored trousers in cream, blue, and olive.',
    silhouette: 'Sleeveless fitted vest with matching trousers',
    fabrics: ['Quality Suiting Fabric', 'Handmade Wooden Buttons'],
    details: ['Wooden toggle fasteners with loops', 'Clean armhole finish', 'Neat strong stitches'],
    image: tonyRealAtelierCollectionRack,
    featured: true,
  },
  {
    id: 'look-02',
    title: 'Tony Fashion Multi-Pocket "Crazy Jeans"',
    category: 'Crazy Jeans',
    season: 'Signature Jeans',
    description: 'Our famous crazy jeans! Designed with mixed denim shades, extra cargo pockets, and comfortable knee cuts that turn heads everywhere you go.',
    silhouette: 'Comfortable street-fit jeans with stacked bottom leg',
    fabrics: ['100% Heavy Pure Cotton Denim'],
    details: ['7 custom cargo pockets', 'Bottom leg zipper expanders', 'Strong double-row seams that never tear'],
    image: crazyJeansImg,
    featured: true,
  },
  {
    id: 'look-01',
    title: 'Heavy Denim Long Coat & Jacket',
    category: 'Denim Jackets',
    season: 'Signature Jeans',
    description: 'A thick, durable raw denim long jacket with brass buttons and strong double-stitched seams made to keep you warm and stylish for years.',
    silhouette: 'Oversized comfortable jacket fit',
    fabrics: ['Thick Raw Blue Denim', 'Cotton Inner Trims'],
    details: ['Solid brass metal buttons', 'Double top-stitching', 'Deep front pockets'],
    image: heroImg,
    featured: true,
  },
  {
    id: 'look-03',
    title: 'Smart Tailored Blazer with Denim Lapel',
    category: 'Suits & Blazers',
    season: 'Custom Suits',
    description: 'A sharp, fitted 2-button blazer designed for business meetings and events, with creative jeans fabric accents on the collar.',
    silhouette: 'Smart fitted blazer',
    fabrics: ['Black Wool Suiting Fabric', 'Blue Denim Accent'],
    details: ['Two front buttons', 'Clean breast pocket', 'Smooth inner lining'],
    image: runwayTailoringImg,
    featured: true,
  },
  {
    id: 'look-04',
    title: 'Close-up: Clean Sewing & Strong Seams',
    category: 'Sewing Quality',
    season: 'Quality Check',
    description: 'A close look at our sewing quality — tight stitching, strong copper rivets, and clean edges that never tear easily.',
    silhouette: 'Close-up sewing inspection',
    fabrics: ['Heavyweight Denim Fabric', 'Strong Industrial Thread'],
    details: ['Tight chain-stitch finish', 'Solid metal rivets', 'Original brand tag'],
    image: denimDetailsImg,
    featured: true,
  },
];

export const ACADEMY_PROGRAMS: AcademyProgram[] = [
  {
    id: 'prog-01',
    title: 'Complete Tailoring & Pattern Cutting Course',
    level: 'Beginner to Advanced',
    duration: '6 Months',
    commitment: 'Full-Time Practical Training',
    description: 'Learn how to take correct body measurements, draft paper patterns, and cut and sew trousers, shirts, native wear, and jackets with perfect fitting.',
    curriculum: [
      'How to take accurate body measurements without mistakes',
      'Paper pattern drafting for trousers, shirts, and senator wear',
      'How to cut fabrics cleanly and avoid wasting material',
      'Collars, cuffs, pockets, and sleeve attachment',
      'How to fix fitting issues and make clothes fit properly',
    ],
    outcomes: [
      'Able to cut and sew any style from start to finish',
      'Confidence to measure and sew for real paying customers',
      'Receive a Tony Fashion Academy Certificate',
    ],
  },
  {
    id: 'prog-02',
    title: 'Crazy Jeans & Denim Sewing Specialization',
    level: 'Intermediate',
    duration: '4 Months',
    commitment: 'Daily or Weekend Classes',
    description: 'Specialized training on how to handle thick jeans fabric, operate heavy-duty sewing machines, attach brass rivets and zippers, and design crazy jeans with multiple pockets.',
    curriculum: [
      'Understanding different jeans fabrics, thickness, and wash types',
      'Operating heavy industrial sewing machines and thread tension',
      'Cutting and sewing crazy jeans with multiple cargo pockets',
      'Installing metal buttons, rivets, and heavy zippers',
      'Denim washing, distressing, and fading techniques',
    ],
    outcomes: [
      'Master how to cut and sew commercial crazy jeans',
      'Know how to fix and maintain industrial heavy machines',
      'Start taking custom jeans orders immediately',
    ],
  },
  {
    id: 'prog-03',
    title: 'Full Workshop Apprenticeship & Factory Management',
    level: 'Hands-on Apprenticeship',
    duration: '12 Months',
    commitment: 'Full-Time (Learn inside our live workshop)',
    description: 'Work directly on our factory floor in Port Harcourt. You will sew real client orders, learn industrial machine maintenance, master bulk cutting, and know how to run a profitable fashion business.',
    curriculum: [
      'Setting up industrial cutting tables and bulk cloth cutting',
      'Managing bulk production orders for schools and brands',
      'Strict quality inspection and packaging before client delivery',
      'How to calculate cost, price your clothes, and make profit',
      'Client management, customer service, and shop management',
    ],
    outcomes: [
      'Ready to open your own fashion house or factory',
      'Direct job recommendation or hiring opportunity at Tony Fashion',
      'Over a full year of real practical industry experience',
    ],
  },
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'journal-01',
    title: 'The Story of "Crazy Jeans": Why We Love Making Creative Denim',
    slug: 'architecture-of-crazy-jeans',
    date: 'Autumn 2026',
    readTime: '3 min read',
    category: 'Denim Story',
    excerpt: 'Why crazy jeans are not just torn trousers, but careful creative cutting, strong stitches, and clothes made to last.',
    content: [
      'At Tony Fashion, when we talk about "crazy jeans", we do not mean tearing cloth carelessly or sewing random rags together. We treat jeans fabric with real respect. Denim is one of the strongest materials in the world, and it takes true skill to shape it into something bold and creative.',
      'Every extra pocket, every contrast patch, and every cut at the knee has to be calculated properly. If you cut jeans fabric in the wrong direction, the trousers will twist around your legs and feel uncomfortable. That is why our crazy jeans have up to 25 to 30 carefully measured pieces sewn together with heavy-duty thread.',
      'When you wear a pair of Tony Fashion crazy jeans, people notice the creativity immediately. But even more importantly, the jeans are comfortable, strong, and can last you for years without tearing.',
    ],
    image: crazyJeansImg,
  },
  {
    id: 'journal-02',
    title: 'From One Custom Outfit to 200 Pieces: How Our Factory Operates',
    slug: 'atelier-to-industrial-floor',
    date: 'Summer 2026',
    readTime: '3 min read',
    category: 'Factory & Sewing',
    excerpt: 'How we combine individual custom tailoring with fast bulk sewing under one roof in Port Harcourt.',
    content: [
      'In many tailoring shops, tailors struggle when a customer asks for 50 pieces or 100 uniforms. They either take too long or the sewing becomes rough because they do not have industrial equipment.',
      'At Tony Fashion, we solved that problem. Our workshop has both custom tailoring tables and industrial machines for bulk sewing. Whether you need one sharp senator suit for a Sunday wedding or 100 uniforms for your staff, we have the capacity to deliver.',
      'We make a sample first so you can inspect the cloth and fitting. Once you are happy, we cut and sew the rest with speed and deliver neatly ironed clothes right to your doorstep.',
    ],
    image: productionImg,
  },
  {
    id: 'journal-03',
    title: 'Over 10 Years of Tailoring in Nigeria: Teaching the Next Generation',
    slug: 'ten-years-of-needle-and-selvedge',
    date: 'Spring 2026',
    readTime: '4 min read',
    category: 'Academy & Heritage',
    excerpt: 'Why we teach practical hands-on tailoring and empower young men and women with real sewing skills.',
    content: [
      'Tailoring is one skill that will never go out of fashion. As long as human beings wear clothes, people will always pay good money to anyone who can sew clean, well-fitting outfits.',
      'Over the last 10 years, Tony Fashion has trained dozens of young men and women. Many came to us not knowing how to thread a needle, but today they are running their own fashion businesses, sewing for weddings, and earning a living.',
      'At our academy in Port Harcourt, we teach you with patience. You sit down at real machines and sew real clothes. Skill is power, and we are proud to pass this knowledge on to the next generation.',
    ],
    image: journalCraftImg,
  },
];
