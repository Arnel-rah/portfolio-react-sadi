import { Server, Database, Activity, Cpu } from "lucide-react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Fullstack Cloud Starter",
    description: "Production-ready template with Go backend API, Next.js frontend, and Docker Compose. Built for learning and quick starts.",
    tags: ["Go", "Next.js", "Docker", "PostgreSQL", "TypeScript"],
    status: "building" as const,  // ✅ "building" | "online" | "deployed"
    github: "https://github.com/Arnel-rah/fullstack-cloud-starter",
    demo: "#",
  },
  {
    title: "UptimeGo",
    description: "CLI & daemon for HTTP monitoring. Built-in health checks, Discord alerts, and graceful shutdown. Pure Go.",
    tags: ["Go", "Docker", "Prometheus", "Observability"],
    status: "building" as const,
    github: "https://github.com/Arnel-rah/uptimego",
    demo: "#",
  },
  {
    title: "Task Manager API",
    description: "REST API in Go with JWT auth, PostgreSQL, and Redis caching. Ready to be dockerized and deployed.",
    tags: ["Go", "PostgreSQL", "Redis", "JWT", "Docker"],
    status: "building" as const,
    github: "#",
    demo: "#",
  },
  {
    title: "Cloud Dashboard",
    description: "Next.js dashboard consuming Go API. Real-time stats, dark mode, and responsive design.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Go"],
    status: "building" as const,
    github: "#",
    demo: "#",
  },
];

const Project = () => {
  return (
    <section className="relative w-full py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 md:w-125 md:h-125 bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 flex flex-col gap-6 md:gap-8 mb-12 md:mb-20 border-l-4 border-indigo-500 pl-5 md:pl-10">
        <div className="flex items-center gap-3 text-indigo-400 font-mono text-[10px] md:text-xs tracking-[0.3em] font-bold">
          <span className="px-2 py-1 bg-indigo-500/20 rounded border border-indigo-500/30 shrink-0 text-indigo-300">
            CMD
          </span>
          <span className="opacity-80 animate-pulse">GET_PROJECT_REGISTRY --verbose</span>
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white italic tracking-tighter uppercase leading-none drop-shadow-2xl">
          Code.<span className="text-indigo-500 drop-shadow-[0_0_15px_rgba(99,102,241,0.3)]">Nodes</span>
        </h2>

        <div className="flex flex-wrap items-center gap-y-3 gap-x-6 text-slate-300 font-mono text-[9px] md:text-sm bg-white/5 border border-white/10 p-3 md:p-4 rounded-2xl w-fit backdrop-blur-sm">
          <div className="flex items-center gap-2 group cursor-default">
            <Database size={14} className="md:w-4 md:h-4 text-indigo-400 group-hover:scale-110 transition-transform" />
            <span className="font-bold tracking-tight text-xs md:text-sm">Go + PostgreSQL</span>
          </div>
          <div className="flex items-center gap-2 group cursor-default">
            <Activity size={14} className="md:w-4 md:h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
            <span className="font-bold tracking-tight text-xs md:text-sm">Docker Compose</span>
          </div>
          <div className="flex items-center gap-2 group cursor-default">
            <Server size={14} className="md:w-4 md:h-4 text-blue-400 group-hover:scale-110 transition-transform" />
            <span className="font-bold tracking-tight text-xs md:text-sm">REST APIs</span>
          </div>
          <div className="flex items-center gap-2 group cursor-default">
            <Cpu size={14} className="md:w-4 md:h-4 text-purple-400 group-hover:scale-110 transition-transform" />
            <span className="font-bold tracking-tight text-xs md:text-sm">Cloud Ready</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 items-stretch">
        {projects.map((p, i) => (
          <ProjectCard
            key={i}
            index={i}
            title={p.title}
            description={p.description}
            tags={p.tags}
            status={p.status}
            github={p.github}
            demo={p.demo}
          />
        ))}
      </div>
    </section>
  );
};

export default Project;
