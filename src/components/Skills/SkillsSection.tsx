'use client';

import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';

// Import Hard Skills Icons
import docker from '../../assets/Icons/docker.png';
import node from '../../assets/Icons/node.png';
import git from '../../assets/Icons/git.png';
import github from '../../assets/Icons/github.png';
import powerP from '../../assets/Icons/power-point.png';
import mongoDb from '../../assets/Icons/mongo.png';
import excel from '../../assets/Icons/excel.png';
import gitlab from '../../assets/Icons/gitlab.png';
import javascript from '../../assets/Icons/javascript.png';
import word from '../../assets/Icons/word.png';
import netlify from '../../assets/Icons/netlify.png';
import typescript from '../../assets/Icons/typescript.png';
import reactIcon from '../../assets/Icons/react.png';
import boots from '../../assets/Icons/bootstrap.png';
import MUILogo from '../../assets/Icons/material-ui.svg';
import html from '../../assets/Icons/html.png';
import css from '../../assets/Icons/css.png';
import aws from '../../assets/Icons/aws.png';
import c from '../../assets/Icons/c.png';
import photoshop from '../../assets/Icons/photoshop.png';
import illustrator from '../../assets/Icons/illustrator.png';
import figma from '../../assets/Icons/figma.png';
import indesign from '../../assets/Icons/indesign.png';
import canva from '../../assets/Icons/canva.png';
import vscode from '../../assets/Icons/vscode.png';
import ViteLogo from '../../assets/Icons/vite.png';

// Import Soft Skills Icons
import creativity from '../../assets/Icons/Soft/brain.png';
import gamer from '../../assets/Icons/Soft/gamer.png';
import mum from '../../assets/Icons/Soft/motherhood.png';
import music from '../../assets/Icons/Soft/woman.png';
import teamwork from '../../assets/Icons/Soft/motivation.png';

const PAPER_GRAIN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' strokeTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E")`;
const handwritten = { fontFamily: "'Caveat', cursive" };
const display = { fontFamily: "'Fraunces', ui-serif, Georgia, serif" };

interface SkillItem {
  name: string;
  icon: string;
}

interface SkillCategory {
  title: string;
  windowTitle: string;
  subtitle: string;
  accent: string;
  skills: SkillItem[];
}

interface SoftSkillItem {
  title: string;
  windowTitle: string;
  desc: string;
  accent: string;
  icon: string;
}

const HARD_SKILLS_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming Languages',
    windowTitle: 'Core_Languages.ts',
    subtitle: 'Le fondamenta logiche per costruire la struttura di ogni applicazione.',
    accent: '#B79FDB',
    skills: [
      { name: 'C', icon: c },
      { name: 'JavaScript', icon: javascript },
      { name: 'TypeScript', icon: typescript },
    ],
  },
  {
    title: 'Front-End Architecture',
    windowTitle: 'FrontEnd_UI.tsx',
    subtitle: 'Dove il design prende vita attraverso interfacce reattive e fluide.',
    accent: '#F5A6C6',
    skills: [
      { name: 'HTML5', icon: html },
      { name: 'CSS3', icon: css },
      { name: 'React', icon: reactIcon },
      { name: 'Vite', icon: ViteLogo },
      { name: 'Bootstrap', icon: boots },
      { name: 'Material UI', icon: MUILogo },
    ],
  },
  {
    title: 'Back-End & Cloud',
    windowTitle: 'Backend_Cloud.env',
    subtitle: 'La gestione dei dati e dei servizi dietro le quinte.',
    accent: '#9BD8B8',
    skills: [
      { name: 'Node.js', icon: node },
      { name: 'MongoDB', icon: mongoDb },
      { name: 'GitLab', icon: gitlab },
      { name: 'AWS', icon: aws },
    ],
  },
  {
    title: 'UX/UI & Design Tools',
    windowTitle: 'Design_System.fig',
    subtitle: 'Creare estetica, wireframe e identità visive curate nei minimi dettagli.',
    accent: '#8FC1E3',
    skills: [
      { name: 'Figma', icon: figma },
      { name: 'Photoshop', icon: photoshop },
      { name: 'Illustrator', icon: illustrator },
      { name: 'InDesign', icon: indesign },
      { name: 'Canva', icon: canva },
    ],
  },
  {
    title: 'Workflow & Dev Tools',
    windowTitle: 'Workflow_Env.json',
    subtitle: 'Gli strumenti quotidiani per ottimizzare il flusso di lavoro.',
    accent: '#FBEFA8',
    skills: [
      { name: 'VS Code', icon: vscode },
      { name: 'GitHub', icon: github },
      { name: 'Git', icon: git },
      { name: 'Docker', icon: docker },
      { name: 'Netlify', icon: netlify },
      { name: 'Word', icon: word },
      { name: 'PowerPoint', icon: powerP },
      { name: 'Excel', icon: excel },
    ],
  },
];

