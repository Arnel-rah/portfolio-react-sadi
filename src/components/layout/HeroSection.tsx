import React from "react";
import { Mail, Github, Linkedin, Code2, Server, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-950 via-indigo-950/30 to-gray-950 px-5 sm:px-8 md:px-12 lg:px-16 overflow-hidden py-16 md:py-0">
      {/* Glows d'ambiance – plus discrets sur mobile */}
      <div className="absolute top-1/4 -left-32 sm:-left-20 w-64 sm:w-96 h-64 sm:h-96 bg-indigo-600/10 sm:bg-indigo-600/20 blur-3xl rounded-full pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-32 sm:-right-20 w-64 sm:w-96 h-64 sm:h-96 bg-blue-600/10 sm:bg-blue-600/20 blur-3xl rounded-full pointer-events-none animate-pulse-slow" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 w-full max-w-6xl mx-auto"
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 text-xs sm:text-sm font-mono tracking-wide mb-6 sm:mb-10 w-fit shadow-md shadow-indigo-500/10">
          <Code2 size={16} className="shrink-0" />
          <span className="uppercase font-semibold">
            Full Stack Engineer · Go & Distributed Systems
          </span>
        </div>

        {/* Titre principal – tailles responsives avec clamp */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.92] mb-6 sm:mb-10">
          <span className="text-white block">FULLSTACK</span>

          <span className="relative inline-block">
            <span className="text-indigo-400">Software</span>
            <motion.span
              className="absolute -bottom-1.5 left-0 h-1 bg-indigo-500/50"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.8, duration: 1.2 }}
            />
          </span>

          <span className="text-slate-300/80 block sm:inline mt-1 sm:mt-0 sm:ml-4">
            ENGINEER
          </span>

          <span className="block sm:inline text-blue-300/90 font-mono font-light text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-2 sm:mt-0 sm:ml-3 brightness-110">
            distributed_systems
          </span>
        </h1>

        {/* Bloc code – responsive */}
        <div className="relative group mt-8 sm:mt-12 max-w-2xl mx-auto sm:mx-0">
          <div className="absolute -inset-1.5 sm:-inset-2 bg-gradient-to-r from-indigo-600/20 to-blue-600/20 rounded-2xl blur-xl opacity-40 sm:opacity-60 group-hover:opacity-80 transition duration-700" />

          <div className="relative p-5 sm:p-7 md:p-9 bg-gray-900/80 backdrop-blur-md border border-white/8 rounded-2xl font-mono text-sm sm:text-base leading-relaxed shadow-2xl">
            <div className="flex items-center gap-2.5 mb-4 sm:mb-5 pb-3 border-b border-white/10">
              <Server size={16} className="text-indigo-400" />
              <span className="text-slate-500 text-xs sm:text-sm font-semibold">
                arnel-stack-config.yml
              </span>
            </div>

            <div className="space-y-2 sm:space-y-3 text-slate-300">
              <div>
                <span className="text-indigo-400 font-semibold">engineer:</span>
              </div>
              <div className="pl-4 sm:pl-6">
                specialized:{" "}
                <span className="text-emerald-300">"Go & Distributed Systems"</span>
              </div>
              <div className="pl-4 sm:pl-6">
                stack:{" "}
                <span className="text-amber-300">
                  ["Go", "React", "PostgreSQL", "Docker"]
                </span>
              </div>
              <div className="pl-4 sm:pl-6">
                focus:{" "}
                <span className="text-indigo-300">"Scalable_Fullstack_Products"</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA area */}
        <div className="mt-10 sm:mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10">
          <motion.a
            whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(129,140,248,0.4)" }}
            whileTap={{ scale: 0.97 }}
            href="mailto:sadiarnel145@gmail.com"
            className="group flex items-center justify-center gap-3 px-7 sm:px-9 py-4 bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-bold rounded-full text-sm sm:text-base uppercase tracking-wider shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all"
          >
            <Mail size={18} />
            Let's connect
            <ChevronRight
              size={18}
              className="group-hover:translate-x-1.5 transition-transform"
            />
          </motion.a>

          <div className="flex items-center gap-6 sm:gap-8">
            <a
              href="https://github.com/Arnel-rah"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-slate-300 hover:text-indigo-400 transition-colors text-sm font-mono font-semibold uppercase"
            >
              <Github size={20} />
              .git
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-slate-300 hover:text-indigo-400 transition-colors text-sm font-mono font-semibold uppercase"
            >
              <Linkedin size={20} />
              .network
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;