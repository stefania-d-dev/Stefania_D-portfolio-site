import * as Assets from '../assets/index';

export interface GalleryItem {
  url: string;
  caption: string;
  description?: string;
}

export interface VideoItem {
  url: string;
  caption: string;
  description?: string;
}

export interface ProjectCode {
  id: string;
  title: string;
  role: string;
  duration: string;
  agency?: string;
  status: 'Deployed' | 'Archived' | 'Ongoing';
  tech: string[];
  description: string;
  
  // Nuove sezioni di Storytelling del Caso Studio
  projectScope: string;     // Scopo del progetto (Perché è iniziato)
  objective: string;        // Obiettivo (Quello che è stato realizzato)
  approach: string;         // Approccio (Il processo seguito)
  
  challenge: string;
  solution: string;
  performance?: string;
  image: string;
  accent: string;
  logo: string;
  category: 'code';
  type: string;
  logicLabel: string;
  logicIntro: string;
  logicFeatures: string[];
  technicalQuote?: string;
  designNote?: string;
  repo?: string;
  codepen?: string;
  galleryImages?: GalleryItem[];
  videos?: VideoItem[];
  performanceImage?: string;
  figmaUrl?: string;
  liveUrl?: string;
}

export const codeProjects: ProjectCode[] = [
  {
    id: "national-automotive",
    title: "National_Automotive",
    role: "Lead Interaction Developer",
    duration: "4 Settimane (Fase di Prototipazione e Rilascio)",
    agency: "Web Agency Emmè",
    status: "Deployed",
    tech: ["Vanilla JS (ES6+)", "Custom WP Engine", "SCSS", "GPU Matrix3D"],
    description: "Ingegneria dell'interazione avanzata per il settore automotive B2B, incentrata sulla fluidità dei cataloghi flotta.",
    
    projectScope: "Rinnovare l'esperienza di navigazione di un catalogo veicoli complesso, trasformando una griglia statica in un'interazione fluida e memorabile per gli utenti B2B.",
    objective: "Realizzare un sistema di visualizzazione a card (fan-layout) reattivo a 60fps, capace di gestire animazioni pesanti senza penalizzare l'accessibilità o i tempi di caricamento su dispositivi mobili.",
    approach: "Un processo iterativo partito dai primi test di movimento grezzi, passando per l'analisi dei vettori 3D, fino all'implementazione di un motore ibrido desktop/touch.",
    
    challenge: "Bilanciare il calcolo delle matrici 3D su desktop evitando lag e garantendo un touch-snap perfetto su dispositivi mobili.",
    solution: "Dopo diverse prove di interazione, ho optato per un approccio ibrido: accelerazione GPU rigorosa per desktop e uno scroll-snap pulito ottimizzato per i touch device.",
    performance: "98/100 UI Smoothness Score & Zero Layout Shift",
    image: Assets.imgNationalCover,
    accent: "#1C355E",
    logo: Assets.LogoNational,
    category: 'code',
    type: 'B2B Interaction Engine',
    codepen: "https://codepen.io/Darkmindy/pen/ogzRGKP",
    
    logicLabel: "Hybrid UX Engineering",
    logicIntro: "Il movimento come risultato di un rigoroso processo di prove, test e affinamento tecnico.",
    logicFeatures: [
      'Prototipazione iterativa delle transizioni a ventaglio',
      'Test di carico su eventi di scroll e touch moving',
      'Hybrid Interaction Logic (Matrix3D Desktop / Touch Snap Mobile)',
      'Performance-First CSS con 0% Cumulative Layout Shift (CLS)'
    ],
    technicalQuote: "Il codice di un'interazione non deve solo funzionare: deve raccontare l'intenzione attraverso il ritmo visivo.",
    
    galleryImages: [
      { 
        url: Assets.nationalCard, 
        caption: "Fase 1: Studio e Test Iniziali delle Card", 
        description: "Analisi volumetrica e prime prove di sovrapposizione a ventaglio in ambiente di sviluppo isolato." 
      },
      { 
        url: Assets.national1, 
        caption: "Fase 2: Iterazione e Regolazione dei Vettori", 
        description: "Test di reattività al passaggio del mouse e calcolo dei delta di rotazione per azzerare i micro-scatti." 
      },
      { 
        url: Assets.imgNationalCover, 
        caption: "Fase 3: Integrazione e Risultato Finale", 
        description: "La schermata definitiva integrata nel motore WordPress con logica asincrona." 
      }
    ],
    videos: [
      { 
        url: Assets.national2, 
        caption: "Test Preliminare: Prima Prova Card", 
        description: "Video d'archivio dei test iniziali sulle animazioni di scorrimento delle card stradali." 
      },
      { 
        url: Assets.national3, 
        caption: "Test Secondario: Ottimizzazione Transizioni", 
        description: "Seconda fase di prove focalizzata sulla fluidità del movimento e sulla leggibilità dei testi in tempo reale." 
      }
    ],
    liveUrl: "https://www.nationalautomotiveindex.php/assistenza-stradale/",
  },
  {
    id: "fides-recovery-hub",
    title: "Fides_Recovery_Hub",
    role: "Frontend Architect",
    duration: "3 Settimane",
    status: "Deployed",
    tech: ["React 18", "TypeScript", "Tailwind CSS", "Vite"],
    description: "Dashboard Fintech per l'asset management e la conversione di dataset complessi in interfacce azionabili.",
    
    projectScope: "Semplificare la gestione di volumi ingenti di dati finanziari, spesso confusi in interfacce obsolete e densamente affollate.",
    objective: "Costruire una dashboard reattiva, basata su TypeScript, che permettesse il filtraggio istantaneo dei KPI senza ricaricamenti di pagina.",
    approach: "Sviluppo guidato da un sistema ad Atomic Design per garantire la riutilizzabilità dei componenti e la massima manutenibilità nel tempo.",
    
    challenge: "Eliminare il 'Data Clutter' tipico dei software finanziari, garantendo velocità di esecuzione e leggibilità immediata dei parametri critici.",
    solution: "Architettura a componenti atomici TypeScript-strict e un sistema di filtraggio ottimizzato per minimizzare il carico sul Main Thread.",
    performance: "100/100 Lighthouse Performance",
    image: Assets.imgFidesCover,
    accent: "#0EA5E9",
    logo: Assets.LogoFides,
    category: 'code',
    type: 'Fintech Dashboard',
    
    logicLabel: "Data-Driven Engineering",
    logicIntro: "La precisione dei dati riflessa in un'architettura frontend pulita e senza compromessi.",
    logicFeatures: [
      'Atomic Component Architecture per massima manutenibilità',
      'Data Filtering Logic ottimizzata per grandi dataset JSON',
      'Gestione degli stati complessi con pattern dichiarativo',
      'Accessibilità WCAG compliant per la gestione di dati sensibili'
    ],
    technicalQuote: "Ridurre la complessità visiva attraverso l'ingegneria dei componenti.",
    
    repo: "https://github.com/stefania-d-dev/fides-recovery-hub",
    liveUrl: "https://fides-recovery-hub.vercel.app/"
  },
  {
    id: "arredi-italiani",
    title: "Arredi_Italiani",
    role: "Creative Developer & WP Specialist",
    duration: "6 Settimane",
    agency: "Web Agency Emmè",
    status: "Deployed",
    tech: ["WordPress Custom", "PHP", "GSAP", "CSS Grid"],
    description: "Ingegnerizzazione di un ecosistema digitale d'alta fascia con griglie editoriali asimmetriche e performance da benchmark.",
    
    projectScope: "Tradurre l'eleganza di una rivista di design d'interni in un sito web scalabile e gestibile autonomamente dal cliente.",
    objective: "Sviluppare un tema WordPress custom 'from scratch' senza l'uso di page builder pesanti, azzerando il debito tecnico.",
    approach: "Definizione di un sistema tipografico fluido basato su Viewport Units e sviluppo di blocchi Gutenberg nativi sartoriali.",
    
    challenge: "Replicare la complessità di un layout editoriale asimmetrico garantendo fluidità totale e tempi di caricamento istantanei.",
    solution: "Sviluppo di un core custom basato su CSS Grid e Tipografia Fluida, garantendo zero Cumulative Layout Shift (CLS).",
    performance: "97/100 Mobile Speed Index",
    image: Assets.heroConcept,
    accent: "#C5A059",
    logo: Assets.LogoArredi, 
    category: 'code',
    type: 'Luxury E-commerce Showcase',
    
    logicLabel: "Creative Engineering",
    logicIntro: "Onorare la visione creativa attraverso un'ingegneria invisibile ma rigorosa.",
    logicFeatures: [
      'Implementazione Pixel-Perfect di griglie asimmetriche dinamiche',
      'Ingegnerizzazione di sistemi tipografici basati su Viewport Units',
      'Sviluppo di blocchi Gutenberg nativi per autonomia totale del cliente',
      'Ottimizzazione Core Web Vitals per massimizzare il ranking SEO'
    ],
    technicalQuote: "Trasformare una composizione visiva statica in un sistema digitale vivo e performante.",
    
    galleryImages: [
      { url: Assets.frontend, caption: "Frontend Architecture", description: "Focus sulla stabilità visiva e implementazione di tipografia fluida." },
      { url: Assets.gutenberg, caption: "Custom Gutenberg Blocks", description: "Componenti modulari nativi per totale autonomia creativa." },
      { url: Assets.backend, caption: "Performance Audit", description: "Ottimizzazione estrema dei Core Web Vitals." }
    ],
    figmaUrl: "https://www.figma.com/design/Sn0yGYONAmxpPjUHXHXgxr/Arredi-italiani?node-id=1-173",
    liveUrl: "https://www.arreditaliani.it",
  },
  {
    id: "soulfarm",
    title: "Soulfarm_React",
    role: "Frontend Developer (Rapid Prototyping)",
    duration: "7 Giorni (Sprint MVP)",
    status: "Deployed",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    description: "Dashboard React per il monitoraggio agricolo IoT. Un esercizio di stile su reattività e velocità di sviluppo.",
    
    projectScope: "Validare in tempi record la fattibilità di un'interfaccia dashboard IoT complessa sotto una deadline critica.",
    objective: "Rilasciare un MVP production-ready in soli 7 giorni senza compromettere la robustezza del codice.",
    approach: "Uso di un Atomic Design System rigoroso e Tailwind JIT per massimizzare la velocità di sviluppo.",
    
    challenge: "Validare l'interfaccia sotto una deadline stretta mantenendo standard di codice elevati.",
    solution: "Utilizzo di pattern dichiarativi e Vite HMR per un feedback loop di sviluppo istantaneo.",
    performance: "99/100 React Performance",
    image: Assets.imgSoulfarmCover,
    accent: "#A8E6CF",
    logo: Assets.LogoSoulfarm,
    category: 'code',
    type: 'High-Speed React Prototype',
    
    logicLabel: "Rapid Development Stack",
    logicIntro: "La velocità come test di efficienza del workflow e pulizia dell'architettura.",
    logicFeatures: [
      'Atomic Component Architecture (decoupled & testable)',
      'TypeScript Strict Mode per garantire la type-safety del data flow',
      'Vite Hot Module Replacement (HMR) per feedback loop istantaneo',
      'Mobile-First Responsive Logic nativa'
    ],
    repo: "https://github.com/stefania-d-dev/soulfarm-react",
    liveUrl: "https://stefania-d-dev.github.io/soulfarm-react/"
  }
];