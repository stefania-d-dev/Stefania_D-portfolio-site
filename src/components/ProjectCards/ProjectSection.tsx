'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects as designProjects } from '../../data/designProjects';
import { codeProjects, ProjectCode } from '../../data/codeProjects';
import {
  ArrowDown,
  Sparkle,
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

const TABLE_TEXTURE = `
  radial-gradient(circle at 50% 50%, rgba(18, 15, 28, 0.9) 0%, rgba(4, 3, 8, 1) 100%),
  linear-gradient(to right, rgba(255, 255, 255, 0.015) 1px, transparent 1px),
  linear-gradient(to bottom, rgba(255, 255, 255, 0.015) 1px, transparent 1px),
  url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E")
`;

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
    <section id="portfolio" className="bg-[#040308] py-32 md:py-40 relative overflow-hidden border-t border-white/5 text-white w-full max-w-full">
      {/* Sfumature ambientali */}
      <div className="absolute top-1/4 left-10 w-125 h-125 bg-neutral-800/10 blur-[220px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-125 h-125 bg-zinc-700/10 blur-[220px] pointer-events-none" />

      {/* Grid Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-70"
        style={{ backgroundImage: TABLE_TEXTURE, backgroundSize: '100% 100%, 30px 30px, 30px 30px, 200px 200px' }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">

        {/* Header essenziale */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-10 border-b border-white/10 gap-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/3 border border-white/10 text-zinc-300 font-mono text-[11px] tracking-[0.25em] uppercase">
              <Sparkle size={12} weight="fill" /> Selected Works
            </div>
            
            <h2 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter text-white">
              Works<span className="text-zinc-500">.</span>
            </h2>

            <p 
              className="text-zinc-400 text-xl md:text-2xl max-w-lg font-light"
              style={{ fontFamily: "'Caveat', cursive" }}
            >
              "Forme geometriche fluide che scompaiono al passaggio del mouse."
            </p>
          </div>

          {/* Filtri rapidi */}
          <div className="flex items-center gap-1 bg-zinc-950/60 p-1.5 rounded-2xl border border-white/10 backdrop-blur-xl">
            {(['all', 'code', 'design'] as const).map((t) => (
              <button
                key={t}
                onClick={() => handleFilterChange(t)}
                className={`px-5 py-2 rounded-xl font-mono text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                  filter === t
                    ? 'bg-white text-zinc-950 font-bold shadow-lg shadow-white/10'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {t === 'all' ? 'Tutti' : t}
              </button>
            ))}
          </div>
        </div>

        {/* Griglia */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => {
              const projectPath = project.category === 'code'
                ? `/code/${project.id}`
                : `/project/${project.id}`;

              const formattedTitle = project.title.replace(/_/g, ' ');
              const shapeVariant = index % 5; // 5 forme geometriche differenti
              const isHovered = hoveredId === `${project.category}-${project.id}`;
              const projectYear = project.year || '2025';

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
                    className="group relative block aspect-3/4 w-full overflow-hidden rounded-3xl bg-zinc-900 border border-white/10 focus:outline-none transition-all duration-500 hover:border-white/30 hover:shadow-2xl"
                  >
                    {/* Immagine di copertina con zoom fluido */}
                    <img
                      src={project.image}
                      alt={formattedTitle}
                      loading="lazy"
                      draggable={false}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Sfumatura scura leggera all'hover */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-colors duration-500" />

                    {/* --- BADGE GEOMETRICI VARIABILI (Scompaiono all'hover) --- */}

                    {/* 0: Cerchio Perfetto */}
                    {shapeVariant === 0 && (
                      <div className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none">
                        <motion.div 
                          className="w-36 h-36 rounded-full bg-zinc-950/80 backdrop-blur-md text-white shadow-xl flex flex-col items-center justify-center text-center p-4 border border-white/15"
                          animate={{ opacity: isHovered ? 0 : 1, scale: isHovered ? 0.95 : 1 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                        >
                          <div className="flex items-center gap-1.5 mb-1">
                            <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 font-medium">
                              {project.category}
                            </span>
                            <span className="text-zinc-600 text-[9px]">•</span>
                            <span className="font-mono text-[9px] text-zinc-500">{projectYear}</span>
                          </div>
                          <h3 className="text-xs md:text-sm font-bold tracking-tight uppercase leading-tight line-clamp-2 text-white/95">
                            {formattedTitle}
                          </h3>
                        </motion.div>
                      </div>
                    )}

                    {/* 1: Squircle (Angoli molto arrotondati) */}
                    {shapeVariant === 1 && (
                      <div className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none">
                        <motion.div 
                          className="w-36 h-36 rounded-4xl bg-zinc-950/80 backdrop-blur-md text-white shadow-xl flex flex-col items-center justify-center text-center p-4 border border-white/15"
                          animate={{ opacity: isHovered ? 0 : 1, scale: isHovered ? 0.95 : 1 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                        >
                          <div className="flex items-center gap-1.5 mb-1">
                            <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 font-medium">
                              {project.category}
                            </span>
                            <span className="text-zinc-600 text-[9px]">•</span>
                            <span className="font-mono text-[9px] text-zinc-500">{projectYear}</span>
                          </div>
                          <h3 className="text-xs md:text-sm font-bold tracking-tight uppercase leading-tight line-clamp-2 text-white/95">
                            {formattedTitle}
                          </h3>
                        </motion.div>
                      </div>
                    )}

                    {/* 2: Asimmetrico / Organico (Border radius misto) */}
                    {shapeVariant === 2 && (
                      <div className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none">
                        <motion.div 
                          className="w-38 h-34 rounded-[2.5rem_1rem_2.5rem_1rem] bg-zinc-950/80 backdrop-blur-md text-white shadow-xl flex flex-col items-center justify-center text-center p-4 border border-white/15"
                          animate={{ opacity: isHovered ? 0 : 1, scale: isHovered ? 0.95 : 1 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                        >
                          <div className="flex items-center gap-1.5 mb-1">
                            <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 font-medium">
                              {project.category}
                            </span>
                            <span className="text-zinc-600 text-[9px]">•</span>
                            <span className="font-mono text-[9px] text-zinc-500">{projectYear}</span>
                          </div>
                          <h3 className="text-xs md:text-sm font-bold tracking-tight uppercase leading-tight line-clamp-2 text-white/95">
                            {formattedTitle}
                          </h3>
                        </motion.div>
                      </div>
                    )}

                    {/* 3: Pillola Orizzontale */}
                    {shapeVariant === 3 && (
                      <div className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none">
                        <motion.div 
                          className="w-44 h-28 rounded-full bg-zinc-950/80 backdrop-blur-md text-white shadow-xl flex flex-col items-center justify-center text-center px-6 py-3 border border-white/15"
                          animate={{ opacity: isHovered ? 0 : 1, scale: isHovered ? 0.95 : 1 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                        >
                          <div className="flex items-center gap-1.5 mb-0.5">
                            <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 font-medium">
                              {project.category}
                            </span>
                            <span className="text-zinc-600 text-[9px]">•</span>
                            <span className="font-mono text-[9px] text-zinc-500">{projectYear}</span>
                          </div>
                          <h3 className="text-xs md:text-sm font-bold tracking-tight uppercase leading-tight line-clamp-1 text-white/95">
                            {formattedTitle}
                          </h3>
                        </motion.div>
                      </div>
                    )}

                    {/* 4: Forma Diamante / Angoli morbidi */}
                    {shapeVariant === 4 && (
                      <div className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none">
                        <motion.div 
                          className="w-36 h-36 rounded-3xl rotate-0 bg-zinc-950/80 backdrop-blur-md text-white shadow-xl flex flex-col items-center justify-center text-center p-4 border border-white/15"
                          animate={{ opacity: isHovered ? 0 : 1, scale: isHovered ? 0.95 : 1 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                        >
                          <div className="flex items-center gap-1.5 mb-1">
                            <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 font-medium">
                              {project.category}
                            </span>
                            <span className="text-zinc-600 text-[9px]">•</span>
                            <span className="font-mono text-[9px] text-zinc-500">{projectYear}</span>
                          </div>
                          <h3 className="text-xs md:text-sm font-bold tracking-tight uppercase leading-tight line-clamp-2 text-white/95">
                            {formattedTitle}
                          </h3>
                        </motion.div>
                      </div>
                    )}

                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Pulsante Carica Altri */}
        {visibleCount < filteredProjects.length && (
          <div className="mt-20 text-center">
            <button
              onClick={handleLoadMore}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-zinc-950/80 border border-white/10 text-zinc-300 hover:text-white hover:border-white/30 font-mono text-xs uppercase tracking-widest font-bold transition-all duration-300 shadow-xl cursor-pointer group backdrop-blur-md"
            >
              <span>Mostra altri ({filteredProjects.length - visibleCount})</span>
              <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform text-zinc-400" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}