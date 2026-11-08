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
  title: React.ReactNode;
  text: React.ReactNode;
  tapeColor: string;
  accentColor: string;
  baseRotation: string;
  deskOffset: string;
  tornClipPath: string;
  tapeRotation: string;
  cardType: 'card1' | 'card2' | 'card3' | 'card4';
}

const handwritten = { fontFamily: "'Caveat', cursive" };
const display = { fontFamily: "'Fraunces', ui-serif, Georgia, serif" };

// ── ✍️ CORREZIONE A PENNA ──────────────────────────────────────

const CorrectionDoodle = ({
  original,
  correction,
  color,
}: {
  original: string;
  correction: string;
  color: string;
}) => (
  <span className="relative inline-block mx-1">
    <span
      className="relative z-10 italic line-through decoration-2"
      style={{ color: '#8A8371', textDecorationColor: color }}
    >
      {original}
    </span>
    <span
      className="absolute -top-6 sm:-top-7 left-1/2 -translate-x-1/2 text-lg sm:text-xl font-bold tracking-wide rotate-[-4deg] whitespace-nowrap z-30"
      style={{ ...handwritten, color }}
    >
      {correction}
    </span>
  </span>
);

// ── 🎯 TIMBRO A MANO ──────────────────────────────────────────

const HandStamp = ({
  label,
  rotation = -14,
  color,
}: {
  label: string;
  rotation?: number;
  color: string;
}) => (
  <div
    className="absolute top-6 right-6 w-16 h-16 sm:w-20 sm:h-20 pointer-events-none select-none opacity-80 z-20"
    style={{ transform: `rotate(${rotation}deg)`, color }}
    aria-hidden="true"
  >
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="4 3" />
      <circle cx="50" cy="50" r="36" fill="none" stroke="currentColor" strokeWidth="1" />
      <text
        x="50"
        y="54"
        textAnchor="middle"
        fontSize="8"
        fontWeight="700"
        letterSpacing="0.6"
        fill="currentColor"
        style={{ fontFamily: "'Courier New', monospace" }}
      >
        {label}
      </text>
    </svg>
  </div>
);

// ── 📌 POST-IT ────────────────────────────────────────────────

const YellowPostIt = ({ text }: { text: string }) => (
  <div
    className="mb-4 p-3.5 relative shadow-md rotate-[-1.5deg] transition-transform hover:rotate-0"
    style={{ backgroundColor: '#FBEFA8', border: '1px solid rgba(232,185,74,0.35)' }}
  >
    <div
      className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full shadow-sm"
      style={{ backgroundColor: '#E0788F', border: '1px solid rgba(160,60,80,0.4)' }}
    />
    <p className="text-base leading-snug font-bold pt-1" style={{ ...handwritten, color: '#231F2E' }}>
      {text}
    </p>
  </div>
);

const PinkPostIt = ({ text }: { text: string }) => (
  <div
    className="mb-4 p-3.5 relative shadow-md rotate-[1.5deg] transition-transform hover:rotate-0"
    style={{ backgroundColor: '#FBD5E5', border: '1px solid rgba(245,166,198,0.5)' }}
  >
    <div
      className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-2.5 rotate-1"
      style={{ backgroundColor: 'rgba(255,255,255,0.65)' }}
    />
    <p className="text-base leading-snug font-bold pt-1" style={{ ...handwritten, color: '#231F2E' }}>
      {text}
    </p>
  </div>
);

// ── 🩹 NASTRO ADESIVO ─────────────────────────────────────────

const OuterTape = ({
  color,
  rotation,
  lifted,
}: {
  color: string;
  rotation: string;
  lifted: boolean;
}) => (
  <div
    className="absolute -top-4 sm:-top-5 left-1/2 w-28 sm:w-36 h-7 sm:h-8 z-40 pointer-events-none transition-transform duration-300 ease-out"
    aria-hidden="true"
    style={{
      backgroundColor: color,
      transform: `translateX(-50%) rotate(${rotation}) ${lifted ? 'translateY(-3px) rotateX(12deg)' : ''}`,
      clipPath: 'polygon(0% 15%, 4% 0%, 96% 0%, 100% 12%, 98% 88%, 94% 100%, 5% 100%, 0% 85%)',
    }}
  >
    <div className="w-full h-1/2" style={{ backgroundColor: 'rgba(255,255,255,0.25)' }} />
  </div>
);

