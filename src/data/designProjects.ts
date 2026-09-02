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

export interface DesignProject {
  id: string;
  title: string;
  role: string;
  category: 'design' | 'marketing';
  tech: string[];
  accent: string; // Reso obbligatorio per evitare fallback grafici errati
  image: string;
  description: string;
  duration: string;
  agency: string;
  status: string;
  logo?: string;
  type: string;
  tagline: string;
  location: string;
  challenge: string;
  solution: string;
  performance: string;
  designPhilosophy: string;
  designNote: string;
  lessonsLearned: string;
  visualLegacy: string;
  galleryImages: (string | GalleryItem)[];
  videos: (string | VideoItem)[];
  roleDetails: string;
  teamSize: string;
  originalBrief: string;
  strategicImpact: string;
}

export const projects: DesignProject[] = [
  {
    id: "animo-siciliano",
    title: "Animo_Siciliano",
    logo: Assets.LogoAnimo,
    agency: "Web Agency Emmè",
    tagline: "Dall'identità viscerale alla strategia di mercato globale. 🌋",
    designPhilosophy: "IL DESIGN COME MANIFESTO DI RESISTENZA CULTURALE. L'ESTETICA DELL'AUTENTICITÀ SENZA FILTRI.",
    location: "Catania, IT",
    role: "Founding Creative & Content Architect",
    tech: ["Brand Identity", "E-commerce Strategy", "SEO Storytelling", "Copywriting"],
    description: "Sviluppo di un ecosistema digitale integrato a partire dallo studio del naming, volto a posizionare il patrimonio agroalimentare del territorio etneo all'interno del mercato premium internazionale.",
    galleryImages: [
      { url: Assets.animo0, caption: "Heritage Liquido", description: "Limonata Tomarchio: l'integrazione di un colosso storico in un frame contemporaneo che ne esalta l'iconicità." },
      { url: Assets.animo1, caption: "L'Anima del Sale", description: "Cioccolato di Modica IGP: posizionamento visuale ispirato alla cruda bellezza e alla granulosità degli elementi naturali." },
      { url: Assets.animo2, caption: "Sensorialità Materica", description: "Content strategy focalizzata sulla percezione tattile e sull'esaltazione delle texture per il mercato luxury food." },
      { url: Assets.animo3, caption: "Nobilitazione del Povero", description: "Trasformare le conserve ittiche in icone di design attraverso una pulizia visiva radicale e un lighting editoriale." }
    ],
    videos: [
      { url: Assets.animo4, caption: "Dynamic Product Reveal.", description: "Motion design focalizzato sulla texture dei formaggi siciliani (Ricotta al forno, Formaggio al Pistacchio). Ingegnerizzazione di overlay testuali per la conversione diretta all'e-shop." },
      { url: Assets.animo5, caption: "Sensory UX Storytelling.", description: "Sequenza ritmata su prodotti da forno (Brioche col tuppo, Biscotti ad Esse). Layout ottimizzato per il consumo mobile 'fast-paced' con focus sulla tipografia bold." },
      { url: Assets.animo6, caption: "Heritage-Driven Motion", description: "Presentazione della gamma salumi (Suino Nero dei Nebrodi, S. Angelo IGP). Bilanciamento tra estetica rustica e pulizia informativa per il posizionamento d'alta fascia." }
    ],
    accent: "#FF4500",
    image: Assets.imgAnimoCover,
    performance: "High-Recall Naming // Premium Brand Positioning // Architettura SEO Semantica.",
    designNote: "Privilegio degli asset di Brand Equity rispetto alla SEO transazionale pura, convertendo l'utente attraverso il valore tangibile del brand.",
    duration: "2024 - 2025",
    status: "Completed",
    type: "E-Commerce Ecosytem",
    challenge: "Superare i cliché folk del settore agroalimentare locale per strutturare un linguaggio visivo rigoroso, elegante e credibile per i mercati esteri.",
    solution: "Ideazione di un Visual System basato sul contrasto tra texture organiche e geometrie tipografiche pulite, elevando il prodotto a eccellenza da collezione.",
    lessonsLearned: "Un'identità visiva ad alto impatto emotivo attrae segmenti di pubblico qualificati, ma richiede una direzione artistica continuativa per preservare il posizionamento di prezzo.",
    roleDetails: "In qualità di Founding Creative, ho definiert l'intera Brand Architecture (dal naming al codice visivo), coordinando la produzione degli asset multimediali e la strategia di go-to-market.",
    teamSize: "Creative Lead",
    originalBrief: "Sviluppare l'infrastruttura di brand e la content strategy per il lancio di una piattaforma e-commerce direct-to-consumer.",
    strategicImpact: "Il passaggio da un modello puramente commerciale a un format di 'Boutique Editoriale' ha consentito il posizionamento del catalogo in una fascia di prezzo ad alto margine, intercettando un target internazionale colto.",
    visualLegacy: "Definizione di un nuovo punto di riferimento estetico territoriale, dimostrando come l'identità nativa possa tradursi in avanguardia globale.",
    category: "design"
  },
  {
    id: "bonaccorso-brand",
    title: "Bonaccorso_Brand",
    role: "Social Media Manager & Community Strategist",
    agency: "Web Agency Emmè",
    duration: "2024 - 2025",
    accent: "#E2B859",
    tagline: "Fashion Luxury, Human Connection. ⚡",
    logo: Assets.LogoBonaccorso,
    description: "Digital transformation della presenza omnichannel per un punto di riferimento del retail luxury multimarca. Coordinamento dei piani editoriali per brand di calibro internazionale tra cui DSQUARED2 e Stone Island.",
    designPhilosophy: "IL LUSSO È ACCESSIBILITÀ DIALOGICA. IL FEED NON È UNA VETRINA STATICA, È UN CONVERSATION STARTER.",
    location: "Catania, IT",
    status: "Completed",
    type: "Luxury Retail Omnichannel",
    challenge: "Preservare l'esclusività e il prestigio istituzionale dei luxury brand in portfolio, garantendo al contempo un'interazione fluida, tempestiva e personalizzata con la community digitale.",
    solution: "Sviluppo di un format 'Digital Concept Store' in cui un'Art Direction minimale si integra con flussi di Customer Experience (CX) proattivi, azzerando la distanza tra punto vendita fisico e touchpoint mobile.",
    performance: "Ottimizzazione Flussi Conversione Black Friday // +25% Customer Trust Index // +20% Engagement Rate Organico.",
    image: Assets.imgBonaccorsoCover,
    galleryImages: [
      { url: Assets.bonaccorso1, caption: "Luxury Curation", description: "Studio della composizione cromatica per valorizzare le texture dei tessuti pregiati." },
      { url: Assets.bonaccorso2, caption: "Iconic Details", description: "Macro-focus sugli elementi di design che giustificano il valore del Made in Italy." },
      { url: Assets.bonaccorso3, caption: "Editorial Layout", description: "Design dei contenuti per i lanci stagionali: equilibrio tra tendenza e conversione." }
    ],
    videos: [],
    tech: ["Fashion Marketing", "Luxury CX", "Community Strategy", "Art Direction"],
    lessonsLearned: "Il lusso contemporaneo richiede un superamento del monologo unidirezionale: la fiducia del consumatore si consolida combinando autorevolezza d'immagine ed empatia relazionale.",
    roleDetails: "Interfaccia strategica tra la gestione degli stock fisici e l'audience digitale. Supervisione della produzione di contenuti in real-time, pianificazione del copywriting e ottimizzazione del funnel di customer care.",
    teamSize: "Autonomia Operativa (In coordinamento con Logistica e Store Management)",
    designNote: "Mantenimento di un Tone of Voice (ToV) autorevole ma inclusivo, eludendo sia il distacco elitario sia l'informalità.",
    originalBrief: "Digitalizzare la presentazione delle nuove collezioni stagionali e ottimizzare i canali di comunicazione social del punto vendita.",
    strategicImpact: "Trasformazione del profilo istituzionale in un servizio di Personal Shopping Digitale ad alta reattività, riducendo sensibilmente il time-to-buy e generando lead qualificati convertiti in vendite dirette.",
    visualLegacy: "Consolidamento della leadership di mercato del retailer attraverso l'adozione di un modello di consulenza di stile digitale costante e strutturato.",
    category: "design"
  },
  {
    id: "sano-siciliano",
    title: "Sano_Siciliano",
    role: "Social Media Architect & Content Creator",
    duration: "2024 - 2025",
    agency: "Web Agency Emmè",
    image: Assets.imgSanoCover,
    tech: ["Disruptive Branding", "Motion Design", "Color Theory", "Social Strategy"],
    description: "Rebranding e riposizionamento strategico di un ecosistema agricolo biologico. Transizione da una comunicazione di settore tradizionale a un'identità visiva neon-pop orientata a intercettare i segmenti d'acquisto della Gen Z.",
    tagline: "Vibrazioni sane, radici siciliane. 🌸",
    designPhilosophy: "IL BENESSERE È UN'ESPLOSIONE CROMATICA. IL ROSA NEON LIBERA LA TRADIZIONE DALLA NOIA DEL MARRONE.",
    location: "Sicilia, IT",
    accent: "#EC4899", // Rosa Neon assegnato per coerenza visual-disruption
    status: "Completed",
    type: "Disruptive Agro-Branding",
    challenge: "Scardinare i codici cromatici standardizzati del settore biologico (verde/marrone) per posizionare il prodotto come oggetto ad alto valore di design e lifestyle.",
    solution: "Sviluppo di una grammatica visiva basata su contrasti cromatici acidi e griglie geometriche rigorose, in cui la materia prima agricola viene trattata con l'estetica del product design.",
    performance: "Post Save Rate +30% // Consolidamento della Top-of-Mind nel settore Bio di riferimento // Standardizzazione della Coerenza Visual.",
    galleryImages: [
      { url: Assets.sano5, caption: "Agrumi Pop", description: "Arance Tarocco: decontestualizzazione del prodotto attraverso sfumature neon." },
      { url: Assets.sano6, caption: "Vibrant Harvest", description: "Melograno Wonderful: fotografia commerciale ad alta saturazione per stimolare il desiderio." },
      { url: Assets.sano7, caption: "Elegant Tradition", description: "Paste di Mandorla: l'incontro tra tipografia Serif classica e colori disruptive." },
      { url: Assets.sano8, caption: "Community Awareness", description: "Layout grafici audaci per trasformare l'agricoltura in un tema di conversazione social." }
    ],
    videos: [],
    lessonsLearned: "L'audacia cromatica e la rottura degli schemi visivi consolidati rappresentano la leva più efficace per massimizzare la ritenzione dell'utente durante lo scrolling.",
    designNote: "Ingegnerizzazione di un laboratorio di 'Visual Disruption', a dimostrazione di come i settori tradizionali possano trarre vantaggio dall'innovazione dei linguaggi.",
    roleDetails: "Sviluppo e gestione dell'identità digitale in piena autonomia decisionale sulla direzione artistica, curando l'interezza degli asset multimediali distribuiti.",
    teamSize: "Creative Lead (In collaborazione con Web Agency Emmè)",
    originalBrief: "Rinnovare la presenza digitale dell'azienda agricola per comunicare i valori del biologico a un pubblico più ampio.",
    strategicImpact: "L'adozione di una strategia di rottura visiva ha posizionato il brand come caso di studio di riferimento nel panorama locale, determinando un netto vantaggio competitivo rispetto ai concorrenti diretti.",
    visualLegacy: "Consegna di un brand book digitale codificato che uniforma la comunicazione aziendale, tracciando un nuovo benchmark per l'agricoltura moderna.",
    category: "design"
  },
  {
    id: "la-mariagnese",
    title: "LaMariagnese",
    role: "Visual & Content Strategy",
    duration: "2024",
    agency: "Emmè Web Agency",
    image: Assets.imgMariagneseCover,
    tech: ["Minimal Luxury", "Editorial Design", "Art Direction", "Storytelling"],
    description: "Evoluzione e cura dell'immagine digitale di un'impresa agrumicola storica. L'essenza della traditione agricola è stata declinata secondo i canoni visivi del minimalismo editoriale.",
    tagline: "L'arancia è #fimmina. 🍊",
    designPhilosophy: "LA SOTTRAZIONE COME FORMA DI POTERE. IL LUSSO NON HA BISOGNO DI URLARE PER ESSERE NOTATO.",
    location: "Sicilia, IT",
    accent: "#EA580C", // Arancione scuro editoriale
    status: "Completed",
    type: "Quiet Luxury Agriculture",
    challenge: "Modernizzare l'eredità storica del marchio senza alienarne i tratti identitari originari, riposizionando la produzione come offerta di nicchia adatta a mercati ad alto spendente.",
    solution: "Art Direction incentrata sulla valorizzazione dello spazio negativo, macro-fotografia orientata alla materia prima e scelte tipografiche mutuate dal settore dell'alta moda.",
    performance: "Elevazione della Brand Perception // Posizionamento High-End sul mercato retail // Semplificazione dei flussi informativi d'acquisto.",
    galleryImages: [
      { url: Assets.mariagnese0, caption: "Fashion-Inspired Storytelling", description: "Composizione split-screen che unisce prodotto e lifestyle in un unico frame narrativo." },
      { url: Assets.mariagnese1, caption: "Pure Texture", description: "L'architettura rurale diventa segno grafico attraverso l'uso della luce naturale." },
      { url: Assets.mariagnese2, caption: "The Human Connection", description: "Ritratti d'autore per umanizzare il lusso e creare un legame empatico con il produttore." },
      { url: Assets.mariagnese3, caption: "Seasonal Excellence", description: "Narrazione visiva dei momenti clou del calendario siciliano, trattati con rigore estetico." }
    ],
    videos: [],
    lessonsLearned: "La riduzione del rumore visivo superfluo focalizza l'attenzione sulla qualità intrinseca del prodotto, potenziandone l'autorevolezza percepita.",
    designNote: "Esecuzione orientata ai paradigmi del 'Quiet Luxury': eleganza controllata e precisione millimetrica dei layout.",
    roleDetails: "Supervisione del passaggio stilistico verso l'estetica minimalista. Gestione e pianificazione dei set fotografici e della pulizia degli elementi grafici d'interfaccia.",
    teamSize: "Creative Lead (In collaborazione con Web Agency Emmè)",
    originalBrief: "Strutturare una strategia di contenuti per sostenere la commercializzazione delle produzioni agrumicole stagionali sui canali digitali.",
    strategicImpact: "Riposizionamento strategico dell'azienda come 'Boutique dell'Arancia'. L'introduzione del concept narrativo #fimmina ha attratto una clientela orientata all'acquisto dell'esperienza e del valore culturale del prodotto.",
    visualLegacy: "Strutturazione di un'identità visiva solida, svincolata dalle tendenze passeggere, capace di garantire una duratura consistenza di marca nel tempo.",
    category: "design"
  },
  {
    id: "in-vista-ottica",
    title: "In.Vista",
    role: "Visual Strategist & Content Creator",
    duration: "2024 - Present",
    agency: "Web Agency Emmè",
    image: Assets.imgInVistaCover,
    tech: ["Medical Branding", "Information Design", "Visual Storytelling", "Art Direction"],
    description: "Progettazione della comunicazione visiva in ambito clinico e scientifico. Traduzione della complessità chirurgica e delle tecnologie di rifrazione Zeiss in percorsi informativi chiari, rassicuranti e ad alta autorevolezza.",
    tagline: "Vedere oltre, apparire unici. 👓",
    designPhilosophy: "LA PRECISIONE CHIRURGICA INCONTRA IL DESIGN EDITORIALE. EDUCARE ALLA VISIONE ATTRAVERSO LA CHIAREZZA.",
    location: "Catania, IT",
    accent: "#0284C7", // Medical Tech Blue
    status: "Active",
    type: "Clinical Information Design",
    challenge: "Evidenziare il valore differenziante della strumentazione Zeiss e dell'équipe medica all'interno di un mercato competitivo sbilanciato sul fattore prezzo.",
    solution: "Spostamento del focus comunicativo sulla logica del 'Life-Changing Investment', implementando un linguaggio visivo rigoroso che trasmette sicurezza, innovazione e precisione.",
    performance: "Nobilitazione del Brand // Riduzione delle resistenze all'acquisto di fascia alta // Consolidamento dell'Educational Authority.",
    galleryImages: [
      { url: Assets.inVista2, caption: "Data Architecture", description: "Infografica tecnica che semplifica le tecniche laser trasformandole in geometria pura." },
      { url: Assets.imgInVistaCover, caption: "The Precision Focus", description: "Macro-fotografia dell'occhio umano come prova di eccellenza e dettaglio chirurgico." }
    ],
    videos: [],
    lessonsLearned: "Nello sviluppo di interfacce e contenuti medicali, il design deve porsi come facilitatore della comprensione, bilanciando l'innovazione estetica con la trasparenza informativa.",
    designNote: "Ottimizzazione incentrata sulla Precision Focus e sul consolidamento della fiducia del paziente (Educational Authority).",
    roleDetails: "Visual Strategist incaricata di strutturare la divulgazione del sistema tecnologico Zeiss. Sviluppo dell'architettura delle informazioni per mediare tra rigore medico e accessibilità utente.",
    teamSize: "Creative Lead (In partnership strategica con Web Agency Emmè)",
    originalBrief: "Sviluppare campagne di digital marketing volte a incrementare le prenotazioni per i percorsi di chirurgia refrattiva.",
    strategicImpact: "Salvaguardia dell'autorevolezza del centro medico tramite l'imposizione di una linea editoriale a carattere divulgativo, posizionando la struttura come punto di riferimento clinico sul territorio.",
    visualLegacy: "Realizzazione di un ecosistema di design medicale in cui la precisione millimetrica della tecnologia si riflette nella stabilità della griglia grafica.",
    category: "design"
  },
  {
    id: "sapori-siculi",
    title: "Sapori_Siculi",
    role: "Social Media Manager & Content Strategist",
    duration: "2023 - 2024",
    agency: "Web Agency Emmè",
    image: Assets.imgSaporiCover,
    logo: Assets.LogoSapori,
    tech: ["Direct Marketing", "Content Curation", "Community Management", "Grid Planning"],
    description: "Gestione del posizionamento d'immagine per un marchio multiprodotto, uniformando in un'unica narrazione la produzione enogastronomica tipica e la linea di manufatti artigianali di gioielleria.",
    tagline: "La Sicilia in un sapore, in un gesto, in un gioiello. 🍋",
    designPhilosophy: "IL DESIGN COME MOTORE DI CONVERSIONE. LA VERACITÀ SICILIANA TRADOTTA IN ORDINE VISIVO.",
    location: "Sicilia, IT",
    accent: "#059669", // Verde Smeraldo Mediterraneo
    status: "Completed",
    type: "Brand Unification Strategy",
    challenge: "Standardizzare la comunicazione di un catalogo merceologico eterogeneo (food e gioielli d'artigianato), prevenendo la frammentazione del brand ed evitando la confusione d'acquisto nell'utente finale.",
    solution: "Sviluppo di una pianificazione editoriale alternata e bilanciata, integrando fotografia di prodotto ad alta risoluzione con scatti lifestyle e composizioni tipografiche solide.",
    performance: "Ottimizzazione dei Funnel Social // Incremento delle metriche di Trust della community // Allineamento della Brand Awareness.",
    galleryImages: [
      { url: Assets.sapori1, caption: "Matericità Mediterranea", description: "Studio della luce per esaltare l'oro dell'olio extra vergine." },
      { url: Assets.sapori2, caption: "Territory Narrative", description: "Pesto Aci Trezza: il legame indissolubile tra sapore e mitologia locale." },
      { url: Assets.sapori3, caption: "Lifestyle Integration", description: "Il gioiello artigianale inserito in un contesto editoriale raffinato." },
      { url: Assets.sapori4, caption: "Seasonal Conversion", description: "Lancio del Panettone: visual ad alto impatto per massimizzare le vendite festive." }
    ],
    videos: [],
    lessonsLearned: "L'identificazione di costanti visive e cromatiche è una precondizione fondamentale per preservare la coerenza di marca in aziende con cataloghi complessi.",
    designNote: "Analisi applicata ai processi di Brand Unification e di Curated Selection aziendale.",
    roleDetails: "Responsabile della strategia di distribuzione dei contenuti e dello styling visivo, mediando costantemente tra obiettivi di performance commerciale e consolidamento dell'identità.",
    teamSize: "Creative Lead (In coordinamento con il team di sviluppo di Web Agency Emmè)",
    originalBrief: "Implementare la visibilità del catalogo prodotti sui canali di interazione sociale per sostenere le vendite dell'e-shop.",
    strategicImpact: "Conversione di una gamma di articoli disomogenei in una 'Curated Selection' coerente. L'operazione ha incrementato la percezione di valore complessiva, validando la coesistenza delle linee merceologiche.",
    visualLegacy: "Dimostrazione di come l'applicazione di una metodologia strategica possa ricondurre segmenti produttivi distanti sotto un unico DNA di brand.",
    category: "marketing" // Modificato in marketing per bilanciare il filtro dell'applicazione hub
  },
  {
    id: "interlandi-tende",
    title: "Interlandi_Tende",
    role: "Social Media Manager & Visual Specialist",
    duration: "2023 - 2024",
    agency: "Web Agency Emmè",
    image: Assets.imgInterlandiCover,
    tech: ["Content Elevation", "Visual Consistency", "Canva Pro Architecture", "Copywriting"],
    description: "Architettura e design della luce. Sviluppo dell'identità digitale per un'azienda specializzata in sistemi di schermatura solare e serramenti, convertendo il prodotto tecnico in aspirazione di lifestyle outdoor.",
    tagline: "Architetture di luce e ombra. ☀️",
    designPhilosophy: "TRASFORMARE IL LIMITE IN STILE. IL PRODOTTO STATICO DIVENTA UNA NARRAZIONE DINAMICA DI BENESSERE.",
    location: "Sicilia, IT",
    accent: "#4B5563", // Grigio Antracite Tecnico
    status: "Completed",
    type: "B2B Industrial Positioning",
    challenge: "Garantire un flusso di comunicazione costante ed elevato per prodotti a ciclo d'acquisto lungo e fortemente tecnici, operando in regime di piena autonomia creativa.",
    solution: "Strategia di Content Elevation: ingegnerizzazione di una libreria di asset grafici proprietari scalabili basata sull'evidenziazione dei benefici emozionali legati alla progettazione degli spazi esterni.",
    performance: "Preservazione della Reputazione Digitale // Consistenza e Integrità del Marchio // Continuità Operativa.",
    galleryImages: [],
    videos: [],
    lessonsLearned: "Nei mercati B2B e tecnici, la sistematicità del design rappresenta la migliore strategia di posizionamento: un framework grafico solido mantiene il marchio competitivo anche in assenza di continui aggiornamenti di catalogo.",
    designNote: "Ottimizzazione incentrata sulla pianificazione di flussi operativi autonomi e sull'elevazione qualitativa dei contenuti (Content Elevation).",
    roleDetails: "Gestione esclusiva della presenza e della distribuzione sui canali digitali. Sviluppo di un design system modulare volto a rendere la produzione degli asset efficiente e slegata da vincoli esterni.",
    teamSize: "Autonomia Operativa (Responsabilità completa sul coordinamento creativo)",
    originalBrief: "Strutturarono una programmazione periodica sui canali di comunicazione aziendali per veicolare le promozioni tecniche e i servizi di posa.",
    strategicImpact: "Prevenzione dei periodi di silenzio comunicativo e salvaguardia della 'visual dignity' di una realtà storica del territorio, tutelandone il prestigio e l'autorevolezza tecnica nei confronti della clientela aziendale e privata.",
    visualLegacy: "Certificazione di come la progettazione sistematica dei contenuti consenta di nobilitare l'esposizione di prodotti prettamente industriali, garantendo stabilità d'immagine nel lungo periodo.",
    category: "marketing"
  }
];