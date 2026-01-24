import React, { useState, useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/layout/HeroSection";
import Project from "./components/layout/Project";
import avatar from "../src/assets/profil.png";
import AboutMe from "./components/layout/AboutMe";

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<string>("home");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  const handleLinkClick = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      const offset = 100;
      const elementPosition = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      window.location.href = `mailto:sadiarnel145@gmail.com?subject=Project Inquiry&body=Hi Arnel, I'm interested in working with you. My contact: ${email}`;
      
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
      { threshold: 0.3, rootMargin: "-20% 0px -20% 0px" }
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
        <section id="home" className="min-h-[80vh] md:min-h-screen flex items-center justify-center pt-20 md:pt-24 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
            <HeroSection />
          </div>
        </section>
        <section id="works" className="scroll-mt-24">
          <Project />
        </section>
        <section id="about-me" className="max-w-7xl mx-auto px-4 md:px-6 md:py-12 scroll-mt-24 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6 md:mb-10 uppercase">
            ABOUT <span className="text-indigo-500">ME</span>
          </h2>
          <AboutMe />
        </section>
        <section id="contacts" className="max-w-6xl mx-auto px-4 md:px-6 pb-20 md:pb-32 scroll-mt-24">
          <div className="relative bg-[#0a0a0b] border border-white/5 rounded-4xl md:rounded-[3rem] p-8 md:p-14 overflow-hidden shadow-2xl">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-600/20 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-mono mb-6 uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                  Available for new projects
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[0.9] mb-6">
                  LET'S BUILD <br /> <span className="text-slate-500 italic">TOGETHER.</span>
                </h2>
                <p className="text-slate-400 font-mono text-xs md:text-sm mb-8 max-w-sm">
                  Looking for a robust Backend or scalable infrastructure? Let's drop a message.
                </p>

                <form onSubmit={handleContactSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input 
                    required
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email" 
                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm font-mono focus:outline-none focus:border-indigo-500/50 transition-all text-white disabled:opacity-50"
                  />
                  <button 
                    type="submit"
                    className={`px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all active:scale-95 cursor-pointer ${
                      status === "success" ? "bg-emerald-500 text-white" : "bg-white text-black hover:bg-indigo-600 hover:text-white"
                    }`}
                  >
                    {status === "idle" ? "Send Invite" : status === "sending" ? "..." : "Check Mail!"}
                  </button>
                </form>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8 lg:pl-12 lg:border-l border-white/10">
                <div>
                  <h4 className="text-[10px] font-mono text-indigo-400 uppercase mb-3 tracking-widest">Email_Me</h4>
                  <a href="mailto:sadiarnel145@gmail.com" className="text-lg font-bold text-white hover:text-indigo-400 transition-colors">
                    sadiarnel145@gmail.com
                  </a>
                </div>
                <div>
                  <h4 className="text-[10px] font-mono text-indigo-400 uppercase mb-3 tracking-widest">Follow_Me</h4>
                  <div className="flex gap-4">
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-sm text-slate-300 hover:text-white font-bold transition-all underline decoration-indigo-500/50">LinkedIn</a>
                    <a href="https://github.com/Arnel-rah" target="_blank" rel="noreferrer" className="text-sm text-slate-300 hover:text-white font-bold transition-all underline decoration-indigo-500/50">GitHub</a>
                  </div>
                </div>
              </div>
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