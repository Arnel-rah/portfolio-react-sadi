import React from "react";
import { Mail, Github, Linkedin, Terminal, Command } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center px-6">
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-indigo-500/10 blur-[120px] rounded-full" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-6">
          <Terminal size={14} />
          <span className="animate-pulse">Available for apprenticeship 2026</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1]">
          <span className="text-white">Arnel is a </span>
          <span className="relative inline-block">
            <span className="text-indigo-500 italic">fullstack js</span>
            <motion.span 
              className="absolute -bottom-2 left-0 h-1 w-full bg-indigo-500/30"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1, duration: 0.8 }}
            />
          </span>
          <br />
          <span className="text-white/90">developer & </span>
          <span className="text-indigo-400 font-mono font-light italic text-3xl md:text-5xl">creative_coder</span>
        </h1>

        <p className="mt-8 text-lg md:text-xl font-mono text-slate-400 max-w-2xl leading-relaxed">
          <span className="text-indigo-500">const</span> <span className="text-white">profile</span> = {"{"} <br />
          <span className="ml-4">mission: <span className="text-emerald-400">"Build scalable apps where logic meets design"</span>,</span> <br />
          <span className="ml-4">stack: [<span className="text-amber-400">"React", "Node.js", "TypeScript"</span>]</span> <br />
          {"}"};
        </p>

        <div className="mt-12 flex flex-wrap gap-6 items-center">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:sadiarnel145@gmail.com"
            className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-xl text-sm transition-colors hover:bg-indigo-500 hover:text-white"
          >
            <Mail size={18} />
            Contact Me
          </motion.a>
          <div className="flex items-center gap-5 text-slate-400">
            <a href="https://github.com/Arnel-rah" target="_blank" className="hover:text-white transition-colors flex items-center gap-2 text-sm font-mono">
              <Github size={20} /> /github
            </a>
            <a href="https://linkedin.com" target="_blank" className="hover:text-white transition-colors flex items-center gap-2 text-sm font-mono">
              <Linkedin size={20} /> /linkedin
            </a>
          </div>
        </div>

        <div className="mt-16 flex items-center gap-3 text-slate-600 font-mono text-xs border-t border-white/5 pt-8">
          <Command size={14} />
          <span>Press <kbd className="bg-white/5 px-1.5 py-0.5 rounded border border-white/10">cmd + k</kbd> to search projects</span>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;