import React from "react";
import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center px-6 sm:px-12 md:px-24 overflow-hidden">

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="h-px w-12 bg-indigo-500/50" />
          <span className="text-indigo-400 font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold">
            Open for internships · 2026
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-[13vw] sm:text-[10vw] md:text-[8vw] font-medium leading-[0.85] tracking-[-0.04em] text-white mb-10">
            Arnel Rah<span className="text-indigo-500">.</span><br />
            <span className="text-white/40 italic font-light">Backend & Infrastructure</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-slate-400 text-lg sm:text-2xl leading-relaxed font-light">
            I build <span className="text-white font-normal">backends in Go</span> and
            ship them with <span className="text-indigo-400 font-mono italic">Docker</span>.
            Interfaces in Next.js when needed.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-center gap-12 pt-12 border-t border-white/10">
          <motion.a
            whileHover={{ x: 10 }}
            href="mailto:sadiarnel145@gmail.com"
            className="flex items-center gap-4 text-white group no-underline"
          >
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-indigo-600 group-hover:border-indigo-600 transition-all duration-300 shadow-lg group-hover:shadow-indigo-500/20">
              <Mail size={20} className="group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-indigo-400 font-mono font-bold uppercase tracking-widest">Contact</span>
              <span className="text-sm uppercase tracking-widest font-black">Start a conversation</span>
            </div>
            <ArrowRight size={16} className="text-indigo-500 group-hover:translate-x-2 transition-transform" />
          </motion.a>

          <div className="flex items-center gap-8">
            <SocialLink href="https://github.com/Arnel-rah" icon={<Github size={22} />} label="GitHub" />
            <SocialLink href="#" icon={<Linkedin size={22} />} label="LinkedIn" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 w-full overflow-hidden opacity-10 pointer-events-none">
        <div className="flex whitespace-nowrap animate-infinite-scroll gap-20 text-[10px] font-mono text-white uppercase tracking-[0.5em]">
          <span>Go · Backend</span>
          <span>Docker · Containers</span>
          <span>Next.js · UI</span>
          <span>PostgreSQL</span>
          <span>TypeScript</span>
          <span>REST APIs</span>
          <span>Cloud Native</span>
          <span>Go · Backend</span>
          <span>Docker · Containers</span>
          <span>Next.js · UI</span>
        </div>
      </div>

      <style>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          display: flex;
          width: max-content;
          animation: infinite-scroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors group"
  >
    <div className="p-2 group-hover:bg-white/5 rounded-lg transition-colors">
      {icon}
    </div>
    <span className="text-[10px] uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
      {label}
    </span>
  </a>
);

export default HeroSection;
