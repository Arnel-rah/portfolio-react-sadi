import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
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
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className="
        group 
        bg-[#0d0d0d] 
        border border-[#1a1a1a]
        rounded-xl 
        overflow-hidden 
        hover:border-[#00ff9d] 
        transition-all duration-300
      "
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={projectImage}
          alt={projectName}
          className="w-full h-full object-cover opacity-90 
                     transition-all duration-500 group-hover:opacity-100"
        />
      </div>

      {/* Content */}
      <div className="p-5 font-mono">
        <h3 className="text-xl font-semibold text-white mb-1">
          {projectTitle}
        </h3>

        <p className="text-sm text-gray-400 mb-4">
          {projectName}
        </p>

        {/* Techno badges */}
        <div className="flex flex-wrap gap-2 mb-5">
          {projectTechno.map((tech, idx) => (
            <span
              key={idx}
              className="
                px-3 py-1 text-xs 
                rounded-md 
                bg-[#111] 
                text-[#00ff9d] 
                border border-[#1f1f1f]
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          {projectUrlDemo && (
            <a
              href={projectUrlDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex-1 flex items-center justify-center gap-2 
                text-sm px-4 py-2 rounded-lg 
                border border-[#1f1f1f]
                text-white 
                hover:border-[#00ff9d] hover:text-[#00ff9d]
                transition
              "
            >
              <ExternalLink size={16} /> Demo
            </a>
          )}

          {gitHubUrl && (
            <a
              href={gitHubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex-1 flex items-center justify-center gap-2 
                text-sm px-4 py-2 rounded-lg 
                border border-[#1f1f1f]
                text-white 
                hover:border-[#00ff9d] hover:text-[#00ff9d]
                transition
              "
            >
              <Github size={16} /> Code
            </a>
          )}
        </div>
      </div>

      {/* Glow on hover */}
      <div
        className="
        absolute inset-0 pointer-events-none 
        opacity-0 group-hover:opacity-10 
        bg-[#00ff9d]
        transition duration-500
      "
      />
    </motion.div>
  );
};

export default ProjectCard;