const SOFT_SKILLS: SoftSkillItem[] = [
  {
    title: 'Time Management & Organizzazione',
    windowTitle: 'Time_Management.md',
    desc: 'Gestire priorità complesse, scadenze serrate e imprevisti quotidiani con un’efficienza e una lucidità da project manager.',
    accent: '#F5A6C6',
    icon: mum,
  },
  {
    title: 'Lavoro di Squadra & Empatia',
    windowTitle: 'Teamwork.config',
    desc: 'Collaborare fianco a fianco con gli altri, comunicando in modo chiaro e unendo le idee per remare dritti verso un obiettivo comune.',
    accent: '#9BD8B8',
    icon: teamwork,
  },
  {
    title: 'Creatività & Visione UX',
    windowTitle: 'UX_Vision.sketch',
    desc: 'Dare forma a idee e interfacce attraverso il design e la contaminazione tra linguaggi visivi, mettendo sempre l’utente al centro.',
    accent: '#B79FDB',
    icon: creativity,
  },
  {
    title: 'Gaming Mindset & Resilienza',
    windowTitle: 'Gaming_Mindset.log',
    desc: 'Studio le meccaniche, analizzo i problemi complessi e trasformo ogni bug o blocco in un livello da superare per crescere e migliorare.',
    accent: '#8FC1E3',
    icon: gamer,
  },
  {
    title: 'Focus & Continuous Learning',
    windowTitle: 'Continuous_Learning.ts',
    desc: 'La giusta concentrazione e la costante curiosità di esplorare nuovi strumenti, linguaggi e metodologie per non fermarsi mai.',
    accent: '#FBEFA8',
    icon: music,
  },
];

// ── 🗂️ COMPONENTE CARD / EDITOR WINDOW ───────────────────────

