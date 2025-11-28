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
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      className="
        bg-white/10 backdrop-blur-xl border border-white/20
        dark:bg-gray-900/30 dark:border-gray-800
        rounded-2xl shadow-xl overflow-hidden
        transition-all duration-300 hover:shadow-2xl
      "
    >
      {/* Image */}
      <div className="relative w-full h-48 overflow-hidden rounded-t-2xl">
        <img
          src={projectImage}
          alt={projectName}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col h-full">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {projectTitle}
        </h3>

        <p className="text-gray-500 dark:text-gray-300 text-sm mt-1">
          {projectName}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-4">
          {projectTechno.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-white/20 dark:bg-gray-700/40 text-gray-800 dark:text-gray-200 text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-5">
          {projectUrlDemo && (
            <a
              href={projectUrlDemo}
              target="_blank"
              className="
                flex items-center px-3 py-2 rounded-xl text-sm
                bg-blue-600 text-white hover:bg-blue-700 transition
              "
            >
              <ExternalLink size={16} className="mr-1" />
              Demo
            </a>
          )}

          {gitHubUrl && (
            <a
              href={gitHubUrl}
              target="_blank"
              className="
                flex items-center px-3 py-2 rounded-xl text-sm
                bg-gray-900 text-white hover:bg-gray-800 transition
              "
            >
              <Github size={16} className="mr-1" />
              Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
