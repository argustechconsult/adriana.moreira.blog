
export type Language = 'pt' | 'en' | 'es';
export type Theme = 'light' | 'dark';

export interface Post {
  id: string;
  title: string;
  category: string;
  description: string;
  content: string;
  imageUrls: string[]; 
  date: string;
  lang: Language;
}

export interface Category {
  id: string;
  name: string;
  lang: Language;
}

export interface Translations {
  [key: string]: {
    [lang in Language]: string;
  };
}
