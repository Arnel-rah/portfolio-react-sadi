import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Command, Menu, X, Cpu, Github, User } from "lucide-react";

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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 pointer-events-none">
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`
          flex items-center justify-between w-full max-w-4xl px-3 py-2
          pointer-events-auto rounded-full border transition-all duration-500
          ${scrolled 
            ? "bg-black/60 backdrop-blur-xl border-white/10 shadow-2xl" 
            : "bg-transparent border-transparent"
          }
        `}
      >
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => onLinkClick("#home")}
        >
          <div className="relative">
            <img 
              src={profileImage} 
              alt={profileName}
              className="w-9 h-9 rounded-full object-cover border-2 border-indigo-500/50 group-hover:border-indigo-500 transition-colors"
            />
            <div className="absolute inset-0 rounded-full bg-indigo-500/20 animate-pulse group-hover:hidden" />
          </div>
          <div className="hidden sm:flex flex-col leading-none">
            <span className="text-white text-[13px] font-bold tracking-tight">{profileName}</span>
            <span className="text-[10px] text-indigo-400 font-mono">Available_2026</span>
          </div>
        </div>
        <div className="hidden md:flex items-center bg-white/5 rounded-full px-1 py-1 border border-white/5">
          {links.map((link) => {
            const isActive = currentSection === link.href.substring(1);
            return (
              <button
                key={link.href}
                onClick={() => onLinkClick(link.href)}
                className={`
                  relative px-5 py-2 text-[11px] font-bold uppercase tracking-widest transition-all
                  ${isActive ? "text-white" : "text-slate-400 hover:text-white"}
                `}
              >
                <span className="relative z-10">{link.label}</span>
                {isActive && (
                  <motion.div 
                    layoutId="active-pill"
                    className="absolute inset-0 bg-indigo-600 rounded-full shadow-[0_0_15px_rgba(79,70,229,0.4)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <a 
            href="https://github.com/Arnel-rah" 
            className="p-2.5 text-slate-400 hover:text-white transition-colors hidden sm:block"
          >
            <Github size={18} />
          </a>
          <button 
            onClick={() => setOpen(!open)}
            className="md:hidden p-2.5 bg-white/5 hover:bg-white/10 rounded-full text-white transition-all"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
          <button 
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-white text-black text-[11px] font-black rounded-full hover:bg-indigo-500 hover:text-white transition-all active:scale-95"
          >
            <Command size={14} />
            CONTACT
          </button>
        </div>
      </motion.div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="absolute top-20 left-4 right-4 p-4 bg-black/90 backdrop-blur-2xl border border-white/10 rounded-3xl md:hidden pointer-events-auto"
          >
            <div className="flex flex-col gap-2">
              {links.map((link, i) => (
                <button
                  key={link.href}
                  onClick={() => { onLinkClick(link.href); setOpen(false); }}
                  className="flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-indigo-500/20 text-white transition-all group"
                >
                  <span className="font-bold tracking-tight">{link.label}</span>
                  <div className="p-2 bg-white/5 rounded-lg group-hover:bg-indigo-500 transition-colors">
                    <ArrowIcon index={i} />
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const ArrowIcon = ({ index }: { index: number }) => {
  const icons = [<User size={16} />, <Cpu size={16} />, <Command size={16} />];
  return icons[index % icons.length];
};

export default Navbar;