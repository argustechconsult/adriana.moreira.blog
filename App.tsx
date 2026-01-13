
import React, { useState, useEffect, useRef } from 'react';
import { HashRouter, Routes, Route, Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import { Post, Language, Category, Theme } from './types';
import { TRANSLATIONS, INITIAL_POSTS, INITIAL_CATEGORIES, LeafIcon, InstagramIcon, SunIcon, MoonIcon } from './constants';

// --- Components ---

const Carousel: React.FC<{ images: string[], autoPlay?: boolean, showArrows?: boolean }> = ({ images, autoPlay = false, showArrows = true }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (autoPlay && images.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [autoPlay, images.length]);

  const nextSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="relative group w-full h-full overflow-hidden">
      <div 
        className="w-full h-full flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((url, i) => (
          <img 
            key={i} 
            src={url} 
            alt={`Slide ${i}`} 
            className="w-full h-full object-cover shrink-0" 
          />
        ))}
      </div>

      {images.length > 1 && (
        <>
          {showArrows && (
            <>
              <button 
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/30 transition-all opacity-0 group-hover:opacity-100 z-10"
              >
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/30 transition-all opacity-0 group-hover:opacity-100 z-10"
              >
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
              </button>
            </>
          )}
          
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, i) => (
              <button 
                key={i}
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); setCurrentIndex(i); }}
                className={`h-1 rounded-full transition-all ${currentIndex === i ? 'w-4 bg-white' : 'w-1 bg-white/40'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const ThemeToggle: React.FC<{ theme: Theme, toggle: () => void }> = ({ theme, toggle }) => (
  <button 
    onClick={toggle}
    className="p-2 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-500 dark:text-stone-400 hover:text-green-600 dark:hover:text-green-400 transition-all border border-stone-200 dark:border-stone-700 shadow-sm"
    title="Alterar Tema"
  >
    {theme === 'light' ? <MoonIcon /> : <SunIcon />}
  </button>
);

const Header: React.FC<{ lang: Language, setLang: (l: Language) => void, theme: Theme, toggleTheme: () => void }> = ({ lang, setLang, theme, toggleTheme }) => {
  const t = (key: string) => TRANSLATIONS[key][lang];

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-stone-900/80 backdrop-blur-md border-b border-stone-200 dark:border-stone-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <LeafIcon />
          <div>
            <h1 className="text-xl font-bold text-stone-800 dark:text-stone-100 tracking-tight leading-none">Adriana Moreira</h1>
            <p className="text-[10px] text-stone-400 uppercase tracking-widest mt-1">{t('mindfulness')} & {t('reflection')}</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-6 text-stone-600 dark:text-stone-400 font-medium text-sm">
            <Link to="/" className="hover:text-green-700 dark:hover:text-green-400 transition-colors">{t('home')}</Link>
            <Link to="/about" className="hover:text-green-700 dark:hover:text-green-400 transition-colors">{t('about')}</Link>
            <Link to="/admin" className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-50 dark:bg-stone-800 text-stone-600 dark:text-stone-300 border border-stone-200 dark:border-stone-700 hover:border-stone-300 transition-all font-semibold">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
              {t('admin')}
            </Link>
          </div>
          
          <ThemeToggle theme={theme} toggle={toggleTheme} />

          <div className="flex items-center bg-stone-100/80 dark:bg-stone-800 rounded-full p-1 border border-stone-200 dark:border-stone-700 shadow-inner">
            {(['pt', 'en', 'es'] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1 rounded-full text-[10px] font-black tracking-tighter transition-all duration-300 ${
                  lang === l 
                    ? 'bg-white dark:bg-stone-700 text-green-800 dark:text-green-400 shadow-sm ring-1 ring-stone-200/50 dark:ring-stone-600/50' 
                    : 'text-stone-400 hover:text-stone-600 dark:hover:text-stone-300'
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </nav>

        {/* Mobile Menu Simplified */}
        <div className="md:hidden flex items-center gap-3">
           <ThemeToggle theme={theme} toggle={toggleTheme} />
           <div className="flex bg-stone-100 dark:bg-stone-800 rounded-full p-1 border border-stone-200 dark:border-stone-700">
            {(['pt', 'en', 'es'] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2 py-0.5 rounded-full text-[9px] font-bold ${
                  lang === l ? 'bg-white dark:bg-stone-700 text-green-800 dark:text-green-400 shadow-sm' : 'text-stone-400'
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <Link to="/admin" className="p-2 bg-stone-50 dark:bg-stone-800 rounded-lg border border-stone-200 dark:border-stone-700 text-stone-500 hover:text-green-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </Link>
        </div>
      </div>
    </header>
  );
};

const PostCard: React.FC<{ post: Post, lang: Language, onClick?: () => void }> = ({ post, lang, onClick }) => {
  const t = (key: string) => TRANSLATIONS[key][lang];
  
  const cardContent = (
    <div className="flex flex-col h-full">
      <div className="relative h-64 overflow-hidden bg-stone-100 dark:bg-stone-800">
        {post.imageUrls && post.imageUrls.length > 1 ? (
          <Carousel images={post.imageUrls} showArrows={false} autoPlay={true} />
        ) : (
          <img 
            src={post.imageUrls?.[0] || 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400'} 
            alt={post.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        )}
        <div className="absolute top-4 left-4 z-20">
          <span className="bg-white/95 dark:bg-stone-900/95 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-green-800 dark:text-green-400 shadow-sm">
            {post.category}
          </span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-3 group-hover:text-green-800 dark:group-hover:text-green-400 transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-stone-600 dark:text-stone-400 mb-6 flex-grow line-clamp-3 leading-relaxed text-sm font-light">
          {post.description}
        </p>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-stone-50 dark:border-stone-800">
          <span className="text-stone-400 dark:text-stone-500 text-xs font-medium">{post.date}</span>
          <span className="text-green-700 dark:text-green-400 font-bold text-[10px] uppercase tracking-wider flex items-center gap-1.5">
            {t('readMore')} 
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </span>
        </div>
      </div>
    </div>
  );

  const className = "group bg-white dark:bg-stone-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 dark:border-stone-800 flex flex-col h-full";

  if (onClick) {
    return (
      <div onClick={onClick} className={`${className} cursor-pointer`}>
        {cardContent}
      </div>
    );
  }

  return (
    <Link to={`/post/${post.id}`} className={className}>
      {cardContent}
    </Link>
  );
};

// --- Pages ---

const HomePage: React.FC<{ posts: Post[], lang: Language }> = ({ posts, lang }) => {
  const t = (key: string) => TRANSLATIONS[key][lang];
  const filteredPosts = posts.filter(p => p.lang === lang);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <section className="mb-20 text-center max-w-3xl mx-auto pt-8">
        <h2 className="text-5xl md:text-7xl font-bold text-stone-900 dark:text-stone-100 mb-8 leading-tight">
          {t('heroTitle1')}
          <span className="italic font-serif text-green-800 dark:text-green-400 relative inline-block">
            {t('heroTitle2')}
          </span>
          {t('heroTitle3')}
          <span className="italic font-serif text-green-800 dark:text-green-400 relative inline-block">
            {t('heroTitle4')}
          </span>
        </h2>
        <p className="text-lg md:text-xl text-stone-500 dark:text-stone-400 leading-relaxed font-light max-w-2xl mx-auto">
          {t('heroSubtitle')}
        </p>
      </section>

      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredPosts.map(post => (
            <PostCard key={post.id} post={post} lang={lang} />
          ))}
        </div>
      ) : (
        <div className="text-center py-32 bg-stone-100/50 dark:bg-stone-900/50 rounded-3xl border border-dashed border-stone-200 dark:border-stone-800">
          <p className="text-stone-400 dark:text-stone-600 italic font-light">{t('noPosts')}</p>
        </div>
      )}
    </div>
  );
};

const AboutPage: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = (key: string) => TRANSLATIONS[key][lang];
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-5xl md:text-6xl font-bold text-stone-900 dark:text-stone-100 mb-16 text-center">{t('about')}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative group">
          <div className="absolute -inset-4 bg-green-50 dark:bg-green-900/10 rounded-3xl -z-10 group-hover:bg-green-100/80 dark:group-hover:bg-green-900/20 transition-colors"></div>
          <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800" alt="Adriana Moreira" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="space-y-8 text-stone-700 dark:text-stone-300 text-lg leading-relaxed font-light">
          <p className="font-serif italic text-3xl text-green-900 dark:text-green-400 border-l-4 border-green-200 dark:border-green-800 pl-6 leading-snug">
            {lang === 'pt' ? '"A jornada para o interior é o caminho mais curto para a felicidade."' : 
             lang === 'en' ? '"The journey inward is the shortest path to happiness."' : 
             '"El viaje al interior é o caminho mais curto para a felicidade."'}
          </p>
          <p>
            {lang === 'pt' ? 'Olá, eu sou Adriana Moreira. Minha missão é ajudar pessoas a encontrarem equilíbrio e clareza mental através de práticas simples e conscientes.' :
             lang === 'en' ? 'Hello, I am Adriana Moreira. My mission is to help people find balance and mental clarity through simple and conscious practices.' :
             'Hola, soy Adriana Moreira. Mi misión es ayudar a las personas a encontrar el equilibrio y la claridad mental a través de prácticas sencillas y conscientes.'}
          </p>
        </div>
      </div>
    </div>
  );
};

const PostDetailPageContent: React.FC<{ post: Post, lang: Language, onBack?: () => void }> = ({ post, lang, onBack }) => {
  const t = (key: string) => TRANSLATIONS[key][lang];
  return (
    <article className="max-w-4xl mx-auto px-4 py-16 transition-colors">
      {onBack ? (
        <button onClick={onBack} className="inline-flex items-center gap-2 text-stone-400 dark:text-stone-500 hover:text-green-700 dark:hover:text-green-400 mb-12 transition-all font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          Voltar ao Painel
        </button>
      ) : (
        <Link to="/" className="inline-flex items-center gap-2 text-stone-400 dark:text-stone-500 hover:text-green-700 dark:hover:text-green-400 mb-12 transition-all font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          {t('home')}
        </Link>
      )}

      <header className="mb-12">
        <span className="inline-block bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-8 shadow-sm">
          {post.category}
        </span>
        <h1 className="text-5xl md:text-7xl font-bold text-stone-900 dark:text-stone-100 mb-8 leading-tight tracking-tight">
          {post.title}
        </h1>
        <p className="text-xl md:text-2xl text-stone-500 dark:text-stone-400 italic mb-12 border-l-4 border-stone-100 dark:border-stone-800 pl-8 leading-relaxed font-light">
          {post.description}
        </p>
      </header>

      <div className="mb-16">
        {post.imageUrls && post.imageUrls.length > 1 ? (
          <div className="aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl">
            <Carousel images={post.imageUrls} />
          </div>
        ) : (
          <div className="rounded-[2.5rem] overflow-hidden aspect-video shadow-2xl relative bg-stone-100 dark:bg-stone-800">
            <img src={post.imageUrls?.[0] || 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400'} alt={post.title} className="w-full h-full object-cover" />
          </div>
        )}
      </div>

      <div className="prose prose-stone dark:prose-invert prose-xl max-w-none text-stone-700 dark:text-stone-300 leading-relaxed font-light whitespace-pre-wrap selection:bg-green-100 dark:selection:bg-green-900">
        {post.content}
      </div>
    </article>
  );
};

const PostDetailPage: React.FC<{ posts: Post[], lang: Language }> = ({ posts, lang }) => {
  const { id } = useParams();
  const post = posts.find(p => p.id === id);
  if (!post) return null;
  return <PostDetailPageContent post={post} lang={lang} />;
};

const LoginPage: React.FC<{ onLogin: () => void, lang: Language }> = ({ onLogin, lang }) => {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const t = (key: string) => TRANSLATIONS[key][lang];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (user === 'admin' && pass === 'admin') {
      onLogin();
      navigate('/admin');
    } else {
      setError('Credenciais inválidas.');
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-12 transition-colors">
      <div className="bg-white dark:bg-stone-900 p-12 rounded-[2rem] shadow-2xl w-full max-w-md border border-stone-100 dark:border-stone-800">
        <div className="text-center mb-10">
          <div className="inline-block p-5 bg-green-50 dark:bg-green-900/20 rounded-3xl mb-6 shadow-inner">
            <LeafIcon />
          </div>
          <h2 className="text-3xl font-bold text-stone-900 dark:text-stone-100 tracking-tight">{t('loginTitle')}</h2>
        </div>
        <form onSubmit={handleLogin} className="space-y-6">
          <input 
            type="text" value={user} onChange={e => setUser(e.target.value)}
            placeholder={t('username')}
            className="w-full px-5 py-4 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-stone-100" required
          />
          <input 
            type="password" value={pass} onChange={e => setPass(e.target.value)}
            placeholder={t('password')}
            className="w-full px-5 py-4 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-stone-100" required
          />
          {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
          <button type="submit" className="w-full bg-stone-900 dark:bg-green-600 text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-green-800 dark:hover:bg-green-700 transition-all">
            {t('loginBtn')}
          </button>
        </form>
      </div>
    </div>
  );
};

// --- Admin Sub-Components ---

const AdminSidebar: React.FC<{ 
  activeTab: 'posts' | 'categories', 
  setTab: (t: 'posts' | 'categories') => void, 
  lang: Language, 
  isOpen: boolean,
  toggle: () => void
}> = ({ activeTab, setTab, lang, isOpen, toggle }) => {
  const t = (key: string) => TRANSLATIONS[key][lang];
  const items = [
    { id: 'posts', label: t('posts'), icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg> },
    { id: 'categories', label: t('categories'), icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg> }
  ];

  return (
    <div className={`fixed lg:static top-0 left-0 z-40 bg-white dark:bg-stone-900 border-r border-stone-100 dark:border-stone-800 h-screen transition-all duration-300 shadow-xl lg:shadow-none ${isOpen ? 'w-64 translate-x-0' : 'w-0 -translate-x-full lg:w-20 lg:translate-x-0'}`}>
      <div className="p-4 h-full flex flex-col gap-8">
        <div className="flex items-center justify-between">
          {isOpen && (
            <Link to="/" className="flex items-center gap-2">
              <LeafIcon />
              <span className="font-bold text-sm text-stone-800 dark:text-stone-100 uppercase tracking-tighter">CMS</span>
            </Link>
          )}
          <button onClick={toggle} className="p-2 hover:bg-stone-50 dark:hover:bg-stone-800 rounded-lg text-stone-400">
            {isOpen ? <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg> : <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>}
          </button>
        </div>

        <nav className="flex flex-col gap-2">
          {items.map(item => (
            <button
              key={item.id}
              onClick={() => setTab(item.id as any)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold text-sm whitespace-nowrap overflow-hidden ${
                activeTab === item.id ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-400 shadow-sm' : 'text-stone-400 hover:bg-stone-50 dark:hover:bg-stone-800 hover:text-stone-600 dark:hover:text-stone-300'
              }`}
            >
              <span className="shrink-0">{item.icon}</span>
              {isOpen && <span>{item.label}</span>}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

