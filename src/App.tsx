import React, { useState, useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/layout/HeroSection";
import Project from "./components/layout/Project";
import avatar from "../src/assets/profil.png";
import AboutMe from "./components/layout/AboutMe";

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<string>("home");

  const handleLinkClick = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const elementPosition = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "-10% 0px -10% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#020617] text-white min-h-screen selection:bg-indigo-500/30 overflow-x-hidden">
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none z-0" />

      <Navbar
        profileImage={avatar}
        profileName="Arnel"
        links={[
          { label: "Home", href: "#home" },
          { label: "Works", href: "#works" },
          { label: "About", href: "#about-me" },
          { label: "Contact", href: "#contacts" },
        ]}
        onLinkClick={handleLinkClick}
        currentSection={currentSection}
      />

      <main className="relative z-10 space-y-12 md:space-y-24">
        <section
          id="home"
          className="min-h-[80vh] md:min-h-screen flex items-center justify-center pt-20 md:pt-24"
        >
          <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
            <HeroSection />
          </div>
        </section>

        <section id="works" className="">
          <Project />
        </section>

        <section id="about-me" className="max-w-7xl mx-auto px-4 md:px-6 md:py-12">            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6 md:mb-10 uppercase text-center md:text-left">
              ABOUT <span className="text-indigo-500">ME</span>
            </h2>
              <AboutMe />
        </section>

        <section id="contacts" className="max-w-7xl mx-auto px-4 md:px-6 pb-12 md:pb-24">
          <div className="bg-indigo-600 rounded-4xl md:rounded-[3rem] p-8 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-indigo-500/20">
            <div className="absolute top-0 right-0 w-48 h-48 md:w-80 md:h-80 bg-white/10 blur-3xl rounded-full -mr-16 -mt-16 pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-6xl font-black mb-6 md:mb-8 tracking-tighter text-white leading-tight">
                READY TO SHIP <br className="hidden md:block" />
                AWESOME CODE?
              </h2>
              <button className="px-8 py-3 md:px-10 md:py-4 bg-white text-indigo-700 rounded-full font-bold text-base md:text-lg hover:bg-indigo-50 hover:scale-105 transition-all shadow-xl">
                Let's talk!
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 md:py-12 text-center text-slate-500 font-mono text-[10px] md:text-xs border-t border-white/5 bg-[#020617]/50 backdrop-blur-md">
        &copy; 2026 — Designed and coded with ❤️ by Arnel
      </footer>
    </div>
  );
};

export default App;