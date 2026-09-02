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
    id: "arredi-italiani",
    title: "Arredi_Italiani",
    role: "Creative Developer & WP Specialist",
    duration: "2024",
    agency: "Web Agency Emmè",
    status: "Deployed",
    tech: ["WordPress Custom", "PHP", "GSAP", "CSS Grid"],
    description: "Ingegnerizzazione di un ecosistema digitale d'alta fascia. Ho tradotto layout editoriali complessi in un'architettura solida, bilanciando estetica asimmetrica e performance da benchmark.",
    challenge: "Replicare la complessità di un layout editoriale asimmetrico garantendo fluidità totale e tempi di caricamento istantanei senza framework pesanti o page builder.",
    solution: "Sviluppo di un core custom 'from scratch' basato su CSS Grid e Tipografia Fluida, azzerando il debito tecnico e garantendo scalabilità al cliente.",
    logicIntro: "Onorare la visione creativa attraverso un'ingegneria invisibile ma rigorosa.",
    logicFeatures: [
      'Implementazione Pixel-Perfect di griglie asimmetriche dinamiche',
      'Ingegnerizzazione di sistemi tipografici basati su Viewport Units',
      'Sviluppo di blocchi Gutenberg nativi per autonomia totale del cliente',
      'Ottimizzazione Core Web Vitals per massimizzare il ranking SEO'
    ],
    technicalQuote: "Trasformare una composizione visiva statica in un sistema digitale vivo, performante e scalabile.",
    performance: "97/100 Mobile Speed Index",
    image: Assets.heroConcept,
    accent: "#C5A059",
    logo: Assets.LogoArredi, 
    category: 'code',
    type: 'Luxury E-commerce Showcase',
    logicLabel: 'Creative Engineering',
    galleryImages: [
      { 
        url: Assets.frontend, 
        caption: "Frontend Architecture", 
        description: "Focus sulla stabilità visiva (CLS 0) e implementazione di tipografia fluida per layout editoriali." 
      },
      { 
        url: Assets.gutenberg,
        caption: "Custom Gutenberg Blocks", 
        description: "Ingegnerizzazione di componenti modulari nativi per garantire al cliente totale autonomia creativa senza plugin terzi." 
      },
      { 
        url: Assets.backend, 
        caption: "Performance Audit", 
        description: "Ottimizzazione estrema dei Core Web Vitals: First Contentful Paint ridotto a 0.7s tramite pulizia del codice PHP." 
      },
    ],
    performanceImage: Assets.heroConcept,
    figmaUrl: "https://www.figma.com/design/Sn0yGYONAmxpPjUHXHXgxr/Arredi-italiani?node-id=1-173&t=X58Isvb6PdpY3Zze-1",
    liveUrl: "https://www.arreditaliani.it",
  },
  {
    id: "national-automotive",
    title: "National_Automotive",
    role: "Lead Interaction Developer",
    duration: "2024",
    agency: "Web Agency Emmè",
    status: "Deployed",
    tech: ["Vanilla JS (ES6+)", "Custom WP Engine", "SCSS"],
    description: "Ingegneria dell'interazione per il mercato B2B automotive. Ho sviluppato logiche di scrolling innovative per la presentazione dinamica della flotta.",
    challenge: "Creare un effetto di navigazione 'fan-layout' performante, preservando l'accessibilità nativa e la fluidità sui dispositivi mobile di fascia media.",
    solution: "Architettura d'interazione ibrida: trasformazioni 3D accelerate via GPU su desktop e snap-slider ultra-leggero su touch device.",
    performance: "98/100 UI Smoothness Score",
    image: Assets.imgNationalCover,
    accent: "#1C355E",
    logo: Assets.LogoNational,
    category: 'code',
    galleryImages: [
      { 
        url: Assets.imgNationalCover, 
        caption: "System Architecture", 
        description: "Visualizzazione del sistema integrato App/Web per il monitoraggio dei soccorsi in real-time." 
      },
      { 
        url: Assets.nationalCard, 
        caption: "Fan-Layout Interaction", 
        description: "Implementazione di trasformazioni Matrix3D per un feedback tattile e fluido durante la selezione dei piani di assistenza." 
      },
      { 
        url: Assets.national1, 
        caption: "Service & Info Architecture", 
        description: "Componenti accordion e griglie informative ottimizzate per un accesso rapido ai dati tecnici su device mobile." 
      },
    ],
    type: 'B2B Interaction Engine',
    logicLabel: 'Hybrid UX Engineering',
    logicIntro: "Il movimento come linguaggio funzionale: guidare l'utente verso la conversione tramite il feedback visivo.",
    logicFeatures: [
      'Hybrid Interaction Logic (Matrix3D Desktop / Touch Snap Mobile)',
      'Performance-First CSS con 0% Cumulative Layout Shift (CLS)',
      'Automated Lead Filtering integrato al catalogo veicoli asincrono',
      'Sincronizzazione visuale tra dati tecnici e asset multimediali'
    ]
  },
  {
    id: "fides-recovery-hub",
    title: "Fides_Recovery_Hub",
    role: "Frontend Architect",
    duration: "2025",
    status: "Deployed",
    tech: ["React 18", "TypeScript", "Tailwind", "Vite"],
    description: "Sviluppo di una Dashboard Fintech per l'asset management. Trasformazione di dataset complessi in interfacce azionabili e intuitive per il recupero crediti.",
    challenge: "Eliminare il 'Data Clutter' tipico dei software finanziari, garantendo velocità di esecuzione e leggibilità immediata dei parametri critici (KPI).",
    solution: "Architettura a componenti atomici TypeScript-strict e un sistema di filtraggio dati ottimizzato per minimizzare il carico sul Main Thread.",
    performance: "100/100 Lighthouse Performance",
    image: Assets.imgFidesCover,
    accent: "#0EA5E9",
    logo: Assets.LogoFides,
    category: 'code',
    type: 'Fintech Dashboard',
    logicLabel: 'Data-Driven Engineering',
    logicIntro: "Il codice al servizio della chiarezza decisionale in contesti finanziari ad alta pressione.",
    logicFeatures: [
    'Atomic Component Architecture per massima manutenibilità',
    'Data Filtering Logic ottimizzata per grandi dataset JSON',
    'Gestione degli stati complessi con pattern dichiarativo',
    'Accessibilità WCAG compliant per la gestione di dati sensibili'
    ],
    liveUrl: "https://fides-recovery-hub.vercel.app/",
    repo: "https://github.com/stefania-d-dev/fides-recovery-hub"
},
{
    id: "farmacia-santrovaso",
    title: "Farmacia_Santrovaso",
    role: "Lead Interaction Developer",
    duration: "2024",
    agency: "Web Agency Emmè",
    status: "Deployed",
    tech: ["Vanilla JS", "Advanced SCSS", "WordPress CMS"],
    description: "Evoluzione di un portale sanitario in un'interfaccia interattiva. Focus sull'ecosistema Fidelity e sull'accessibilità dei servizi al cittadino.",
    challenge: "Ottimizzare la UX per un target demografico eterogeneo (anziani/giovani), rendendo immediata la prenotazione di servizi sanitari complessi.",
    solution: "Ingegnerizzazione di un sistema di card interattive con accelerazione hardware per transizioni costanti a 60fps.",
    performance: "Lag-Free 60fps Interactions",
    image: Assets.imgFarmaciaCover,
    accent: "#008374",
    logo: Assets.LogoFarmacia,
    category: 'code',
    type: 'Pharma UX Engine',
    logicLabel: 'Fidelity Flow Strategy',
    logicIntro: "Trasformare la consultazione di dati medici in un flusso esperienziale privo di frizioni.",
    logicFeatures: [
      'Custom Fidelity-Card Engine per l\'engagement utente lato frontend',
      'Interfaccia di comparazione servizi ottimizzata (Zero-Lags)',
      'Modular SCSS Architecture (BEM) per manutenzione semplificata',
      'UX Strategy mirata all\'abbattimento del bounce rate informativo'
    ],
    codepen: "https://codepen.io/Darkmindy/pen/ogzRGKP",
    figmaUrl: "https://www.figma.com/design/kTOR8OVTFWDvhWkAxjioSp/Farmacia-Santrovaso?node-id=0-1&t=CpfWYpIKbefZC52N-1",
    liveUrl: "https://farmaciasantrovaso.it/t",
  },
  {
    id: "mosca-mobili",
    title: "Mosca_Mobili",
    role: "Creative Developer & UI Strategist",
    duration: "2024 - 2025",
    agency: "Web Agency Emmè",
    status: "Deployed",
    tech: ["WordPress Custom", "PHP", "Vanilla JS", "CSS Variables"],
    description: "Piattaforma digitale per l'arredamento artigianale. La precisione del mobile su misura riflessa in una griglia digitale millimetrica basata su standard industriali.",
    challenge: "Trasmettere l'artigianalità del legno tramite un'interfaccia web leggera e ariosa, gestendo cataloghi fotografici HD senza penalizzare il caricamento.",
    solution: "Approccio Bento Grid bilanciato su proporzioni auree e gestione dei materiali tramite CSS Variables dinamiche per il theming istantaneo.",
    performance: "Elegant Code Craftsmanship",
    image: Assets.imgMoscaCover,
    accent: "#8B5E3C",
    logo: Assets.LogoMosca,
    category: 'code',
    type: 'Interior Design Showcase',
    logicLabel: 'Digital Cabinetry',
    logicIntro: "Costruire un'interfaccia per un mobiliere d'arte significa onorare proporzione, ritmo e pulizia del codice.",
    logicFeatures: [
      'Modular Grid System basato sulla sezione aurea e CSS Grid',
      'Pipeline di ottimizzazione immagini (WebP/Lazy) per cataloghi HD',
      'Custom Post Types strutturati per una gestione granulare delle collezioni',
      'Backend ottimizzato per eliminare la dipendenza da plugin terzi'
    ]
  },
  {
    id: "soulfarm",
    title: "Soulfarm_React",
    role: "Frontend Developer (Rapid Prototyping)",
    duration: "7 Days",
    status: "Deployed",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    description: "Dashboard React per il monitoraggio agricolo IoT. Un esercizio di stile su reattività, architettura moderna e velocità di sviluppo (MVP).",
    challenge: "Validare la fattibilità di un'interfaccia dashboard complessa sotto una deadline critica di 7 giorni, garantendo codice production-ready.",
    solution: "Utilizzo di un Atomic Design System rigoroso per il riutilizzo dei componenti e Tailwind JIT per uno sviluppo rapido e consistente.",
    performance: "99/100 React Performance",
    image: Assets.imgSoulfarmCover,
    accent: "#A8E6CF",
    logo: Assets.LogoSoulfarm,
    category: 'code',
    type: 'High-Speed React Prototype',
    logicLabel: 'Rapid Development Stack',
    logicIntro: "La velocità come test di efficienza del workflow: architettura pulita sotto pressione.",
    logicFeatures: [
    'Atomic Component Architecture (decoupled & testable)',
    'TypeScript Strict Mode per garantire la type-safety del data flow',
    'Vite Hot Module Replacement (HMR) per feedback loop istantaneo',
    'Mobile-First Responsive Logic nativa con approccio utility-first'
    ],
    figmaUrl: "https://www.figma.com/design/Pxbg0hOMQz6U1Hi9nVUyYf/test-frontend?node-id=0-1&t=8GaUf5aSjc8Or08M-1",
    repo: "https://github.com/stefania-d-dev/soulfarm-react",
    liveUrl: "https://stefania-d-dev.github.io/soulfarm-react/"
  },
  {
    id: "devfest-passport",
    title: "DevFest_Passport",
    role: "Flutter Developer & Lead UI Designer",
    duration: "2025",
    status: "Archived",
    tech: ["Flutter", "Firebase", "Dart", "BLoC"],
    description: "Mobile app gamificata con estetica Game Boy Color. Un esperimento tecnico di nostalgia digitale e sincronizzazione multi-utente real-time.",
    challenge: "Gestire il rendering di asset pixel-art multi-risoluzione mantenendo la latenza di sincronizzazione sotto i 100ms per migliaia di utenti simultanei.",
    solution: "Pipeline dedicata per asset Pixel-Art e architettura BLoC (Business Logic Component) per una gestione dello stato deterministica.",
    performance: "Real-time Sync < 100ms",
    image: Assets.imgDevFestCover,
    accent: "#4285F4",
    logo: Assets.LogoDevFest,
    category: 'code',
    type: 'Mobile Gamification App',
    logicLabel: 'Retro-Engine Logic',
    logicIntro: "Un GDR tecnico dove ogni byte conta: ottimizzazione asset e reattività istantanea.",
    logicFeatures: [
      'Custom Pixel-Art Pipeline per scaling fluido su display ad alta densità',
      'Integrazione Firebase Realtime Database per badge istantanei',
      'QR-Scanner Engine ottimizzato per validazione rapida degli eventi',
      'Pattern BLoC per il decoupling totale tra logica di business e UI'
    ],
    galleryImages: [
      { 
        url: Assets.dfpWelcome, 
        caption: "Welcome", 
        description: "Introduzione all'applicazione" 
      },
      {
        url: Assets.dfpLog,
        caption: "Badge Collection", 
        description: "Dimostrazione del sistema di raccolta badge in tempo reale durante l'evento"  
      }
    ],
    videos: [
      { 
        url: Assets.passportVideo, 
        caption: "App Walkthrough", 
        description: "Video dimostrativo del flusso di interazione e della sincronizzazione multi-utente in tempo reale durante un evento DevFest." 
      },
    ],
    repo: "https://github.com/stefania-d-dev/devfestlog_passport"
  },
];

