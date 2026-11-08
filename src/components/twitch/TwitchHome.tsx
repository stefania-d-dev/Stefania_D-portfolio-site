'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TwitchLogo, 
  GameController, 
  ChatCircle, 
  Calendar, 
  Sparkle, 
  PlayCircle,
  Coffee,
  EyeSlash,
  Eye,
  Television,
  Heart,
  Users
} from '@phosphor-icons/react';

const COZY_GRAIN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")`;
const handwritten = { fontFamily: "'Caveat', cursive" };
const display = { fontFamily: "'Fraunces', ui-serif, Georgia, serif" };

const SCHEDULE_ITEMS = [
  { day: 'Martedì', time: '21:30', game: 'PlayStation 5 / RPG & Souls', status: 'Live in arrivo' },
  { day: 'Giovedì', time: '21:30', game: 'Esplorazioni & Indie Gems', status: 'Programmato' },
  { day: 'Domenica', time: '16:00', game: 'Cozy Sunday / Chiacchiere & Community', status: 'Relax time' },
];

const CHAT_COMMANDS = [
  { cmd: '!lurk', desc: 'Segnala il tuo lurk in chat con stile' },
  { cmd: '!ps5', desc: 'Dettagli sulla configurazione di streaming' },
  { cmd: '!discord', desc: 'Entra nel salotto della community' },
  { cmd: '!socials', desc: 'Tutti i link ufficiali' }
];

interface TwitchData {
  isLive: boolean;
  viewerCount?: number;
  title?: string;
  gameName?: string;
}

