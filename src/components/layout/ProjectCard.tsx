import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const TECH_ICONS: Record<string, { icon: string; color: string }> = {
  "Python": { icon: "https://cdn.simpleicons.org/python/3776AB", color: "#3776AB" },
  "Java": { icon: "https://cdn.simpleicons.org/openjdk/white", color: "#ffffff" },
  "Express": { icon: "https://cdn.simpleicons.org/express/white", color: "#ffffff" },
  "Node.js": { icon: "https://cdn.simpleicons.org/nodedotjs/339933", color: "#339933" },
  "TypeScript": { icon: "https://cdn.simpleicons.org/typescript/3178C6", color: "#3178C6" },
  "React": { icon: "https://cdn.simpleicons.org/react/61DAFB", color: "#61DAFB" },
  "Next.js": { icon: "https://cdn.simpleicons.org/nextdotjs/white", color: "#ffffff" },
  // AWS uses the 'amazonwebservices' slug
  "AWS": { icon: "https://cdn.simpleicons.org/amazonwebservices/FF9900", color: "#FF9900" },
  "Ansible": { icon: "https://cdn.simpleicons.org/ansible/EE0000", color: "#EE0000" },
  "Stripe": { icon: "https://cdn.simpleicons.org/stripe/008CDD", color: "#008CDD" },
  "Docker": { icon: "https://cdn.simpleicons.org/docker/2496ED", color: "#2496ED" },
  "Terraform": { icon: "https://cdn.simpleicons.org/terraform/844FBA", color: "#844FBA" },
  "PostgreSQL": { icon: "https://cdn.simpleicons.org/postgresql/4169E1", color: "#4169E1" },
  "Redis": { icon: "https://cdn.simpleicons.org/redis/FF4438", color: "#FF4438" },
  "MongoDB": { icon: "https://cdn.simpleicons.org/mongodb/47A248", color: "#47A248" },
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
      whileHover={{ y: -5 }}
      className="relative flex flex-col bg-[#080809] border border-white/5 rounded-xl overflow-hidden group shadow-2xl h-full"
    >
      <div className="flex items-center justify-between px-4 py-2 bg-[#111] border-b border-white/5">
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-red-500/30" />
          <div className="w-2 h-2 rounded-full bg-amber-500/30" />
          <div className="w-2 h-2 rounded-full bg-emerald-500/30" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">
            {status}_node_0{index + 1}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col grow">
        <div className="flex justify-between items-start mb-6">
          <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-indigo-500/50 transition-colors">
            <img 
              src={TECH_ICONS[tags[0]]?.icon || "https://cdn.simpleicons.org/code/white"} 
              alt={tags[0]} 
              className="w-8 h-8 object-contain"
            />
          </div>
          <div className="flex flex-col items-end">
            <div className={`flex items-center gap-1.5 px-2 py-0.5 rounded border ${
              status === 'online' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-500' :
              status === 'building' ? 'bg-amber-500/10 border-amber-500/20 text-amber-500' :
              'bg-blue-500/10 border-blue-500/20 text-blue-500'
            }`}>
              <span className={`w-1 h-1 rounded-full animate-pulse ${
                status === 'online' ? 'bg-emerald-500' :
                status === 'building' ? 'bg-amber-500' : 'bg-blue-500'
              }`} />
              <span className="text-[9px] font-mono uppercase font-bold">{status}</span>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-black text-white uppercase tracking-tight mb-2 group-hover:text-indigo-400 transition-colors">
          {title}
        </h3>
        
        <p className="text-slate-400 text-xs font-mono leading-relaxed mb-6 line-clamp-2">
          <span className="text-indigo-500 font-bold">{">"}</span> {description}
        </p>
        <div className="flex items-center gap-4 mb-8 mt-auto">
          {tags.map((tag) => (
            <div key={tag} className="group/icon relative">
              <img 
                src={TECH_ICONS[tag]?.icon || "https://cdn.simpleicons.org/code/white"} 
                className="w-5 h-5 grayscale opacity-50 group-hover/icon:grayscale-0 group-hover/icon:opacity-100 transition-all cursor-help"
                alt={tag}
              />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-white text-[10px] text-black font-bold rounded opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap z-20 shadow-xl pointer-events-none">
                {tag}
              </span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-4 pt-4 border-t border-white/5">
          <a 
            href={github} 
            target="_blank" 
            rel="noreferrer" 
            className="text-slate-500 hover:text-white transition-colors"
            aria-label="GitHub Repository"
          >
            <Github size={18} />
          </a>
          <a 
            href={demo} 
            target="_blank" 
            rel="noreferrer" 
            className="text-slate-500 hover:text-white transition-colors"
            aria-label="Live Demo"
          >
            <ExternalLink size={18} />
          </a>
          <div className="ml-auto">
             <button className="text-[10px] font-mono text-indigo-500 font-bold uppercase tracking-tighter hover:underline">
               View_Logs
             </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;