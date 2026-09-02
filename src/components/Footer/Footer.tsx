'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const NOISE_PATTERN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' strokeTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='0.025'/%3E%3C/svg%3E")`;

export default function Footer() {
  const handleOpenCookiePreferences = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new Event('reset-cookie-preferences'));
  };

  return (
    <footer className="relative w-full bg-[#040307] pt-16 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden z-20 border-t border-zinc-800/80">
      {/* Sfumatura di raccordo */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-linear-to-b from-[#060509] to-transparent pointer-events-none" />

      {/* Noise overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{ backgroundImage: NOISE_PATTERN, backgroundSize: '300px 300px' }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Card stile memo strategico */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative bg-[#0e0d13] border border-white/10 p-8 sm:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8"
          style={{
            clipPath: 'polygon(0.3% 0.5%, 99.7% 0.2%, 99.4% 99.5%, 0.6% 99.1%)',
          }}
        >
          {/* Nastro adesivo superiore */}
          <div
            className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-32 h-6 z-20 pointer-events-none backdrop-blur-[1px]"
            style={{
              backgroundColor: 'rgba(34, 211, 238, 0.35)',
              clipPath: 'polygon(0% 15%, 4% 0%, 96% 0%, 100% 12%, 98% 88%, 94% 100%, 5% 100%, 0% 85%)',
            }}
          >
            <div className="w-full h-1/2 bg-white/10" />
          </div>

          {/* Testo strategico con focus sul valore */}
          <div className="space-y-3 text-center md:text-left">
            <span className="font-mono text-xs tracking-widest uppercase text-cyan-400 font-semibold">
              ✦ PRONTA PER LA PROSSIMA SFIDA ✦
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Costruiamo qualcosa di unico insieme?
            </h3>
            <p className="text-zinc-300 text-sm max-w-lg leading-relaxed">
              Che tu sia un recruiter, un founder o un developer, se cerchi precisione nel codice, metodo organizzativo e tanta voglia di fare, parliamone. Un caffè virtuale non si rifiuta mai! ☕
            </p>
          </div>

          {/* Azioni rapide di contatto */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto shrink-0">
            <a
              href="https://wa.me/+393247860089"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-zinc-100 hover:text-cyan-300 hover:border-cyan-500/50 hover:bg-zinc-800/90 transition-all shadow-inner w-full sm:w-auto justify-center group"
            >
              <FaWhatsapp size={20} className="text-emerald-400 group-hover:scale-110 transition-transform" />
              <span className="font-mono text-xs font-bold tracking-wide">Scrivimi su WhatsApp</span>
            </a>

            <a
              href="mailto:stefania.devgdi@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-zinc-100 hover:text-cyan-300 hover:border-cyan-500/50 hover:bg-zinc-800/90 transition-all shadow-inner w-full sm:w-auto justify-center group"
            >
              <FaEnvelope size={18} className="text-cyan-400 group-hover:scale-110 transition-transform" />
              <span className="font-mono text-xs font-bold tracking-wide">Mandami un'Email</span>
            </a>
          </div>
        </motion.div>

        {/* Riga inferiore: Social, Copyright & Cookie Preferences */}
        <div className="mt-12 pt-6 border-t border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <p>© {new Date().getFullYear()} Stefania Deliso • Front-End Developer &amp; Designer</p>

          <div className="flex items-center gap-6">
            {/* Pulsante Preferenze Cookie */}
            <button
              onClick={handleOpenCookiePreferences}
              className="hover:text-cyan-400 transition-colors bg-transparent border-none cursor-pointer p-0 text-xs font-mono text-zinc-500"
            >
              Preferenze Cookie
            </button>

            <div className="flex items-center gap-5">
              <a
                href="https://www.linkedin.com/in/stefania-deliso-developer/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-cyan-400 transition-colors p-1"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://github.com/stefania-d-dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-cyan-400 transition-colors p-1"
              >
                <FaGithub size={20} />
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}