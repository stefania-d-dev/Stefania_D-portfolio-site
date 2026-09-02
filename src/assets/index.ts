// src/assets/index.ts

// 1. IMPORTAZIONE FILE REALI CON NOMI UNICI
import heroConceptFile from './Projects/ArrediItaliani/arredi-hero.webp';
import imgArrediCoverFile from './Projects/Arredi-italiani-browser-mockup.webp';

// 2. DEFINIZIONE OGGETTO ASSETS (Per code-archive.ts e CaseStudy.tsx)
const Assets = {
  // Proprietà piatte per code-archive.ts
  ArrediFullPage: heroConceptFile,
  ArrediDetailUI: heroConceptFile,
  ArrediResponsive: heroConceptFile,
  ArrediLighthouse: heroConceptFile,
  imgArrediCover: imgArrediCoverFile,
  heroConcept: heroConceptFile,
  
  // Struttura nidificata per CaseStudy.tsx
  arredi: {
    heroConcept: heroConceptFile,
    gutenbergBackend: heroConceptFile, 
  }
};

export default Assets;

// 3. EXPORT NOMINATI 
export const heroConcept = heroConceptFile;
export const imgArrediCover = imgArrediCoverFile;

// --- 1. PROGETTI CODE ---
export { default as LogoArredi } from './Projects/Loghi/LogoArredi.webp';
export { default as imgSoulfarmCover } from './Projects/Soulfarm-browser-mockup.webp';
export { default as imgFarmaciaCover } from './Projects/Farmacia-santrovaso-browser-mockup.webp';
export { default as imgNationalCover } from './Projects/nationalautomotive-mockup.webp';
export { default as imgDevFestCover } from './Projects/devfest-app-mockup.webp';
export { default as imgMoscaCover } from './Projects/MoscaMobili-browser-mockup.webp';
export { default as imgPortfolioCover } from './projects/portfolio-meta.webp';
export { default as imgFidesCover } from './projects/fides-recovery-hub-mockup.webp';

// --- 2. PROGETTI DESIGN ---
export { default as imgBonaccorsoCover } from './Projects/BonaccorsoBrand/design_project_1.webp';
export { default as imgSanoCover } from './Projects/SanoSiciliano/Sano3.webp';
export { default as imgAnimoCover } from './Projects/AnimoSiciliano/Animo0.webp';
export { default as imgMariagneseCover } from './Projects/LaMariagnese/Mariagnese1.webp';
export { default as imgInterlandiCover } from './Projects/InterlandiTende/InterlandiCover.webp';
export { default as imgInVistaCover } from './Projects/InVista/Invista1.webp';
export { default as imgSaporiCover } from './Projects/SaporiSiculi/Sapori1.webp';

// --- 3. LOGHI ---
export { default as LogoFides } from './Projects/Loghi/Logofides.webp';
export { default as LogoSoulfarm } from './Projects/Loghi/LogoSoulfarm.webp';
export { default as LogoNational } from './Projects/Loghi/Logo_national.webp';
export { default as LogoMosca } from './Projects/Loghi/LogoMoscaMobili.webp';
export { default as LogoDevFest } from './Projects/Loghi/LogoDevFestCT.webp';
export { default as LogoFarmacia } from './Projects/Loghi/LogoFarmaciaSantrovaso.webp';
export { default as LogoAnimo } from './Projects/Loghi/LogoAnimoSiciliano.webp';
export { default as LogoBonaccorso } from './Projects/Loghi/LogoBonaccorso.webp';
export { default as LogoMariagnese } from './Projects/Loghi/LogoMariagnese.webp';
export { default as LogoSano } from './Projects/Loghi/LogoSano.webp';
export { default as LogoInVista } from './Projects/Loghi/logoInVista.webp';
export { default as LogoSapori } from './Projects/Loghi/LogoSaporiSiculi.webp';

// --- 4. GALLERY & ASSET SECONDARI ---
export { default as dfpWelcome } from './Projects/DevFestPassport/dfpWelcome.webp';
export { default as dfpLog } from './Projects/DevFestPassport/dfpLog.webp';
export { default as passportVideo } from './Projects/DevFestPassport/passportVideo.mp4';
export { default as national1 } from './Projects/national1.webp';
export { default as nationalCard } from './Projects/national-card.webp';
export { default as frontend } from './Projects/ArrediItaliani/arredi-frontend-detail.webp';
export { default as backend } from './Projects/ArrediItaliani/arredi-hero-concept.webp';
export { default as gutenberg } from './Projects/ArrediItaliani/arredi-gutenberg-backend.webp';
export { default as sano1 } from './Projects/SanoSiciliano/Sano1.webp';
export { default as sano2 } from './Projects/SanoSiciliano/Sano2.webp';
export { default as sano3 } from './Projects/SanoSiciliano/Sano3.webp';
export { default as sano4 } from './Projects/SanoSiciliano/Sano4.webp';
export { default as sano5 } from './Projects/SanoSiciliano/Sano5.webp';
export { default as sano6 } from './Projects/SanoSiciliano/Sano6.webp';
export { default as sano7 } from './Projects/SanoSiciliano/Sano7.webp';
export { default as sano8 } from './Projects/SanoSiciliano/Sano8.webp';
export { default as sano9 } from './Projects/SanoSiciliano/Sano9.webp';
export { default as animo0 } from './Projects/AnimoSiciliano/Animo0.webp';
export { default as animo1 } from './Projects/AnimoSiciliano/Animo1.webp';
export { default as animo2 } from './Projects/AnimoSiciliano/Animo2.webp';
export { default as animo3 } from './Projects/AnimoSiciliano/Animo3.webp';
export { default as animo4 } from './Projects/AnimoSiciliano/Animo4.mp4';
export { default as animo5 } from './Projects/AnimoSiciliano/Animo5.mp4';
export { default as animo6 } from './Projects/AnimoSiciliano/Animo6.mp4';
export { default as mariagnese0 } from './Projects/LaMariagnese/Mariagnese0.webp';
export { default as mariagnese1 } from './Projects/LaMariagnese/Mariagnese1.webp';
export { default as mariagnese2 } from './Projects/LaMariagnese/Mariagnese2.webp';
export { default as mariagnese3 } from './Projects/LaMariagnese/Mariagnese3.webp';
export { default as bonaccorso1 } from './Projects/BonaccorsoBrand/Bonaccorso1.webp';
export { default as bonaccorso2 } from './Projects/BonaccorsoBrand/Bonaccorso2.webp';
export { default as bonaccorso3 } from './Projects/BonaccorsoBrand/Bonaccorso3.webp';
export { default as inVista1 } from './Projects/InVista/Invista1.webp';
export { default as inVista2 } from './Projects/InVista/Invista2.webp';
export { default as sapori1 } from './Projects/SaporiSiculi/Sapori1.webp';
export { default as sapori2 } from './Projects/SaporiSiculi/Sapori2.webp';
export { default as sapori3 } from './Projects/SaporiSiculi/Sapori3.webp';
export { default as sapori4 } from './Projects/SaporiSiculi/Sapori4.webp';

