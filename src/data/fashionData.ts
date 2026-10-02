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
  tagline: 'Design. Production. Development. Education.',
  subline: 'An integrated fashion engine rooted in technical craftsmanship, experimental denim architecture, and industrial mentorship.',
  experience: '10+ Years of Craftsmanship',
  engine: ['Design', 'Production', 'Development', 'Education'],
  contactEmail: 'inquiries@tonyfashionfit.com',
  studioHours: 'Monday – Saturday: 09:00 – 18:00',
  phone: '+234 704 989 6447',
  whatsappNumber: '2347049896447',
  whatsappDisplay: '+234 704 989 6447',
  whatsappDefaultMessage: 'Hi Tony Fashion, I came from the website, I came to make enquiries.',
  physicalStore: 'No 10 Bernard Orogwu Street, Kpirikpiri, Abakaliki, Ebonyi State, Nigeria',
  shortAddress: 'No 10 Bernard Orogwu St, Kpirikpiri, Abakaliki, Ebonyi State',
  coordinates: 'Physical Store & Atelier, Abakaliki, Ebonyi State',
};

export function getWhatsAppUrl(customMessage?: string): string {
  const msg = customMessage || BRAND_INFO.whatsappDefaultMessage;
  return `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`;
}

export const PILLARS: Pillar[] = [
  {
    id: 'atelier',
    number: '01',
    title: 'Atelier',
    tagline: 'Bespoke, Ready-to-Wear & Experimental Design',
    summary: 'The creative vanguard of Tony Fashion. Where avant-garde silhouettes, experimental crazy-jeans, and sculptural tailoring take physical form.',
    description: 'Our Atelier operates as an intimate space of architectural draping, customized measurement, and unconstrained design experimentation. Every bespoke commission and runway piece undergoes intensive silhouette testing, manual distressing, and meticulous hand-finishing.',
    image: atelierImg,
    quote: 'True luxury is structural integrity married to fearless material experimentation.',
    capabilities: [
      {
        title: 'Bespoke Commissioning',
        description: 'Individual pattern drafting mapped precisely to human anatomy, multiple fitting stages, and artisanal hand-construction.',
      },
      {
        title: 'Experimental & Crazy-Jeans',
        description: 'Our signature denim mastery: deconstructed panels, asymmetric multi-pocket architecture, raw-edge selvedge manipulation, and sculpted wash treatments.',
      },
      {
        title: 'Ready-to-Wear Formulations',
        description: 'Curated seasonal drops that translate radical runway silhouettes into wearable, high-character everyday garments.',
      },
      {
        title: 'Runway & Statement Pieces',
        description: 'Artisanal showcase garments developed for presentation, editorial spreads, and conceptual fashion dialogues.',
      },
    ],
  },
  {
    id: 'production',
    number: '02',
    title: 'Production House',
    tagline: 'Small-Batch & B2B Industrial Manufacturing',
    summary: 'The industrial backbone. Transforming raw concept sketches into market-ready production runs with uncompromising technical precision.',
    description: 'We bridge the gap between creative ideation and industrial viability. With heavy-duty apparel manufacturing infrastructure, we service emerging and established designer brands through small-batch runs, strict quality control, and complete technical pack development.',
    image: productionImg,
    quote: 'Design without manufacturing rigor remains an illusion. We engineer physical excellence at scale.',
    capabilities: [
      {
        title: 'Small-Batch Manufacturing',
        description: 'Flexible minimum production quantities designed for independent labels, high-end boutiques, and limited edition capsule drops.',
      },
      {
        title: 'B2B Brand Production',
        description: 'End-to-end commercial apparel execution adhering to strict international finishing standards and delivery schedules.',
      },
      {
        title: 'Technical Packs & Grading',
        description: 'Comprehensive technical specification documents, graded measurement charts across size ranges, and bill-of-materials compiling.',
      },
      {
        title: 'Rigorous Quality Control',
        description: 'Multi-point inspection covering seam tension, stitch density, hardware attachment, tolerance checks, and wash longevity.',
      },
    ],
  },
  {
    id: 'academy',
    number: '03',
    title: 'Academy',
    tagline: 'Fashion Training, Apprenticeship & Industry Preparation',
    summary: 'A real physical workshop imparting real industrial skills. Cultivating the next generation of master tailors, patternmakers, and denim specialists.',
    description: 'The Tony Fashion Academy is not an abstract theory class. Students and apprentices train directly on the atelier and factory floor alongside veteran garment workers, mastering industrial machinery, geometric drafting, fabric behavior, and professional studio discipline.',
    image: academyImg,
    quote: 'Craftsmanship cannot be downloaded. It must be forged through repetition, guidance, and touch.',
    capabilities: [
      {
        title: 'Vocational Apprenticeship',
        description: 'Full immersion on the factory and atelier floor, learning from experienced technicians under real production deadlines.',
      },
      {
        title: 'Pattern Engineering & Draping',
        description: 'Mastery of two-dimensional drafting mathematics, three-dimensional mannequin draping, and complex curve balancing.',
      },
      {
        title: 'Denim & Heavy Fabric Construction',
        description: 'Specialized training in handling heavyweight selvedge denim, industrial flatlock sewing, topstitching tension, and wash behavior.',
      },
      {
        title: 'Industry Readiness & Studio Operation',
        description: 'Practical business knowledge covering fabric sourcing, client consultation, tech pack authoring, and workshop economics.',
      },
    ],
  },
];

