import React from "react";
import { motion } from "framer-motion";import { 
  Terminal, Globe, Cpu, Coffee, 
  Code2, ExternalLink, ShieldCheck, 
  Zap, Layers
} from "lucide-react";

const AboutMe: React.FC = () => {
  const skills = [
    { name: "React", icon: <Zap size={14} />, color: "text-sky-400", bg: "bg-sky-400/10", border: "border-sky-400/20" },
    { name: "TypeScript", icon: <ShieldCheck size={14} />, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { name: "Node.js", icon: <Cpu size={14} />, color: "text-green-500", bg: "bg-green-500/10", border: "border-green-500/20" },
    { name: "Next.js", icon: <Layers size={14} />, color: "text-white", bg: "bg-white/10", border: "border-white/20" },
    { name: "Tailwind", icon: <Code2 size={14} />, color: "text-cyan-400", bg: "bg-cyan-400/10", border: "border-cyan-400/20" },
    { name: "PostgreSQL", icon: <Terminal size={14} />, color: "text-indigo-400", bg: "bg-indigo-400/10", border: "border-indigo-400/20" },
  ];

  return (
    <div className="w-full font-sans overflow-hidden">
      {/* SECTION HEADER */}
      <div className="flex items-center gap-3 mb-8 md:mb-12 px-2">
        <div className="p-2 bg-indigo-500/10 rounded-lg shrink-0">
          <Terminal className="text-indigo-500" size={24} />
        </div>
        <h2 className="text-2xl md:text-5xl font-black tracking-tighter text-white uppercase italic">
          System.<span className="text-indigo-500">info</span>()
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 bg-[#0d1117] border border-[#30363d] rounded-2xl overflow-hidden shadow-2xl flex flex-col"
        >
          <div className="bg-[#161b22] px-4 py-3 border-b border-[#30363d] flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              <Code2 size={14} className="text-slate-500" />
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">About_Me.md</span>
            </div>
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/20" />
            </div>
          </div>

          <div className="p-6 md:p-10 grow">
            <div className="flex items-center gap-3 mb-6">
              <Globe size={20} className="text-indigo-400 shrink-0" />
              <h3 className="text-xl md:text-2xl font-bold text-white">Fullstack JS Explorer</h3>
            </div>
            
            <p className="text-slate-400 leading-relaxed text-sm md:text-base mb-8">
              Based in the digital world, I specialize in the 
              <span className="text-indigo-400 font-bold"> JavaScript / TypeScript </span> 
              ecosystem. I build scalable architectures where high-performance code meets intuitive UI/UX.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {skills.map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className={`${skill.bg} ${skill.color} ${skill.border} px-3 py-2.5 rounded-xl border font-mono text-[11px] font-bold flex items-center gap-2.5 hover:bg-opacity-20 transition-all cursor-default group`}
                >
                  <span className="group-hover:scale-110 transition-transform">{skill.icon}</span>
                  {skill.name}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col gap-6">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-indigo-600 rounded-2xl p-6 text-white relative overflow-hidden group shadow-lg shadow-indigo-500/20 flex-1 min-h-[180px]"
          >
            <div className="absolute -right-6 -bottom-6 opacity-10 group-hover:scale-110 transition-transform duration-500">
              <Cpu size={140} />
            </div>
            <div className="relative z-10">
              <span className="text-[10px] font-mono font-black uppercase tracking-[0.2em] bg-black/20 px-2 py-1 rounded-md">
                Status: 2026 Open
              </span>
              <div className="mt-8">
                <h4 className="text-3xl font-black italic leading-none uppercase tracking-tighter">Apprentice</h4>
                <p className="text-[11px] mt-3 opacity-80 font-mono leading-relaxed max-w-[200px]">
                  Looking for a professional tech stack to grow and contribute to real-world production code.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#111] border border-white/5 rounded-2xl p-6 flex flex-col justify-center gap-4"
          >
            <div className="flex items-center gap-2 text-indigo-400">
              <Coffee size={16} />
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500">Mentality</span>
            </div>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed italic border-l-2 border-indigo-500 pl-4">
              "Simple is better than complex. Clean code is not written, it's refined."
            </p>
            <div className="flex items-center gap-2 text-indigo-500 font-mono text-[9px] font-bold mt-2">
              <ExternalLink size={10} />
              <span>PARIS / REMOTE</span>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default AboutMe;