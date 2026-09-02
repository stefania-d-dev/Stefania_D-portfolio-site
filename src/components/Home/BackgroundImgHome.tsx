import React, { useState, memo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowUpRightIcon,
  FileTextIcon,
  CodeIcon,
  PaletteIcon,
  MapPinIcon,
  SparkleIcon,
  HeartIcon,
  TerminalWindowIcon,
  FigmaLogoIcon,
} from '@phosphor-icons/react';

import profileImg from '../../assets/Background/stefania_avatar.webp';

// Import dinamico del font Google "Caveat" per evitare il fallback su Comic Sans
const fontImport = document.createElement('link');
fontImport.href = 'https://fonts.googleapis.com/css2?family=Caveat:wght@500;700&display=swap';
fontImport.rel = 'stylesheet';
if (!document.head.contains(fontImport)) {
  document.head.appendChild(fontImport);
}

interface StaticImageData {
  src: string;
  width?: number;
  height?: number;
}

const AVATAR_FALLBACK_WIDTH = 720;
const AVATAR_FALLBACK_HEIGHT = 960;

const RESUME_DRIVE_URL =
  'https://drive.google.com/file/d/1cxDTR6DlQrU64nTDkGBIhwZXtNjoBLRQ/view?usp=sharing';

// ── 🌋 DOODLE ETNA ────────────────────────────────────────────────────────────

const EtnaDoodle = memo(({ className = 'w-8 h-auto text-sky-400' }: { className?: string }) => (
  <svg
    viewBox="0 0 80 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className={`${className} transition-transform duration-300 hover:scale-110 shrink-0`}
  >
    <path
      d="M45 15C45 10 50 8 48 3M52 18C55 12 60 10 57 4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M5 55L35 20L45 25L55 18L85 55"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
));
EtnaDoodle.displayName = 'EtnaDoodle';

