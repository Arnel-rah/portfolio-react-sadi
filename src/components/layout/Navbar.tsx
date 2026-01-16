import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GitBranch, Terminal, FileCode } from "lucide-react";

export interface NavbarProps {
  profileImage: string;
  profileName: string;
  links: { label: string; href: string }[];
  onLinkClick: (href: string) => void;
  currentSection: string;
}

const Navbar: React.FC<NavbarProps> = ({
  profileImage,
  profileName,
  links,
  onLinkClick,
  currentSection,
}) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const branchName = currentSection ? `feat/${currentSection}` : "main";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 transition-all duration-500 ${scrolled ? "top-2" : "top-6"}`}>
      <div className={`relative flex items-center justify-between px-4 py-2 rounded-2xl border transition-all duration-500 ${
          scrolled 
            ? "bg-[#020617]/80 backdrop-blur-xl border-indigo-500/20 shadow-xl" 
            : "bg-transparent border-transparent"
        }`}>
                <div className="flex items-center gap-4">
          <div className="relative group cursor-pointer" onClick={() => onLinkClick("#home")}>
            <img 
              src={profileImage} 
              className="w-10 h-10 rounded-xl object-cover border border-indigo-500/30" 
              alt="avatar" 
            />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
            </span>
          </div>

          <div className="hidden sm:flex flex-col">
            <h1 className="text-white font-bold text-sm tracking-tight">{profileName}</h1>
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-md">
              <GitBranch size={10} />
              <span className="uppercase tracking-tighter">{branchName}</span>
            </div>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const isActive = currentSection === link.href.substring(1);
            return (
              <button
                key={link.href}
                onClick={() => onLinkClick(link.href)}
                className={`relative px-4 py-2 text-xs font-mono transition-colors rounded-lg ${
                  isActive ? "text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                <span className="relative z-10">{link.label.toLowerCase()}()</span>
                {isActive && (
                  <motion.div 
                    layoutId="pill"
                    className="absolute inset-0 bg-indigo-500/20 border border-indigo-500/30 rounded-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            );
          })}
        </div>
        <div className="flex items-center gap-3">
          <a 
            href="/cv.pdf" 
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-[11px] font-mono font-bold rounded-xl transition-all"
          >
            <FileCode size={14} />
            <span className="hidden sm:inline">GET_CV.sh</span>
          </a>

          <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
            <Terminal size={24} />
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 p-4 bg-[#020617]/95 backdrop-blur-2xl border border-indigo-500/20 rounded-2xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => { onLinkClick(link.href); setOpen(false); }}
                  className="py-3 text-left px-4 font-mono text-slate-300 hover:bg-indigo-500/10 rounded-lg transition-colors"
                >
                  {`> ${link.label}`}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;