import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const TECH_ICONS: Record<string, { icon: string; color: string }> = {
  Python: {
    icon: "https://cdn.simpleicons.org/python/3776AB",
    color: "#3776AB",
  },
  Java: { icon: "https://cdn.simpleicons.org/openjdk/white", color: "#ffffff" },
  Express: {
    icon: "https://cdn.simpleicons.org/express/white",
    color: "#ffffff",
  },
  "Node.js": {
    icon: "https://cdn.simpleicons.org/nodedotjs/339933",
    color: "#339933",
  },
  TypeScript: {
    icon: "https://cdn.simpleicons.org/typescript/3178C6",
    color: "#3178C6",
  },
  React: { icon: "https://cdn.simpleicons.org/react/61DAFB", color: "#61DAFB" },
  "Next.js": {
    icon: "https://cdn.simpleicons.org/nextdotjs/white",
    color: "#ffffff",
  },
  Ansible: {
    icon: "https://cdn.simpleicons.org/ansible/EE0000",
    color: "#EE0000",
  },
  Stripe: {
    icon: "https://cdn.simpleicons.org/stripe/008CDD",
    color: "#008CDD",
  },
  Docker: {
    icon: "https://cdn.simpleicons.org/docker/2496ED",
    color: "#2496ED",
  },
  Terraform: {
    icon: "https://cdn.simpleicons.org/terraform/844FBA",
    color: "#844FBA",
  },
  PostgreSQL: {
    icon: "https://cdn.simpleicons.org/postgresql/4169E1",
    color: "#4169E1",
  },
  Redis: { icon: "https://cdn.simpleicons.org/redis/FF4438", color: "#FF4438" },
  MongoDB: {
    icon: "https://cdn.simpleicons.org/mongodb/47A248",
    color: "#47A248",
  },
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

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  github,
  demo,
  status,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="relative flex flex-col bg-[#0d0d0e] border border-white/10 rounded-xl overflow-hidden group shadow-2xl h-full transition-all duration-300 hover:border-indigo-500/40 hover:bg-linear-to-b hover:from-[#0d0d0e] hover:to-[#1a1a1c]"
    >
      <div className="flex items-center justify-between px-4 py-3 bg-[#161617] border-b border-white/5">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/40" />
        </div>
        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest opacity-70">
          node_v{index + 1}.0_{status}
        </span>
      </div>

      <div className="p-6 flex flex-col grow">
        <div className="flex justify-between items-start mb-6">
          <div className="p-3 bg-white/3 rounded-xl border border-white/10 group-hover:border-indigo-500/40 group-hover:bg-indigo-500/10 transition-all duration-300">
            <img
              src={
                TECH_ICONS[tags[0]]?.icon ||
                "https://cdn.simpleicons.org/code/white"
              }
              alt={tags[0]}
              className="w-8 h-8 object-contain"
            />
          </div>
          <div
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold border uppercase tracking-wider ${
              status === "online"
                ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                : status === "building"
                  ? "bg-amber-500/10 border-amber-500/20 text-amber-400"
                  : "bg-blue-500/10 border-blue-500/20 text-blue-400"
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                status === "online"
                  ? "bg-emerald-400"
                  : status === "building"
                    ? "bg-amber-400"
                    : "bg-blue-400"
              }`}
            />
            {status}
          </div>
        </div>

        <h3 className="text-xl font-bold text-white tracking-tight mb-3 group-hover:text-indigo-400 transition-colors">
          {title}
        </h3>

        <p className="text-slate-400 text-sm font-mono leading-relaxed mb-6 line-clamp-3">
          <span className="text-indigo-500/70 font-bold">$</span> {description}
        </p>

        {/* Tech Stack Row - Icons are now visible and colorful */}
        <div className="flex flex-wrap gap-4 mb-8 mt-auto">
          {tags.map((tag) => (
            <div key={tag} className="group/icon relative flex items-center">
              <img
                src={TECH_ICONS[tag]?.icon}
                alt={tag}
                className="w-5 h-5 opacity-50 grayscale group-hover/icon:grayscale-0 group-hover/icon:opacity-100 transition-all duration-300"
              />
              <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-2 py-1 bg-[#1a1a1c] border border-white/10 text-[10px] text-indigo-300 font-bold rounded opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap z-20 pointer-events-none shadow-xl">
                {tag}
              </span>
            </div>
          ))}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center gap-5 pt-5 border-t border-white/5 mt-auto">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-white hover:scale-110 transition-all duration-200"
          >
            <Github size={20} />
          </a>
          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-white hover:scale-110 transition-all duration-200"
          >
            <ExternalLink size={20} />
          </a>
          <div className="ml-auto">
            <button className="text-[11px] font-mono text-indigo-400 font-bold uppercase tracking-widest hover:text-indigo-300 transition-colors flex items-center gap-1">
              <span className="text-indigo-500/50">_</span>VIEW_LOGS
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
