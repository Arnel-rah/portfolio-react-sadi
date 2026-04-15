import React from "react";
import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden">

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 md:gap-4 mb-8 md:mb-12"
        >
          <span className="h-px w-8 md:w-12 bg-indigo-500/50" />
          <span className="text-indigo-400 font-mono text-[8px] sm:text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold">
            Open for internships · 2026
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-[12vw] sm:text-[10vw] md:text-[8vw] font-medium leading-[0.9] sm:leading-[0.85] tracking-[-0.03em] sm:tracking-[-0.04em] text-white mb-6 md:mb-10">
            Arnel Rah<span className="text-indigo-500">.</span><br />
            <span className="text-white/40 italic font-light text-[8vw] sm:text-[6vw] md:text-[5vw]">Backend & Infrastructure</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-2xl mb-12 md:mb-16"
        >
          <p className="text-slate-400 text-base sm:text-lg md:text-2xl leading-relaxed font-light">
            I build <span className="text-white font-normal">backends in Go</span> and
            ship them with <span className="text-indigo-400 font-mono italic">Docker</span>.
            <br className="hidden sm:block" />
            Interfaces in Next.js when needed.
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-8 md:gap-12 pt-8 md:pt-12 border-t border-white/10">
          <motion.a
            whileHover={{ x: 10 }}
            href="mailto:sadiarnel145@gmail.com"
            className="flex items-center gap-3 md:gap-4 text-white group no-underline"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-indigo-600 group-hover:border-indigo-600 transition-all duration-300 shadow-lg group-hover:shadow-indigo-500/20">
              <Mail size={18} className="md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex flex-col">
              <span className="text-[8px] md:text-[10px] text-indigo-400 font-mono font-bold uppercase tracking-widest">Contact</span>
              <span className="text-xs md:text-sm uppercase tracking-widest font-black">Start a conversation</span>
            </div>
            <ArrowRight size={14} className="md:w-4 md:h-4 text-indigo-500 group-hover:translate-x-2 transition-transform" />
          </motion.a>

          <div className="flex items-center gap-6 md:gap-8">
            <SocialLink href="https://github.com/Arnel-rah" icon={<Github size={18} className="md:w-5 md:h-5" />} label="GitHub" />
            <SocialLink href="#" icon={<Linkedin size={18} className="md:w-5 md:h-5" />} label="LinkedIn" />
          </div>
        </div>
      </div>

      {/* Scrolling tags - responsive text size */}
      <div className="absolute bottom-4 md:bottom-8 left-0 w-full overflow-hidden opacity-10 pointer-events-none">
        <div className="flex whitespace-nowrap animate-infinite-scroll gap-10 md:gap-20 text-[8px] md:text-[10px] font-mono text-white uppercase tracking-[0.3em] md:tracking-[0.5em]">
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
    <div className="p-1.5 md:p-2 group-hover:bg-white/5 rounded-lg transition-colors">
      {icon}
    </div>
    <span className="text-[8px] md:text-[10px] uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 hidden sm:inline-block">
      {label}
    </span>
  </a>
);

export default HeroSection;
