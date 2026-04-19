import React, { useState, useEffect, useCallback } from "react";
import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/layout/HeroSection";
import Project from "./components/layout/Project";
import avatar from "../src/assets/profil.png";
import AboutMe from "./components/layout/AboutMe";

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<string>("home");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  const handleLinkClick = useCallback((href: string) => {
    const id = href.replace("#", "");
    const target = document.getElementById(id);
    if (target) {
      const offset = 100;
      const elementPosition = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  }, []);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === "sending") return;

    setStatus("sending");

    setTimeout(() => {
      setStatus("success");
      const subject = encodeURIComponent("Backend & Infra Inquiry");
      const body = encodeURIComponent(`Hi Arnel, I'm interested in working with you.\n\nMy contact: ${email}`);
      window.location.href = `mailto:sadiarnel145@gmail.com?subject=${subject}&body=${body}`;

      setTimeout(() => {
        setStatus("idle");
        setEmail("");
      }, 3000);
    }, 800);
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
      { threshold: 0.2, rootMargin: "-10% 0px -70% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#020617] text-white min-h-screen selection:bg-indigo-500/30 selection:text-white overflow-x-hidden antialiased">
      {/* Background Decor */}
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none z-0" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-indigo-500/5 via-transparent to-transparent pointer-events-none z-0" />

      <Navbar
        profileImage={avatar}
        profileName="Arnel"
        links={[
          { label: "Home", href: "#home" },
          { label: "Projects", href: "#projects" },
          { label: "About", href: "#about" },
          { label: "Contact", href: "#contact" },
        ]}
        onLinkClick={handleLinkClick}
        currentSection={currentSection}
      />

      <main className="relative z-10">
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 md:pt-0 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
            <HeroSection />
          </div>
        </section>

        <section id="projects" className="py-20 scroll-mt-24">
          <Project />
        </section>

        <section id="about" className="max-w-7xl mx-auto px-4 md:px-6 py-20 scroll-mt-24">
          <AboutMe />
        </section>

        <section id="contact" className="max-w-6xl mx-auto px-4 md:px-6 pb-20 md:pb-32 scroll-mt-24">
          <div className="relative bg-[#0a0a0b]/80 backdrop-blur-xl border border-white/5 rounded-4xl md:rounded-[3rem] p-8 md:p-14 overflow-hidden shadow-2xl">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-600/20 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-mono mb-6 uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                  Open for internships · 2026
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[0.9] mb-6">
                  LET'S BUILD <br /> <span className="text-slate-500 italic">TOGETHER.</span>
                </h2>
                <p className="text-slate-400 font-mono text-xs md:text-sm mb-8 max-w-sm">
                  Looking for a Backend Go or Cloud Infrastructure role? Let's connect.
                </p>

                <form onSubmit={handleContactSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    required
                    type="email"
                    value={email}
                    autoComplete="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm font-mono focus:outline-none focus:border-indigo-500/50 transition-all text-white disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className={`px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all active:scale-95 disabled:cursor-not-allowed ${
                      status === "success"
                        ? "bg-emerald-500 text-white"
                        : "bg-white text-black hover:bg-indigo-600 hover:text-white"
                    }`}
                  >
                    {status === "idle" ? "Send Message" : status === "sending" ? "Sending..." : "Check Mail!"}
                  </button>
                </form>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8 lg:pl-12 lg:border-l border-white/10">
                <div>
                  <h4 className="text-[10px] font-mono text-indigo-400 uppercase mb-3 tracking-widest">Email</h4>
                  <a href="mailto:sadiarnel145@gmail.com" className="text-lg font-bold text-white hover:text-indigo-400 transition-colors">
                    sadiarnel145@gmail.com
                  </a>
                </div>
                <div>
                  <h4 className="text-[10px] font-mono text-indigo-400 uppercase mb-3 tracking-widest">Social</h4>
                  <div className="flex gap-6">
                    <a href="https://linkedin.com/in/arnel-rah" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-300 hover:text-white font-bold transition-all underline decoration-indigo-500/50 underline-offset-4">LinkedIn</a>
                    <a href="https://github.com/Arnel-rah" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-300 hover:text-white font-bold transition-all underline decoration-indigo-500/50 underline-offset-4">GitHub</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 md:py-12 text-center text-slate-500 font-mono text-[10px] md:text-xs border-t border-white/5 bg-[#020617]/50 backdrop-blur-md">
        © 2026 — Backend & Infrastructure · Madagascar
      </footer>
    </div>
  );
};

export default App;
