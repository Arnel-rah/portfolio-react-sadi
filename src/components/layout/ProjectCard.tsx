import React from "react";
import { Github, ArrowUpRight } from "lucide-react";
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
      className="group relative flex flex-col bg-[#050505] border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all duration-500"
    >
      {/* Image avec Overlay Intelligent */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={projectImage}
          alt={projectName}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
        
        {/* Badge Flottant Tech */}
        <div className="absolute top-4 left-4 flex gap-2">
          {projectTechno.slice(0, 1).map((tech, i) => (
            <span key={i} className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] text-white font-medium uppercase tracking-widest">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Détails du Projet */}
      <div className="p-6 -mt-10 relative z-10">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-2xl font-bold text-white tracking-tight">
            {projectTitle}
          </h3>
          <div className="flex gap-3">
            {gitHubUrl && (
              <a href={gitHubUrl} className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
            )}
          </div>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2 font-light">
          {projectName}
        </p>

        {/* Action Button - Style Minimaliste */}
        <a
          href={projectUrlDemo}
          target="_blank"
          className="inline-flex items-center gap-2 group/btn text-sm font-bold text-white transition-all"
        >
          <span className="relative">
            VIEW PROJECT
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover/btn:w-full" />
          </span>
          <ArrowUpRight size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
        </a>
      </div>

      {/* Bordure lumineuse au survol */}
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

export default ProjectCard