export const LOOKBOOK_ITEMS: LookbookItem[] = [
  {
    id: 'look-real-01',
    title: 'Tony Fashion Signature Two-Tone Olive Drape Top & TF Monogram',
    category: 'Runway Silhouette',
    season: 'Atelier Signature',
    description: 'A genuine Tony Fashion statement creation. Constructed in a contrast olive and deep forest green textured weave, featuring a sculptural draped cowl collar and the prominent hand-embroidered TF brand monogram patch anchored at the front lower hem. Styled with textured black tweed wide-leg fluid trousers.',
    silhouette: 'Architectural raglan torso with cowl lapel drape, extreme wide-leg puddle trouser',
    fabrics: ['Textured Olive Herringbone Cotton', 'Deep Forest Ribbed Facing', 'Black Textured Suiting Crepe'],
    details: ['Signature embroidered TF monogram patch', 'Asymmetrical draped collar neckline', 'Double reverse pleats on trousers'],
    image: tonyRealOliveMonogram,
    featured: true,
  },
  {
    id: 'look-real-02',
    title: 'Bespoke Off-White Pleated Minimalist 2-Piece Set',
    category: 'Atelier Tailoring',
    season: 'Series 02',
    description: 'A signature Tony Fashion relaxed luxury formulation. Pristine bone-white boxy short-sleeve silhouette featuring engineered vertical black pinstripe pleat inserts down the chest and back, accompanied by matching wide-leg flowing trousers with contrast black side piping and drawstring waist.',
    silhouette: 'Relaxed boxy dropped shoulder, elongated torso, wide-leg fluid drape',
    fabrics: ['Heavyweight Bone-White Viscose Crepe', 'Contrast Satin Piping'],
    details: ['Precision vertical black pin-tuck lines', 'Integrated drawstring waistband', 'Concealed trouser seam pockets'],
    image: tonyRealWhitePipedSet,
    featured: true,
  },
  {
    id: 'look-real-03',
    title: 'Cropped Charcoal Herringbone Tweed Jacket & Extreme Wide Trousers',
    category: 'Atelier Tailoring',
    season: 'Series 01',
    description: 'Master atelier tailoring that balances traditional British herringbone texture with fluid contemporary African proportion. Features a cropped single-button jacket with stepped notch lapel, paired with ultra-wide flowing black trousers with deep drape folds.',
    silhouette: 'Cropped architectural blazer, high-rise extreme wide-leg palazzo drape',
    fabrics: ['Charcoal Herringbone Wool Blend', 'Matte Triacetate Flow Crepe', 'Bemberg Cupro Lining'],
    details: ['Stepped contrast under-collar facing', 'Hand-sewn horn button', 'Internal curtain waistband'],
    image: tonyRealTweedWideTrousers,
    featured: true,
  },
  {
    id: 'look-real-04',
    title: 'Atelier Sample Floor: Charcoal Toggle Vest & Collection Rack',
    category: 'Craft & Details',
    season: 'Series 02',
    description: 'An intimate document of the Tony Fashion atelier. The mannequin dress form features our bespoke tailored vest with hand-carved wooden horn toggles and frog loop closures, set before our ready-to-wear production rack showcasing vivid tailored trousers across cobalt, cream, and olive.',
    silhouette: 'Sleeveless structured waist vest with center-front horn toggle closures',
    fabrics: ['Melange Charcoal Suiting Wool', 'Hand-Carved Olive Wood Toggles'],
    details: ['Six horn toggle fasteners with leather loop anchors', 'Clean piped armhole edges', 'Hand-stitched hem'],
    image: tonyRealAtelierCollectionRack,
    featured: true,
  },
  {
    id: 'look-01',
    title: 'Architectural Deconstructed Denim Coat',
    category: 'Experimental Denim',
    season: 'Series 01',
    description: 'Overcoat constructed from heavyweight 16oz raw indigo selvedge denim. Features geometric raglan sleeves, unlined raw-edge interior seams with bound finishes, and asymmetrical brass hardware closure.',
    silhouette: 'Oversized, dropped shoulder, structured box drape',
    fabrics: ['16oz Japanese Raw Selvedge Denim', 'Cotton Twill Bindings'],
    details: ['Hand-hammered solid brass rivets', 'Double topstitch construction', 'Asymmetric storm flap'],
    image: heroImg,
    featured: true,
  },
  {
    id: 'look-02',
    title: 'Sculptural "Crazy-Jeans" Multi-Pocket Trousers',
    category: 'Experimental Denim',
    season: 'Series 01',
    description: 'The brand’s signature experimental denim piece. Crafted with interlocking contrast-wash paneling, articulating knee darts for ergonomic volume, and staggered utility flap pockets.',
    silhouette: 'Curved architectural leg, tapered stacked hem',
    fabrics: ['14oz Vintage Washed Denim', '13.5oz Charcoal Overdyed Denim'],
    details: ['Seven articulated pocket assemblies', 'Concealed zip expanders at hem', 'Heavy contrast bar-tacks'],
    image: crazyJeansImg,
    featured: true,
  },
  {
    id: 'look-03',
    title: 'Bespoke Structured Hybrid Blazer',
    category: 'Atelier Tailoring',
    season: 'Series 02',
    description: 'Precision atelier tailoring fused with subtle denim architecture. A sharp two-button unisex blazer with canvassed chest piece and deconstructed denim lapel inserts.',
    silhouette: 'Sharp shoulder, relaxed waist suppress, elongated torso',
    fabrics: ['Super 120s Wool Crepe', 'Indigo Selvedge Denim Facing', 'Cupro Lining'],
    details: ['Full floating canvas construction', 'Hand-sewn Milanese buttonhole', 'Horn buttons with engraved rim'],
    image: runwayTailoringImg,
    featured: true,
  },
  {
    id: 'look-04',
    title: 'Artisanal Selvedge Joint & Seam Study',
    category: 'Craft & Details',
    season: 'Series 02',
    description: 'A close examination of Tony Fashion finishing standards. Showcases our custom flat-felled seam execution, hand-set oxidized rivets, and precision selvedge ID placement.',
    silhouette: 'Macro Technical Study',
    fabrics: ['15oz Indigo Ring-Spun Denim', 'Heavy Core-Spun Poly-Cotton Thread'],
    details: ['Chainstitched hem lines', 'Triple needle lap seams', 'Debossed leather patch detail'],
    image: denimDetailsImg,
    featured: true,
  },
];

