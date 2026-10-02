export type PageId = 'home' | 'collections' | 'services' | 'academy' | 'about' | 'journal' | 'contact';

export interface LookbookItem {
  id: string;
  title: string;
  category: 'Experimental Denim' | 'Atelier Tailoring' | 'Runway Silhouette' | 'Craft & Details';
  season: string;
  description: string;
  silhouette: string;
  fabrics: string[];
  details: string[];
  image: string;
  featured?: boolean;
}

export interface PillarCapability {
  title: string;
  description: string;
}

export interface Pillar {
  id: 'atelier' | 'production' | 'academy';
  number: string;
  title: string;
  tagline: string;
  summary: string;
  description: string;
  image: string;
  capabilities: PillarCapability[];
  quote: string;
}

export interface AcademyProgram {
  id: string;
  title: string;
  level: string;
  duration: string;
  commitment: string;
  description: string;
  curriculum: string[];
  outcomes: string[];
}

export interface JournalArticle {
  id: string;
  title: string;
  slug: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  content: string[];
  image: string;
}

export type InquiryType = 'bespoke' | 'production' | 'academy' | 'collaboration' | 'general';
