import React, { memo, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import {
  ArrowUpRightIcon,
  FileTextIcon,
  CodeIcon,
  PaletteIcon,
  MapPinIcon,
  SparkleIcon,
  FigmaLogoIcon,
} from '@phosphor-icons/react';

// Importa l'immagine direttamente (path string per Vite)
import profileImg from '../../assets/Background/stefania_avatar.webp';

/* ─────────────────────────────────────────────────────────────
    CONSTANTS & STYLES
───────────────────────────────────────────────────────────── */

const RESUME_DRIVE_URL =
  'https://drive.google.com/file/d/1cxDTR6DlQrU64nTDkGBIhwZXtNjoBLRQ/view?usp=sharing';

const EASE_SMOOTH = [0.22, 1, 0.36, 1] as const;

const handwrittenStyle = {
  fontFamily: "'Caveat', cursive, sans-serif",
};

/* ─────────────────────────────────────────────────────────────
    HELPERS & HOOKS
───────────────────────────────────────────────────────────── */

const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return prefersReducedMotion;
};

/* ─────────────────────────────────────────────────────────────
    SUB-COMPONENTS (Memoized per performance)
───────────────────────────────────────────────────────────── */

const HandDrawnUnderline = memo(() => (
  <svg
    viewBox="0 0 240 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    aria-hidden="true"
    className="absolute -bottom-2 left-0 h-4 w-full pointer-events-none"
  >
    <motion.path
      d="M3 13C45 5 110 4 237 14"
      stroke="currentColor"
      strokeWidth="2.8"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{
        duration: 0.7,
        delay: 0.35,
        ease: 'easeOut',
      }}
    />
    <motion.path
      d="M28 18C86 11 153 10 211 18"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 0.65 }}
      transition={{
        duration: 0.55,
        delay: 0.65,
        ease: 'easeOut',
      }}
    />
  </svg>
));
HandDrawnUnderline.displayName = 'HandDrawnUnderline';

/* ─────────────────────────────────────────────────────────────
    DATA ARRAYS
───────────────────────────────────────────────────────────── */

const FLOATING_DOODLES = [
  { icon: '✦', color: 'text-[#F6C555]', pos: 'left-[3%] top-[18%]', size: 'text-2xl', delay: 0.9 },
  { icon: '✿', color: 'text-[#B79FDB]', pos: 'right-[7%] top-[15%]', size: 'text-xl', delay: 1.05 },
  { icon: '♥', color: 'text-[#F5A6C6]', pos: 'left-[9%] bottom-[18%]', size: 'text-lg', delay: 1.2 },
  { icon: '✦', color: 'text-[#9BD8B8]', pos: 'right-[4%] bottom-[20%]', size: 'text-lg', delay: 1.35 },
];

// Sticker editoriali posizionati stabilmente attorno al ritratto
const EDITORIAL_STICKERS = [
  {
    label: 'Frontend × Design',
    icon: SparkleIcon,
    pos: '-left-6 top-[18%]',
    rot: -3,
    color: '#B79FDB',
  },
  {
    label: 'React & TS',
    icon: CodeIcon,
    pos: '-right-6 bottom-[24%]',
    rot: 4,
    color: '#8FC1E3',
  },
];

// 3 Doodle fissi di contorno vicino al ritratto
const PORTRAIT_DOODLES = [
  { icon: '✦', pos: '-left-4 -top-4', color: 'text-[#F6C555]', size: 'text-xl' },
  { icon: '✿', pos: '-right-3 top-[45%]', color: 'text-[#B79FDB]', size: 'text-lg' },
  { icon: '♥', pos: 'left-[15%] -bottom-4', color: 'text-[#F5A6C6]', size: 'text-base' },
];

const SKILLS_LIST = [
  { label: 'Front-End Development', icon: CodeIcon },
  { label: 'Web Design & UX', icon: PaletteIcon },
  { label: 'Catania, Sicily', icon: MapPinIcon },
];

/* ─────────────────────────────────────────────────────────────
    MOTION VARIANTS
───────────────────────────────────────────────────────────── */

const heroContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const revealUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE_SMOOTH },
  },
};

const revealTitle = {
  hidden: { opacity: 0, y: 45 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: EASE_SMOOTH },
  },
};

const imageReveal = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 1.1, ease: EASE_SMOOTH },
  },
};

/* ─────────────────────────────────────────────────────────────
    COMPONENT
───────────────────────────────────────────────────────────── */