export const ACADEMY_PROGRAMS: AcademyProgram[] = [
  {
    id: 'prog-01',
    title: 'Master Pattern Engineering & Industrial Draping',
    level: 'Professional / Intensive',
    duration: '6 Months',
    commitment: 'Full-Time (Studio Immersion)',
    description: 'A comprehensive technical program taking students from fundamental body geometry to complex multi-piece tailored garments, denim blocks, and computerized grading.',
    curriculum: [
      'Anatomical body landmarking & dimensional analysis',
      'Flat pattern drafting for trousers, jackets, and outerwear',
      '3D live mannequin draping & grainline manipulation',
      'Sleeve crown geometry & shoulder balancing',
      'Grading across international size standards',
    ],
    outcomes: [
      'Ability to produce industry-standard technical patterns from scratch',
      'Proficiency in resolving complex fitting defects & posture variances',
      'Personal commercial portfolio of 12 complete garment patterns',
    ],
  },
  {
    id: 'prog-02',
    title: 'Denim Engineering & Heavy-Duty Garment Construction',
    level: 'Advanced Craftsmanship',
    duration: '4 Months',
    commitment: 'Full-Time or Evening Intensive',
    description: 'Specialized studio training dedicated to the engineering of high-end and experimental denim, heavyweight canvas, and non-basic utility pieces.',
    curriculum: [
      'Selvedge denim properties, shrinkage calculation & grain bias',
      'Industrial machinery operation (lockstitch, chainstitch, flatlock, bar-tack)',
      'Crazy-jeans panel construction & asymmetric pocket engineering',
      'Hardware application (rivets, shank buttons, heavy zippers)',
      'Artisanal washing, abrading & distressing fundamentals',
    ],
    outcomes: [
      'Mastery of heavy-duty industrial sewing and tension calibration',
      'Execution of signature multi-panel complex denim silhouettes',
      'Full technical understanding of wash house protocols and shrinkage',
    ],
  },
  {
    id: 'prog-03',
    title: 'Apparel Factory Apprenticeship & Production Management',
    level: 'Vocational Immersion',
    duration: '12 Months',
    commitment: 'Full-Time Apprenticeship (Stipended)',
    description: 'A physical residency inside Tony Fashion’s working production house. Apprentices work alongside senior cutters and machine operators on real client production runs.',
    curriculum: [
      'Industrial cutting table setup and fabric spreading techniques',
      'Marker making, fabric yield optimization & scrap minimization',
      'Assembly line balancing and piece-rate workflow management',
      'Rigorous multi-stage quality assurance and audit methodology',
      'Tech pack authoring and client spec communication',
    ],
    outcomes: [
      'Comprehensive readiness to supervise or manage apparel production floors',
      'Direct industry references and priority hiring consideration within Tony Fashion',
      'Practical mastery of real-world garment manufacturing speed and precision',
    ],
  },
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'journal-01',
    title: 'The Architecture of Crazy-Jeans: Deconstruction as Structural Discipline',
    slug: 'architecture-of-crazy-jeans',
    date: 'Autumn 2026',
    readTime: '5 min read',
    category: 'Design Philosophy',
    excerpt: 'Why experimental denim is not haphazard destruction, but a rigorous calculation of grainlines, tension balances, and wearable ergonomics.',
    content: [
      'At Tony Fashion, when we speak of "crazy-jeans," we are not discussing surface-level distressing or novelty patches slapped onto an existing silhouette. We view denim as an architectural material — one of the few woven textiles possessing the tensile strength to hold sharp planes, geometric volumes, and deliberate sculptural folds.',
      'Every deconstructed seam introduces tension. If an artisan cuts across the twill grain without compensating in the adjoining panel, the trouser leg will twist uncomfortably around the shin. Our experimental patterns require up to thirty separate pattern pieces for a single pair of jeans, each cut with deliberate grain alignment so the garment maintains clean drape whether the wearer is motionless or in transit.',
      'The result is a piece that looks fearlessly avant-garde from across the room, yet feels as natural and durable on the body as a bespoke tailored suit.',
    ],
    image: crazyJeansImg,
  },
  {
    id: 'journal-02',
    title: 'From Atelier to Industrial Floor: The Integrated Fashion Engine',
    slug: 'atelier-to-industrial-floor',
    date: 'Summer 2026',
    readTime: '4 min read',
    category: 'Production & Systems',
    excerpt: 'How uniting bespoke experimentation with small-batch factory machinery creates an unshakeable ecosystem for creative longevity.',
    content: [
      'In conventional fashion ecosystems, the design studio and the production factory operate in mutual suspicion. Designers create sketches disconnected from machine feasibility; factories modify patterns to cut corners, sacrificing aesthetic intent.',
      'Tony Fashion was built to eradicate this division. By housing the Atelier, the Production Floor, and the Training Academy under one roof, our designers stand shoulder-to-shoulder with our machine mechanics and pattern technicians.',
      'When an experimental cut succeeds on the atelier dress form, our technical team immediately translates it into a scalable production methodology. Conversely, the speed and discipline of the factory floor keeps our bespoke artisans grounded in structural durability.',
    ],
    image: productionImg,
  },
  {
    id: 'journal-03',
    title: 'Ten Years of Needle & Selvedge: Preserving Craft Through Physical Mentorship',
    slug: 'ten-years-of-needle-and-selvedge',
    date: 'Spring 2026',
    readTime: '6 min read',
    category: 'Academy & Heritage',
    excerpt: 'Reflecting on more than a decade of physical training, apprentice development, and preserving the tactile intelligence of the master tailor.',
    content: [
      'You cannot learn the proper tension of a flat-felled seam from a screen. You cannot understand how a 16-ounce raw denim responds to steam irons through digital simulations. Craftsmanship resides in the fingertips, in muscle memory, and in the sound of a well-oiled machine accelerating.',
      'Over the past decade, Tony Fashion has trained dozens of young men and women who entered our doors with raw curiosity and emerged as commanding garment technicians, bespoke tailors, and production supervisors.',
      'The Academy is not an auxiliary marketing project for us. It is the lifeblood that sustains our standards. Every senior maker on our floor is tasked with mentoring an apprentice, guaranteeing that our institutional knowledge deepens with each passing year.',
    ],
    image: journalCraftImg,
  },
];
