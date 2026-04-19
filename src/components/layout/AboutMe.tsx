import React from "react";
import { motion } from "framer-motion";
import {
  Database, MapPin, Activity,
  Cloud, Terminal, GitBranch
} from "lucide-react";

import {
  SiGo, SiRust, SiPostgresql,
  SiDocker, SiGit, SiLinux,
  SiAmazonwebservices, SiTerraform, SiRedis,
  SiNextdotjs, SiTypescript, SiKubernetes
} from "react-icons/si";

const AboutMe: React.FC = () => {
  const skills = [
    { name: "Go", icon: SiGo, color: "text-sky-400" },
    { name: "Rust", icon: SiRust, color: "text-orange-500" },
    { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-400" },
    { name: "Docker", icon: SiDocker, color: "text-sky-400" },
    { name: "Terraform", icon: SiTerraform, color: "text-purple-400" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-indigo-400" },
    { name: "Redis", icon: SiRedis, color: "text-red-400" },
    { name: "Git", icon: SiGit, color: "text-orange-500" },
    { name: "Linux", icon: SiLinux, color: "text-white" },
    { name: "AWS", icon: SiAmazonwebservices, color: "text-orange-400" },
  ];

  return (
    <div className="w-full font-sans text-slate-300 px-4 md:px-0 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 md:mb-10">
        <div className="flex items-center gap-4">
          <div className="p-2.5 md:p-3 bg-indigo-500/10 rounded-xl border border-indigo-500/20">
            <Terminal className="text-indigo-500" size={20} />
          </div>
          <div className="flex flex-col">
            <h2 className="text-xs md:text-base font-mono text-indigo-500 font-bold uppercase tracking-[0.2em]">Developer_Manifest</h2>
            <p className="text-[10px] md:text-xs text-slate-500 font-mono italic">env: production_ready</p>
          </div>
        </div>
        <div className="flex items-center gap-3 self-start md:self-auto bg-white/5 px-4 py-2 rounded-full border border-white/10">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-slate-400">System Online</span>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 bg-[#0d0d0e]/80 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden flex flex-col shadow-2xl"
        >
          <div className="bg-white/5 px-5 py-3 border-b border-white/5 flex items-center justify-between">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/20" />
            </div>
            <div className="text-[10px] font-mono text-slate-500 lowercase flex items-center gap-2">
              <GitBranch size={12} /> <span className="hidden xs:inline">main/</span>backend_infra_stack
            </div>
          </div>

          <div className="p-6 md:p-10 lg:p-12 grow">
            <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-6 leading-snug">
              Backend <span className="text-indigo-400">Engineer</span> focused on Infrastructure & Cloud
            </h3>

            <p className="text-slate-400 leading-relaxed text-sm md:text-lg lg:text-xl mb-10 font-mono">
              I build robust server-side applications in <span className="text-sky-400">Go</span> and <span className="text-orange-500">Rust</span>,
              containerize them with <span className="text-sky-400">Docker</span>, and automate cloud deployments.
            </p>

            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {skills.map((skill) => {
                const IconComponent = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    whileHover={{ y: -3, backgroundColor: "rgba(255,255,255,0.05)", borderColor: "rgba(99,102,241,0.3)" }}
                    className="bg-white/5 border border-white/10 p-3 rounded-xl flex items-center gap-3 transition-all group"
                  >
                    <IconComponent
                      className={`text-lg md:text-xl grayscale group-hover:grayscale-0 transition-all duration-300 ${skill.color}`}
                    />
                    <span className={`text-xs md:text-sm font-mono font-bold ${skill.color}`}>{skill.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col gap-6 md:gap-8">
          <motion.div
            className="bg-linear-to-br from-indigo-600 to-indigo-800 rounded-3xl p-6 md:p-8 text-white relative overflow-hidden group shadow-lg min-h-55 md:min-h-70 flex flex-col justify-end"
          >
            <Cloud className="absolute -right-4 -top-4 opacity-10 group-hover:scale-110 transition-transform duration-700 w-32 h-32 md:w-40 md:h-40" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <Activity size={18} className="animate-pulse" />
                <span className="text-[10px] md:text-xs font-mono font-bold uppercase tracking-[0.2em] bg-black/20 px-2 py-1 rounded">Vision</span>
              </div>
              <h4 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic leading-none mb-3">CLOUD <br/>NATIVE</h4>
              <p className="text-xs md:text-sm opacity-90 font-mono">
                Go · Rust · Docker · K8s
              </p>
            </div>
          </motion.div>

          {/* Status Card */}
          <div className="bg-[#0d0d0e] border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col gap-6 shadow-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Database size={18} className="text-indigo-400" />
                <span className="text-[10px] md:text-xs font-mono font-bold text-slate-500 uppercase tracking-widest">Status</span>
              </div>
              <div className="flex items-center gap-2 text-indigo-500 bg-indigo-500/5 px-2.5 py-1 rounded-full border border-indigo-500/10">
                <MapPin size={14} />
                <span className="text-[10px] font-mono font-bold uppercase">Madagascar</span>
              </div>
            </div>

            <div className="space-y-3">
                <div className="flex items-center justify-between text-xs md:text-sm font-mono border-b border-white/5 pb-2">
                    <span className="text-slate-500">Contract</span>
                    <span className="text-white">Internship / Junior</span>
                </div>
                <div className="flex items-center justify-between text-xs md:text-sm font-mono">
                    <span className="text-slate-500">Available</span>
                    <span className="text-emerald-500 font-bold uppercase tracking-tighter">Immediate</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
