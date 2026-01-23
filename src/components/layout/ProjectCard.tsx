import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Terminal, ChevronRight } from "lucide-react";

const TECH_ICONS: Record<string, { icon: string; color: string }> = {
  Python: { icon: "https://cdn.simpleicons.org/python/3776AB", color: "#3776AB" },
  Java: { icon: "https://cdn.simpleicons.org/openjdk/white", color: "#ffffff" },
  Express: { icon: "https://cdn.simpleicons.org/express/white", color: "#ffffff" },
  "Node.js": { icon: "https://cdn.simpleicons.org/nodedotjs/339933", color: "#339933" },
  TypeScript: { icon: "https://cdn.simpleicons.org/typescript/3178C6", color: "#3178C6" },
  React: { icon: "https://cdn.simpleicons.org/react/61DAFB", color: "#61DAFB" },
  "Next.js": { icon: "https://cdn.simpleicons.org/nextdotjs/white", color: "#ffffff" },
  Ansible: { icon: "https://cdn.simpleicons.org/ansible/EE0000", color: "#EE0000" },
  Stripe: { icon: "https://cdn.simpleicons.org/stripe/008CDD", color: "#008CDD" },
  Docker: { icon: "https://cdn.simpleicons.org/docker/2496ED", color: "#2496ED" },
  Terraform: { icon: "https://cdn.simpleicons.org/terraform/844FBA", color: "#844FBA" },
  PostgreSQL: { icon: "https://cdn.simpleicons.org/postgresql/4169E1", color: "#4169E1" },
  Redis: { icon: "https://cdn.simpleicons.org/redis/FF4438", color: "#FF4438" },
  MongoDB: { icon: "https://cdn.simpleicons.org/mongodb/47A248", color: "#47A248" },
};

export interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string;
  status: "online" | "building" | "deployed";
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tags, github, demo, status, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="relative flex flex-col bg-[#0f1115] border border-white/10 rounded-2xl overflow-hidden group shadow-2xl h-full transition-all duration-500 hover:border-indigo-500/50"
    >
      <div className="flex items-center justify-between px-5 py-3 bg-white/3 border-b border-white/10 shrink-0">
        <div className="flex gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
        </div>
        <div className="flex items-center gap-2 text-[10px] font-mono text-slate-300 font-bold uppercase">
          <Terminal size={12} className="text-indigo-400" />
          node_v{index + 1}.0
        </div>
      </div>
      <div className="p-6 md:p-8 flex flex-col grow">
        <div className="flex justify-between items-start mb-6 shrink-0">
          <div className="p-3 bg-white/5 rounded-2xl border border-white/10 group-hover:border-indigo-500/50 transition-all">
            <img
              src={TECH_ICONS[tags[0]]?.icon || "https://cdn.simpleicons.org/code/white"}
              alt={tags[0]}
              className="w-8 h-8 object-contain brightness-110"
            />
          </div>
          
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-[10px] font-mono font-black border uppercase ${
              status === "online" ? "bg-emerald-500/20 border-emerald-500/30 text-emerald-300" :
              status === "building" ? "bg-amber-500/20 border-amber-500/30 text-amber-300" :
              "bg-blue-500/20 border-blue-500/30 text-blue-300"
            }`}>
            <span className={`w-2 h-2 rounded-full animate-pulse ${
                status === "online" ? "bg-emerald-400" :
                status === "building" ? "bg-amber-400" : "bg-blue-400"
              }`} 
            />
            {status}
          </div>
        </div>

        <h3 className="text-xl font-black text-white tracking-tight mb-3 group-hover:text-indigo-400 transition-colors shrink-0">
          {title}
        </h3>
        <p className="text-slate-300 text-sm font-mono leading-relaxed mb-6 line-clamp-3 grow">
          <span className="text-indigo-400 font-black mr-2">❯</span>
          {description}
        </p>

        <div className="flex flex-wrap gap-4 mb-6 shrink-0">
          {tags.map((tag) => (
            <div key={tag} className="group/icon relative flex items-center">
              <img
                src={TECH_ICONS[tag]?.icon}
                alt={tag}
                className="w-5 h-5 opacity-70 grayscale group-hover/icon:grayscale-0 group-hover/icon:opacity-100 transition-all"
              />
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between pt-6 border-t border-white/10 mt-auto shrink-0">
          <div className="flex gap-3">
            <a href={github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href={demo} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <ExternalLink size={20} />
            </a>
          </div>
          
          <button className="text-[10px] font-mono text-indigo-300 font-black uppercase tracking-widest flex items-center gap-1 group/btn">
            Logs <ChevronRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;