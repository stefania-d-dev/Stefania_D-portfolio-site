'use client';

import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Sparkle,
  FolderOpen,
  Code,
  Globe,
  GithubLogo,
  FigmaLogo,
  TerminalWindow,
} from '@phosphor-icons/react';

interface GalleryItem {
  url: string;
  caption: string;
  description?: string;
}

interface VideoItem {
  url: string;
  caption: string;
  description?: string;
}

interface ProjectData {
  id: string;
  title: string;
  role?: string;
  category?: 'design' | 'marketing' | 'code' | string;
  tech?: string[];
  accent?: string;
  image?: string;
  coverImage?: string;
  description?: string;
  duration?: string;
  agency?: string;
  status?: string;
  logo?: string;
  type?: string;
  tagline?: string;
  location?: string;
  challenge?: string;
  solution?: string;
  performance?: string;
  designPhilosophy?: string;
  designNote?: string;
  lessonsLearned?: string;
  visualLegacy?: string;
  galleryImages?: (string | GalleryItem)[];
  videos?: (string | VideoItem)[];
  roleDetails?: string;
  teamSize?: string;
  originalBrief?: string;
  strategicImpact?: string;
  githubUrl?: string;
  liveUrl?: string;
  repo?: string;
  codepen?: string;
  figmaUrl?: string;
  logicLabel?: string;
  logicIntro?: string;
  logicFeatures?: string[];
  technicalQuote?: string;
  projectScope?: string;
  objective?: string;
  approach?: string;
}

interface CreativeLayoutProps {
  project: ProjectData;
  type?: 'design' | 'code';
}

const PAPER_GRAIN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E")`;
const handwritten = { fontFamily: "'Caveat', cursive" };
const display = { fontFamily: "'Fraunces', ui-serif, Georgia, serif" };

