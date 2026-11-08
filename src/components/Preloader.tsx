import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoSrc from '../assets/Background/FE logo.png';

interface PreloaderProps {
  onLoadingComplete?: () => void;
}

const EASE_SMOOTH: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Palette pastello coerente col logo
const decorations = [
  { emoji: '✦', top: '18%', left: '12%', size: 22, delay: 0.3, color: '#F6C555' },
  { emoji: '✿', top: '15%', left: '78%', size: 20, delay: 0.45, color: '#B79FDB' },
  { emoji: '♥', top: '70%', left: '20%', size: 18, delay: 0.6, color: '#F5A6C6' },
  { emoji: '✦', top: '75%', left: '82%', size: 16, delay: 0.5, color: '#9BD8B8' },
  { emoji: '✿', top: '58%', left: '6%', size: 14, delay: 0.7, color: '#8FC1E3' },
  { emoji: '✦', top: '25%', left: '92%', size: 18, delay: 0.4, color: '#F6C555' },
  { emoji: '●', top: '85%', left: '55%', size: 10, delay: 0.8, color: '#F5A6C6' },
  { emoji: '●', top: '10%', left: '45%', size: 8, delay: 0.65, color: '#9BD8B8' },
];

export const Preloader: React.FC<PreloaderProps> = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const totalTimer = setTimeout(() => {
      setIsFading(true);
      const removeTimer = setTimeout(() => {
        setIsLoading(false);
        onLoadingComplete?.();
      }, 800);
      return () => clearTimeout(removeTimer);
    }, 2600);

    return () => clearTimeout(totalTimer);
  }, [onLoadingComplete]);

  if (!isLoading) return null;

  return (
    <AnimatePresence>
      {!isFading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.8, ease: EASE_SMOOTH }}
          className="fixed inset-0 z-50 flex items-center justify-center pointer-events-auto overflow-hidden"
          style={{ backgroundColor: '#1E2022' }} // Sfondo scuro riposante per gli occhi (stile editor di codice)
        >
          {/* Glow soffuso di sfondo per dare profondità */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: EASE_SMOOTH }}
            style={{
              background:
                'radial-gradient(circle at 50% 50%, rgba(183,159,219,0.15) 0%, rgba(143,193,227,0.08) 45%, transparent 70%)',
            }}
          />

          {/* Decorazioni fluttuanti */}
          {decorations.map((d, i) => (
            <motion.span
              key={i}
              className="absolute select-none"
              style={{
                top: d.top,
                left: d.left,
                fontSize: d.size,
                color: d.color,
              }}
              initial={{ opacity: 0, scale: 0, rotate: -20 }}
              animate={{
                opacity: [0, 1, 1, 0.85],
                scale: [0, 1.2, 1, 1],
                rotate: [-20, 8, 0, 0],
                y: [0, -6, 0, -4],
              }}
              transition={{
                duration: 2.2,
                delay: d.delay,
                ease: EASE_SMOOTH,
                y: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                  delay: d.delay + 1,
                },
              }}
            >
              {d.emoji}
            </motion.span>
          ))}

          {/* Logo con reveal a maschera + bounce */}
          <div className="relative flex items-center justify-center px-10">
            <motion.div
              className="relative overflow-hidden"
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              animate={{ clipPath: 'inset(0 0% 0 0)' }}
              transition={{ duration: 1.1, delay: 0.15, ease: EASE_SMOOTH }}
            >
              <motion.img
                src={logoSrc}
                alt="Stefania Deliso"
                className="h-auto select-none"
                style={{
                  width: 'clamp(220px, min(50vw, 60vh), 800px)',
                }}
                draggable={false}
                initial={{ scale: 1.08, opacity: 0.9 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 1.1,
                  delay: 0.15,
                  ease: EASE_SMOOTH,
                }}
              />
            </motion.div>

            {/* Piccolo pop finale sulla mascotte per dare vita */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 0.9,
                delay: 1.3,
                ease: EASE_SMOOTH,
              }}
              style={{
                background:
                  'radial-gradient(circle at 50% 35%, rgba(255,255,255,0.15) 0%, transparent 60%)',
              }}
            />
          </div>

          {/* Indicatore di caricamento minimal */}
          <motion.div
            className="absolute bottom-16 flex gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: '#B79FDB' }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.15,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};