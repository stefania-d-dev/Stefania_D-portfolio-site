'use client';

import { useRef, useState } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from 'framer-motion';

interface DetailCard {
  id: string;
  badge: string;
  title: string;
  coffeeTalk: React.ReactNode;
  tapeColor: string;
  accentColor: string;
  baseRotation: string;
  deskOffset: string;
  tornClipPath: string;
  tapeRotation: string;
  cardType: 'card1' | 'card2' | 'card3' | 'card4';
}

// ── ✍️ CORREZIONE A PENNA ──────────────────────────────────────

const CorrectionDoodle = ({ original, correction }: { original: string; correction: string }) => (
  <span className="relative inline-block mx-1">
    <span className="relative z-10 text-zinc-500/70 font-serif italic line-through decoration-cyan-500/80 decoration-2">
      {original}
    </span>
    <span
      className="absolute -top-6 sm:-top-7 left-1/2 -translate-x-1/2 font-handwritten text-base sm:text-lg font-bold text-cyan-300 tracking-wide rotate-[-4deg] whitespace-nowrap z-30 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
      style={{ fontFamily: "'Caveat', 'Architects Daughter', cursive" }}
    >
      {correction}
    </span>
  </span>
);

// ── 🎯 TIMBRO A MANO ──────────────────────────────────────────

const HandStamp = ({ label, rotation = -14 }: { label: string; rotation?: number }) => (
  <div
    className="absolute top-6 right-6 w-16 h-16 sm:w-20 sm:h-20 pointer-events-none select-none mix-blend-screen opacity-75 z-20"
    style={{ transform: `rotate(${rotation}deg)` }}
    aria-hidden="true"
  >
    <svg viewBox="0 0 100 100" className="w-full h-full text-cyan-400">
      <circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="4 3" />
      <circle cx="50" cy="50" r="36" fill="none" stroke="currentColor" strokeWidth="1" />
      <text
        x="50"
        y="55"
        textAnchor="middle"
        fontSize="9"
        fontWeight="700"
        letterSpacing="0.8"
        fill="currentColor"
        style={{ fontFamily: "'Courier New', monospace" }}
      >
        {label}
      </text>
    </svg>
  </div>
);

// ── 📌 POST-IT INTERNI E PROTETTI ─────────────────────────────

const InternalYellowPostIt = () => (
  <div
    className="mb-4 p-3.5 relative shadow-md rotate-[-1.5deg] border border-yellow-300/30 transition-transform hover:rotate-0"
    style={{
      backgroundColor: '#fef08a',
    }}
  >
    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-red-500/80 shadow-sm border border-red-700/40" />
    <p className="text-zinc-900 text-xs sm:text-sm leading-snug font-bold font-handwritten pt-1" style={{ fontFamily: "'Caveat', cursive" }}>
      ⚡ Stack: React, Next.js, TS &amp; Figma Wireframing
    </p>
    <div className="mt-1 text-[9px] text-zinc-700 font-mono tracking-tighter">
      &gt; clean components
    </div>
  </div>
);

const InternalPinkPostIt = () => (
  <div
    className="mb-4 p-3.5 relative shadow-md rotate-[1.5deg] border border-pink-300/30 transition-transform hover:rotate-0"
    style={{
      backgroundColor: '#fbcfe8',
    }}
  >
    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-2.5 bg-white/50 backdrop-blur-sm rotate-1" />
    <p className="text-zinc-900 text-xs sm:text-sm leading-snug font-bold font-handwritten pt-1" style={{ fontFamily: "'Caveat', cursive" }}>
      🎪 Staff &amp; Operations @ Etna Comics // Team Coordination
    </p>
    <div className="mt-1 text-[9px] text-zinc-800 font-mono">
      ✨ 100% problem solver
    </div>
  </div>
);

// ── 🩹 SCOTCH ESTERNO ─────────────────────────────────────────

const OuterTapeDoodle = ({
  color = 'rgba(34,211,238,0.35)',
  rotation = '-3deg',
  lifted = false,
}: {
  color?: string;
  rotation?: string;
  lifted?: boolean;
}) => (
  <div
    className="absolute -top-4 sm:-top-5 left-1/2 w-28 sm:w-36 h-7 sm:h-8 z-40 pointer-events-none backdrop-blur-[1px] transition-transform duration-300 ease-out"
    aria-hidden="true"
    style={{
      backgroundColor: color,
      transform: `translateX(-50%) rotate(${rotation}) ${lifted ? 'translateY(-3px) rotateX(12deg)' : ''}`,
      clipPath: 'polygon(0% 15%, 4% 0%, 96% 0%, 100% 12%, 98% 88%, 94% 100%, 5% 100%, 0% 85%)',
    }}
  >
    <div className="w-full h-1/2 bg-white/10" />
  </div>
);

