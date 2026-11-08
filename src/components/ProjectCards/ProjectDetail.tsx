'use client';

import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects as designProjects } from '../../data/designProjects'; 
import { codeProjects } from '../../data/codeProjects'; 
import CreativeLayout from './CreativeLayout';
import { ArrowLeft, WarningCircle } from '@phosphor-icons/react';

const PAPER_GRAIN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E")`;
const display = { fontFamily: "'Fraunces', ui-serif, Georgia, serif" };

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  // Cerca in entrambi gli array senza eccezioni
  const currentProject = 
    designProjects.find((p) => p.id === id) || 
    codeProjects.find((p) => p.id === id);

  if (!currentProject) {
    return (
      <div className="relative w-full min-h-screen bg-[#0B0910] flex items-center justify-center px-4 overflow-hidden text-neutral-100">
        {/* Glow d'atmosfera coerente */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-100 w-150 rounded-full blur-[140px] opacity-15"
          style={{ backgroundColor: '#B79FDB' }}
        />
        
        {/* Texture grana carta */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{ backgroundImage: PAPER_GRAIN, backgroundSize: '200px 200px' }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-md w-full bg-[#16141F] border border-white/10 rounded-2xl p-8 shadow-2xl text-center space-y-6">
          <div className="w-12 h-12 mx-auto rounded-xl bg-[#100E17] border border-white/10 flex items-center justify-center text-[#F5A6C6]">
            <WarningCircle size={24} weight="duotone" />
          </div>

          <div className="space-y-2">
            <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">Error 404 // Not Found</span>
            <h2 className="text-2xl font-medium text-white" style={display}>
              Progetto non trovato
            </h2>
            <p className="text-sm text-zinc-400 font-sans">
              Il file o il caso studio richiesto non esiste o è stato spostato nell&apos;archivio.
            </p>
          </div>

          <div className="pt-2">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#100E17] border border-white/10 text-zinc-300 hover:text-white hover:border-white/30 font-mono text-xs uppercase tracking-widest font-bold transition-all shadow-lg cursor-pointer"
            >
              <ArrowLeft size={14} /> Torna alla workspace
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return <CreativeLayout project={currentProject} />;
};

export default ProjectDetail;