const CreativeLayout: React.FC<CreativeLayoutProps> = ({ project }) => {
  const primaryImage = project.image || project.coverImage;
  const isCodeProject = project.category === 'code' || (project.tech && project.tech.length > 0);
  const liveDemoLink = project.liveUrl;
  const sourceCodeLink = project.repo || project.githubUrl;
  const formattedTitle = project.title.replace(/_/g, ' ');
  const accentColor = project.accent || (isCodeProject ? '#B79FDB' : '#F5A6C6');

  return (
    <div className="relative w-full min-h-screen bg-[#0B0910] text-neutral-100 selection:bg-[#B79FDB]/30 selection:text-white font-sans antialiased overflow-hidden">
      
      {/* Sfondo Atmosferico con Glow soffuso */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-1/4 top-20 h-125 w-200 rounded-full blur-[160px] opacity-15"
        style={{ backgroundColor: accentColor }}
      />

      {/* Grid Texture & Noise */}
      <div
        className="absolute inset-0 pointer-events-none opacity-45"
        style={{ backgroundImage: PAPER_GRAIN, backgroundSize: '200px 200px' }}
        aria-hidden="true"
      />

      {/* Header Stile IDE / Workspace */}
      <header className="sticky top-0 left-0 w-full z-50 bg-[#0B0910]/90 backdrop-blur-xl border-b border-white/10 px-6 sm:px-12 py-4 flex justify-between items-center transition-all duration-300">
        <Link 
          to="/" 
          className="group inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> 
          <span>Workspace / Indice</span>
        </Link>
        
        <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-md bg-[#100E17] border border-white/10 text-xs font-mono text-zinc-400">
          <FolderOpen size={13} style={{ color: accentColor }} />
          <span>project_{project.id.toLowerCase()}.tsx</span>
        </div>

        <span className="text-xs font-mono font-semibold tracking-wider text-zinc-300 truncate max-w-45 sm:max-w-xs">
          {formattedTitle}
        </span>
      </header>

      <main className="max-w-6xl mx-auto px-6 md:px-12 pt-20 pb-36 relative z-10">
        
        {/* EDITORIAL HERO */}
        <div className="mb-20 space-y-8 max-w-4xl">
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono uppercase tracking-widest text-zinc-400">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: accentColor }} />
            <span>{isCodeProject ? (project.type || 'Creative Engineering & Code') : 'Case Study & Direzione Strategica'}</span>
            {project.duration && (
              <>
                <span className="text-zinc-600">•</span>
                <span>{project.duration}</span>
              </>
            )}
            {project.status && (
              <>
                <span className="text-zinc-600">•</span>
                <span className="text-emerald-400">{project.status}</span>
              </>
            )}
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-medium tracking-tight text-white leading-[1.05]" style={display}>
            {formattedTitle}
          </h1>

          {project.tagline && (
            <p className="text-xl md:text-3xl text-zinc-300 font-light leading-snug tracking-tight" style={{ ...handwritten, color: accentColor }}>
              "{project.tagline}"
            </p>
          )}

          {project.description && (
            <p className="text-base md:text-lg text-zinc-400 leading-relaxed font-normal pt-2 border-l-2 pl-6 max-w-3xl" style={{ borderColor: accentColor }}>
              {project.description}
            </p>
          )}

          {/* PULSANTI DI ACCESSO ESTERNO */}
          <div className="flex flex-wrap gap-4 pt-4">
            {liveDemoLink && (
              <a 
                href={liveDemoLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-zinc-950 font-mono text-xs uppercase tracking-widest font-bold hover:bg-zinc-200 transition-colors shadow-lg cursor-pointer"
              >
                <Globe size={15} weight="bold" /> Visualizza Live Demo →
              </a>
            )}
            {sourceCodeLink && (
              <a 
                href={sourceCodeLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#16141F] border border-white/10 text-zinc-200 font-mono text-xs uppercase tracking-widest font-bold hover:border-white/30 hover:text-white transition-colors cursor-pointer"
              >
                <GithubLogo size={15} weight="bold" /> Codice Sorgente
              </a>
            )}
            {project.codepen && (
              <a 
                href={project.codepen} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#16141F] border border-white/10 text-zinc-200 font-mono text-xs uppercase tracking-widest font-bold hover:border-white/30 hover:text-white transition-colors cursor-pointer"
              >
                <Code size={15} weight="bold" /> CodePen
              </a>
            )}
            {project.figmaUrl && (
              <a 
                href={project.figmaUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#16141F] border border-white/10 text-zinc-200 font-mono text-xs uppercase tracking-widest font-bold hover:border-white/30 hover:text-white transition-colors cursor-pointer"
              >
                <FigmaLogo size={15} weight="bold" /> Figma Board
              </a>
            )}
          </div>
        </div>

        {/* METADATI DI PROGETTO */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 mb-24 border-y border-white/10 text-xs font-mono uppercase tracking-wider">
          {project.role && (
            <div className="space-y-1">
              <span className="text-zinc-500 block">Ruolo</span>
              <span className="text-zinc-200 text-sm font-semibold">{project.role}</span>
            </div>
          )}
          {project.agency && (
            <div className="space-y-1">
              <span className="text-zinc-500 block">Agenzia / Cliente</span>
              <span className="text-zinc-200 text-sm font-semibold">{project.agency}</span>
            </div>
          )}
          <div className="space-y-1">
            <span className="text-zinc-500 block">Ambito</span>
            <span className="text-zinc-200 text-sm font-semibold">{isCodeProject ? 'Creative Development' : 'Design & Strategia'}</span>
          </div>
          {project.duration && (
            <div className="space-y-1">
              <span className="text-zinc-500 block">Timeline</span>
              <span className="text-zinc-200 text-sm font-semibold">{project.duration}</span>
            </div>
          )}
        </div>

        {/* SEZIONE CASO STUDIO: SCOPO, OBIETTIVO E APPROCCIO */}
        {(project.projectScope || project.objective || project.approach) && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-28">
            {project.projectScope && (
              <div className="p-8 rounded-2xl bg-[#16141F] border border-white/10 space-y-3 shadow-xl">
                <span className="text-xs font-mono uppercase tracking-widest text-[#B79FDB] block">01 / Scopo</span>
                <h4 className="text-xl font-medium text-white" style={display}>Perché è iniziato</h4>
                <p className="text-zinc-300 text-sm leading-relaxed font-sans">{project.projectScope}</p>
              </div>
            )}
            {project.objective && (
              <div className="p-8 rounded-2xl bg-[#16141F] border border-white/10 space-y-3 shadow-xl">
                <span className="text-xs font-mono uppercase tracking-widest text-[#F5A6C6] block">02 / Obiettivo</span>
                <h4 className="text-xl font-medium text-white" style={display}>Traguardo Raggiunto</h4>
                <p className="text-zinc-300 text-sm leading-relaxed font-sans">{project.objective}</p>
              </div>
            )}
            {project.approach && (
              <div className="p-8 rounded-2xl bg-[#16141F] border border-white/10 space-y-3 shadow-xl">
                <span className="text-xs font-mono uppercase tracking-widest text-[#9BD8B8] block">03 / Approccio</span>
                <h4 className="text-xl font-medium text-white" style={display}>Processo Seguito</h4>
                <p className="text-zinc-300 text-sm leading-relaxed font-sans">{project.approach}</p>
              </div>
            )}
          </div>
        )}

        {/* TECH STACK */}
        {project.tech && project.tech.length > 0 && (
          <div className="mb-24 p-8 rounded-2xl bg-[#16141F] border border-white/10 shadow-xl">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block mb-4">Tech Stack & Librerie Utilizzate</span>
            <div className="flex flex-wrap gap-2.5">
              {project.tech.map((t, i) => (
                <span key={i} className="bg-[#100E17] text-zinc-200 text-xs px-4 py-2 rounded-xl border border-white/10 font-mono tracking-wider shadow-inner">
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* IMMAGINE / ANTEPRIMA PRINCIPALE */}
        {primaryImage && (
          <div className="mb-28 group relative overflow-hidden rounded-2xl border border-white/10 bg-[#16141F] shadow-2xl">
            {isCodeProject && (
              <div className="bg-[#100E17] px-4 py-3 border-b border-white/10 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-white/20 block" />
                  <span className="w-3 h-3 rounded-full bg-white/20 block" />
                  <span className="w-3 h-3 rounded-full bg-white/20 block" />
                </div>
                <div className="bg-[#16141F] px-6 py-1 rounded-md text-[11px] text-zinc-400 font-mono tracking-wide border border-white/10">
                  {liveDemoLink || `https://${project.id}.app`}
                </div>
                <TerminalWindow size={16} className="text-zinc-500" />
              </div>
            )}
            <img 
              src={primaryImage} 
              alt={formattedTitle} 
              className="w-full h-auto object-cover max-h-[80vh] group-hover:scale-102 transition-transform duration-700 ease-out" 
            />
          </div>
        )}

        {/* STRUTTURA EDITORIALE: Sfida e Soluzione */}
        <div className="space-y-28 mb-32">
          {project.challenge && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
              <div className="md:col-span-4 sticky top-28 space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[#F5A6C6]">01 / Criticità</span>
                <h3 className="text-3xl font-medium text-white tracking-tight" style={display}>La Sfida di Progetto</h3>
              </div>
              <div className="md:col-span-8 p-8 md:p-10 rounded-2xl bg-[#16141F] border border-white/10 shadow-xl">
                <p className="text-zinc-300 text-lg leading-relaxed font-normal font-sans">{project.challenge}</p>
              </div>
            </div>
          )}

          {project.solution && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
              <div className="md:col-span-4 sticky top-28 space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[#B79FDB]">02 / Implementazione</span>
                <h3 className="text-3xl font-medium text-white tracking-tight" style={display}>Soluzione & Architettura</h3>
              </div>
              <div className="md:col-span-8 p-8 md:p-12 rounded-2xl bg-[#16141F] border border-white/20 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#B79FDB]/10 rounded-full blur-3xl pointer-events-none" />
                <p className="text-zinc-100 text-lg leading-relaxed font-normal relative z-10 font-sans">{project.solution}</p>
              </div>
            </div>
          )}

          {/* SPECIFICHE TECNICHE E LOGICA */}
          {project.logicFeatures && project.logicFeatures.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start pt-8">
              <div className="md:col-span-4 sticky top-28 space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[#9BD8B8]">
                  {project.logicLabel || 'Engineering Logic'}
                </span>
                <h3 className="text-3xl font-medium text-white tracking-tight" style={display}>Specifiche Tecniche & Funzionalità</h3>
              </div>
              <div className="md:col-span-8 p-8 md:p-10 rounded-2xl bg-[#16141F] border border-white/10 shadow-xl space-y-6">
                {project.logicIntro && (
                  <p className="text-zinc-300 text-base italic border-l-2 border-[#9BD8B8] pl-4 py-1" style={handwritten}>
                    "{project.logicIntro}"
                  </p>
                )}
                <ul className="space-y-4">
                  {project.logicFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-zinc-300 text-base font-normal">
                      <span className="text-[#9BD8B8] font-mono mt-1">▸</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* CITAZIONE TECNICA / FILOSOFIA */}
        {(project.technicalQuote || project.designPhilosophy) && (
          <div className="my-36 py-20 px-8 md:px-16 rounded-2xl border border-white/10 bg-[#16141F] text-center relative overflow-hidden shadow-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-6 block">
              Principio di Sviluppo
            </span>
            <blockquote className="text-2xl md:text-4xl font-light text-zinc-100 max-w-3xl mx-auto leading-relaxed tracking-tight" style={display}>
              "{project.technicalQuote || project.designPhilosophy}"
            </blockquote>
          </div>
        )}

        {/* GALLERY IMMAGINI */}
        {project.galleryImages && project.galleryImages.length > 0 && (
          <div className="space-y-16 mb-32">
            <div className="border-b border-white/10 pb-6 flex justify-between items-end">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block mb-1">Galleria Visiva</span>
                <h3 className="text-3xl font-medium text-white tracking-tight" style={display}>Dettagli & Schermate</h3>
              </div>
              <span className="text-xs font-mono text-zinc-500">{project.galleryImages.length} Asset</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {project.galleryImages.map((item, index) => {
                const imgUrl = typeof item === 'string' ? item : item.url;
                const caption = typeof item === 'object' ? item.caption : null;
                const desc = typeof item === 'object' ? item.description : null;

                return (
                  <div key={index} className="rounded-2xl overflow-hidden border border-white/10 bg-[#16141F] p-6 flex flex-col justify-between group shadow-xl">
                    <div className="rounded-xl overflow-hidden bg-black flex justify-center mb-6 border border-white/5">
                      <img 
                        src={imgUrl} 
                        alt={caption || `Dettaglio ${index + 1}`} 
                        className="w-full h-auto object-cover max-h-175 group-hover:scale-102 transition-transform duration-700 ease-out" 
                      />
                    </div>
                    {(caption || desc) && (
                      <div className="space-y-2 pt-4 border-t border-white/5">
                        {caption && <h4 className="text-base font-semibold text-white tracking-wide">{caption}</h4>}
                        {desc && <p className="text-sm text-zinc-400 leading-relaxed font-light">{desc}</p>}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* SEZIONE VIDEO */}
        {project.videos && project.videos.length > 0 && (
          <div className="space-y-16 mb-32">
            <div className="border-b border-white/10 pb-6 flex justify-between items-end">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block mb-1">Motion & Video</span>
                <h3 className="text-3xl font-medium text-white tracking-tight" style={display}>Contenuti in Movimento</h3>
              </div>
              <span className="text-xs font-mono text-zinc-500">Showcase</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {project.videos.map((vid, index) => {
                const vidUrl = typeof vid === 'string' ? vid : vid.url;
                const caption = typeof vid === 'object' ? vid.caption : null;
                const desc = typeof vid === 'object' ? vid.description : null;

                return (
                  <div key={index} className="rounded-2xl overflow-hidden border border-white/10 bg-[#16141F] p-6 flex flex-col justify-between shadow-xl">
                    <div className="rounded-xl overflow-hidden bg-black flex justify-center mb-6">
                      <video 
                        src={vidUrl} 
                        autoPlay 
                        loop 
                        muted 
                        playsInline 
                        className="w-full h-auto max-h-175 object-cover mx-auto"
                      />
                    </div>
                    {(caption || desc) && (
                      <div className="space-y-2 pt-4 border-t border-white/5">
                        {caption && <h4 className="text-base font-semibold text-white tracking-wide">{caption}</h4>}
                        {desc && <p className="text-sm text-zinc-400 leading-relaxed font-light">{desc}</p>}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* PERFORMANCE E RISULTATI */}
        {(project.performance || project.lessonsLearned) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-16 border-t border-white/10">
            {project.performance && (
              <div className="p-8 rounded-2xl bg-[#16141F] border border-white/10 space-y-3 shadow-xl">
                <span className="text-xs font-mono uppercase tracking-widest text-[#B79FDB] block">Performance & Benchmark</span>
                <p className="text-zinc-300 text-base leading-relaxed font-light">{project.performance}</p>
              </div>
            )}

            {project.lessonsLearned && (
              <div className="p-8 rounded-2xl bg-[#16141F] border border-white/10 space-y-3 shadow-xl">
                <span className="text-xs font-mono uppercase tracking-widest text-[#F5A6C6] block">Note di Sviluppo</span>
                <p className="text-zinc-300 text-base leading-relaxed font-light">{project.lessonsLearned}</p>
              </div>
            )}
          </div>
        )}

      </main>
    </div>
  );
};

export default CreativeLayout;