'use client';

import React from 'react';
import { Link } from 'react-router-dom';

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

const CreativeLayout: React.FC<CreativeLayoutProps> = ({ project }) => {
  const primaryImage = project.image || project.coverImage;
  const isCodeProject = project.category === 'code' || (project.tech && project.tech.length > 0);
  const liveDemoLink = project.liveUrl;
  const sourceCodeLink = project.repo || project.githubUrl;

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 selection:bg-zinc-200 selection:text-black font-sans antialiased">
      
      {/* Header Stile Rivista con Glassmorphism */}
      <header className="sticky top-0 left-0 w-full z-50 bg-[#09090b]/80 backdrop-blur-xl border-b border-zinc-800/80 px-8 py-5 flex justify-between items-center transition-all duration-300">
        <Link 
          to="/" 
          className="group inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-zinc-400 hover:text-white transition-colors font-medium"
        >
          <span className="group-hover:-translate-x-1 transition-transform duration-300">←</span> Indice Progetti
        </Link>
        <span className="text-xs text-zinc-400 tracking-[0.25em] uppercase font-semibold">
          {project.title.replace(/_/g, ' ')}
        </span>
      </header>

      <main className="max-w-6xl mx-auto px-6 md:px-12 pt-20 pb-36">
        
        {/* EDITORIAL HERO */}
        <div className="mb-16 space-y-8 max-w-4xl">
          <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.25em] text-zinc-400 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-pulse" />
            <span>{isCodeProject ? (project.type || 'Creative Engineering & Code') : 'Case Study & Direzione Strategica'}</span>
            {project.duration && <span>• {project.duration}</span>}
            {project.status && <span className="text-emerald-400 font-mono">• {project.status}</span>}
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white leading-[0.95]">
            {project.title.replace(/_/g, ' ')}
          </h1>

          {project.tagline && (
            <p className="text-xl md:text-3xl text-zinc-300 font-light leading-snug tracking-tight">
              {project.tagline}
            </p>
          )}

          {project.description && (
            <p className="text-base md:text-lg text-zinc-400 leading-relaxed font-normal pt-4 border-l-2 border-zinc-700 pl-6 max-w-3xl">
              {project.description}
            </p>
          )}

          {/* PULSANTI DI ACCESSO ESTERNO (Live Demo, GitHub, Codepen, Figma) */}
          <div className="flex flex-wrap gap-4 pt-4">
            {liveDemoLink && (
              <a 
                href={liveDemoLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold text-xs uppercase tracking-widest hover:bg-zinc-200 transition-colors shadow-lg"
              >
                Visualizza Live Demo →
              </a>
            )}
            {sourceCodeLink && (
              <a 
                href={sourceCodeLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-zinc-200 font-semibold text-xs uppercase tracking-widest hover:bg-zinc-800 transition-colors"
              >
                Codice Sorgente (GitHub)
              </a>
            )}
            {project.codepen && (
              <a 
                href={project.codepen} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-zinc-200 font-semibold text-xs uppercase tracking-widest hover:bg-zinc-800 transition-colors"
              >
                Visualizza Codepen
              </a>
            )}
            {project.figmaUrl && (
              <a 
                href={project.figmaUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-zinc-200 font-semibold text-xs uppercase tracking-widest hover:bg-zinc-800 transition-colors"
              >
                Progetto Figma
              </a>
            )}
          </div>
        </div>

        {/* METADATI DI PROGETTO */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 mb-20 border-y border-zinc-800/80 text-xs tracking-wider uppercase font-medium">
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
      <div className="p-8 rounded-3xl bg-zinc-950 border border-zinc-800/80 space-y-3 shadow-xl">
        <span className="text-xs uppercase tracking-[0.25em] text-zinc-500 font-semibold block">01 / Scopo</span>
        <h4 className="text-xl font-bold text-white">Perché è iniziato</h4>
        <p className="text-zinc-300 text-sm leading-relaxed">{project.projectScope}</p>
      </div>
    )}
    {project.objective && (
      <div className="p-8 rounded-3xl bg-zinc-950 border border-zinc-800/80 space-y-3 shadow-xl">
        <span className="text-xs uppercase tracking-[0.25em] text-zinc-500 font-semibold block">02 / Obiettivo</span>
        <h4 className="text-xl font-bold text-white">Traguardo Raggiunto</h4>
        <p className="text-zinc-300 text-sm leading-relaxed">{project.objective}</p>
      </div>
    )}
    {project.approach && (
      <div className="p-8 rounded-3xl bg-zinc-950 border border-zinc-800/80 space-y-3 shadow-xl">
        <span className="text-xs uppercase tracking-[0.25em] text-zinc-500 font-semibold block">03 / Approccio</span>
        <h4 className="text-xl font-bold text-white">Processo Seguito</h4>
        <p className="text-zinc-300 text-sm leading-relaxed">{project.approach}</p>
      </div>
    )}
  </div>
)}
        {/* TECH STACK (Per tutti i progetti di codice) */}
        {project.tech && project.tech.length > 0 && (
          <div className="mb-20 p-8 rounded-3xl bg-zinc-950 border border-zinc-800/80 shadow-xl">
            <span className="text-xs uppercase tracking-[0.25em] text-zinc-500 font-semibold block mb-4">Tech Stack & Librerie Utilizzate</span>
            <div className="flex flex-wrap gap-2.5">
              {project.tech.map((t, i) => (
                <span key={i} className="bg-zinc-900 text-zinc-200 text-xs px-4 py-2 rounded-xl border border-zinc-700 font-mono tracking-wider shadow-sm">
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* IMMAGINE / ANTEPRIMA PRINCIPALE */}
        {primaryImage && (
          <div className="mb-28 group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 shadow-2xl">
            {isCodeProject && (
              <div className="bg-zinc-900/90 px-4 py-3 border-b border-zinc-800 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-zinc-700 block" />
                  <span className="w-3 h-3 rounded-full bg-zinc-700 block" />
                  <span className="w-3 h-3 rounded-full bg-zinc-700 block" />
                </div>
                <div className="mx-auto bg-zinc-950 px-6 py-1 rounded-md text-[11px] text-zinc-400 font-mono tracking-wide border border-zinc-800/50">
                  {liveDemoLink || `https://${project.title.toLowerCase().replace(/_/g, '')}.app`}
                </div>
              </div>
            )}
            <img 
              src={primaryImage} 
              alt={project.title} 
              className="w-full h-auto object-cover max-h-[80vh] group-hover:scale-102 transition-transform duration-700 ease-out" 
            />
          </div>
        )}

        {/* STRUTTURA EDITORIALE: Sfida e Soluzione (mappata anche su challenge/solution o originalBrief) */}
        <div className="space-y-28 mb-32">
          
          {project.challenge && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
              <div className="md:col-span-4 sticky top-28 space-y-2">
                <span className="text-xs uppercase tracking-[0.25em] text-zinc-500 font-semibold">01 / Criticità</span>
                <h3 className="text-2xl font-bold text-white tracking-tight">La Sfida di Progetto</h3>
              </div>
              <div className="md:col-span-8 p-8 md:p-10 rounded-3xl bg-zinc-950 border border-zinc-800/80 shadow-xl">
                <p className="text-zinc-300 text-lg leading-relaxed font-normal">{project.challenge}</p>
              </div>
            </div>
          )}

          {project.solution && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
              <div className="md:col-span-4 sticky top-28 space-y-2">
                <span className="text-xs uppercase tracking-[0.25em] text-zinc-400 font-semibold">02 / Implementazione</span>
                <h3 className="text-2xl font-bold text-white tracking-tight">Soluzione & Architettura</h3>
              </div>
              <div className="md:col-span-8 p-8 md:p-12 rounded-3xl bg-linear-to-br from-zinc-900 to-zinc-950 border border-zinc-700 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
                <p className="text-zinc-100 text-xl leading-relaxed font-normal relative z-10">{project.solution}</p>
              </div>
            </div>
          )}

          {/* SEZIONE LOGICA SPECIFICA DEI PROGETTI CODE (logicFeatures & logicIntro) */}
          {project.logicFeatures && project.logicFeatures.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start pt-8">
              <div className="md:col-span-4 sticky top-28 space-y-2">
                <span className="text-xs uppercase tracking-[0.25em] text-emerald-400 font-semibold">
                  {project.logicLabel || 'Engineering Logic'}
                </span>
                <h3 className="text-2xl font-bold text-white tracking-tight">Specifiche Tecniche & Funzionalità</h3>
              </div>
              <div className="md:col-span-8 p-8 md:p-10 rounded-3xl bg-zinc-950 border border-zinc-800/80 shadow-xl space-y-6">
                {project.logicIntro && (
                  <p className="text-zinc-300 text-base italic border-l-2 border-emerald-500 pl-4 py-1">
                    "{project.logicIntro}"
                  </p>
                )}
                <ul className="space-y-4">
                  {project.logicFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-zinc-300 text-base font-normal">
                      <span className="text-emerald-400 font-mono mt-1">▸</span>
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
          <div className="my-36 py-20 px-8 md:px-16 rounded-3xl border border-zinc-800/80 bg-zinc-950 text-center relative overflow-hidden shadow-2xl">
            <span className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-6 block font-semibold">
              Principio di Sviluppo
            </span>
            <blockquote className="text-2xl md:text-4xl font-light text-zinc-100 max-w-3xl mx-auto leading-relaxed tracking-tight">
              "{project.technicalQuote || project.designPhilosophy}"
            </blockquote>
          </div>
        )}

        {/* GALLERY IMMAGINI */}
        {project.galleryImages && project.galleryImages.length > 0 && (
          <div className="space-y-16 mb-32">
            <div className="border-b border-zinc-800 pb-6 flex justify-between items-end">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-zinc-500 font-semibold block mb-1">Galleria Visiva</span>
                <h3 className="text-3xl font-black text-white tracking-tight">Dettagli & Schermate</h3>
              </div>
              <span className="text-xs font-mono text-zinc-500">{project.galleryImages.length} Asset</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {project.galleryImages.map((item, index) => {
                const imgUrl = typeof item === 'string' ? item : item.url;
                const caption = typeof item === 'object' ? item.caption : null;
                const desc = typeof item === 'object' ? item.description : null;

                return (
                  <div key={index} className="rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-950 p-6 flex flex-col justify-between group shadow-xl">
                    <div className="rounded-2xl overflow-hidden bg-black flex justify-center mb-6 border border-zinc-800/50">
                      <img 
                        src={imgUrl} 
                        alt={caption || `Dettaglio ${index + 1}`} 
                        className="w-full h-auto object-cover max-h-175 group-hover:scale-102 transition-transform duration-700 ease-out" 
                      />
                    </div>
                    {(caption || desc) && (
                      <div className="space-y-2 pt-4 border-t border-zinc-900">
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
            <div className="border-b border-zinc-800 pb-6 flex justify-between items-end">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-zinc-500 font-semibold block mb-1">Motion & Video</span>
                <h3 className="text-3xl font-black text-white tracking-tight">Contenuti in Movimento</h3>
              </div>
              <span className="text-xs font-mono text-zinc-500">Showcase</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {project.videos.map((vid, index) => {
                const vidUrl = typeof vid === 'string' ? vid : vid.url;
                const caption = typeof vid === 'object' ? vid.caption : null;
                const desc = typeof vid === 'object' ? vid.description : null;

                return (
                  <div key={index} className="rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-950 p-6 flex flex-col justify-between shadow-xl">
                    <div className="rounded-2xl overflow-hidden bg-black flex justify-center mb-6">
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
                      <div className="space-y-2 pt-4 border-t border-zinc-900">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-16 border-t border-zinc-800">
            {project.performance && (
              <div className="p-8 rounded-3xl bg-zinc-950 border border-zinc-800 space-y-3 shadow-xl">
                <span className="text-xs uppercase tracking-[0.25em] text-zinc-400 font-semibold block">Performance & Benchmark</span>
                <p className="text-zinc-300 text-base leading-relaxed font-light">{project.performance}</p>
              </div>
            )}

            {project.lessonsLearned && (
              <div className="p-8 rounded-3xl bg-zinc-950 border border-zinc-800 space-y-3 shadow-xl">
                <span className="text-xs uppercase tracking-[0.25em] text-zinc-400 font-semibold block">Note di Sviluppo</span>
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