// Grana di carta appena percettibile per il contesto scuro
const PAPER_GRAIN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' strokeTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")`;

// ── 🗂️ DATI ───────────────────────────────────────────────────

const DETAILS: DetailCard[] = [
  {
    id: '01',
    badge: 'Front-End & UX',
    title: 'Interfacce che si capiscono al volo',
    text: (
      <>
        Parto da Figma, perché un&apos;interfaccia si decide con gli occhi prima che con il
        codice. Poi la costruisco io in React, TypeScript e Next.js, senza perdere niente per
        strada.
      </>
    ),
    tapeColor: 'rgba(183,159,219,0.55)',
    tapeRotation: '-4deg',
    accentColor: '#B79FDB',
    baseRotation: 'rotate-0 md:-rotate-1',
    deskOffset: 'md:translate-y-2',
    tornClipPath: 'polygon(0.3% 0.5%, 99.5% 0.2%, 99.2% 99.4%, 0.5% 99.1%)',
    cardType: 'card1',
  },
  {
    id: '02',
    badge: 'Logistica & Eventi',
    title: 'Sangue freddo, anche con la fila fino al parcheggio',
    text: (
      <>
        A Etna Comics ho coordinato stand e persone nel caos totale. Stessa calma quando un bug
        salta fuori all&apos;ultimo minuto: respiro, trovo la quadra.
      </>
    ),
    tapeColor: 'rgba(245,166,198,0.6)',
    tapeRotation: '3deg',
    accentColor: '#F5A6C6',
    baseRotation: 'rotate-0 md:rotate-1',
    deskOffset: 'md:-translate-y-2',
    tornClipPath: 'polygon(0.2% 0.8%, 99.2% 0.4%, 99.6% 99.2%, 0.4% 99.5%)',
    cardType: 'card2',
  },
  {
    id: '03',
    badge: 'Art & Worldbuilding',
    title: 'Disegno, tarocchi e trofei Platinum',
    text: (
      <>
        Sto disegnando un mazzo di Major Arcana in stile anime cyber-goth, ad acquerello. E un
        gioco che mi prende lo finisco al 100%: la stessa ostinazione la metto nel codice.
      </>
    ),
    tapeColor: 'rgba(155,216,184,0.65)',
    tapeRotation: '-2deg',
    accentColor: '#9BD8B8',
    baseRotation: 'rotate-0 md:-rotate-[0.8deg]',
    deskOffset: 'md:translate-y-3',
    tornClipPath: 'polygon(0.5% 0.3%, 99.6% 0.6%, 98.9% 99.6%, 0.2% 99.2%)',
    cardType: 'card3',
  },
  {
    id: '04',
    badge: 'Visione & Futuro',
    title: 'Testa quadrata,',
    text: (
      <>
        Da perito agrario a designer che programma: ho cambiato strada ma non metodo.
        Concretezza, gusto estetico e voglia di imparare ancora.
      </>
    ),
    tapeColor: 'rgba(143,193,227,0.6)',
    tapeRotation: '4deg',
    accentColor: '#8FC1E3',
    baseRotation: 'rotate-0 md:rotate-1',
    deskOffset: 'md:-translate-y-1',
    tornClipPath: 'polygon(0.4% 0.7%, 99.1% 0.3%, 99.5% 99.1%, 0.3% 99.4%)',
    cardType: 'card4',
  },
];

// ── 🃏 CARD ───────────────────────────────────────────────────

