import React from "react";
import { Github, ArrowUpRight, Code2 } from "lucide-react";
import { motion } from "framer-motion";

export interface ProjectCardProps {
  projectName: string;
  projectTechno: string[];
  projectImage: string;
  projectTitle: string;
  gitHubUrl?: string;
  projectUrlDemo?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectImage,
  projectName,
  projectTechno,
  projectTitle,
  gitHubUrl,
  projectUrlDemo,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative flex flex-col bg-[#020617]/50 border border-white/5 rounded-2xl overflow-hidden hover:border-indigo-500/30 transition-all duration-500 shadow-2xl"
    >
      <div className="relative h-60 overflow-hidden">
        <img
          src={projectImage}
          alt={projectTitle}
          className="w-full h-full object-cover  transition-all duration-700 ease-in-out"
        />
        
        <div className="absolute inset-0 bg-linear-to-t from-[#020617] via-[#020617]/20 to-transparent opacity-90" />
        
        <div className="absolute top-4 right-4 flex flex-wrap gap-2 justify-end max-w-[70%]">
          {projectTechno.map((tech, i) => (
            <span 
              key={i} 
              className="px-2.5 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-lg text-[9px] text-indigo-300 font-mono font-bold uppercase tracking-wider shadow-xl"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="p-6 relative z-10 -mt-12">
        <div className="flex justify-between items-start mb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-indigo-500 font-mono text-[10px] font-black uppercase tracking-[0.2em]">
              <Code2 size={12} />
              <span>Project_Dev</span>
            </div>
            <h3 className="text-2xl font-black text-white tracking-tight group-hover:text-indigo-400 transition-colors">
              {projectTitle}
            </h3>
          </div>
          
          {gitHubUrl && (
            <motion.a 
              whileHover={{ scale: 1.1, rotate: 5 }}
              href={gitHubUrl} 
              className="p-2 bg-white/5 rounded-xl border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
            >
              <Github size={20} />
            </motion.a>
          )}
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2 font-medium">
          {projectName}
        </p>

        <div className="pt-4 border-t border-white/5">
          <a
            href={projectUrlDemo}
            target="_blank"
            className="group/btn inline-flex items-center gap-3 px-5 py-2.5 bg-indigo-600/10 hover:bg-indigo-600 text-indigo-400 hover:text-white border border-indigo-500/20 rounded-xl text-xs font-black transition-all duration-300 w-full justify-center"
          >
            EXECUTE_PREVIEW.exe
            <ArrowUpRight size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>

      <div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  );
};

export default ProjectCard;