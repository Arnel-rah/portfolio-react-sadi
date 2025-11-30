import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const Project: React.FC = () => {
  const projects = [
    {
      projectName:
        "Application moderne de gestion de tâches avec interface intuitive et fonctionnalités avancées.",
      projectTitle: "Todo App",
      projectImage: "/assets/todo.png",
      projectTechno: ["React", "TypeScript", "Tailwind", "Node"],
      gitHubUrl: "https://github.com/username/todo-app",
      projectUrlDemo: "https://todo-app-demo.vercel.app",
    },
    {
      projectName:
        "Portfolio personnel design et responsive, construit avec des technologies modernes.",
      projectTitle: "Portfolio Professionnel",
      projectImage: "/assets/portfolio.png",
      projectTechno: ["React", "TypeScript", "Tailwind", "FramerMotion"],
      gitHubUrl: "https://github.com/username/portfolio",
      projectUrlDemo: "https://mon-portfolio.dev",
    },
    {
      projectName:
        "Dashboard analytique contenant des graphiques, statistiques, et données en temps réel.",
      projectTitle: "Analytics Dashboard",
      projectImage: "/assets/dashboard.png",
      projectTechno: ["React", "TypeScript", "Python", "PostgreSQL"],
      projectUrlDemo: "https://analytics-demo.vercel.app",
    },
  ];

  return (
    <section id="projects" className="px-6 py-20 max-w-7xl mx-auto">
      {/* Title */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Mes Projets
        </h2>

        <p className="text-gray-500 dark:text-gray-300 max-w-2xl mx-auto mt-4">
          Quelques réalisations récentes mettant en avant mes compétences techniques.
        </p>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Project;

