
import React from 'react';
import { Translations } from './types';

export const TRANSLATIONS: Translations = {
  home: { pt: 'Início', en: 'Home', es: 'Inicio' },
  about: { pt: 'Sobre nós', en: 'About us', es: 'Sobre nosotros' },
  admin: { pt: 'Admin', en: 'Admin', es: 'Admin' },
  readMore: { pt: 'Ler mais', en: 'Read more', es: 'Leer más' },
  publishedAt: { pt: 'Publicado em', en: 'Published on', es: 'Publicado el' },
  categories: { pt: 'Categorias', en: 'Categories', es: 'Categorías' },
  loginTitle: { pt: 'Acesso Restrito', en: 'Restricted Access', es: 'Acceso Restringido' },
  username: { pt: 'Usuário', en: 'Username', es: 'Usuario' },
  password: { pt: 'Senha', en: 'Password', es: 'Contraseña' },
  loginBtn: { pt: 'Entrar', en: 'Login', es: 'Entrar' },
  adminDashboard: { pt: 'Painel de Controle', en: 'Admin Dashboard', es: 'Panel de Control' },
  newPost: { pt: 'Novo Post', en: 'New Post', es: 'Nueva Entrada' },
  title: { pt: 'Título', en: 'Title', es: 'Título' },
  category: { pt: 'Categoria', en: 'Category', es: 'Categoría' },
  description: { pt: 'Descrição Curta', en: 'Short Description', es: 'Descripción Corta' },
  content: { pt: 'Conteúdo do Artigo', en: 'Article Content', es: 'Contenido del Artículo' },
  imageUrls: { pt: 'Imagens (Máx 4)', en: 'Images (Max 4)', es: 'Imágenes (Máx 4)' },
  save: { pt: 'Salvar Post', en: 'Save Post', es: 'Guardar Entrada' },
  logout: { pt: 'Sair', en: 'Logout', es: 'Cerrar Sesión' },
  mindfulness: { pt: 'Mindfulness', en: 'Mindfulness', es: 'Mindfulness' },
  reflection: { pt: 'Reflexão', en: 'Reflection', es: 'Reflexión' },
  motivation: { pt: 'Motivação', en: 'Motivation', es: 'Motivación' },
  noPosts: { pt: 'Nenhum post encontrado para este idioma.', en: 'No posts found for this language.', es: 'No se encontraron publicaciones para este idioma.' },
  heroTitle1: { pt: 'Pausar para ', en: 'Pause to ', es: 'Pausar para ' },
  heroTitle2: { pt: 'Refletir', en: 'Reflect', es: 'Reflexionar' },
  heroTitle3: { pt: ' e ', en: ' and ', es: ' y ' },
  heroTitle4: { pt: 'Crescer', en: 'Grow', es: 'Crecer' },
  heroSubtitle: { 
    pt: 'Um espaço dedicado ao mindfulness, desenvolvimento pessoal e às pequenas grandes descobertas do dia a dia.', 
    en: 'A space dedicated to mindfulness, personal development, and the small great discoveries of daily life.', 
    es: 'Un espacio dedicado al mindfulness, el desarrollo personal y los pequeños grandes descubrimientos del día a día.' 
  },
  copyright: { pt: 'Todos os direitos reservados.', en: 'All rights reserved.', es: 'Todos los derechos reservados.' },
  preview: { pt: 'Prévia', en: 'Preview', es: 'Previa' },
  edit: { pt: 'Editar', en: 'Edit', es: 'Editar' },
  posts: { pt: 'Posts', en: 'Posts', es: 'Posts' },
  theme: { pt: 'Tema', en: 'Theme', es: 'Tema' }
};