export default function TwitchHome() {
  const [isLurkMode, setIsLurkMode] = useState(false);
  const [activeTab, setActiveTab] = useState<'schedule' | 'commands' | 'perks'>('schedule');
  const [showLivePlayer, setShowLivePlayer] = useState(false);
  const [hostname, setHostname] = useState('localhost');
  
  // Stato per i dati reali di Twitch
  const [twitchData, setTwitchData] = useState<TwitchData>({ isLive: false });
  const [isLoadingTwitch, setIsLoadingTwitch] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHostname(window.location.hostname);
    }

    // Funzione per recuperare lo stato live dal tuo endpoint backend / serverless function
    const fetchTwitchStatus = async () => {
      try {
        // Sostituisci '/api/twitch-status' con il tuo endpoint reale o serverless function
        const response = await fetch('/api/twitch-status');
        if (response.ok) {
          const data = await response.json();
          setTwitchData(data);
        }
      } catch (error) {
        console.error('Errore nel recupero dello stato Twitch:', error);
      } finally {
        setIsLoadingTwitch(false);
      }
    };

    fetchTwitchStatus();
    // Aggiorna lo stato ogni 2 minuti
    const interval = setInterval(fetchTwitchStatus, 120000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative w-full min-h-screen transition-colors duration-700 ${isLurkMode ? 'bg-[#040307] text-zinc-400' : 'bg-[#0A0812] text-neutral-100'} selection:bg-[#9B51E0]/30 selection:text-white font-sans antialiased overflow-hidden`}>
      
      {/* Sfondo Atmosferico con Glow Viola Dinamico */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[1000px] rounded-full blur-[200px] transition-opacity duration-700 ${isLurkMode ? 'opacity-5' : 'opacity-15'}`}
        style={{ backgroundColor: '#9B51E0' }}
      />

      {/* Grid Texture & Noise */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{ backgroundImage: COZY_GRAIN, backgroundSize: '200px 200px' }}
        aria-hidden="true"
      />

      {/* Header / Navigazione Immersiva */}
      <header className="sticky top-0 left-0 w-full z-50 bg-[#0A0812]/80 backdrop-blur-xl border-b border-white/10 px-6 sm:px-12 py-5 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className={`w-3 h-3 rounded-full ${twitchData.isLive ? 'bg-emerald-500 animate-pulse' : 'bg-zinc-600'}`} />
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-300 font-bold">
            stefania_d // {twitchData.isLive ? 'LIVE ORA' : 'OFFLINE'}
          </span>
        </div>

        <div className="flex items-center gap-4">
          {/* Toggle Modalità Lurk */}
          <button
            onClick={() => setIsLurkMode(!isLurkMode)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-xs uppercase tracking-wider transition-all cursor-pointer border ${
              isLurkMode 
                ? 'bg-[#9B51E0]/20 border-[#9B51E0] text-[#D4B5FF] shadow-[0_0_15px_rgba(155,81,224,0.3)]' 
                : 'bg-[#141021] border-white/10 text-zinc-300 hover:text-white'
            }`}
          >
            {isLurkMode ? <Eye size={14} /> : <EyeSlash size={14} />}
            <span>{isLurkMode ? 'Lurk Attivo ☕' : 'Modalità Lurk'}</span>
          </button>

          <a
            href="https://www.twitch.tv/stefania_d"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#9B51E0] text-white font-mono text-xs uppercase tracking-widest font-bold hover:bg-[#853fd4] transition-all shadow-lg shadow-purple-900/30 cursor-pointer"
          >
            <TwitchLogo size={16} weight="fill" /> Segui su Twitch
          </a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 md:px-12 pt-16 pb-36 relative z-10 space-y-24">
        
        {/* HERO SECTION STILE EDITORIALE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141021] border border-white/10 text-[#D4B5FF] font-mono text-xs tracking-wider">
              <Sparkle size={14} weight="fill" /> Streaming da PS5 • Cozy Gaming &amp; Community
            </div>

            <h1 className="text-5xl sm:text-7xl md:text-8xl font-medium tracking-tight text-white leading-[1.05]" style={display}>
              Spazio <span className="text-[#D4B5FF]">Lounge</span>.
            </h1>

            <p 
              className="text-xl md:text-2xl font-light leading-relaxed"
              style={{ ...handwritten, color: '#D4B5FF' }}
            >
              "Controller in mano, luci soffuse e zero stress. Benvenuti nel salotto."
            </p>

            <p className="text-base text-zinc-300 max-w-xl leading-relaxed font-sans">
              Uno spazio in cui la passione per i videogiochi e l'atmosfera rilassata si incontrano. Mettiti comodo, goditi la diretta o attiva la modalità lurk se stai studiando o lavorando.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <a 
                href="https://www.twitch.tv/stefania_d" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-white text-zinc-950 font-mono text-xs uppercase tracking-widest font-bold hover:bg-zinc-200 transition-all shadow-xl cursor-pointer"
              >
                <PlayCircle size={18} weight="fill" /> Vai al Canale Ufficiale
              </a>
            </div>
          </div>

          {/* PLAYER PREVIEW / WIDGET TWITCH INTEGRATO */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-video sm:aspect-square rounded-3xl bg-[#141021] border border-white/15 p-4 shadow-2xl overflow-hidden group flex flex-col justify-between">
              
              {showLivePlayer ? (
                <div className="w-full h-full rounded-2xl overflow-hidden relative z-20">
                  <iframe
                    src={`https://player.twitch.tv/?channel=stefania_d&parent=${hostname}&autoplay=true`}
                    height="100%"
                    width="100%"
                    allowFullScreen
                    className="border-0 w-full h-full rounded-xl"
                  />
                  <button 
                    onClick={() => setShowLivePlayer(false)}
                    className="absolute top-2 right-2 px-3 py-1 bg-black/80 text-white font-mono text-[10px] rounded-md border border-white/20 z-30 hover:bg-black cursor-pointer"
                  >
                    Chiudi Player
                  </button>
                </div>
              ) : (
                <>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0812] via-transparent to-transparent z-10 opacity-60" />
                  
                  <div className="flex items-center justify-between relative z-20 px-2 pt-1">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border font-mono text-[10px] uppercase tracking-wider font-bold ${
                      twitchData.isLive 
                        ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400' 
                        : 'bg-[#9B51E0]/20 border-[#9B51E0]/40 text-[#D4B5FF]'
                    }`}>
                      <span className={`w-2 h-2 rounded-full ${twitchData.isLive ? 'bg-emerald-500 animate-ping' : 'bg-[#9B51E0]'}`} />
                      {twitchData.isLive ? `LIVE • ${twitchData.viewerCount || 0} spettatori` : 'STEFANIA_D HUB'}
                    </span>
                    <span className="font-mono text-xs text-zinc-400">Twitch Live</span>
                  </div>

                  <div className="my-auto text-center relative z-20 space-y-3 px-2">
                    <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#9B51E0] to-[#E056FD] p-1 shadow-2xl">
                      <div className="w-full h-full rounded-full bg-[#0E0B16] flex items-center justify-center text-2xl">
                        💜
                      </div>
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-white font-medium text-base truncate" style={display}>
                        {twitchData.isLive ? twitchData.title : 'Canale Ufficiale'}
                      </h4>
                      <p className="text-xs text-zinc-400 font-mono">
                        {twitchData.isLive ? `In onda su: ${twitchData.gameName}` : 'Clicca per caricare il player'}
                      </p>
                    </div>
                    <button
                      onClick={() => setShowLivePlayer(true)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#9B51E0] text-white font-mono text-xs uppercase tracking-widest font-bold hover:bg-[#853fd4] transition-all shadow-lg cursor-pointer"
                    >
                      <Television size={16} /> Apri Player Twitch
                    </button>
                  </div>

                  <div className="relative z-20 p-3 rounded-2xl bg-[#0E0B16] border border-white/10 flex items-center justify-between text-xs font-mono">
                    <span className="text-zinc-400">PlayStation 5 Setup</span>
                    <span className="text-[#D4B5FF]">{twitchData.isLive ? 'In Diretta' : 'Offline'}</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* INTERACTIVE TABS SECTION */}
        <div className="space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div className="flex items-center gap-2">
              {(['schedule', 'commands', 'perks'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2.5 rounded-xl font-mono text-xs uppercase tracking-widest transition-all cursor-pointer ${
                    activeTab === tab 
                      ? 'bg-[#9B51E0] text-white font-bold shadow-lg' 
                      : 'bg-[#141021] text-zinc-400 hover:text-white border border-white/5'
                  }`}
                >
                  {tab === 'schedule' ? '📅 Programma' : tab === 'commands' ? '💬 Comandi Chat' : '✨ Vibe & Perks'}
                </button>
              ))}
            </div>
            <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest hidden sm:inline">twitch.tv/stefania_d</span>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'schedule' && (
              <motion.div 
                key="schedule"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {SCHEDULE_ITEMS.map((item) => (
                  <div key={item.day} className="p-8 rounded-2xl bg-[#141021] border border-white/10 shadow-xl space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs uppercase tracking-widest text-[#D4B5FF] font-bold">{item.day}</span>
                      <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#0E0B16] text-zinc-300 border border-white/5">{item.time}</span>
                    </div>
                    <h4 className="text-lg font-medium text-white">{item.game}</h4>
                    <p className="text-xs text-zinc-400 font-mono">{item.status}</p>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'commands' && (
              <motion.div 
                key="commands"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
              >
                {CHAT_COMMANDS.map((c) => (
                  <div key={c.cmd} className="p-6 rounded-2xl bg-[#141021] border border-white/10 space-y-3 shadow-xl">
                    <span className="font-mono text-sm text-[#D4B5FF] font-bold px-3 py-1 rounded-md bg-[#0E0B16] border border-white/5 inline-block">
                      {c.cmd}
                    </span>
                    <p className="text-xs text-zinc-300 font-sans leading-relaxed">{c.desc}</p>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'perks' && (
              <motion.div 
                key="perks"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                <div className="p-8 rounded-3xl bg-[#141021] border border-white/10 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0E0B16] border border-white/10 flex items-center justify-center text-[#D4B5FF]">
                    <Coffee size={24} weight="duotone" />
                  </div>
                  <h3 className="text-2xl font-medium text-white" style={display}>Modalità Lurk & Relax</h3>
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    Hai la chat aperta mentre lavori o scrivi codice? Attiva la modalità lurk in alto per goderti l'atmosfera notturna senza distrazioni visive. Il supporto silenzioso conta sempre!
                  </p>
                </div>

                <div className="p-8 rounded-3xl bg-[#141021] border border-white/10 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0E0B16] border border-white/10 flex items-center justify-center text-[#F5A6C6]">
                    <Heart size={24} weight="duotone" />
                  </div>
                  <h3 className="text-2xl font-medium text-white" style={display}>Abbonamenti &amp; Community</h3>
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    Gli iscritti al canale sbloccano le emote personalizzate a tema chibi e ram horns, badge fedeltà esclusivi e accesso prioritario alle iniziative della community.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </main>

      {/* FOOTER */}
      <footer className="relative w-full bg-[#0E0B16] pt-16 pb-12 px-6 sm:px-12 border-t border-white/10 text-zinc-400">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono">
          <p>© {new Date().getFullYear()} Stefania_D • Tutti i diritti riservati</p>

          <div className="flex items-center gap-6">
            <a href="https://www.twitch.tv/stefania_d" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Twitch Channel
            </a>
            <a href="https://github.com/stefania-d-dev" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              GitHub Portfolio
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}