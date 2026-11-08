'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { Sparkle, TerminalWindow } from '@phosphor-icons/react';

const PAPER_GRAIN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E")`;
const handwritten = { fontFamily: "'Caveat', cursive" };
const display = { fontFamily: "'Fraunces', ui-serif, Georgia, serif" };

export default function Footer() {
  const handleOpenCookiePreferences = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new Event('reset-cookie-preferences'));
  };

  return (
    <footer className="relative w-full bg-[#0B0910] pt-24 pb-16 px-4 sm:px-8 lg:px-16 overflow-hidden z-20 border-t border-white/10 text-neutral-100">
      
      {/* Sfondo Atmosferico con Glow soffuso */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 bottom-0 -translate-x-1/2 h-100 w-175 rounded-full blur-[160px] opacity-15"
        style={{ backgroundColor: '#B79FDB' }}
      />

      {/* Grid Texture & Noise */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{ backgroundImage: PAPER_GRAIN, backgroundSize: '200px 200px' }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto relative z-10 space-y-16">
        
        {/* Call to Action Card (Stile Workspace / Editor) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative bg-[#16141F] border border-white/10 rounded-2xl p-8 sm:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden group"
        >
          {/* Barra Tab / Editor Header */}
          <div className="absolute top-0 left-0 right-0 px-4 py-2.5 bg-[#100E17] border-b border-white/10 flex items-center justify-between select-none">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#B79FDB]" />
              <span className="text-xs font-mono tracking-wide text-zinc-300">src/contact/hire_me.tsx</span>
            </div>
            <div className="flex items-center gap-1.5 opacity-40">
              <div className="w-2 h-2 rounded-full bg-white/30" />
              <div className="w-2 h-2 rounded-full bg-white/30" />
              <div className="w-2 h-2 rounded-full bg-[#B79FDB]" />
            </div>
          </div>

          {/* Contenuto Testuale */}
          <div className="space-y-4 pt-4 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#100E17] border border-white/10 text-[#B79FDB] font-mono text-xs tracking-wider">
              <Sparkle size={13} weight="fill" /> PRONTA PER LA PROSSIMA SFIDA
            </div>

            <h3 className="text-3xl sm:text-4xl font-medium text-white tracking-tight leading-tight" style={display}>
              Costruiamo qualcosa di unico insieme?
            </h3>

            <p className="text-zinc-400 text-sm sm:text-base max-w-lg leading-relaxed font-sans">
              Che tu sia un recruiter, un founder o un developer, se cerchi precisione nel codice, metodo organizzativo e cura sartoriale del design, parliamone. Un caffè virtuale non si rifiuta mai! ☕
            </p>
          </div>

          {/* Azioni rapide di contatto */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto shrink-0 pt-4 md:pt-0">
            <a
              href="https://wa.me/+393247860089"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex items-center gap-2.5 px-6 py-4 rounded-xl bg-[#100E17] border border-white/10 text-zinc-200 hover:text-white hover:border-white/30 transition-all shadow-inner w-full sm:w-auto justify-center group/btn cursor-pointer"
            >
              <FaWhatsapp size={18} className="text-[#9BD8B8] group-hover/btn:scale-110 transition-transform" />
              <span className="font-mono text-xs font-bold tracking-wide uppercase">WhatsApp</span>
            </a>

            <a
              href="mailto:stefania.devgdi@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              className="flex items-center gap-2.5 px-6 py-4 rounded-xl bg-[#100E17] border border-white/10 text-zinc-200 hover:text-white hover:border-white/30 transition-all shadow-inner w-full sm:w-auto justify-center group/btn cursor-pointer"
            >
              <FaEnvelope size={16} className="text-[#B79FDB] group-hover/btn:scale-110 transition-transform" />
              <span className="font-mono text-xs font-bold tracking-wide uppercase">Email</span>
            </a>
          </div>
        </motion.div>

        {/* Riga inferiore: Copyright, Preferenze Cookie & Social */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-zinc-500">
          <p>© {new Date().getFullYear()} Stefania Deliso • Front-End Developer &amp; UI/UX Designer</p>

          <div className="flex items-center gap-8">
            <button
              onClick={handleOpenCookiePreferences}
              className="hover:text-white transition-colors bg-transparent border-none cursor-pointer p-0 text-xs font-mono text-zinc-500"
            >
              Preferenze Cookie
            </button>

            <div className="flex items-center gap-5 text-zinc-400">
              <a
                href="https://www.linkedin.com/in/stefania-deliso-developer/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-white transition-colors p-1"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="https://github.com/stefania-d-dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-white transition-colors p-1"
              >
                <FaGithub size={18} />
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}