export const INITIAL_POSTS = [
  // --- PORTUGUESE (PT) ---
  {
    id: 'pt-1',
    title: 'O Despertar da Consciência Plena',
    category: 'Mindfulness',
    description: 'Como o silêncio pode transformar sua rotina diária e trazer paz interior.',
    content: 'A meditação mindfulness não é sobre esvaziar a mente, mas sim sobre observar os pensamentos sem julgamento. No mundo acelerado de hoje, encontrar cinco minutos de quietude pode ser a âncora que você precisa para navegar pelas tempestades emocionais.',
    imageUrls: ['https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800'],
    date: '2024-05-20',
    lang: 'pt'
  },
  {
    id: 'pt-2',
    title: 'Pequenos Passos, Grandes Mudanças',
    category: 'Motivação',
    description: 'A psicologia por trás dos micro-hábitos e como eles moldam seu futuro.',
    content: 'Muitas vezes acreditamos que para mudar de vida precisamos de gestos heróicos. A verdade é que a constância em pequenas ações, como ler uma página ou meditar por um minuto, é muito mais poderosa do que uma explosão de motivação passageira.',
    imageUrls: ['https://images.unsplash.com/photo-1472289065668-ce650ac443d2?auto=format&fit=crop&q=80&w=800'],
    date: '2024-05-22',
    lang: 'pt'
  },
  {
    id: 'pt-3',
    title: 'O Poder da Gratidão Diária',
    category: 'Reflexão',
    description: 'Por que agradecer pelo que temos hoje pode mudar nossa visão de amanhã.',
    content: 'A gratidão é um músculo que precisa ser exercitado. Ao focar no que já possuímos em vez do que nos falta, reprogramamos nosso cérebro para a abundância. Comece um diário de gratidão e observe a mudança.',
    imageUrls: [
      'https://images.unsplash.com/photo-1516733923916-301018ce03bd?auto=format&fit=crop&q=80&w=800'
    ],
    date: '2024-06-01',
    lang: 'pt'
  },
  {
    id: 'pt-4',
    title: 'Resiliência: A Arte de Recomeçar',
    category: 'Motivação',
    description: 'Transformando desafios em oportunidades de crescimento pessoal.',
    content: 'Ser resiliente não significa não cair, mas sim ter a capacidade de se levantar com mais sabedoria. Cada obstáculo no seu caminho é, na verdade, um convite para descobrir uma força que você ainda não sabia que tinha.',
    imageUrls: ['https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800'],
    date: '2024-06-05',
    lang: 'pt'
  },
  {
    id: 'pt-5',
    title: 'Minimalismo Mental',
    category: 'Mindfulness',
    description: 'Limpando o ruído interno para encontrar clareza nas decisões.',
    content: 'Vivemos em uma era de excesso de informação. O minimalismo mental nos ensina a filtrar o que realmente importa e a deixar ir as preocupações que não estão sob nosso controle. Menos ruído, mais vida.',
    imageUrls: ['https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=800'],
    date: '2024-06-10',
    lang: 'pt'
  },
  {
    id: 'pt-6',
    title: 'A Jornada para o Autocuidado',
    category: 'Reflexão',
    description: 'Cuidar de si mesmo não é egoísmo, é uma necessidade básica.',
    content: 'Frequentemente colocamos as necessidades dos outros acima das nossas. Mas lembre-se: você não pode dar o que não tem. O autocuidado envolve estabelecer limites, descansar e nutrir sua alma com o que lhe faz bem.',
    imageUrls: ['https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800'],
    date: '2024-06-15',
    lang: 'pt'
  },

  // --- ENGLISH (EN) ---
  {
    id: 'en-1',
    title: 'The Art of Self-Reflection',
    category: 'Reflection',
    description: 'Discovering your inner compass through the power of questioning.',
    content: 'Self-reflection is the key to personal growth. By asking ourselves the right questions, we unlock doors we didn\'t even know existed. Today we explore how journaling can change your perspective on life.',
    imageUrls: ['https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800'],
    date: '2024-05-18',
    lang: 'en'
  },
  {
    id: 'en-2',
    title: 'Mindful Mornings',
    category: 'Mindfulness',
    description: 'How to start your day with intention and calm.',
    content: 'The way you spend your first hour sets the tone for the rest of your day. Avoid your phone, breathe deeply, and set a clear intention. A mindful morning is a gift you give to your future self.',
    imageUrls: ['https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800'],
    date: '2024-05-25',
    lang: 'en'
  },
  {
    id: 'en-3',
    title: 'The Power of "No"',
    category: 'Motivation',
    description: 'Setting boundaries to protect your energy and time.',
    content: 'Every time you say yes to something that doesn\'t align with your values, you are saying no to yourself. Learning to say no is a radical act of self-respect that opens space for what truly matters.',
    imageUrls: ['https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&q=80&w=800'],
    date: '2024-06-02',
    lang: 'en'
  },
  {
    id: 'en-4',
    title: 'Finding Balance in a Digital World',
    category: 'Reflection',
    description: 'Strategies for a healthy relationship with technology.',
    content: 'We are more connected than ever, yet we feel increasingly isolated. Finding balance means creating tech-free zones and reconnecting with nature. Your focus is your most valuable currency.',
    imageUrls: ['https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80&w=800'],
    date: '2024-06-08',
    lang: 'en'
  },
  {
    id: 'en-5',
    title: 'Overcoming Procrastination',
    category: 'Motivation',
    description: 'Stop waiting for the perfect moment and start today.',
    content: 'Procrastination is often a fear of failure disguised as laziness. Break your tasks into tiny pieces and focus only on the next step. Perfection is an illusion; progress is the goal.',
    imageUrls: ['https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800'],
    date: '2024-06-12',
    lang: 'en'
  },
  {
    id: 'en-6',
    title: 'The Silence Within',
    category: 'Mindfulness',
    description: 'Finding calm in the middle of chaos.',
    content: 'You don\'t need to travel to a mountain to find peace. The silence within is always accessible through your breath. In the center of the storm, there is always a point of stillness.',
    imageUrls: ['https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800'],
    date: '2024-06-20',
    lang: 'en'
  },

  // --- ENGLISH (EN) ---
  {
    id: 'es-1',
    title: 'Mindfulness en el Trabajo',
    category: 'Mindfulness',
    description: 'Cómo mantener la calma y el enfoque durante una jornada laboral intensa.',
    content: 'El estrés laboral es una realidad, pero no tiene por qué dominar tu vida. Aplicar micro-pausas de respiración entre tareas puede resetear tu sistema nervioso y mejorar tu productividad y bienestar.',
    imageUrls: ['https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800'],
    date: '2024-05-15',
    lang: 'es'
  },
  {
    id: 'es-2',
    title: 'El Arte de la Paciencia',
    category: 'Reflexión',
    description: 'Por qué saber esperar es una de las virtudes más necesarias hoy.',
    content: 'En un mundo de gratificación instantánea, la paciencia se ha convertido en un superpoder. Todo lo que realmente vale la pena lleva tiempo para florecer. Aprende a disfrutar del proceso, no solo del resultado.',
    imageUrls: ['https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=80&w=800'],
    date: '2024-05-28',
    lang: 'es'
  },
  {
    id: 'es-3',
    title: 'Motivación Intrínseca',
    category: 'Motivación',
    description: 'Encontrando el propósito que te impulsa desde adentro.',
    content: 'La motivación externa se agota rápido. Para lograr cambios duraderos, debes conectar con tus valores profundos. ¿Qué es lo que realmente te mueve cuando nadie te está mirando?',
    imageUrls: ['https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800'],
    date: '2024-06-03',
    lang: 'es'
  },
  {
    id: 'es-4',
    title: 'Meditación para Principiantes',
    category: 'Mindfulness',
    description: 'Guía básica para comenzar tu práctica hoy mismo.',
    content: 'No necesitas ropa especial ni horas libres. Solo necesitas sentarte, cerrar los ojos y notar cómo entra y sale el aire de tus pulmones. La simplicidad es la clave de la constancia.',
    imageUrls: ['https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&q=80&w=800'],
    date: '2024-06-07',
    lang: 'es'
  },
  {
    id: 'es-5',
    title: 'Pensamiento Positivo Realista',
    category: 'Reflexión',
    description: 'Cómo ser optimista sin negar la realidad de los problemas.',
    content: 'El pensamiento positivo no es ignorar lo malo, sino confiar en tu capacidad para manejarlo. Se trata de buscar soluciones en lugar de regodearse en las quejas. Cambia tu narrativa, cambia tu vida.',
    imageUrls: ['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800'],
    date: '2024-06-14',
    lang: 'es'
  },
  {
    id: 'es-6',
    title: 'Hábitos para una Vida Saludable',
    category: 'Motivación',
    description: 'Pequeñas acciones diarias para mejorar tu salud física y mental.',
    content: 'Tu cuerpo es tu templo. Beber más agua, caminar 20 minutos y dormir bien son los pilares de una mente clara. No esperes a enfermar para empezar a cuidarte. El momento es ahora.',
    imageUrls: ['https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800'],
    date: '2024-06-18',
    lang: 'es'
  }
];

