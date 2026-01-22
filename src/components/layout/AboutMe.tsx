import React from "react";
import { motion } from "framer-motion";
import { 
  Database, MapPin, Activity, 
  Cloud, Terminal, GitBranch
} from "lucide-react";

const AboutMe: React.FC = () => {
  const skills = [
    { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933", color: "text-green-500" },
    { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB", color: "text-blue-400" },
    { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1", color: "text-indigo-400" },
    { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED", color: "text-sky-400" },
    { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032", color: "text-orange-500" },
    { name: "Linux", icon: "https://cdn.simpleicons.org/linux/white", color: "text-white" },
    { name: "AWS", icon: "https://cdn.simpleicons.org/amazonwebservices/white", color: "text-white" },
    { name: "Terraform", icon: "https://cdn.simpleicons.org/terraform/844FBA", color: "text-purple-400" },
    { name: "Redis", icon: "https://cdn.simpleicons.org/redis/FF4438", color: "text-red-400" },
  ];

  return (
    <div className="w-full font-sans text-slate-300 px-4 md:px-0">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-indigo-500/10 rounded-xl border border-indigo-500/20">
            <Terminal className="text-indigo-500" size={24} />
          </div>
          <div className="flex flex-col">
            <h2 className="text-sm md:text-base font-mono text-indigo-500 font-bold uppercase tracking-[0.2em]">Developer_Manifest</h2>
            <p className="text-xs text-slate-500 font-mono italic text-balance">env: production_ready</p>
          </div>
        </div>
        <div className="flex items-center gap-3 self-start md:self-auto bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400">System Online</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 bg-[#0d0d0e]/80 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden flex flex-col shadow-2xl"
        >
          <div className="bg-white/5 px-6 py-4 border-b border-white/5 flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/20" />
              <div className="w-3 h-3 rounded-full bg-amber-500/20" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/20" />
            </div>
            <div className="text-xs font-mono text-slate-500 lowercase flex items-center gap-2">
                <GitBranch size={14} /> <span className="hidden sm:inline">main/</span>backend_stack.config
            </div>
          </div>

          <div className="p-6 md:p-12 grow">
            <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight mb-6 leading-tight text-balance">
              Aspiring <span className="text-indigo-400">Backend Engineer</span> focused on Infrastructure & Cloud
            </h3>
            
            <p className="text-slate-400 leading-relaxed text-base md:text-xl mb-10 font-mono">
              I build robust server-side applications and automate deployment workflows. My goal is to design scalable systems that bridge the gap between clean code and reliable cloud infrastructure.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill) => (
                <motion.div 
                  key={skill.name}
                  whileHover={{ y: -3, backgroundColor: "rgba(255,255,255,0.05)", borderColor: "rgba(99,102,241,0.3)" }}
                  className="bg-white/5 border border-white/10 p-4 md:p-5 rounded-2xl flex items-center gap-4 transition-all group w-full"
                >
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    className="w-8 h-8 md:w-10 md:h-10 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                  <span className={`text-base md:text-lg font-mono font-bold ${skill.color}`}>{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col gap-8">
          <motion.div 
            className="bg-linear-to-br from-indigo-600 to-indigo-800 rounded-3xl p-8 text-white relative overflow-hidden group shadow-lg min-h-[280px] flex flex-col justify-end"
          >
            <Cloud className="absolute -right-4 -bottom-4 opacity-20 group-hover:scale-110 transition-transform duration-700 w-32 h-32 md:w-40 md:h-40" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6">
                <Activity size={20} className="animate-pulse" />
                <span className="text-xs md:text-sm font-mono font-bold uppercase tracking-[0.2em] bg-black/20 px-3 py-1.5 rounded-lg">Vision</span>
              </div>
              <h4 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic leading-none mb-4">CLOUD <br/>NATIVE</h4>
              <p className="text-base md:text-lg opacity-90 font-mono leading-relaxed">
                Ready to manage containerized environments and CI/CD pipelines.
              </p>
            </div>
          </motion.div>

          <div className="bg-[#0d0d0e] border border-white/10 rounded-3xl p-8 flex flex-col gap-8 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Database size={20} className="text-indigo-400" />
                <span className="text-xs md:text-sm font-mono font-bold text-slate-500 uppercase tracking-widest">Environment</span>
              </div>
              <div className="flex items-center gap-2 text-indigo-500 bg-indigo-500/5 px-3 py-1 rounded-full border border-indigo-500/10 w-fit">
                <MapPin size={16} />
                <span className="text-xs font-mono font-bold tracking-tighter uppercase">Remote / Paris</span>
              </div>
            </div>
            
            <div className="space-y-4">
                <div className="flex items-center justify-between text-sm md:text-base font-mono border-b border-white/5 pb-3">
                    <span className="text-slate-500">Commitment</span>
                    <span className="text-white font-medium">Full-time</span>
                </div>
                <div className="flex items-center justify-between text-sm md:text-base font-mono">
                    <span className="text-slate-500">Availability</span>
                    <span className="text-emerald-500 font-bold">Open to Work</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;