const HandDrawnUnderline = memo(() => (
  <svg
    viewBox="0 0 180 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    aria-hidden="true"
    className="w-full h-3 text-sky-400 absolute -bottom-1 left-0 pointer-events-none z-10"
  >
    <motion.path
      d="M2 12C40 4 100 3 178 14M20 16C60 10 120 8 160 17"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      exit={{ pathLength: 0, opacity: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    />
  </svg>
));
HandDrawnUnderline.displayName = 'HandDrawnUnderline';

// Badge che esplodono fuori dalla foto
const DOODLES = [
  { id: 'react', label: '<React & TS />', x: -160, y: -100, rotate: -12, icon: TerminalWindowIcon, color: 'text-sky-400 border-sky-400/40' },
  { id: 'figma', label: 'UI/UX Design', x: 160, y: -110, rotate: 14, icon: FigmaLogoIcon, color: 'text-purple-400 border-purple-400/40' },
  { id: 'sparkle', label: 'Cura dei Dettagli ✨', x: -170, y: 80, rotate: -8, icon: SparkleIcon, color: 'text-amber-300 border-amber-300/40' },
  { id: 'etna', label: 'Etna Vibe 🌋', x: 160, y: 90, rotate: 10, icon: MapPinIcon, color: 'text-rose-400 border-rose-400/40' },
  { id: 'love', label: 'Clean Code 💻', x: 0, y: -180, rotate: 0, icon: HeartIcon, color: 'text-emerald-400 border-emerald-400/40' },
];

// ── 🚀 COMPONENTE HERO ──────────────────────────────────────────────────────

export default function BackgroundImgHome() {
  const [isTitleHovered, setIsTitleHovered] = useState(false);
  const [isPhotoHovered, setIsPhotoHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  const profileUrl = typeof profileImg === 'string' ? profileImg : (profileImg as StaticImageData).src;
  const profileWidth = typeof profileImg === 'string' ? AVATAR_FALLBACK_WIDTH : (profileImg as StaticImageData).width ?? AVATAR_FALLBACK_WIDTH;
  const profileHeight = typeof profileImg === 'string' ? AVATAR_FALLBACK_HEIGHT : (profileImg as StaticImageData).height ?? AVATAR_FALLBACK_HEIGHT;

  const handwrittenStyle = { fontFamily: "'Caveat', cursive, sans-serif" };

  return (
    <section
      className="relative w-full min-h-[85vh] lg:min-h-[90vh] flex items-center bg-[#080a10] text-zinc-100 font-sans pt-24 pb-16 lg:pt-32 lg:pb-24 px-6 sm:px-12 lg:px-20 selection:bg-sky-500/20 selection:text-sky-200 overflow-visible"
      aria-label="Stefania Deliso - Front-end Developer & Designer"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center relative z-10">
        
        {/* ── COLONNA SINISTRA: PRESENTAZIONE ── */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-5 lg:space-y-6">
          
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-zinc-800/80 bg-[#0e121d] text-xs font-mono text-zinc-300 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Disponibile per posizioni in-house o remote</span>
          </div>

          <div className="relative">
            <h1
              onMouseEnter={() => setIsTitleHovered(true)}
              onMouseLeave={() => setIsTitleHovered(false)}
              className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] text-white cursor-default"
            >
              Ciao, sono <span className="text-zinc-400 font-normal">Stefania.</span>
              <br />
              <span className="text-white">Unisco </span>
              <span className="relative inline-block text-sky-400 font-black">
                Codice
                <AnimatePresence>
                  {isTitleHovered && <HandDrawnUnderline />}
                </AnimatePresence>
              </span>
              <span className="text-white"> & Design.</span>
            </h1>

            {/* NOTA A MANO (Font Caveat) */}
            <span
              className="absolute -bottom-7 right-2 text-xl text-sky-300 font-bold rotate-1 hidden sm:block pointer-events-none select-none tracking-wide"
              style={handwrittenStyle}
            >
              ~ con tanta cura per i dettagli! 🧐
            </span>

          </div>

          <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed max-w-2xl pt-1">
            Sviluppo interfacce in <strong className="text-white font-medium">React e TypeScript</strong> prestando la massima cura al dettaglio visivo e alla UX. Amo collaborare con team creativi e dinamici, trasformando idee complesse su Figma in prodotti web funzionali, ordinati e belli da usare.
          </p>

          {/* PILLOLE STACK + ETNA DOODLE */}
          <div className="flex flex-wrap items-center gap-3 pt-1 font-mono text-xs text-zinc-300">
            <span className="px-3 py-1.5 bg-[#0e121d] border border-zinc-800/80 rounded-lg flex items-center gap-1.5">
              <CodeIcon size={15} className="text-sky-400" /> React • TypeScript • Tailwind
            </span>
            <span className="px-3 py-1.5 bg-[#0e121d] border border-zinc-800/80 rounded-lg flex items-center gap-1.5">
              <PaletteIcon size={15} className="text-sky-400" /> UI/UX • Figma
            </span>
            
            <div className="px-3.5 py-1.5 bg-[#0e121d] border border-sky-500/30 rounded-lg flex items-center gap-2 shadow-sm">
              <EtnaDoodle className="w-7 h-auto text-sky-400 -rotate-6" />
              <span className="text-zinc-200 font-bold text-[11px] flex items-center gap-1">
                <MapPinIcon size={13} className="text-sky-400" /> Catania, Sicilia 🌋
              </span>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap items-center gap-4 pt-3 w-full sm:w-auto">
            <a
              href="#projects"
              className="px-6 py-3.5 bg-zinc-100 hover:bg-white text-zinc-950 font-mono text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-sky-500/10 active:scale-95"
            >
              <SparkleIcon size={16} weight="fill" className="text-sky-500" />
              Esplora i Progetti
              <ArrowUpRightIcon size={16} weight="bold" />
            </a>

            <a
              href={RESUME_DRIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-[#0e121d] hover:bg-zinc-800/60 border border-zinc-800 text-zinc-200 hover:text-white font-mono text-xs font-semibold rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <FileTextIcon size={16} className="text-sky-400" />
              Scarica il CV
            </a>
          </div>

        </div>

        {/* ── COLONNA DESTRA: FOTO LIBERA + ESPLOSIONE + NOTA A MANO ── */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end relative mt-4 lg:mt-0">
          
          <div
            onMouseEnter={() => setIsPhotoHovered(true)}
            onMouseLeave={() => setIsPhotoHovered(false)}
            className="relative w-full max-w-xs sm:max-w-sm flex flex-col items-center justify-end cursor-pointer group"
          >
            
            {/* Soft Ambient Glow */}
            <div
              className={`absolute inset-0 bg-linear-to-t from-sky-500/25 via-sky-500/10 to-transparent rounded-full blur-3xl transition-all duration-500 -z-10 ${
                isPhotoHovered ? 'opacity-100 scale-125' : 'opacity-40'
              }`}
            />

            {/* ESPLOSIONE DOODLE */}
            <AnimatePresence>
              {isPhotoHovered &&
                DOODLES.map((doodle) => {
                  const Icon = doodle.icon;
                  return (
                    <motion.div
                      key={doodle.id}
                      initial={{ opacity: 0, scale: 0.2, x: 0, y: 0 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        x: doodle.x,
                        y: doodle.y,
                        rotate: doodle.rotate,
                      }}
                      exit={{ opacity: 0, scale: 0.2, x: 0, y: 0 }}
                      transition={{ type: 'spring', stiffness: 280, damping: 20 }}
                      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#0e121d]/95 backdrop-blur-md border shadow-2xl text-xs font-mono font-bold whitespace-nowrap ${doodle.color}`}
                    >
                      <Icon size={16} weight="bold" />
                      <span>{doodle.label}</span>
                    </motion.div>
                  );
                })}
            </AnimatePresence>

            {/* FOTO LIBERA */}
            <motion.div
              animate={{ scale: isPhotoHovered ? 1.04 : 1 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative w-full z-20 flex justify-center"
            >
              <img
                src={profileUrl}
                width={profileWidth}
                height={profileHeight}
                alt="Stefania Deliso"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="w-full h-auto object-cover filter contrast-[1.03] brightness-[1.02] drop-shadow-[0_25px_35px_rgba(0,0,0,0.7)]"
              />
            </motion.div>

            {/* NOTA A MANO SOTTO LA FOTO (nascosta su mobile) */}
            {!isMobile && (
              <div className="pt-3 text-center z-20 h-8 flex items-center justify-center">
                <span
                  className="text-xl text-sky-300 font-bold -rotate-2 inline-block select-none transition-transform group-hover:scale-105 tracking-wide"
                  style={handwrittenStyle}
                >
                  {isPhotoHovered ? '💥 Boom! Ecco la mia Vibe 💫' : '🪄 Passa il mouse per scoprire i dettagli!'}
                </span>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}