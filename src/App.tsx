import React, { useState, useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/layout/HeroSection";
import Project from "./components/layout/Project";
import avatar from "../src/assets/profile.jpg";
const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<string>("home");

  const handleLinkClick = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
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
        threshold: 0.3,
        rootMargin: "-20% 0px -20% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#020617] text-white selection:bg-indigo-500/30 min-h-screen">
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none z-1" />

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

      <main className="relative z-10">
        <section
          id="home"
          className="min-h-screen flex items-center justify-center pt-20"
        >
          <div className="max-w-7xl mx-auto px-6 w-full">
            <HeroSection />
          </div>
        </section>

        <section id="works" className="py-24 px-6 max-w-7xl mx-auto">
          <Project />
        </section>

        <section id="about-me" className="py-24 px-6 max-w-7xl mx-auto">
          <div className="border-t border-white/5 pt-12">
            <h2 className="text-5xl font-bold tracking-tighter mb-8">
              ABOUT <span className="text-indigo-500">ME</span>
            </h2>
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 font-mono text-slate-400">
              <p>// Loading experiences...</p>
            </div>
          </div>
        </section>
        <section id="contacts" className="py-24 px-6 max-w-7xl mx-auto">
          <div className="bg-indigo-600 rounded-[3rem] p-12 text-center overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full -mr-20 -mt-20" />
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tighter">
              READY TO SHIP <br />
              AWESOME CODE?
            </h2>
            <button
              onClick={() => handleLinkClick("#contacts")}
              className="px-8 py-4 bg-white text-indigo-600 rounded-full font-bold hover:scale-105 transition-transform"
            >
              Let's talk!
            </button>
          </div>
        </section>
      </main>

      <footer className="py-10 text-center text-slate-500 font-mono text-xs border-t border-white/5">
        &copy; 2026 — Designed and coded with ❤️ by Arnel
      </footer>
    </div>
  );
};

export default App;
