import React, { useState, useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/layout/HeroSection";


const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<string>("home");

  const handleLinkClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
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
      { threshold: 0.4 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#0f0f0f] text-neutral-content">
      <Navbar
        profileImage="../src/assets/profile.jpg"
        profileName="Arnel"
        links={[
          { label: "#home", href: "#home" },
          { label: "#works", href: "#works" },
          { label: "#about-me", href: "#about-me" },
          { label: "#contacts", href: "#contacts" },
        ]}
        onLinkClick={handleLinkClick}
        currentSection={currentSection}
      />

      <section id="home" className="pt-28">
        <div className="max-w-5xl mx-auto px-6">
          <HeroSection />
        </div>
      </section>

      <section id="works" className="min-h-screen flex items-center px-6 max-w-5xl mx-auto">
        <h2 className="text-4xl font-mono text-green-400">Works Coming Soon...</h2>
      </section>

      <section id="about-me" className="min-h-screen flex items-center px-6 max-w-5xl mx-auto">
        <h2 className="text-4xl font-mono text-green-400">About Me</h2>
      </section>

      <section id="contacts" className="min-h-screen flex items-center px-6 max-w-5xl mx-auto pb-20">
        <h2 className="text-4xl font-mono text-green-400">Contact</h2>
      </section>
    </div>
  );
};

export default App;