function CraftCard({ card, i }: { card: DetailCard; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [4, -4]), {
    stiffness: 280,
    damping: 28,
  });
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-4, 4]), {
    stiffness: 280,
    damping: 28,
  });
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
      transition={{ duration: 0.5, delay: i * 0.08 }}
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
        <OuterTape color={card.tapeColor} rotation={card.tapeRotation} lifted={hovered} />

        <div
          style={{
            clipPath: card.tornClipPath,
            backgroundColor: '#25282C',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 18px 40px -18px rgba(0,0,0,0.4)',
          }}
          className="w-full h-full p-6 sm:p-8 lg:p-9 flex flex-col justify-between relative overflow-hidden"
        >
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{ backgroundImage: PAPER_GRAIN, backgroundSize: '300px 300px' }}
            aria-hidden="true"
          />

          {card.cardType === 'card4' && (
            <HandStamp label="#READYFORDESIGN" color={card.accentColor} />
          )}

          <div className="space-y-4 relative z-10 pt-1">
            <div
              className="flex items-center justify-between pb-3"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
            >
              <span
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full font-mono text-[10px] sm:text-[11px] uppercase tracking-widest"
                style={{ backgroundColor: '#2B2D31', color: '#E6E8EB', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: card.accentColor }}
                  aria-hidden="true"
                />
                {card.badge}
              </span>
              <span className="font-mono text-[11px] font-medium" style={{ color: '#A0A8B0' }}>
                0{i + 1}
              </span>
            </div>

            {card.cardType === 'card1' && <YellowPostIt text="Stack: React, Next.js, TS, Figma" />}
            {card.cardType === 'card2' && <PinkPostIt text="Staff & Operations @ Etna Comics" />}

            <h3
              className="text-2xl sm:text-[1.7rem] font-medium tracking-tight leading-snug"
              style={{ ...display, color: '#FFFFFF' }}
            >
              {card.cardType === 'card4' ? (
                <>
                  Testa quadrata,{' '}
                  <CorrectionDoodle
                    original="creativa"
                    correction="mani libere"
                    color={card.accentColor}
                  />
                </>
              ) : (
                card.title
              )}
            </h3>

            <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#A0A8B0' }}>
              {card.text}
            </p>
          </div>

          <div className="pt-6 mt-auto relative z-10">
            <div
              className="flex justify-between items-center pt-3"
              style={{ borderTop: '1px dashed rgba(255,255,255,0.1)' }}
            >
              <div
                className="font-mono text-xs font-bold tracking-widest select-none"
                style={{ color: card.accentColor }}
              >
                &lt;/♡&gt;
              </div>
              <span className="text-[10px] font-mono" style={{ color: '#A0A8B0' }}>
                stefania.dev
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── 📝 INTESTAZIONE ───────────────────────────────────────────

function NotebookHeader() {
  return (
    <div className="relative pt-20 pb-10 sm:pt-28 sm:pb-14 text-center max-w-3xl mx-auto px-4 z-10">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-2xl mb-3"
        style={{ ...handwritten, color: '#B79FDB' }}
      >
        dagli appunti del mio taccuino ✦
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight leading-[1.05] mb-6"
        style={{ ...display, color: '#FFFFFF' }}
      >
        Chi sono, cosa faccio &amp; cosa porto
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-base sm:text-lg leading-relaxed"
        style={{ color: '#A0A8B0' }}
      >
        Il mio percorso è una contaminazione continua: diploma di perito agrario all&apos;IIS{' '}
        <span style={{ color: '#FFFFFF', fontWeight: 600 }}>&quot;Filippo Eredia&quot;</span>, poi
        la grafica da autodidatta. Nel 2022 il salto nello sviluppo, con il corso da Front-End
        Developer alla{' '}
        <span style={{ color: '#FFFFFF', fontWeight: 600 }}>ITS Steve Jobs Academy</span>. Unisco
        estetica, codice e un solido background organizzativo per trasformare la complessità in
        interfacce che valgono la pena.
      </motion.p>
    </div>
  );
}

// ── 🧩 SEZIONE ────────────────────────────────────────────────

export default function AboutContent() {
  return (
    <div
      className="w-full overflow-hidden relative pb-20 sm:pb-28 bg-[#1E2022] text-[#E6E8EB]"
    >
      {/* Glow lilla soffuso, coerente con la Hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 h-128 w-2xl -translate-x-1/2 rounded-full blur-[120px]"
        style={{ backgroundColor: 'rgba(183,159,219,0.07)' }}
      />

      <NotebookHeader />

      <section
        id="about"
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 pt-8 sm:pt-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-14 lg:gap-16 items-stretch">
          {DETAILS.map((card, i) => (
            <CraftCard key={card.id} card={card} i={i} />
          ))}
        </div>
      </section>
    </div>
  );
}