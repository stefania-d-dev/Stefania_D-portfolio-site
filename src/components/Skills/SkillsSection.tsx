'use client';

import React, { useRef } from 'react';
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

const NOISE_PATTERN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' strokeTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='0.025'/%3E%3C/svg%3E")`;

interface SkillItem {
  name: string;
  icon: string;
}

interface SkillCategory {
  title: string;
  accent: string;
  skills: SkillItem[];
}

const HARD_SKILLS_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming Languages',
    accent: '#22d3ee',
    skills: [
      { name: 'C', icon: c },
      { name: 'JavaScript', icon: javascript },
      { name: 'TypeScript', icon: typescript },
    ],
  },
  {
    title: 'Front-End',
    accent: '#38bdf8',
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
    title: 'Back-End (Beginner)',
    accent: '#a855f7',
    skills: [
      { name: 'Node.js', icon: node },
      { name: 'MongoDB', icon: mongoDb },
      { name: 'GitLab', icon: gitlab },
      { name: 'AWS', icon: aws },
    ],
  },
  {
    title: 'Design & Graphics',
    accent: '#ec4899',
    skills: [
      { name: 'Figma', icon: figma },
      { name: 'Photoshop', icon: photoshop },
      { name: 'Illustrator', icon: illustrator },
      { name: 'InDesign', icon: indesign },
      { name: 'Canva', icon: canva },
    ],
  },
  {
    title: 'Other Tools & Workflow',
    accent: '#facc15',
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

const SOFT_SKILLS = [
  {
    title: 'Time Management & Organizzazione',
    desc: 'Gestire priorità complesse, scadenze serrate e imprevisti quotidiani con un’efficienza e una lucidità da project manager.',
    icon: mum,
    tapeColor: 'rgba(251, 191, 36, 0.35)',
    rotation: 'rotate-[-1deg]',
  },
  {
    title: 'Lavoro di Squadra & Empatia',
    desc: 'Collaborare fianco a fianco con gli altri, comunicando in modo chiaro e unendo le idee per remare dritti verso un obiettivo comune.',
    icon: teamwork,
    tapeColor: 'rgba(34, 211, 238, 0.35)',
    rotation: 'rotate-[1deg]',
  },
  {
    title: 'Creatività & Visione UX',
    desc: 'Dare forma a idee e interfacce attraverso il design e la contaminazione tra linguaggi visivi, mettendo sempre l’utente al centro.',
    icon: creativity,
    tapeColor: 'rgba(236, 72, 153, 0.35)',
    rotation: 'rotate-[-0.5deg]',
  },
  {
    title: 'Gaming Mindset & Resilienza',
    desc: 'Studio le meccaniche, analizzo i problemi complessi e trasformo ogni bug o blocco in un livello da superare per crescere e migliorare.',
    icon: gamer,
    tapeColor: 'rgba(168, 85, 247, 0.35)',
    rotation: 'rotate-[1.2deg]',
  },
  {
    title: 'Focus & Continuous Learning',
    desc: 'La giusta concentrazione e la costante curiosità di esplorare nuovi strumenti, linguaggi e metodologie per non fermarsi mai.',
    icon: music,
    tapeColor: 'rgba(56, 189, 248, 0.35)',
    rotation: 'rotate-[-1.5deg]',
  },
];

// Nastro adesivo decorativo superiore
const TapeHeader = ({ color = 'rgba(34,211,238,0.35)' }: { color?: string }) => (
  <div
    className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-28 h-6 z-20 pointer-events-none backdrop-blur-[1px]"
    style={{
      backgroundColor: color,
      clipPath: 'polygon(0% 15%, 4% 0%, 96% 0%, 100% 12%, 98% 88%, 94% 100%, 5% 100%, 0% 85%)',
    }}
  >
    <div className="w-full h-1/2 bg-white/10" />
  </div>
);

export default function SkillsSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative w-full bg-[#060509] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden z-10">
      {/* Noise overlay di fondo */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{ backgroundImage: NOISE_PATTERN, backgroundSize: '300px 300px' }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto space-y-20 relative z-10">
        
        {/* ── SEZIONE HARD SKILLS ──────────────────────────────── */}
        <div className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="font-mono text-xs tracking-widest uppercase text-cyan-400 font-semibold">
              ✦ HARD SKILLS &amp; TOOLKIT ✦
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Strumenti &amp; Tecnologie
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base">
              Il mio stack operativo quotidiano, dal codice pulito ai software di grafica e design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {HARD_SKILLS_CATEGORIES.map((cat, idx) => (
              <motion.div
                key={cat.title}
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="relative bg-[#0e0d13] border border-white/10 p-6 shadow-xl flex flex-col justify-between group hover:border-white/20 transition-all duration-300"
                style={{
                  clipPath: 'polygon(0.4% 0.5%, 99.6% 0.2%, 99.2% 99.5%, 0.5% 99.1%)',
                }}
              >
                <TapeHeader color={cat.accent + '55'} />

                <div>
                  <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-5">
                    <h3 className="text-base font-bold text-white tracking-wide flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: cat.accent }} />
                      {cat.title}
                    </h3>
                    <span className="font-mono text-[10px] text-zinc-600">0{idx + 1}</span>
                  </div>

                  <div className="grid grid-cols-4 sm:grid-cols-5 gap-3 pt-2">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        title={skill.name}
                        className="relative flex flex-col items-center justify-center p-2 rounded-lg bg-zinc-900/80 border border-zinc-800/80 hover:border-cyan-500/50 hover:bg-zinc-800/80 transition-all group/item cursor-pointer"
                      >
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-8 h-8 object-contain filter drop-shadow group-hover/item:scale-110 transition-transform duration-200"
                        />
                        <span className="absolute -bottom-7 opacity-0 group-hover/item:opacity-100 transition-opacity bg-zinc-950 text-cyan-300 text-[10px] font-mono px-1.5 py-0.5 rounded border border-zinc-800 pointer-events-none whitespace-nowrap z-30 shadow-md">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-3 border-t border-dashed border-zinc-800/80 flex justify-between items-center text-[10px] font-mono text-zinc-600">
                  <span>verified stack</span>
                  <span className="text-cyan-400/60">&lt;/&gt;</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── SEZIONE SOFT SKILLS & HOBBIES ───────────────────── */}
        <div className="space-y-10 pt-10 border-t border-zinc-800/60">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="font-mono text-xs tracking-widest uppercase text-pink-400 font-semibold">
              ✦ MINDSET &amp; PASSIONS ✦
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Soft Skills &amp; Hobbies
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base">
              Ciò che alimenta la mia curiosità, la mia empatia e il mio approccio creativo alla risoluzione dei problemi.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SOFT_SKILLS.map((soft, idx) => (
              <motion.div
                key={soft.title}
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`relative bg-[#0e0d13] border border-white/10 p-6 sm:p-7 shadow-xl flex flex-col justify-between transition-transform hover:scale-[1.02] duration-300 ${soft.rotation}`}
                style={{
                  clipPath: 'polygon(0.5% 0.3%, 99.6% 0.6%, 98.9% 99.6%, 0.2% 99.2%)',
                }}
              >
                <TapeHeader color={soft.tapeColor} />

                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900/90 border border-zinc-800 flex items-center justify-center p-2.5 shadow-inner">
                    <img src={soft.icon} alt={soft.title} className="w-full h-full object-contain filter brightness-90" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                      {soft.title}
                    </h3>
                    <p className="text-zinc-300 text-sm leading-relaxed font-sans">
                      {soft.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-dashed border-zinc-800/80 flex justify-between items-center text-[10px] font-mono text-zinc-600">
                  <span>life &amp; growth</span>
                  <span className="text-pink-400/70">♡</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}