import { Server, Database, Network } from "lucide-react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Global Edge Network",
    description: "High-performance monitoring system for edge nodes with automated failover logic.",
    tags: ["Python", "Docker", "Redis"],
    status: "deployed",
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=800"
  },
  {
    title: "Java Banking API",
    description: "High-security financial microservice featuring seamless Stripe payment integration.",
    tags: ["Java", "Stripe", "PostgreSQL"],
    status: "online",
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-155066931-4365d14bab8c?q=80&w=800"
  },
  {
    title: "Express Middleware",
    description: "Distributed caching system and session management using high-performance Redis layers.",
    tags: ["Express", "Node.js", "Redis"],
    status: "online",
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800"
  },
  {
    title: "Infra Monitoring",
    description: "Real-time system log analysis and container health monitoring with Python and MongoDB.",
    tags: ["Python", "Docker", "MongoDB"],
    status: "building",
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800"
  }
];

const Project = () => {
  return (
    <section className="w-full py-12 md:py-24 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="flex flex-col gap-4 md:gap-6 mb-12 md:mb-20 border-l-2 border-indigo-500 pl-4 md:pl-8">
        <div className="flex items-center gap-3 text-indigo-500 font-mono text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.4em]">
          <span className="p-1 bg-indigo-500/10 rounded shrink-0">CMD</span>
          <span className="truncate">GET_PROJECT_REGISTRY --verbose</span>
        </div>
        
        <h2 className="text-4xl md:text-8xl font-black text-white italic tracking-tighter uppercase leading-none">
          Work.<span className="text-indigo-500">Nodes</span>
        </h2>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 text-slate-500 font-mono text-[10px] md:text-xs">
          <div className="flex items-center gap-2">
            <Database size={14} className="text-indigo-500/50" /> 
            <span>4 Clusters Found</span>
          </div>
          <div className="flex items-center gap-2">
            <Network size={14} className="text-indigo-500/50" /> 
            <span>100% Uptime</span>
          </div>
          <div className="flex items-center gap-2">
            <Server size={14} className="text-indigo-500/50" /> 
            <span>AWS / Linux Env</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {projects.map((p, i) => (
          <ProjectCard 
            key={i} 
            index={i}
            {...p as any}
          />
        ))}
      </div>
    </section>
  );
};

export default Project;