export const INITIAL_CATEGORIES = [
  { id: 'c1', name: 'Mindfulness', lang: 'pt' },
  { id: 'c2', name: 'Motivação', lang: 'pt' },
  { id: 'c3', name: 'Reflexão', lang: 'pt' },
  { id: 'c4', name: 'Mindfulness', lang: 'en' },
  { id: 'c5', name: 'Reflection', lang: 'en' },
  { id: 'c6', name: 'Motivation', lang: 'en' },
  { id: 'c7', name: 'Mindfulness', lang: 'es' },
  { id: 'c8', name: 'Reflexión', lang: 'es' },
  { id: 'c9', name: 'Motivación', lang: 'es' }
];

export const LeafIcon = () => (
  <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" stroke="#D4AF37" strokeWidth="2"/>
    <path d="M50 30C50 30 35 45 35 60C35 75 50 80 50 80C50 80 65 75 65 60C65 45 50 30 50 30Z" fill="#2D5A27" />
    <path d="M50 30C50 30 40 50 50 65C60 50 50 30 50 30Z" fill="#4A7C44" />
    <path d="M50 40L50 80" stroke="#FAF9F6" strokeWidth="1" />
  </svg>
);

export const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#4f5bd5', stopOpacity: 1 }} />
        <stop offset="25%" style={{ stopColor: '#962fbf', stopOpacity: 1 }} />
        <stop offset="50%" style={{ stopColor: '#d62976', stopOpacity: 1 }} />
        <stop offset="75%" style={{ stopColor: '#fa7e1e', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#f77737', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="url(#instagram-gradient)" strokeWidth="2.5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="url(#instagram-gradient)" strokeWidth="2.5" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="url(#instagram-gradient)" strokeWidth="2.5" />
  </svg>
);

export const SunIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="18.36" x2="5.64" y2="16.92"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
);

export const MoonIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
);
