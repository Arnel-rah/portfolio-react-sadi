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
    <section className="relative w-full  md:py-24 px-4 md:px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="absolute top-0 right-0 w-125 h-125 bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 flex flex-col gap-6 md:gap-8 mb-16 md:mb-24 border-l-4 border-indigo-500 pl-6 md:pl-10">
        <div className="flex items-center gap-3 text-indigo-400 font-mono text-[10px] md:text-xs tracking-[0.3em] font-bold">
          <span className="px-2 py-1 bg-indigo-500/20 rounded border border-indigo-500/30 shrink-0 text-indigo-300">
            CMD
          </span>
          <span className="opacity-80">GET_PROJECT_REGISTRY --verbose</span>
        </div>
        
        <h2 className="text-5xl md:text-9xl font-black text-white italic tracking-tighter uppercase leading-none drop-shadow-2xl">
          Work.<span className="text-indigo-500 drop-shadow-[0_0_15px_rgba(99,102,241,0.3)]">Nodes</span>
        </h2>

        <div className="flex flex-wrap items-center gap-y-4 gap-x-8 text-slate-300 font-mono text-[10px] md:text-sm bg-white/2 border border-white/5 p-4 rounded-2xl w-fit">
          <div className="flex items-center gap-2 group cursor-default">
            <Database size={16} className="text-indigo-400 group-hover:scale-110 transition-transform" /> 
            <span className="font-bold">4 Clusters Found</span>
          </div>
          <div className="flex items-center gap-2 group cursor-default">
            <Network size={16} className="text-emerald-400 group-hover:scale-110 transition-transform" /> 
            <span className="font-bold">100% Uptime</span>
          </div>
          <div className="flex items-center gap-2 group cursor-default">
            <Server size={16} className="text-blue-400 group-hover:scale-110 transition-transform" /> 
            <span className="font-bold">AWS / Linux Env</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
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