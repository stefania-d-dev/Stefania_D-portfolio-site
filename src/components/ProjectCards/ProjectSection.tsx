'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects as designProjects } from '../../data/designProjects';
import { codeProjects, ProjectCode } from '../../data/codeProjects';
import {
  ArrowDown,
  FolderOpen,
} from '@phosphor-icons/react';

interface DesignProject {
  id: string;
  title: string;
  role: string;
  image: string;
  year?: string | number;
  accent?: string;
  performance?: string;
}

type UnifiedProject = (ProjectCode | DesignProject) & { category: 'code' | 'design'; year?: string | number };

const PAPER_GRAIN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E")`;
const handwritten = { fontFamily: "'Caveat', cursive" };
const display = { fontFamily: "'Fraunces', ui-serif, Georgia, serif" };

const ITEMS_PER_PAGE = 8;

export default function SelectedWorks() {
  const [filter, setFilter] = useState<'all' | 'code' | 'design'>('all');
  const [visibleCount, setVisibleCount] = useState<number>(ITEMS_PER_PAGE);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const allProjects = useMemo((): UnifiedProject[] => {
    const design = (designProjects as DesignProject[]).map(p => ({ ...p, category: 'design' as const }));
    const code = (codeProjects as ProjectCode[]).map(p => ({ ...p, category: 'code' as const }));
    return [...design, ...code];
  }, []);

  const filteredProjects = useMemo(() => {
    return allProjects.filter(p => filter === 'all' || p.category === filter);
  }, [allProjects, filter]);

  const displayedProjects = useMemo(() => {
    return filteredProjects.slice(0, visibleCount);
  }, [filteredProjects, visibleCount]);

  const handleFilterChange = (newFilter: 'all' | 'code' | 'design') => {
    setFilter(newFilter);
    setVisibleCount(ITEMS_PER_PAGE);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev: number) => prev + ITEMS_PER_PAGE);
  };

  return (
    <section id="portfolio" className="relative w-full bg-[#0B0910] py-32 px-4 sm:px-8 lg:px-16 overflow-hidden z-10 text-neutral-100">
      {/* Sfondo Atmosferico con Glow soffuso */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-1/4 top-1/3 h-125 w-200 rounded-full blur-[160px] opacity-15"
        style={{ backgroundColor: '#B79FDB' }}
      />

      {/* Grid Texture & Noise */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{ backgroundImage: PAPER_GRAIN, backgroundSize: '200px 200px' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10 w-full">

        {/* Header Sezione Editoriale */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-10 border-b border-white/10 gap-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#100E17] border border-white/10 text-[#B79FDB] font-mono text-xs tracking-wider shadow-inner">
              <FolderOpen size={14} /> workspace / selected_works.tsx
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight text-white leading-tight" style={{ ...display }}>
              Works<span className="text-[#B79FDB]">.</span>
            </h2>

            <p 
              className="text-zinc-400 text-xl md:text-2xl max-w-lg font-light"
              style={{ ...handwritten, color: '#B79FDB' }}
            >
              "Tra righe di codice e pixel curati, ecco tutto quello su cui ho messo le mani."
            </p>
          </div>

          {/* Filtri rapidi in stile Tab Editor */}
          <div className="flex items-center gap-1 bg-[#100E17] p-1.5 rounded-xl border border-white/10 shadow-lg backdrop-blur-xl">
            {(['all', 'code', 'design'] as const).map((t) => (
              <button
                key={t}
                onClick={() => handleFilterChange(t)}
                className={`px-5 py-2 rounded-lg font-mono text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                  filter === t
                    ? 'bg-[#B79FDB] text-zinc-950 font-bold shadow-md'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {t === 'all' ? 'Tutti i progetti' : t}
              </button>
            ))}
          </div>
        </div>

        {/* Griglia Progetti */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => {
              const projectPath = project.category === 'code'
                ? `/code/${project.id}`
                : `/project/${project.id}`;

              const formattedTitle = project.title.replace(/_/g, ' ');
              const shapeVariant = index % 5;
              const isHovered = hoveredId === `${project.category}-${project.id}`;
              const projectYear = project.year || '2025';
              const accentColor = project.accent || (project.category === 'code' ? '#B79FDB' : '#F5A6C6');

              return (
                <motion.div
                  key={`${project.category}-${project.id}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="w-full"
                >
                  <Link 
                    to={projectPath}
                    onMouseEnter={() => setHoveredId(`${project.category}-${project.id}`)}
                    onMouseLeave={() => setHoveredId(null)}
                    className="group relative block aspect-3/4 w-full overflow-hidden rounded-2xl bg-[#16141F] border border-white/10 focus:outline-none transition-all duration-500 hover:border-white/30 hover:shadow-2xl"
                  >
                    {/* Immagine di copertina */}
                    <img
                      src={project.image}
                      alt={formattedTitle}
                      loading="lazy"
                      draggable={false}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500" />

                    {/* Badge Geometrici Variabili */}
                    {shapeVariant === 0 && (
                      <div className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none">
                        <motion.div 
                          className="w-36 h-36 rounded-full bg-[#100E17]/90 backdrop-blur-md text-white shadow-xl flex flex-col items-center justify-center text-center p-4 border border-white/15"
                          animate={{ opacity: isHovered ? 0 : 1, scale: isHovered ? 0.95 : 1 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                        >
                          <div className="flex items-center gap-1.5 mb-1">
                            <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 font-medium">
                              {project.category}
                            </span>
                            <span className="text-zinc-600 text-[9px]">•</span>
                            <span className="font-mono text-[9px]" style={{ color: accentColor }}>{projectYear}</span>
                          </div>
                          <h3 className="text-xs md:text-sm font-bold tracking-tight uppercase leading-tight line-clamp-2 text-white/95">
                            {formattedTitle}
                          </h3>
                        </motion.div>
                      </div>
                    )}

                    {shapeVariant === 1 && (
                      <div className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none">
                        <motion.div 
                          className="w-36 h-36 rounded-4xl bg-[#100E17]/90 backdrop-blur-md text-white shadow-xl flex flex-col items-center justify-center text-center p-4 border border-white/15"
                          animate={{ opacity: isHovered ? 0 : 1, scale: isHovered ? 0.95 : 1 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                        >
                          <div className="flex items-center gap-1.5 mb-1">
                            <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 font-medium">
                              {project.category}
                            </span>
                            <span className="text-zinc-600 text-[9px]">•</span>
                            <span className="font-mono text-[9px]" style={{ color: accentColor }}>{projectYear}</span>
                          </div>
                          <h3 className="text-xs md:text-sm font-bold tracking-tight uppercase leading-tight line-clamp-2 text-white/95">
                            {formattedTitle}
                          </h3>
                        </motion.div>
                      </div>
                    )}

                    {shapeVariant === 2 && (
                      <div className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none">
                        <motion.div 
                          className="w-38 h-34 rounded-[2rem_0.8rem_2rem_0.8rem] bg-[#100E17]/90 backdrop-blur-md text-white shadow-xl flex flex-col items-center justify-center text-center p-4 border border-white/15"
                          animate={{ opacity: isHovered ? 0 : 1, scale: isHovered ? 0.95 : 1 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                        >
                          <div className="flex items-center gap-1.5 mb-1">
                            <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 font-medium">
                              {project.category}
                            </span>
                            <span className="text-zinc-600 text-[9px]">•</span>
                            <span className="font-mono text-[9px]" style={{ color: accentColor }}>{projectYear}</span>
                          </div>
                          <h3 className="text-xs md:text-sm font-bold tracking-tight uppercase leading-tight line-clamp-2 text-white/95">
                            {formattedTitle}
                          </h3>
                        </motion.div>
                      </div>
                    )}

                    {shapeVariant === 3 && (
                      <div className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none">
                        <motion.div 
                          className="w-44 h-28 rounded-full bg-[#100E17]/90 backdrop-blur-md text-white shadow-xl flex flex-col items-center justify-center text-center px-6 py-3 border border-white/15"
                          animate={{ opacity: isHovered ? 0 : 1, scale: isHovered ? 0.95 : 1 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                        >
                          <div className="flex items-center gap-1.5 mb-0.5">
                            <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 font-medium">
                              {project.category}
                            </span>
                            <span className="text-zinc-600 text-[9px]">•</span>
                            <span className="font-mono text-[9px]" style={{ color: accentColor }}>{projectYear}</span>
                          </div>
                          <h3 className="text-xs md:text-sm font-bold tracking-tight uppercase leading-tight line-clamp-1 text-white/95">
                            {formattedTitle}
                          </h3>
                        </motion.div>
                      </div>
                    )}

                    {shapeVariant === 4 && (
                      <div className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none">
                        <motion.div 
                          className="w-36 h-36 rounded-3xl bg-[#100E17]/90 backdrop-blur-md text-white shadow-xl flex flex-col items-center justify-center text-center p-4 border border-white/15"
                          animate={{ opacity: isHovered ? 0 : 1, scale: isHovered ? 0.95 : 1 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                        >
                          <div className="flex items-center gap-1.5 mb-1">
                            <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 font-medium">
                              {project.category}
                            </span>
                            <span className="text-zinc-600 text-[9px]">•</span>
                            <span className="font-mono text-[9px]" style={{ color: accentColor }}>{projectYear}</span>
                          </div>
                          <h3 className="text-xs md:text-sm font-bold tracking-tight uppercase leading-tight line-clamp-2 text-white/95">
                            {formattedTitle}
                          </h3>
                        </motion.div>
                      </div>
                    )}

                    {/* Overlay al hover per feedback immediato */}
                    <div className="absolute bottom-0 inset-x-0 p-5 bg-linear-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#B79FDB] font-semibold mb-1">
                        Esplora caso studio →
                      </span>
                      <h4 className="text-sm font-bold text-white uppercase tracking-wide">
                        {formattedTitle}
                      </h4>
                    </div>

                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Pulsante Carica Altri */}
        {visibleCount < filteredProjects.length && (
          <div className="mt-16 text-center">
            <button
              onClick={handleLoadMore}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#100E17] border border-white/10 text-zinc-300 hover:text-white hover:border-white/30 font-mono text-xs uppercase tracking-widest font-bold transition-all duration-300 shadow-xl cursor-pointer group backdrop-blur-md"
            >
              <span>Mostra altri ({filteredProjects.length - visibleCount})</span>
              <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform text-[#B79FDB]" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}