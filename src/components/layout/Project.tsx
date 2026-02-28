import { Server, Database,Activity } from "lucide-react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
  title: "Nexus Monitor",
  description: "High-performance real-time monitoring system with a concurrent Go worker, capable of tracking hundreds of endpoints with exponential retry logic.",
  tags: ["Go", "PostgreSQL", "Docker", "React", "TypeScript"],
  status: "online",
  github: "https://github.com/Arnel-Rah/nexus-backend",
  demo: "#",
},
{
  title: "Global Edge Network",
  description: "Distributed monitoring infrastructure for edge nodes with automated failover logic and data replication.",
  tags: ["Python", "Docker", "Redis"],
  status: "deployed",
  github: "#",
  demo: "#",
},
{
  title: "UptimeGo",
  description: "Go CLI & Daemon for HTTP monitoring. Built-in Prometheus metrics, Discord alerts, and graceful shutdown support.",
  tags: ["Go", "Prometheus", "Cobra", "Docker", "Observability"],
  status: "building",
  github: "https://github.com/Arnel-Rah/uptimego",
  demo: "#",
},
{
  title: "Distributed Cache",
  description: "Session management and distributed caching system using high-performance Redis layers for Node.js microservices.",
  tags: ["Express", "Node.js", "Redis", "TypeScript"],
  status: "online",
  github: "#",
  demo: "#",
},
]

const Project = () => {
  return (
    <section className="relative w-full md:py-24 px-4 md:px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="absolute top-0 right-0 w-125 h-125 bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="relative z-10 flex flex-col gap-6 md:gap-8 mb-16 md:mb-24 border-l-4 border-indigo-500 pl-6 md:pl-10">
        <div className="flex items-center gap-3 text-indigo-400 font-mono text-[10px] md:text-xs tracking-[0.3em] font-bold">
          <span className="px-2 py-1 bg-indigo-500/20 rounded border border-indigo-500/30 shrink-0 text-indigo-300">
            CMD
          </span>
          <span className="opacity-80 animate-pulse">GET_PROJECT_REGISTRY --verbose</span>
        </div>
        
        <h2 className="text-5xl md:text-9xl font-black text-white italic tracking-tighter uppercase leading-none drop-shadow-2xl">
          Work.<span className="text-indigo-500 drop-shadow-[0_0_15px_rgba(99,102,241,0.3)]">Nodes</span>
        </h2>
        <div className="flex flex-wrap items-center gap-y-4 gap-x-8 text-slate-300 font-mono text-[10px] md:text-sm bg-white/2 border border-white/5 p-4 rounded-2xl w-fit backdrop-blur-sm">
          <div className="flex items-center gap-2 group cursor-default">
            <Database size={16} className="text-indigo-400 group-hover:scale-110 transition-transform" /> 
            <span className="font-bold tracking-tight">4 Clusters Online</span>
          </div>
          <div className="flex items-center gap-2 group cursor-default">
            <Activity size={16} className="text-emerald-400 group-hover:scale-110 transition-transform" /> 
            <span className="font-bold tracking-tight">Active Monitoring</span>
          </div>
          <div className="flex items-center gap-2 group cursor-default">
            <Server size={16} className="text-blue-400 group-hover:scale-110 transition-transform" /> 
            <span className="font-bold tracking-tight">Go Architecture</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {projects.map((p, i) => (
          <ProjectCard 
            key={i} 
            index={i}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            {...p as any}
          />
        ))}
      </div>
    </section>
  );
};

export default Project;