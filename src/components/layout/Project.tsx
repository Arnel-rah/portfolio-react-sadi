import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Code2, FolderGit2, Star } from "lucide-react";

interface ProjectData {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string;
  image: string;
}

const projects: ProjectData[] = [
  {
    title: "E-Commerce OS",
    description:
      "A fullstack Next.js 14 template with Stripe integration and a custom admin dashboard.",
    tags: ["Next.js", "TypeScript", "Prisma", "Stripe"],
    github: "https://github.com",
    demo: "https://demo.com",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Task Management API",
    description:
      "Robust RESTful API with JWT authentication, role-based access control and Redis caching.",
    tags: ["Node.js", "Express", "PostgreSQL", "Redis"],
    github: "https://github.com",
    demo: "https://demo.com",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Real-time Chat App",
    description:
      "Instant messaging application using Socket.io for real-time communication and MongoDB for history.",
    tags: ["React", "Socket.io", "MongoDB", "Node.js"],
    github: "https://github.com",
    demo: "https://demo.com",
    image:
      "https://images.unsplash.com/photo-1611746435394-5005b4d92e13?q=80&w=1000&auto=format&fit=crop",
  },
];

const Project: React.FC = () => {
  return (
    <div className="w-full font-sans">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 px-2">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-indigo-500/10 rounded-lg shrink-0">
            <FolderGit2 className="text-indigo-500" size={28} />
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white uppercase italic">
            Featured.<span className="text-indigo-500">works</span>()
          </h2>
        </div>
        <p className="text-slate-500 font-mono text-xs md:text-sm italic">
          // Selection of my best fullstack contributions
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative bg-[#0d1117] border border-[#30363d] rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all duration-300 shadow-xl"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0d1117] to-transparent opacity-60" />

              <div className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-md rounded-full border border-white/10 text-amber-400">
                <Star size={14} fill="currentColor" />
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <Code2 size={16} className="text-indigo-400" />
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {project.title}
                </h3>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed mb-6 h-12 line-clamp-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono font-bold px-2 py-1 rounded bg-white/5 text-slate-300 border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                <a
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-indigo-400 transition-colors"
                >
                  <Github size={16} /> source
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-indigo-400 transition-colors"
                >
                  <ExternalLink size={16} /> live_demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Project;
