import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { ListIcon, XIcon, GithubLogoIcon, LinkedinLogoIcon, SparkleIcon } from '@phosphor-icons/react';

import logo from '../../assets/Background/FE logo.png';

const NAV_ITEMS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#portfolio', label: 'Works', isWip: true },
  { href: '#contact', label: 'Contact' },
];

// 🎨 DOODLE UNDERLINE ANIMATO (Colore Celeste Logo: #90C2FF)
const AnimatedDoodle = () => (
  <svg
    viewBox="0 0 100 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-auto text-[#90C2FF] absolute -bottom-1.5 left-0 pointer-events-none drop-shadow-[0_0_8px_rgba(144,194,255,0.4)]"
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

// ✏️ SCRABOCCHIO DI SBARRAMENTO SOPRA "WORKS"
const StrikeThroughDoodle = () => (
  <svg
    viewBox="0 0 120 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute inset-0 w-full h-full text-cyan-400 pointer-events-none z-20 overflow-visible opacity-90"
  >
    <motion.path
      d="M 5,20 C 30,5 70,25 115,8 M 15,12 C 50,28 85,2 110,18"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    />
  </svg>
);

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState('#home');

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* ── LOGO ── */}
        <a 
          href="#home" 
          onClick={() => {
            setIsMenuOpen(false);
            setActiveSection('#home');
          }}
          className="flex items-center gap-3 group focus:outline-none z-50"
        >
          <img 
            src={logo} 
            alt="Stefania Deliso Logo" 
            className="h-8 md:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
          />
        </a>

        {/* ── DESKTOP NAVIGATION ── */}
        <nav className="hidden md:flex items-center gap-1">
          <motion.div 
            animate={{ 
              backgroundColor: isScrolled ? 'rgba(18, 18, 20, 0.85)' : 'rgba(255, 255, 255, 0.03)',
              borderColor: isScrolled ? 'rgba(255, 255, 255, 0.12)' : 'rgba(255, 255, 255, 0.06)',
              boxShadow: isScrolled ? '0 10px 30px -10px rgba(0, 0, 0, 0.5)' : 'none',
            }}
            className="px-4 py-2 rounded-full border backdrop-blur-md transition-all duration-300 flex items-center gap-2"
          >
            {NAV_ITEMS.map((item, index) => {
              const isActive = activeSection === item.href;

              // Se è la voce WIP (Works), non è cliccabile e ha lo scarabocchio sopra
              if (item.isWip) {
                return (
                  <div
                    key={item.label}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="relative px-3.5 py-1.5 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-zinc-600 cursor-not-allowed select-none group/wip"
                  >
                    {/* Testo barrato / oscurato */}
                    <span className="relative z-10 line-through decoration-cyan-500/50 text-zinc-500">
                      {item.label}
                    </span>
                    
                    {/* Badge WIP Hype */}
                    <span className="relative z-10 inline-flex items-center gap-1 bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 px-2 py-0.5 rounded-full text-[9px] font-mono tracking-wider shadow-[0_0_8px_rgba(34,211,238,0.15)]">
                      <SparkleIcon size={9} weight="fill" className="animate-pulse" /> WIP
                    </span>

                    {/* Scarabocchio/doodle animato sopra la scritta al passaggio del mouse */}
                    <AnimatePresence>
                      {hoveredIndex === index && <StrikeThroughDoodle />}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setActiveSection(item.href)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`relative px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider transition-colors duration-200 ${
                    isActive ? 'text-white font-semibold' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>

                  {/* Indicatore di sezione attiva (pallino celeste) */}
                  {isActive && (
                    <motion.span
                      layoutId="activeDot"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#90C2FF] rounded-full shadow-[0_0_6px_#90C2FF]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}

                  {/* Doodle disegnato a mano al passaggio del mouse */}
                  <AnimatePresence>
                    {hoveredIndex === index && <AnimatedDoodle />}
                  </AnimatePresence>
                </a>
              );
            })}

            <div className="w-px h-4 bg-zinc-800 mx-2" />

            {/* Social Links con hover azzurro logo */}
            <div className="flex items-center gap-1">
              <a 
                href="https://github.com/stefania-d-dev" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-zinc-400 hover:text-[#90C2FF] transition-colors duration-200"
                aria-label="GitHub Profile"
              >
                <GithubLogoIcon size={18} weight="regular" />
              </a>
              <a 
                href="https://www.linkedin.com/in/stefania-deliso-developer/" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-zinc-400 hover:text-[#90C2FF] transition-colors duration-200"
                aria-label="LinkedIn Profile"
              >
                <LinkedinLogoIcon size={18} weight="regular" />
              </a>
            </div>
          </motion.div>
        </nav>

        {/* ── MOBILE TOGGLE BUTTON ── */}
        <div className="md:hidden z-50">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-200 hover:text-white focus:outline-none"
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
            className="fixed inset-x-4 top-20 bg-zinc-950/95 border border-zinc-800/80 rounded-2xl backdrop-blur-2xl p-6 z-40 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => {
                if (item.isWip) {
                  return (
                    <div
                      key={item.label}
                      className="text-sm uppercase tracking-widest py-2 flex items-center justify-between text-zinc-600 cursor-not-allowed select-none"
                    >
                      <span className="line-through decoration-cyan-500/50 text-zinc-500">{item.label}</span>
                      <span className="inline-flex items-center gap-1 bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 px-2 py-0.5 rounded-full text-[9px] font-mono tracking-wider shadow-[0_0_8px_rgba(34,211,238,0.15)]">
                        ✦ WIP
                      </span>
                    </div>
                  );
                }

                const isActive = activeSection === item.href;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => {
                      setIsMenuOpen(false);
                      setActiveSection(item.href);
                    }}
                    className={`relative text-sm uppercase tracking-widest py-2 flex items-center justify-between transition-colors ${
                      isActive ? 'text-[#90C2FF] font-semibold' : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    <span>{item.label}</span>
                  </a>
                );
              })}

              <div className="h-px bg-zinc-800/80 my-2" />

              <div className="flex items-center gap-4 text-zinc-400 pt-1">
                <a 
                  href="https://github.com/stefania-d-dev" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs uppercase tracking-wider hover:text-[#90C2FF] transition-colors"
                >
                  <GithubLogoIcon size={18} />
                  GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/stefania-deliso-developer/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs uppercase tracking-wider hover:text-[#90C2FF] transition-colors"
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