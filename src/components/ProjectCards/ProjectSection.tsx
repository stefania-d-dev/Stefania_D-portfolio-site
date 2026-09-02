'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects as designProjects } from '../../data/designProjects';
import { codeProjects, ProjectCode } from '../../data/codeProjects';
import {
  LightningIcon,
  CodeIcon,
  PaintBrushIcon,
  MagnifyingGlassIcon,
  ArrowDownIcon,
} from '@phosphor-icons/react';

interface DesignProject {
  id: string;
  title: string;
  role: string;
  image: string;
  accent?: string;
  performance?: string;
}

type UnifiedProject = (ProjectCode | DesignProject) & { category: 'code' | 'design' };

const TABLE_TEXTURE = `
  radial-gradient(circle at 50% 50%, rgba(20, 15, 30, 0.8) 0%, rgba(4, 3, 8, 1) 100%),
  linear-gradient(to right, rgba(255, 255, 255, 0.015) 1px, transparent 1px),
  linear-gradient(to bottom, rgba(255, 255, 255, 0.015) 1px, transparent 1px),
  url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E")
`;

const ROTATION_PATTERNS = [-1.5, 2, -2, 1.5, -1, 2.5];
const ITEMS_PER_PAGE = 6;

export default function SelectedWorks() {
  const [filter, setFilter] = useState<'all' | 'code' | 'design'>('all');
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(ITEMS_PER_PAGE);

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
    <section id="portfolio" className="bg-[#040308] py-28 md:py-36 relative overflow-hidden border-t border-white/5 text-white w-full max-w-full">
      {/* Sfondo Glows in tonalità Cyan/Sky */}
      <div className="absolute top-1/4 left-4 md:left-10 w-72 h-72 md:w-96 md:h-96 bg-cyan-600/10 blur-[140px] md:blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-4 md:right-10 w-72 h-72 md:w-96 md:h-96 bg-sky-600/10 blur-[140px] md:blur-[180px] pointer-events-none" />

      {/* Grid Pattern Scrittoio */}
      <div
        className="absolute inset-0 pointer-events-none opacity-90"
        style={{ backgroundImage: TABLE_TEXTURE, backgroundSize: '100% 100%, 30px 30px, 30px 30px, 200px 200px' }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">

        {/* Header Sezione */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 border-b border-white/10 pb-10 gap-8 text-left">
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-cyan-400 font-mono text-[10px] tracking-[.4em] uppercase font-bold">
              <CodeIcon size={14} /> ed ecco il Portfolio!
            </div>
            
            <h2 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter text-white">
              Works<span className="text-cyan-400">.</span>
            </h2>

            <p 
              className="text-cyan-200/95 text-xl md:text-2xl pt-1 -rotate-1"
              style={{ fontFamily: "'Caveat', cursive" }}
            >
              "Una selezione curata dei miei progetti di codice e design."
            </p>
          </div>

          {/* Filtri a Tab */}
          <div className="flex items-center gap-4">
            <div className="flex bg-zinc-900/90 border border-white/10 p-1.5 rounded-xl shadow-2xl backdrop-blur-md">
              {(['all', 'code', 'design'] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => handleFilterChange(t)}
                  className={`px-4 py-2 rounded-lg font-mono text-[10px] uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                    filter === t
                      ? 'bg-cyan-400 text-zinc-950 font-bold shadow-md shadow-cyan-500/20'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {t === 'all' ? 'Tutti' : t}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Griglia dei Progetti */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => {
              const rotateDeg = ROTATION_PATTERNS[index % ROTATION_PATTERNS.length];
              const accent = project.accent ?? "#22d3ee";
              const isHovered = hoveredId === project.id;
              const projectPath = project.category === 'code'
                ? `/code/${project.id}`
                : `/project/${project.id}`;

              const formattedTitle = project.title.replace(/_/g, ' ');

              return (
                <motion.div
                  key={`${project.category}-${project.id}`}
                  initial={{ opacity: 0, scale: 0.9, y: 15 }}
                  animate={{
                    opacity: 1,
                    scale: isHovered ? 1.02 : 1,
                    rotate: isHovered ? 0 : rotateDeg,
                    y: isHovered ? -8 : 0,
                    zIndex: isHovered ? 30 : 10,
                  }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="relative cursor-pointer select-none w-full min-w-0"
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <Link to={projectPath} className="block h-full w-full min-w-0">
                    
                    {/* Polaroid Card */}
                    <div className="relative bg-[#110f18] border border-white/10 p-4 pb-6 rounded-2xl shadow-2xl transition-all duration-300 group-hover:border-cyan-500/50 group-hover:shadow-[0_20px_50px_rgba(34,211,238,0.15)] w-full min-w-0">

                      {/* Scotch in alto */}
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-white/10 backdrop-blur-xs border border-white/10 rotate-1 shadow-xs pointer-events-none z-30" />

                      {/* Badge Performance */}
                      <div className="absolute top-7 left-7 z-20">
                        <div className="bg-black/80 backdrop-blur-md px-2.5 py-1 rounded border border-white/10 flex items-center gap-1.5 shadow-lg">
                          <LightningIcon size={10} weight="fill" style={{ color: accent }} />
                          <span className="font-mono text-[8px] text-zinc-300 uppercase font-bold tracking-wider">
                            {project.performance ? `Score: ${project.performance}` : 'Verified'}
                          </span>
                        </div>
                      </div>

                      {/* Immagine Foto */}
                      <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl bg-black border border-white/5">
                        <img
                          src={project.image}
                          alt={formattedTitle}
                          loading="lazy"
                          draggable={false}
                          className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                        />

                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />

                        {/* Icona "Esplora" */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                          <span className="bg-cyan-400 text-zinc-950 font-mono text-[9px] uppercase font-bold tracking-widest px-3.5 py-2 rounded-full shadow-lg flex items-center gap-2">
                            <MagnifyingGlassIcon size={14} weight="bold" />
                            Apri Caso Studio
                          </span>
                        </div>
                      </div>

                      {/* Titolo e dettagli stilizzati a mano */}
                      <div className="mt-4 px-1 flex items-end justify-between gap-2 min-w-0">
                        <div className="space-y-0.5 min-w-0 flex-1">
                          <div className="flex items-center gap-1.5 min-w-0">
                            {project.category === 'code' ? (
                              <CodeIcon size={12} className="text-cyan-400 shrink-0" />
                            ) : (
                              <PaintBrushIcon size={12} className="text-sky-400 shrink-0" />
                            )}
                            <span className="font-mono text-[9px] uppercase tracking-widest text-cyan-400/80 font-bold truncate">
                              {project.role}
                            </span>
                          </div>

                          <h3 
                            className="text-2xl font-bold text-white tracking-wide truncate"
                            style={{ fontFamily: "'Caveat', cursive" }}
                            title={formattedTitle}
                          >
                            {formattedTitle}
                          </h3>
                        </div>

                        <span className="font-mono text-[8px] text-zinc-500 uppercase border border-zinc-800 px-1.5 py-0.5 rounded shrink-0">
                          #{project.id}
                        </span>
                      </div>

                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Pulsante "Carica Altri" se ci sono altri progetti da mostrare */}
        {visibleCount < filteredProjects.length && (
          <div className="mt-16 text-center">
            <button
              onClick={handleLoadMore}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-zinc-900/90 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-400 hover:text-zinc-950 font-mono text-xs uppercase tracking-widest font-bold transition-all duration-300 shadow-xl cursor-pointer group"
            >
              <span>Carica altri progetti ({filteredProjects.length - visibleCount} rimanenti)</span>
              <ArrowDownIcon size={14} className="group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        )}

        {/* Footer Sezione */}
        <div className="mt-16 text-center border-t border-white/10 pt-8">
          <p 
            className="text-zinc-500 text-xl -rotate-1"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            Visualizzati {displayedProjects.length} di {filteredProjects.length} progetti.
          </p>
        </div>

      </div>
    </section>
  );
}