import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Sparkles, History, Layout } from "lucide-react";

const Project: React.FC = () => {
  const [activeTab, setActiveTab] = useState("All");

  const projects = [
    {
      projectName: "Application moderne de gestion de tâches avec interface intuitive.",
      projectTitle: "Todo App",
      projectImage: "/assets/todo.png",
      projectTechno: ["React", "TypeScript", "Tailwind", "Node"],
      gitHubUrl: "https://github.com/username/todo-app",
      projectUrlDemo: "https://todo-app-demo.vercel.app",
    },
  ];

  const tabs = [
    { id: "All", icon: <Layout size={16} />, label: "Tous les projets" },
    { id: "React", icon: <Code2 size={16} />, label: "React" },
    { id: "Fullstack", icon: <Sparkles size={16} />, label: "Fullstack" },
  ];

  return (
    <section id="projects" className="px-6 py-24 max-w-7xl mx-auto bg-[#050505]">
      
      {/* Header Style Front-end */}
      <div className="mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-blue-500 font-mono text-sm mb-4"
        >
          <span className="px-2 py-1 bg-blue-500/10 rounded">02.</span>
          <span>work_in_progress</span>
        </motion.div>
        
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8">
          MES RÉALISATIONS<span className="text-blue-600">.</span>
        </h2>

        {/* Custom GitHub Tabs (Plus moderne) */}
        <div className="flex flex-wrap items-center gap-2 p-1 bg-[#111] border border-white/5 rounded-xl w-fit">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                relative flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all
                ${activeTab === tab.id ? "text-white" : "text-gray-500 hover:text-gray-300"}
              `}
            >
              {activeTab === tab.id && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute inset-0 bg-[#222] rounded-lg border border-white/10"
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{tab.icon}</span>
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode='popLayout'>
          {projects.map((project, index) => (
            <motion.div
              layout
              key={project.projectTitle}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* GitHub Contributions Hint (Style Front-end) */}
      <motion.div 
        className="mt-20 p-8 border border-dashed border-white/10 rounded-2xl flex flex-col items-center text-center"
        whileHover={{ borderColor: "rgba(59, 130, 246, 0.5)" }}
      >
        <div className="p-3 bg-blue-500/10 rounded-full text-blue-500 mb-4">
          <History size={24} />
        </div>
        <h3 className="text-white font-bold text-lg mb-2">Curieux d'en voir plus ?</h3>
        <p className="text-gray-400 text-sm max-w-sm mb-6">
          Mon activité quotidienne se passe sur GitHub. Allez jeter un œil à mes derniers commits et contributions Open Source.
        </p>
        <a 
          href="https://github.com/ton-profil"
          className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300"
        >
          Visiter mon profil GitHub
        </a>
      </motion.div>
    </section>
  );
};

export default Project;