const NOISE_PATTERN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' strokeTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='0.025'/%3E%3C/svg%3E")`;

const DETAILS: DetailCard[] = [
  {
    id: '01',
    badge: 'Front-End & UX',
    title: 'Interfacce che funzionano (e respirano)',
    coffeeTalk: (
      <>
        Odio le interfacce confuse quanto te. Parto da Figma per dare ordine ai pensieri e poi traduco tutto in componenti React, TypeScript e Next.js vivi, reattivi e pensati per chi li usa davvero, senza fronzoli inutili.
      </>
    ),
    tapeColor: 'rgba(34,211,238,0.38)',
    tapeRotation: '-4deg',
    accentColor: '#22d3ee',
    baseRotation: 'rotate-0 md:rotate-[-1deg]',
    deskOffset: 'md:translate-y-2',
    tornClipPath: 'polygon(0.3% 0.5%, 99.5% 0.2%, 99.2% 99.4%, 0.5% 99.1%)',
    cardType: 'card1',
  },
  {
    id: '02',
    badge: 'Logistica & Eventi',
    title: 'Gestione del caos & Sangue freddo',
    coffeeTalk: (
      <>
        Ho gestito stand affollati e coordinato persone nel caos di grandi fiere come Etna Comics. Quando un progetto va a cento all&apos;ora o un bug spunta all&apos;improvviso, mantengo la calma e trovo la quadra.
      </>
    ),
    tapeColor: 'rgba(168,85,247,0.38)',
    tapeRotation: '3deg',
    accentColor: '#a855f7',
    baseRotation: 'rotate-0 md:rotate-[1deg]',
    deskOffset: 'md:-translate-y-2',
    tornClipPath: 'polygon(0.2% 0.8%, 99.2% 0.4%, 99.6% 99.2%, 0.4% 99.5%)',
    cardType: 'card2',
  },
  {
    id: '03',
    badge: 'Art & Worldbuilding',
    title: 'Estetica, tarocchi & Gaming mindset',
    coffeeTalk: (
      <>
        Disegno da sempre: sto creando un mazzo di tarocchi Major Arcana in stile anime cyber goth watercolor. E se c&apos;è un videogioco che mi appassiona, lo spulcio fino a sbloccare ogni singolo trofeo Platinum: la determinazione è la stessa che metto nel codice.
      </>
    ),
    tapeColor: 'rgba(236,72,153,0.38)',
    tapeRotation: '-2deg',
    accentColor: '#ec4899',
    baseRotation: 'rotate-0 md:rotate-[-0.8deg]',
    deskOffset: 'md:translate-y-3',
    tornClipPath: 'polygon(0.5% 0.3%, 99.6% 0.6%, 98.9% 99.6%, 0.2% 99.2%)',
    cardType: 'card3',
  },
  {
    id: '04',
    badge: 'Visione & Futuro',
    title: 'Testa quadrata & Mani creative',
    coffeeTalk: (
      <>
        Dalle radici pratiche da perito agrario fino al codice e al design digitale: non smetto mai di imparare. Se cerchi qualcuno che unisce metodo concreto, estetica e tanta voglia di fare, ci siamo. 🚀
      </>
    ),
    tapeColor: 'rgba(56,189,248,0.38)',
    tapeRotation: '4deg',
    accentColor: '#38bdf8',
    baseRotation: 'rotate-0 md:rotate-[1deg]',
    deskOffset: 'md:-translate-y-1',
    tornClipPath: 'polygon(0.4% 0.7%, 99.1% 0.3%, 99.5% 99.1%, 0.3% 99.4%)',
    cardType: 'card4',
  },
];