function SkillCard({
  windowTitle,
  title,
  subtitle,
  accent,
  icon,
  skills,
  index,
}: {
  windowTitle: string;
  title: string;
  subtitle?: string;
  accent: string;
  icon?: string;
  skills?: SkillItem[];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [activeTool, setActiveTool] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [2, -2]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-2, 2]), {
    stiffness: 300,
    damping: 30,
  });
  const liftY = useSpring(hovered ? -4 : 0, { stiffness: 320, damping: 25 });

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
      initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="relative w-full h-full"
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
        <div
          style={{
            backgroundColor: '#16141F',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: '0 20px 40px -20px rgba(0,0,0,0.5)',
          }}
          className="w-full h-full rounded-2xl flex flex-col justify-between relative overflow-hidden group transition-all duration-300 hover:border-white/20"
        >
          {/* Grana carta finissima */}
          <div
            className="absolute inset-0 pointer-events-none opacity-30"
            style={{ backgroundImage: PAPER_GRAIN, backgroundSize: '200px 200px' }}
            aria-hidden="true"
          />

          {/* Barra Tab / Editor Header */}
          <div
            className="px-4 py-3 flex items-center justify-between select-none relative z-10"
            style={{ backgroundColor: '#100E17', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
          >
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: accent }} />
              <span className="text-xs font-mono tracking-wide truncate max-w-55 text-zinc-300">
                {activeTool ? `src/skills/${activeTool.toLowerCase()}` : windowTitle}
              </span>
            </div>
            <div className="flex items-center gap-1.5 opacity-40 group-hover:opacity-80 transition-opacity">
              <div className="w-2 h-2 rounded-full bg-white/30" />
              <div className="w-2 h-2 rounded-full bg-white/30" />
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: accent }} />
            </div>
          </div>

          {/* Contenitore interno con spaziature generose (whitespace curato) */}
          <div className="p-7 flex flex-col justify-between grow relative z-10 space-y-6">
            {icon && (
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center p-2.5 shadow-inner"
                style={{
                  backgroundColor: '#100E17',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <img src={icon} alt={title} className="w-full h-full object-contain filter brightness-110" />
              </div>
            )}

            <div className="space-y-2.5">
              <h4 className="text-xl font-medium tracking-tight text-white" style={{ ...display }}>
                {title}
              </h4>
              {subtitle && (
                <p className="text-sm leading-relaxed text-zinc-400 font-sans">
                  {subtitle}
                </p>
              )}
            </div>

            {skills && (
              <div className="grid grid-cols-4 gap-3 pt-2">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    title={skill.name}
                    onMouseEnter={() => setActiveTool(skill.name)}
                    onMouseLeave={() => setActiveTool(null)}
                    className="flex flex-col items-center justify-center p-3 rounded-xl transition-all duration-200 group/item cursor-pointer shadow-sm hover:bg-white/5 hover:border-white/10"
                    style={{
                      backgroundColor: '#100E17',
                      border: '1px solid rgba(255,255,255,0.04)',
                    }}
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-7 h-7 object-contain filter drop-shadow group-hover/item:scale-110 transition-transform duration-200"
                    />
                    <span className="text-[10px] font-mono mt-2 truncate max-w-full text-zinc-400 group-hover/item:text-zinc-200">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer Card Minimal */}
          <div
            className="px-7 py-3.5 relative z-10 flex items-center justify-between text-xs font-sans"
            style={{ backgroundColor: '#100E17', borderTop: '1px solid rgba(255,255,255,0.05)', color: '#8A8371' }}
          >
            <span className="font-mono text-[11px] text-zinc-500">status: verified</span>
            <span className="font-mono text-[10px] uppercase tracking-wider" style={{ color: accent }}>
              &lt;/&gt; production
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── 🧩 SEZIONE PRINCIPALE SKILLS ──────────────────────────────

export default function SkillsSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="skills" className="relative w-full bg-[#0B0910] py-32 px-4 sm:px-8 lg:px-16 overflow-hidden z-10 text-neutral-100">
      {/* Sfondo Atmosferico con Glow soffuso */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-125 w-200 rounded-full blur-[160px] opacity-20"
        style={{ backgroundColor: '#B79FDB' }}
      />

      <div className="max-w-7xl mx-auto space-y-24 relative z-10">
        
        {/* Header Introduttivo in stile editoriale */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl tracking-wide"
            style={{ ...handwritten, color: '#B79FDB' }}
          >
            cassetta degli attrezzi ✦
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white leading-tight"
            style={{ ...display }}
          >
            Strumenti &amp; Metodo
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg leading-relaxed text-zinc-400 font-sans"
          >
            Un ecosistema tecnico e creativo strutturato per trasformare idee complesse in interfacce fluide e funzionali.
          </motion.p>
        </div>

        {/* ── HARD SKILLS ────────────────────────────────────── */}
        <div className="space-y-10">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <h3 className="text-xs sm:text-sm font-mono tracking-widest uppercase flex items-center gap-2.5 text-[#B79FDB]">
              <span className="w-2 h-2 rounded-full bg-[#B79FDB]" /> Hard Skills / Tech Stack &amp; Design
            </h3>
            <span className="font-mono text-xs text-zinc-500">01 // engineering</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {HARD_SKILLS_CATEGORIES.map((cat, idx) => (
              <SkillCard
                key={cat.title}
                index={idx}
                windowTitle={cat.windowTitle}
                title={cat.title}
                subtitle={cat.subtitle}
                accent={cat.accent}
                skills={cat.skills}
              />
            ))}
          </div>
        </div>

        {/* ── SOFT SKILLS ────────────────────────────────────── */}
        <div className="space-y-10 pt-8">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <h3 className="text-xs sm:text-sm font-mono tracking-widest uppercase flex items-center gap-2.5 text-[#F5A6C6]">
              <span className="w-2 h-2 rounded-full bg-[#F5A6C6]" /> Soft Skills / Mindset &amp; Values
            </h3>
            <span className="font-mono text-xs text-zinc-500">02 // human approach</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {SOFT_SKILLS.map((soft, idx) => (
              <SkillCard
                key={soft.title}
                index={idx}
                windowTitle={soft.windowTitle}
                title={soft.title}
                subtitle={soft.desc}
                accent={soft.accent}
                icon={soft.icon}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}