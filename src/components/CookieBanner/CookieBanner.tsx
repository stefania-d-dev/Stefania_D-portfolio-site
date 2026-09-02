'use client';

import React, { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setShowBanner(true);
    }

    const handleResetConsent = () => {
      localStorage.removeItem('cookie_consent');
      setShowBanner(true);
    };

    window.addEventListener('reset-cookie-preferences', handleResetConsent);
    return () => {
      window.removeEventListener('reset-cookie-preferences', handleResetConsent);
    };
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie_consent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 bg-[#060509]/95 border-t border-zinc-800/80 backdrop-blur-md text-zinc-100 shadow-2xl transition-all duration-300">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Testo informativo */}
        <div className="space-y-1.5 text-center md:text-left">
          <span className="font-mono text-[10px] tracking-widest uppercase text-cyan-400 font-semibold">
            ✦ PRIVACY &amp; COOKIE POLICY
          </span>
          <p className="text-sm text-zinc-300 max-w-2xl leading-relaxed">
            Questo sito utilizza cookie tecnici e di terze parti per garantirti una migliore esperienza di navigazione. 
            Puoi accettare tutti i cookie o scegliere di mantenere solo quelli necessari.
          </p>
        </div>

        {/* Pulsanti di azione */}
        <div className="flex items-center gap-3 shrink-0 w-full md:w-auto justify-center">
          <button
            onClick={handleDecline}
            className="px-5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700 text-xs font-mono font-semibold transition-all shadow-inner"
          >
            Solo necessari
          </button>
          <button
            onClick={handleAccept}
            className="px-6 py-2.5 rounded-xl bg-cyan-400 text-zinc-950 hover:bg-cyan-300 text-xs font-mono font-bold tracking-wide transition-all shadow-lg shadow-cyan-500/20"
          >
            Accetta tutti
          </button>
        </div>

      </div>
    </div>
  );
}