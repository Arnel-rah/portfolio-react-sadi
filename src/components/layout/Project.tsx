import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const Project: React.FC = () => {
  const projects = [
    {
      projectName: "Application de gestion de tâches moderne avec interface intuitive et fonctionnalités avancées de productivité.",
      projectTitle: "Todo App",
      projectImage: "/assets/todo.png",
      projectTechno: ["React", "TypeScript", "Tailwind", "Node"],
      gitHubUrl: "https://github.com/username/todo-app",
      projectUrlDemo: "https://todo-app-demo.vercel.app",
    },
    {
      projectName: "Portfolio personnel développé avec les dernières technologies pour présenter mes projets et compétences.",
      projectTitle: "Portfolio Professionnel",
      projectImage: "/assets/portfolio.png",
      projectTechno: ["React", "TypeScript", "Tailwind", "FramerMotion"],
      gitHubUrl: "https://github.com/username/portfolio",
      projectUrlDemo: "https://mon-portfolio.dev",
    },
    {
      projectName: "Interface e-commerce moderne avec panier fonctionnel et système de paiement intégré.",
      projectTitle: "Boutique en ligne",
      projectImage: "/assets/shop.png",
      projectTechno: ["React", "JavaScript", "CSS", "MongoDB"],
      gitHubUrl: "https://github.com/username/ecommerce-ui",
      projectUrlDemo: "https://boutique-demo.netlify.app",
    },
    {
      projectName: "Application de chat en temps réel avec websockets et interface responsive.",
      projectTitle: "Chat App Réaltime",
      projectImage: "/assets/chat.png",
      projectTechno: ["React", "Node", "JavaScript", "WebSocket"],
      gitHubUrl: "https://github.com/username/chat-app",
    },
    {
      projectName: "Dashboard analytique avec visualisation de données et métriques en temps réel.",
      projectTitle: "Analytics Dashboard",
      projectImage: "/assets/dashboard.png",
      projectTechno: ["React", "TypeScript", "Python", "PostgreSQL"],
      projectUrlDemo: "https://analytics-demo.vercel.app",
    },
    {
      projectName: "Application mobile de suivi fitness avec calcul de calories et planning d'entraînement.",
      projectTitle: "Fitness Tracker",
      projectImage: "/assets/fitness.png",
      projectTechno: ["React", "JavaScript", "CSS", "Firebase"],
      gitHubUrl: "https://github.com/username/fitness-app",
      projectUrlDemo: "https://fitness-tracker.expo.app",
    },
  ];

  return (
    <section id="projects" className="px-6 py-20 max-w-7xl mx-auto">
      {/* En-tête de section */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Mes Projets
        </motion.h2>
        <motion.p
          className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Découvrez une sélection de mes réalisations, allant du développement web 
          aux applications interactives, mettant en valeur mon expertise technique 
          et ma créativité.
        </motion.p>
        
        {/* Indicateur visuel */}
        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </motion.div>

      {/* Grille des projets */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.9 },
              visible: { 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }
              },
            }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>

      {/* Call-to-action */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          Intéressé par une collaboration ou souhaitez-vous voir plus de projets ?
        </p>
        <motion.a
          href="#contact"
          className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Me Contacter</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Project;