export default function BackgroundImgHome() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const controls = useAnimation();

  useEffect(() => {
    if (prefersReducedMotion) {
      controls.stop();
    } else {
      controls.start('animate');
    }
  }, [prefersReducedMotion, controls]);

  const statusDotAnim = {
    animate: {
      scale: [1, 1.25, 1],
      opacity: [1, 0.6, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut' as const,
      },
    },
  };

  return (
    <section
      aria-label="Stefania Deliso - Front-end Developer & Designer"
      className="relative isolate flex min-h-[calc(100vh-4rem)] w-full items-center overflow-hidden bg-[#1E2022] px-6 py-24 text-[#E6E8EB] selection:bg-[#B79FDB]/30 selection:text-[#E6E8EB] sm:px-10 lg:min-h-screen lg:px-16 lg:py-28 xl:px-20"
    >
      {/* AMBIENT BACKGROUND GLOWS */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, ease: EASE_SMOOTH }}
          className="absolute left-[48%] top-[36%] h-168 w-2xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B79FDB]/8 blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.25 }}
          className="absolute -right-32 top-1/4 h-72 w-72 rounded-full bg-[#F6C555]/8 blur-[100px]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.4 }}
          className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-[#F5A6C6]/6 blur-[110px]"
        />
      </div>

      {/* FLOATING DOODLES */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {FLOATING_DOODLES.map((d) => (
          <motion.span
            key={d.delay}
            className={`absolute ${d.pos} ${d.size} ${d.color} select-none`}
            initial={{ opacity: 0, scale: 0, rotate: -20 }}
            animate={
              prefersReducedMotion
                ? { opacity: 0.85, scale: 1, rotate: 0 }
                : {
                    opacity: [0, 1, 0.85],
                    scale: [0, 1.15, 1],
                    rotate: [-20, 8, 0],
                  }
            }
            transition={{
              duration: 1.2,
              delay: d.delay,
              ease: EASE_SMOOTH,
            }}
          >
            {d.icon}
          </motion.span>
        ))}
      </div>

      {/* MAIN CONTENT GRID */}
      <motion.div
        variants={heroContainer}
        initial="hidden"
        animate="visible"
        className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-10 xl:gap-20"
      >
        {/* LEFT — TEXT CONTENT */}
        <div className="relative z-10 flex flex-col items-start lg:col-span-7 xl:col-span-7">
          
          {/* Availability Pill */}
          <motion.div variants={revealUp}>
            <div className="mb-7 inline-flex items-center gap-2.5 border-b border-white/10 pb-2 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-[#A0A8B0]">
              <motion.span
                aria-label="Stato: Disponibile"
                className="h-2 w-2 rounded-full bg-[#7FB89B]"
                animate={prefersReducedMotion ? 'initial' : statusDotAnim.animate}
              />
              <span>Sto cercando il prossimo progetto giusto</span>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.div variants={revealTitle} className="relative max-w-4xl">
            <h1 className="font-serif text-[3.5rem] font-medium leading-[0.94] tracking-[-0.045em] text-white sm:text-[5rem] lg:text-[5.4rem] xl:text-[6.25rem]">
              <span className="block">Ciao, sono</span>
              <span className="relative mt-2 block w-fit">
                <span className="relative z-10">Stefania.</span>
                <span aria-hidden="true" className="absolute -bottom-1 left-[2%] h-4 w-[94%] -rotate-1 rounded-full bg-[#F5A6C6]/30" />
              </span>
              <span className="mt-4 block">
                designer che{' '}
                <span className="relative inline-block font-semibold text-[#C4B2E3]">
                  scrive anche
                  <HandDrawnUnderline />
                </span>
              </span>
              <span className="block">
                <span className="text-white">il suo codice</span>
              </span>
            </h1>
            <motion.span
              initial={{ opacity: 0, rotate: 5, x: 10 }}
              animate={{ opacity: 1, rotate: 2, x: 0 }}
              transition={{ duration: 0.7, delay: 0.85, ease: EASE_SMOOTH }}
              className="absolute -bottom-10 right-0 hidden text-xl font-bold tracking-wide text-[#C4B2E3] sm:block lg:-right-4"
              style={handwrittenStyle}
            >
              ...e sì, controllo anche gli allineamenti a 1px 👀
            </motion.span>
          </motion.div>

          {/* Description */}
          <motion.p variants={revealUp} className="mt-12 max-w-2xl text-base leading-[1.75] text-[#A0A8B0] sm:text-lg">
            Lavoro con{' '}
            <strong className="font-semibold text-white">React e TypeScript</strong>
            , ma la parte che mi piace di più è quella in mezzo: prendere un'idea nata su Figma 
            e trasformarla in qualcosa che funziona bene, oltre a stare bene. Mi trovo a mio agio con team creativi che non hanno paura di sperimentare.
          </motion.p>

          {/* Skills */}
          <motion.div variants={revealUp} className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] font-mono uppercase tracking-[0.08em] text-[#A0A8B0]">
            {SKILLS_LIST.map((skill, idx) => {
              const IconComponent = skill.icon;
              return (
                <div key={idx} className="flex items-center gap-1.5">
                  <IconComponent className="h-3.5 w-3.5 text-[#C4B2E3]" aria-hidden="true" />
                  <span>{skill.label}</span>
                </div>
              );
            })}
          </motion.div>

          {/* Action Buttons */}
          <motion.div variants={revealUp} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#works"
              className="group inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-4 text-sm font-medium text-[#1E2022] transition-all duration-300 hover:bg-[#E6E8EB] hover:shadow-lg hover:shadow-black/20"
            >
              <span>Esplora i progetti</span>
              <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </a>

            <a
              href={RESUME_DRIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-transparent px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:border-white hover:bg-white/10"
            >
              <FileTextIcon className="h-4 w-4 text-[#A0A8B0] transition-colors group-hover:text-white" aria-hidden="true" />
              <span>Leggi il CV</span>
            </a>
          </motion.div>

        </div>

        {/* RIGHT — EDITORIAL ORGANIC PORTRAIT & STABLE STICKERS */}
        <div className="relative flex items-center justify-center lg:col-span-5 lg:col-start-8 xl:col-span-5 xl:col-start-8">
          <motion.div variants={imageReveal} className="relative w-full max-w-sm sm:max-w-md py-6">
            
            {/* Glow soffuso dietro la forma */}
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 rounded-[42%_58%_55%_45%/50%_45%_55%_50%] bg-linear-to-tr from-[#B79FDB]/20 via-[#2B2D31] to-[#F6C555]/15 blur-2xl transform scale-110"
            />

            {/* Contenitore con forma organica (border-radius irregolare), micro-rotazione e leggerissimo float in y */}
            <motion.div
              animate={prefersReducedMotion ? {} : { y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative rotate-1 transition-transform duration-500 hover:rotate-0 hover:scale-[1.01]"
            >
              {/* Cornice organica principale */}
              <div className="relative overflow-hidden rounded-[36%_64%_58%_42%/48%_52%_48%_52%] border-2 border-white/15 bg-[#25282C] shadow-xl shadow-black/30 aspect-4/5">
                <img
                  src={profileImg}
                  alt="Stefania Deliso"
                  className="h-full w-full object-cover object-center scale-[1.03] transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* 3 Doodle fissi posionati a ridosso del ritratto */}
              <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                {PORTRAIT_DOODLES.map((d, index) => (
                  <span
                    key={index}
                    className={`absolute ${d.pos} ${d.size} ${d.color} select-none drop-shadow-md`}
                  >
                    {d.icon}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Sticker editoriali fissi e stabili */}
            {EDITORIAL_STICKERS.map((st, i) => {
              const StickerIcon = st.icon;
              return (
                <div
                  key={i}
                  className={`absolute ${st.pos} z-20 hidden sm:flex items-center gap-2 rounded-2xl bg-[#2B2D31]/95 px-4 py-2.5 shadow-lg shadow-black/25 backdrop-blur-md border border-white/10 transition-transform duration-300 hover:scale-105`}
                  style={{ rotate: `${st.rot}deg` }}
                >
                  <StickerIcon className="h-4 w-4" style={{ color: st.color }} aria-hidden="true" />
                  <span className="font-mono text-xs font-semibold text-white">{st.label}</span>
                </div>
              );
            })}

          </motion.div>
        </div>

      </motion.div>

      {/* SCROLL INDICATOR */}
      <div aria-hidden="true" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 lg:flex">
        <motion.div
          animate={prefersReducedMotion ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1 opacity-40 hover:opacity-100 transition-opacity"
        >
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#E6E8EB]">Scroll</span>
          <div className="h-4 w-0.5 rounded-full bg-[#E6E8EB]" />
        </motion.div>
      </div>

    </section>
  );
}