function StaticCraftCard({ card, i }: { card: DetailCard; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [4, -4]), { stiffness: 280, damping: 28 });
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-4, 4]), { stiffness: 280, damping: 28 });
  const liftY = useSpring(hovered ? -6 : 0, { stiffness: 300, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    rawX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    setHovered(false);
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.div
      initial={prefersReducedMotion ? undefined : { opacity: 0, y: 25 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: i * 0.08 }}
      className={`relative w-full ${card.baseRotation} ${card.deskOffset}`}
      style={{ perspective: 1200 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleLeave}
        style={{
          rotateX: prefersReducedMotion ? 0 : rotateX,
          rotateY: prefersReducedMotion ? 0 : rotateY,
          y: liftY,
          transformStyle: 'preserve-3d',
        }}
        className="relative w-full h-full transform-gpu will-change-transform"
      >
        <OuterTapeDoodle color={card.tapeColor} rotation={card.tapeRotation} lifted={hovered} />

        <div
          style={{ clipPath: card.tornClipPath }}
          className="w-full h-full p-6 sm:p-8 lg:p-9 flex flex-col justify-between relative bg-[#0e0d13] border border-white/10 shadow-2xl overflow-hidden transition-colors duration-300 hover:border-white/20"
        >
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{ backgroundImage: NOISE_PATTERN, backgroundSize: '300px 300px' }}
            aria-hidden="true"
          />

          {card.cardType === 'card4' && <HandStamp label="#READYFORDESIGN" />}

          <div className="space-y-4 relative z-10 pt-1">
            <div className="flex items-center justify-between border-b border-zinc-800/90 pb-3">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-800 font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-zinc-300">
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: card.accentColor }} aria-hidden="true" />
                {card.badge}
              </span>
              <span className="font-mono text-[11px] text-zinc-600 font-medium">0{i + 1}</span>
            </div>

            {/* Inserimento pulito dei post-it protetti direttamente nella prima e seconda card senza rischi di sovrapposizione */}
            {i === 0 && <InternalYellowPostIt />}
            {i === 1 && <InternalPinkPostIt />}

            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug">
              {card.cardType === 'card4' ? (
                <>
                  Testa quadrata &amp; <CorrectionDoodle original="creativa" correction="mani libere" />
                </>
              ) : (
                card.title
              )}
            </h3>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-sans font-normal antialiased relative z-10">
              {card.coffeeTalk}
            </p>
          </div>

          <div className="pt-6 mt-auto">
            <div className="flex justify-between items-center border-t border-dashed border-zinc-800/80 pt-3 relative z-10">
              <div className="font-mono text-xs font-bold text-cyan-400/80 tracking-widest select-none">&lt;/♡&gt;</div>
              <span className="text-[10px] text-zinc-600 font-mono">stefania.dev</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── 📝 PREFAZIONE E INTRODUZIONE FLUIDA ──────────────────────

function NotebookHeader() {
  return (
    <div className="relative pt-20 pb-10 sm:pt-28 sm:pb-14 text-center max-w-3xl mx-auto px-4 z-10">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="font-mono text-xs tracking-widest uppercase text-cyan-400/90 mb-3 font-semibold"
      >
        ✦ DAGLI APPUNTI DEL MIO TACCUINO ✦
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-linear-to-r from-cyan-300 via-sky-400 to-cyan-500 font-sans mb-6"
      >
        Chi sono, cosa faccio &amp; cosa porto
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="text-zinc-300 text-base sm:text-lg leading-relaxed font-sans"
      >
      Il mio percorso è una contaminazione continua: ho conseguito il diploma di perito agrario presso l&apos;IIS <span className="text-white">&quot;Filippo Eredia&quot;</span>, per poi esplorare e coltivare la mia passione per la progettazione grafica da autodidatta. Nel 2022 ho fatto il grande salto nel mondo dello sviluppo completando il corso da Front-End Developer alla <span className="text-white">ITS Steve Jobs Academy</span>. Unendo estetica, codice e un solido background organizzativo, trasformo la complessità in interfacce ed esperienze digitali di valore.
      </motion.p>
    </div>
  );
}

export default function AboutContent() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={sectionRef} className="w-full overflow-hidden bg-[#060509] relative pb-20 sm:pb-28">
      {/* PREFAZIONE E INTRODUZIONE */}
      <NotebookHeader />

      {/* CARD CON COSA FACCIO */}
      <section id="about" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 pt-8 sm:pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-14 lg:gap-16 items-stretch">
          {DETAILS.map((card, i) => (
            <StaticCraftCard key={card.id} card={card} i={i} />
          ))}
        </div>
      </section>
    </div>
  );
}