import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const Project: React.FC = () => {
  const projects = [
    {
      projectName: "Todo App",
      projectTitle: "Application Todo Moderne",
      projectImage: "/assets/todo.png",
      projectTechno: ["React", "TypeScript", "TailwindCSS"],
      gitHubUrl: "google.com",
      projectUrlDemo: "https://google.com",
    },
    {
      projectName: "Portfolio",
      projectTitle: "Portfolio Professionnel",
      projectImage: "/assets/portfolio.png",
      projectTechno: ["React", "TS", "DaisyUI"],
      gitHubUrl: "google.com",
    },
    {
      projectName: "E-commerce UI",
      projectTitle: "Interface E-commerce",
      projectImage: "/assets/shop.png",
      projectTechno: ["React", "TypeScript", "FramerMotion"],
    },
  ];

  return (
    <section className="px-6 py-16 max-w-7xl mx-auto">
      {/* Title */}
      <motion.h1
        className="text-4xl font-bold mb-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
      </motion.h1>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
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
