import React from 'react';
import './index.css';

import Navbar from './components/Navbar/Navbar';
import BackgroundImgHome from './components/Home/BackgroundImgHome';
import AboutContent from './components/About/AboutContent';
import SkillsSection from './components/Skills/SkillsSection';
//import ProjectSection from './components/ProjectCards/ProjectSection';
import Footer from './components/Footer/Footer';
import CookieBanner from './components/CookieBanner/CookieBanner';

export default function App() {
  return (
    <div className="w-full bg-[#060509] text-zinc-100 min-h-screen selection:bg-sky-500/20 selection:text-sky-200 overflow-x-hidden font-sans relative">
      
      <Navbar />

      <main className="w-full">
        <section id="home">
          <BackgroundImgHome />
        </section>

        <section id="about">
          <AboutContent />
        </section>

        <section id="skills">
          <SkillsSection />
        </section>

        {/* 
        <section id="portfolio">
          <ProjectSection />
        </section> 
        */}

        <section id="contact">
          <Footer />
        </section>
      </main>

      {/* Banner dei Cookie in overlay fisso */}
      <CookieBanner />

    </div>
  );
}