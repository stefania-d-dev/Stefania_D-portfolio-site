'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ListIcon, XIcon, GithubLogoIcon, LinkedinLogoIcon, TwitchLogo } from '@phosphor-icons/react';

import logo from '../../assets/Background/FE logo.png';

const NAV_ITEMS = [
  { href: '/#home', label: 'Home', isAnchor: true },
  { href: '/#about', label: 'About', isAnchor: true },
  { href: '/#skills', label: 'Skills', isAnchor: true },
  { href: '/#portfolio', label: 'Works', isAnchor: true },
  { href: '/twitch', label: 'Twitch', isAnchor: false },
  { href: '/#contact', label: 'Contact', isAnchor: true },
];

// 🎨 DOODLE UNDERLINE ANIMATO (Colore Lilla Logo: #B79FDB)
const AnimatedDoodle = () => (
  <svg
    viewBox="0 0 100 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-auto text-[#B79FDB] absolute -bottom-1.5 left-0 pointer-events-none drop-shadow-[0_0_8px_rgba(183,159,219,0.4)]"
  >
    <motion.path
      d="M 2,12 Q 30,3 98,13 Q 50,18 10,15"
      stroke="currentColor"
      strokeWidth="2.8"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      exit={{ pathLength: 0, opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    />
  </svg>
);

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState('#home');
  const location = useLocation();

  return (
    <header className="sticky top-0 left-0 w-full z-50 px-6 md:px-12 py-5 bg-[#1E2022]/85 backdrop-blur-md border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* ── LOGO ── */}
        <Link 
          to="/" 
          onClick={() => {
            setIsMenuOpen(false);
            setActiveSection('#home');
          }}
          className="flex items-center gap-3 group focus:outline-none z-50 py-1"
        >
          <img 
            src={logo} 
            alt="Stefania Deliso Logo" 
            className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-md" 
          />
        </Link>

        {/* ── DESKTOP NAVIGATION ── */}
        <nav className="hidden md:flex items-center gap-1">
          <div className="px-4 py-2 rounded-full border border-white/10 bg-[#25282C]/60 backdrop-blur-xl flex items-center gap-1.5 shadow-lg">
            {NAV_ITEMS.map((item, index) => {
              const isActive = activeSection === item.href || (item.href === '/twitch' && location.pathname === '/twitch');

              return (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => {
                    if (item.isAnchor) {
                      setActiveSection(item.href);
                    }
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`relative px-3.5 py-1.5 text-xs sm:text-sm font-medium uppercase tracking-wider transition-colors duration-200 flex items-center gap-1.5 ${
                    isActive ? 'text-white font-bold' : 'text-[#A0A8B0] hover:text-white'
                  }`}
                >
                  {item.label === 'Twitch' && <TwitchLogo size={14} weight="fill" className="text-[#9B51E0]" />}
                  <span className="relative z-10">{item.label}</span>

                  {/* Indicatore di sezione attiva (pallino lilla luminoso) */}
                  {isActive && (
                    <motion.span
                      layoutId="activeDot"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#B79FDB] rounded-full shadow-[0_0_8px_#B79FDB]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}

                  {/* Doodle disegnato a mano al passaggio del mouse */}
                  <AnimatePresence>
                    {hoveredIndex === index && <AnimatedDoodle />}
                  </AnimatePresence>
                </Link>
              );
            })}

            <div className="w-px h-3.5 bg-white/10 mx-1.5" />

            {/* Social Links con hover lilla */}
            <div className="flex items-center gap-1">
              <a 
                href="https://github.com/stefania-d-dev" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-[#A0A8B0] hover:text-[#B79FDB] transition-colors duration-200"
                aria-label="GitHub Profile"
              >
                <GithubLogoIcon size={16} weight="regular" />
              </a>
              <a 
                href="https://www.linkedin.com/in/stefania-deliso-developer/" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-[#A0A8B0] hover:text-[#B79FDB] transition-colors duration-200"
                aria-label="LinkedIn Profile"
              >
                <LinkedinLogoIcon size={16} weight="regular" />
              </a>
            </div>
          </div>
        </nav>

        {/* ── MOBILE TOGGLE BUTTON ── */}
        <div className="md:hidden z-50">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2.5 rounded-xl bg-[#25282C] border border-white/10 text-white hover:text-[#B79FDB] focus:outline-none shadow-md backdrop-blur-md"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <XIcon size={22} /> : <ListIcon size={22} />}
          </button>
        </div>

      </div>

      {/* ── MOBILE OVERLAY MENU ── */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-4 top-20 bg-[#25282C]/98 border border-white/15 rounded-2xl backdrop-blur-2xl p-6 z-40 md:hidden shadow-2xl shadow-black/50"
          >
            <div className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href || (item.href === '/twitch' && location.pathname === '/twitch');
                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => {
                      setIsMenuOpen(false);
                      if (item.isAnchor) setActiveSection(item.href);
                    }}
                    className={`relative text-sm uppercase tracking-widest py-2 flex items-center justify-between transition-colors ${
                      isActive ? 'text-[#B79FDB] font-bold' : 'text-[#A0A8B0] hover:text-white'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {item.label === 'Twitch' && <TwitchLogo size={16} weight="fill" className="text-[#9B51E0]" />}
                      {item.label}
                    </span>
                  </Link>
                );
              })}

              <div className="h-px bg-white/10 my-2" />

              <div className="flex items-center gap-4 text-[#A0A8B0] pt-1">
                <a 
                  href="https://github.com/stefania-d-dev" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs uppercase tracking-wider hover:text-[#B79FDB] transition-colors"
                >
                  <GithubLogoIcon size={18} />
                  GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/stefania-deliso-developer/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs uppercase tracking-wider hover:text-[#B79FDB] transition-colors"
                >
                  <LinkedinLogoIcon size={18} />
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}