const AdminDashboard: React.FC<{ 
  posts: Post[], categories: Category[], onAddPost: (p: Post) => void, onAddCategory: (c: Category) => void, onLogout: () => void, lang: Language, theme: Theme, toggleTheme: () => void 
}> = ({ posts, categories, onAddPost, onAddCategory, onLogout, lang, theme, toggleTheme }) => {
  const [activeTab, setActiveTab] = useState<'posts' | 'categories'>('posts');
  const [newPost, setNewPost] = useState<Partial<Post>>({ lang: 'pt', imageUrls: [] });
  const [previewPost, setPreviewPost] = useState<Post | null>(null);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [newCategoryLang, setNewCategoryLang] = useState<Language>('pt');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const t = (key: string) => TRANSLATIONS[key][lang];
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const filesArray = Array.from(files).slice(0, 4) as File[];
    const promises = filesArray.map(file => {
      return new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => resolve(e.target?.result as string);
        reader.readAsDataURL(file);
      });
    });
    Promise.all(promises).then(base64s => {
      setNewPost(prev => ({ ...prev, imageUrls: [...(prev.imageUrls || []), ...base64s].slice(0, 4) }));
    });
  };

  const removeImage = (index: number) => {
    setNewPost(prev => ({ ...prev, imageUrls: (prev.imageUrls || []).filter((_, i) => i !== index) }));
  };

  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPost.title && newPost.content) {
      onAddPost({
        id: Date.now().toString(),
        title: newPost.title!,
        category: newPost.category || 'General',
        description: newPost.description || '',
        content: newPost.content!,
        imageUrls: newPost.imageUrls || [],
        date: new Date().toISOString().split('T')[0],
        lang: newPost.lang as Language || 'pt'
      });
      setNewPost({ lang: 'pt', imageUrls: [] });
      alert('Post criado com sucesso!');
    }
  };

  const handleCategorySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newCategoryName.trim()) {
      onAddCategory({
        id: Date.now().toString(),
        name: newCategoryName,
        lang: newCategoryLang
      });
      setNewCategoryName('');
      alert('Categoria adicionada!');
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-stone-50 dark:bg-stone-950 transition-colors">
      <AdminSidebar activeTab={activeTab} setTab={setActiveTab} lang={lang} isOpen={sidebarOpen} toggle={() => setSidebarOpen(!sidebarOpen)} />
      
      <main className="flex-grow flex flex-col min-w-0">
        <header className="h-16 bg-white dark:bg-stone-900 border-b border-stone-100 dark:border-stone-800 px-6 flex items-center justify-between shrink-0">
          <h2 className="text-sm font-black uppercase tracking-[0.2em] text-stone-400 dark:text-stone-500">{activeTab === 'posts' ? t('posts') : t('categories')}</h2>
          <div className="flex items-center gap-4">
            <ThemeToggle theme={theme} toggle={toggleTheme} />
            <button onClick={onLogout} className="flex items-center gap-2 px-4 py-2 text-xs font-black uppercase tracking-widest text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-all">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
              {t('logout')}
            </button>
          </div>
        </header>

        <div className="flex-grow p-6 lg:p-12 overflow-y-auto custom-scrollbar bg-stone-50 dark:bg-stone-950">
          {previewPost ? (
            <div className="bg-white dark:bg-stone-900 rounded-[2.5rem] shadow-xl border border-stone-100 dark:border-stone-800 overflow-hidden max-w-5xl mx-auto">
               <PostDetailPageContent post={previewPost} lang={lang} onBack={() => setPreviewPost(null)} />
            </div>
          ) : activeTab === 'posts' ? (
            <div className="w-full space-y-12 transition-colors">
              {/* Form Container */}
              <div className="bg-white dark:bg-stone-900 p-8 rounded-[2rem] shadow-sm border border-stone-100 dark:border-stone-800">
                <h3 className="text-xl font-bold mb-8 dark:text-stone-100">Novo Artigo</h3>
                <form onSubmit={handlePostSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input 
                      type="text" value={newPost.title || ''} onChange={e => setNewPost({...newPost, title: e.target.value})}
                      placeholder={t('title')} className="w-full px-5 py-4 bg-stone-50 dark:bg-stone-800 border border-stone-100 dark:border-stone-700 rounded-2xl focus:ring-2 focus:ring-green-500 dark:text-stone-100 outline-none" required
                    />
                    <select 
                      value={newPost.category || ''} onChange={e => setNewPost({...newPost, category: e.target.value})}
                      className="w-full px-5 py-4 bg-stone-50 dark:bg-stone-800 border border-stone-100 dark:border-stone-700 rounded-2xl focus:ring-2 focus:ring-green-500 dark:text-stone-100 outline-none"
                    >
                      <option value="">{t('category')}</option>
                      {categories.filter(c => c.lang === (newPost.lang || 'pt')).map(c => (
                        <option key={c.id} value={c.name}>{c.name}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex gap-4">
                    {(['pt', 'en', 'es'] as Language[]).map(l => (
                      <button
                        key={l} type="button" onClick={() => setNewPost({...newPost, lang: l})}
                        className={`flex-grow py-2 rounded-xl border transition-all text-[10px] font-black tracking-widest ${
                          newPost.lang === l ? 'bg-green-600 text-white border-green-600' : 'bg-stone-50 dark:bg-stone-800 text-stone-400 dark:text-stone-500 border-stone-100 dark:border-stone-700'
                        }`}
                      >{l.toUpperCase()}</button>
                    ))}
                  </div>

                  <textarea 
                    rows={2} value={newPost.description || ''} onChange={e => setNewPost({...newPost, description: e.target.value})}
                    placeholder={t('description')} className="w-full px-5 py-4 bg-stone-50 dark:bg-stone-800 border border-stone-100 dark:border-stone-700 rounded-2xl focus:ring-2 focus:ring-green-500 dark:text-stone-100 outline-none"
                  />
                  <textarea 
                    rows={8} value={newPost.content || ''} onChange={e => setNewPost({...newPost, content: e.target.value})}
                    placeholder={t('content')} className="w-full px-5 py-4 bg-stone-50 dark:bg-stone-800 border border-stone-100 dark:border-stone-700 rounded-2xl focus:ring-2 focus:ring-green-500 dark:text-stone-100 outline-none" required
                  />

                  <div className="space-y-4">
                    <label className="block text-xs font-black text-stone-400 dark:text-stone-500 uppercase tracking-widest">{t('imageUrls')}</label>
                    <div className="grid grid-cols-4 gap-4">
                      {newPost.imageUrls?.map((url, i) => (
                        <div key={i} className="relative aspect-square rounded-xl overflow-hidden bg-stone-100 dark:bg-stone-800 group">
                          <img src={url} className="w-full h-full object-cover" />
                          <button 
                            type="button" onClick={() => removeImage(i)}
                            className="absolute top-1 right-1 p-1 bg-white/80 dark:bg-stone-900/80 rounded-full text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M18 6L6 18M6 6l12 12"/></svg>
                          </button>
                        </div>
                      ))}
                      {(newPost.imageUrls?.length || 0) < 4 && (
                        <button 
                          type="button" onClick={() => fileInputRef.current?.click()}
                          className="aspect-square rounded-xl border-2 border-dashed border-stone-200 dark:border-stone-700 flex flex-col items-center justify-center text-stone-300 dark:text-stone-600 hover:border-green-300 dark:hover:border-green-700 hover:text-green-500 transition-all"
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg>
                          <span className="text-[9px] mt-1">Upload</span>
                        </button>
                      )}
                    </div>
                    <input ref={fileInputRef} type="file" multiple accept="image/*" onChange={handleImageUpload} className="hidden" />
                  </div>

                  <button type="submit" className="w-full bg-stone-900 dark:bg-green-600 text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-green-800 dark:hover:bg-green-500 transition-all shadow-xl">
                    {t('save')}
                  </button>
                </form>
              </div>

              {/* Items List Container */}
              <div className="bg-white dark:bg-stone-900 p-8 rounded-[2.5rem] shadow-sm border border-stone-100 dark:border-stone-800">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-stone-50 dark:border-stone-800">
                  <h4 className="text-[10px] font-black uppercase text-stone-400 dark:text-stone-500 tracking-[0.2em]">Posts Cadastrados</h4>
                  <div className="px-4 py-1.5 bg-stone-100 dark:bg-stone-800 rounded-full text-[10px] font-black text-stone-400 uppercase tracking-widest">Visualização Landing Page</div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12">
                  {posts.slice().reverse().map(post => (
                    <div key={post.id} className="relative group">
                      <PostCard post={post} lang={lang} onClick={() => setPreviewPost(post)} />
                      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                         <button className="p-2 bg-white dark:bg-stone-800 rounded-lg shadow-md text-stone-400 hover:text-green-600">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                         </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full space-y-12 transition-colors">
              <div className="bg-white dark:bg-stone-900 p-8 rounded-[2rem] shadow-sm border border-stone-100 dark:border-stone-800">
                <h3 className="text-xl font-bold mb-8 dark:text-stone-100">Gerenciar Categorias</h3>
                <form onSubmit={handleCategorySubmit} className="flex flex-col md:flex-row gap-4 mb-12">
                  <input 
                    type="text" value={newCategoryName} onChange={e => setNewCategoryName(e.target.value)}
                    placeholder="Nome da Categoria (ex: Mindfulness)" className="flex-grow px-6 py-5 bg-stone-50 dark:bg-stone-800 border border-stone-100 dark:border-stone-700 rounded-2xl dark:text-stone-100 focus:ring-2 focus:ring-green-500 transition-all outline-none" required
                  />
                  <select 
                    value={newCategoryLang} onChange={e => setNewCategoryLang(e.target.value as Language)}
                    className="px-6 py-5 md:py-0 bg-stone-50 dark:bg-stone-800 border border-stone-100 dark:border-stone-700 rounded-2xl text-sm font-bold dark:text-stone-300 focus:ring-2 focus:ring-green-500 outline-none"
                  >
                    <option value="pt">Português (PT)</option>
                    <option value="en">English (EN)</option>
                    <option value="es">Español (ES)</option>
                  </select>
                  <button type="submit" className="px-10 py-5 bg-stone-900 dark:bg-green-600 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-green-800 dark:hover:bg-green-500 transition-all shadow-lg active:scale-95">
                    Adicionar Categoria
                  </button>
                </form>

                <div className="pt-8 border-t border-stone-50 dark:border-stone-800">
                  <h4 className="text-[10px] font-black uppercase text-stone-400 dark:text-stone-500 tracking-[0.2em] mb-8">Categorias Ativas</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {categories.map(c => (
                      <div key={c.id} className="flex flex-col p-6 bg-stone-50 dark:bg-stone-800/50 rounded-2xl group border border-stone-100 dark:border-stone-700 hover:border-green-200 dark:hover:border-green-800 transition-all hover:shadow-md">
                        <span className="font-bold text-lg text-stone-700 dark:text-stone-200 mb-2">{c.name}</span>
                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-stone-100/50 dark:border-stone-700/50">
                          <span className="text-[10px] font-black bg-white dark:bg-stone-700 px-2 py-1 rounded-lg text-stone-400 dark:text-stone-400 uppercase tracking-tighter shadow-sm">{c.lang}</span>
                          <button className="text-stone-300 hover:text-red-500 transition-colors">
                            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

const Footer: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = (key: string) => TRANSLATIONS[key][lang];
  return (
    <footer className="bg-white dark:bg-stone-900 border-t border-stone-100 dark:border-stone-800 py-8 transition-colors">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6 pb-6">
          <div className="flex items-center gap-4">
            <LeafIcon />
            <div>
              <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 leading-none tracking-tighter">Adriana Moreira</h3>
              <p className="text-[9px] uppercase tracking-[0.2em] text-green-700 dark:text-green-400 font-black mt-1">{t('mindfulness')} & {t('reflection')}</p>
            </div>
          </div>

          <a 
            href="https://www.instagram.com/adriana.moreiradrica/" 
            target="_blank" rel="noopener noreferrer"
            className="group flex items-center justify-center bg-stone-50 dark:bg-stone-800 hover:bg-stone-100 dark:hover:bg-stone-700 p-3 rounded-2xl transition-all border border-stone-100 dark:border-stone-800"
          >
            <InstagramIcon />
          </a>
        </div>
        <div className="w-full pt-4 border-t border-stone-50 dark:border-stone-800 text-center">
          <p className="text-[9px] font-black uppercase tracking-[0.3em] text-green-700 dark:text-green-400">
            © 2026 Adriana Moreira. <span className="font-medium text-green-800 dark:text-green-500 ml-2">{t('copyright')}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

const AppContent: React.FC<{ 
  posts: Post[], 
  categories: Category[], 
  onAddPost: (p: Post) => void, 
  onAddCategory: (c: Category) => void, 
  isAdmin: boolean,
  onLogin: () => void,
  onLogout: () => void,
  lang: Language,
  setLang: (l: Language) => void,
  theme: Theme,
  toggleTheme: () => void
}> = ({ posts, categories, onAddPost, onAddCategory, isAdmin, onLogin, onLogout, lang, setLang, theme, toggleTheme }) => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
  
  // Conditionally hide landing page layout if in admin area and logged in
  const showLandingHeader = !isAdmin || !isAdminRoute;

  return (
    <div className={`min-h-screen flex flex-col selection:bg-green-100 dark:selection:bg-green-900 selection:text-green-900 dark:selection:text-green-100 overflow-x-hidden bg-stone-50 dark:bg-stone-950 transition-colors ${theme === 'dark' ? 'dark' : ''}`}>
      {showLandingHeader && <Header lang={lang} setLang={setLang} theme={theme} toggleTheme={toggleTheme} />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage posts={posts} lang={lang} />} />
          <Route path="/about" element={<AboutPage lang={lang} />} />
          <Route path="/post/:id" element={<PostDetailPage posts={posts} lang={lang} />} />
          <Route 
            path="/admin" 
            element={isAdmin ? <AdminDashboard posts={posts} categories={categories} onAddPost={onAddPost} onAddCategory={onAddCategory} onLogout={onLogout} lang={lang} theme={theme} toggleTheme={toggleTheme} /> : <LoginPage onLogin={onLogin} lang={lang} />} 
          />
        </Routes>
      </main>
      {showLandingHeader && <Footer lang={lang} />}
    </div>
  );
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('pt');
  const [posts, setPosts] = useState<Post[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isAdmin, setIsAdmin] = useState<boolean>(() => localStorage.getItem('blog_is_admin') === 'true');
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem('blog_theme') as Theme) || 'light');

  useEffect(() => {
    const savedPosts = localStorage.getItem('blog_posts');
    const savedCats = localStorage.getItem('blog_categories');
    if (savedPosts) setPosts(JSON.parse(savedPosts));
    else {
      setPosts(INITIAL_POSTS);
      localStorage.setItem('blog_posts', JSON.stringify(INITIAL_POSTS));
    }
    if (savedCats) setCategories(JSON.parse(savedCats));
    else {
      setCategories(INITIAL_CATEGORIES);
      localStorage.setItem('blog_categories', JSON.stringify(INITIAL_CATEGORIES));
    }
  }, []);

  useEffect(() => {
    // Sync theme with HTML class for tailwind darkMode: 'class'
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleAddPost = (post: Post) => {
    const updatedPosts = [...posts, post];
    setPosts(updatedPosts);
    localStorage.setItem('blog_posts', JSON.stringify(updatedPosts));
  };

  const handleAddCategory = (cat: Category) => {
    const updated = [...categories, cat];
    setCategories(updated);
    localStorage.setItem('blog_categories', JSON.stringify(updated));
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('blog_theme', newTheme);
  };

  const handleLogin = () => {
    setIsAdmin(true);
    localStorage.setItem('blog_is_admin', 'true');
  };

  const handleLogout = () => {
    setIsAdmin(false);
    localStorage.removeItem('blog_is_admin');
  };

  return (
    <HashRouter>
      <AppContent 
        posts={posts} 
        categories={categories} 
        onAddPost={handleAddPost} 
        onAddCategory={handleAddCategory} 
        isAdmin={isAdmin}
        onLogin={handleLogin}
        onLogout={handleLogout}
        lang={lang}
        setLang={setLang}
        theme={theme}
        toggleTheme={toggleTheme}
      />
    </HashRouter>
  );
};

export default App;
