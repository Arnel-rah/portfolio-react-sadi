import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

// Composants d'icônes SVG pour les technologies
const TechIcons = {
  React: () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4">
      <path d="M12 18.1778L14.6192 16.9222L15.2384 14.7556H17.0476L16.6192 12.4889L18.4286 11.3333L20 14.7556C21.3333 13.7111 22.6667 11.3333 22.6667 8.94444C22.6667 6.55556 21.3333 4.17778 20 3.13333L18.4286 6.55556L16.6192 5.4L17.0476 3.13333H15.2384L14.6192 0.966667L12 -0.288889L9.38077 0.966667L8.76154 3.13333H6.95231L7.38077 5.4L5.57143 6.55556L4 3.13333C2.66667 4.17778 1.33333 6.55556 1.33333 8.94444C1.33333 11.3333 2.66667 13.7111 4 14.7556L5.57143 11.3333L7.38077 12.4889L6.95231 14.7556H8.76154L9.38077 16.9222L12 18.1778Z" fill="#61DAFB" stroke="#61DAFB" strokeWidth="0.5"/>
      <path d="M12 11.3333C13.4728 11.3333 14.6667 10.1394 14.6667 8.66667C14.6667 7.19391 13.4728 6 12 6C10.5272 6 9.33333 7.19391 9.33333 8.66667C9.33333 10.1394 10.5272 11.3333 12 11.3333Z" fill="#61DAFB"/>
    </svg>
  ),
  JavaScript: () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4">
      <path fill="#F7DF1E" d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.656.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.337-.404-.482-.586-.621-.378-.27-.93-.402-1.417-.327-.644.05-1.202.403-1.538 1.002-.595 1.074-.407 2.703.589 3.418.83.59 2.053.76 3.006.895.12.172.209.487.006 1.013-.268.687-.952 1.033-1.827 1.033-1.2 0-1.68-.602-1.914-1.314l-1.677.787c.33.964 1.2 1.723 2.54 1.723 1.518 0 2.404-.762 2.61-1.92zm-8.127-4.03c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.656.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.337-.404-.482-.586-.621-.378-.27-.93-.402-1.417-.327-.644.05-1.202.403-1.538 1.002-.595 1.074-.407 2.703.589 3.418.83.59 2.053.76 3.006.895.12.172.209.487.006 1.013-.268.687-.952 1.033-1.827 1.033-1.2 0-1.68-.602-1.914-1.314l-1.677.787c.33.964 1.2 1.723 2.54 1.723 1.518 0 2.404-.762 2.61-1.92z"/>
    </svg>
  ),
  TypeScript: () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4">
      <path fill="#3178C6" d="M0 12v12h24V0H0v12zm14.434-1.909H9.442v8.646H7.352V10.09H2.292V8.364h12.142v1.727zm5.231 8.646V8.364h5.065c1.062 0 1.871.206 2.429.617.558.411.836 1.001.836 1.769 0 .768-.287 1.364-.86 1.788-.574.424-1.391.636-2.452.636h-2.847v5.091h-2.171zm2.171-6.818h2.502c.514 0 .9-.1 1.159-.301.258-.201.387-.495.387-.882 0-.387-.124-.674-.371-.861-.247-.187-.625-.28-1.133-.28h-2.544v2.324z"/>
    </svg>
  ),
  Python: () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4">
      <path fill="#3776AB" d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  ),
  Node: () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4">
      <path fill="#339933" d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  ),
  HTML: () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4">
      <path fill="#E34F26" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
    </svg>
  ),
  CSS: () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4">
      <path fill="#1572B6" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
    </svg>
  ),
  Tailwind: () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4">
      <path fill="#06B6D4" d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z"/>
    </svg>
  ),
  MongoDB: () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4">
      <path fill="#47A248" d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"/>
    </svg>
  )
};

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
  const getTechIcon = (tech: string) => {
    const IconComponent = TechIcons[tech as keyof typeof TechIcons];
    return IconComponent ? <IconComponent /> : <div className="w-4 h-4 bg-gray-400 rounded-full" />;
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="
        group relative bg-white dark:bg-gray-900
        rounded-2xl shadow-lg overflow-hidden
        border border-gray-200 dark:border-gray-800
        hover:shadow-2xl transition-all duration-500
        hover:border-blue-500/30 dark:hover:border-blue-400/30
      "
    >
      {/* Image avec overlay au hover */}
      <div className="relative w-full h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
        <img
          src={projectImage}
          alt={projectName}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Badge en overlay */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1.5 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-xs font-medium text-gray-800 dark:text-white rounded-full border border-white/20">
            Projet
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Titre et description */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
            {projectTitle}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-2">
            {projectName}
          </p>
        </div>

        {/* Technologies avec icônes */}
        <div className="mb-6">
          <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wide">
            Technologies utilisées
          </p>
          <div className="flex flex-wrap gap-2">
            {projectTechno.map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="
                  flex items-center gap-2 px-3 py-2
                  bg-gray-50 dark:bg-gray-800
                  text-gray-700 dark:text-gray-300
                  text-xs font-medium rounded-lg
                  border border-gray-200 dark:border-gray-700
                  transition-all duration-300 hover:shadow-md
                  hover:border-blue-200 dark:hover:border-blue-800
                "
              >
                {getTechIcon(tech)}
                <span>{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-800">
          {projectUrlDemo && (
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={projectUrlDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center justify-center gap-2 flex-1
                px-4 py-3 rounded-xl text-sm font-semibold
                bg-blue-600 text-white hover:bg-blue-700
                transition-all duration-300 shadow-md hover:shadow-lg
              "
            >
              <ExternalLink size={16} />
              Voir le projet
            </motion.a>
          )}

          {gitHubUrl && (
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={gitHubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center justify-center gap-2 flex-1
                px-4 py-3 rounded-xl text-sm font-semibold
                bg-gray-900 text-white hover:bg-gray-800
                transition-all duration-300 shadow-md hover:shadow-lg
                border border-gray-800
              "
            >
              <Github size={16} />
              Code source
            </motion.a>
          )}
        </div>
      </div>

      {/* Effet de brillance subtile */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
};

export default ProjectCard;