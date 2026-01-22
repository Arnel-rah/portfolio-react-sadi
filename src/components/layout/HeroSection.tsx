import React from "react";
import { Mail, Github, Linkedin, Cloud, Server, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-fit md:min-h-[90vh] flex flex-col justify-center px-4 md:px-10 overflow-hidden py-12 md:py-0">
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl z-10"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/5 border border-blue-500/20 text-blue-400 text-[10px] md:text-xs font-mono mb-6 md:mb-8 w-fit">
          <Cloud size={14} className="shrink-0" />
          <span className="uppercase tracking-wider">
            <span className="hidden sm:inline">Focus: </span>
            <span className="animate-pulse">Backend & Cloud Infrastructure 2026</span>
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-[0.95] md:leading-[0.9] mb-6 md:mb-8">
          <span className="text-white block tracking-tight">BACKEND</span>
          <span className="relative inline-block">
            <span className="text-indigo-500 italic uppercase">Engineer</span>
            <motion.span 
              className="absolute -bottom-1 md:-bottom-2 left-0 h-1 md:h-2 w-full bg-indigo-500/30"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1, duration: 0.8 }}
            />
          </span>
          <br className="hidden sm:block" />
          <span className="text-white/40 block sm:inline mt-2 sm:mt-0">INFRA & </span>
          <span className="text-blue-400 font-mono font-light italic text-2xl sm:text-5xl md:text-6xl block sm:inline">
            cloud_architect
          </span>
        </h1>

        <div className="relative group max-w-xl">
          <div className="absolute -inset-1 bg-linear-to-r from-blue-500/20 to-indigo-500/20 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative p-5 md:p-8 bg-[#0a0a0a]/90 backdrop-blur-sm border border-white/5 rounded-xl font-mono text-xs md:text-base leading-relaxed overflow-hidden">
            <div className="flex gap-2 mb-4 border-b border-white/5 pb-2">
              <Server size={14} className="text-slate-500" />
              <span className="text-slate-500 text-[10px]">arnel-infra-config.yml</span>
            </div>
            <p className="space-y-1">
              <span className="text-blue-500">infrastructure:</span> <br />
              <span className="ml-4 md:ml-6 text-slate-400">cloud: <span className="text-emerald-400">"AWS / Docker"</span></span> <br />
              <span className="ml-4 md:ml-6 text-slate-400">backend: <span className="text-amber-400">["Node.js", "Python", "SQL"]</span></span> <br />
              <span className="ml-4 md:ml-6 text-slate-400">goal: <span className="text-indigo-400">"High_Scalability"</span></span>
            </p>
          </div>
        </div>

        <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-6 sm:items-center">
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="mailto:sadiarnel145@gmail.com"
            className="group flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-black rounded-full text-[10px] md:text-xs uppercase tracking-widest transition-all hover:bg-blue-600 hover:text-white"
          >
            <Mail size={16} />
            Connect to Server
            <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <div className="flex items-center justify-center sm:justify-start gap-6">
            <a href="https://github.com/Arnel-rah" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-[10px] md:text-xs font-mono font-bold uppercase">
              <Github size={18} /> .git
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-[10px] md:text-xs font-mono font-bold uppercase">
              <Linkedin size={18} /> .network
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;