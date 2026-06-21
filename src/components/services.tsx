import React from "react";
import { Cpu, Code2, Layers, Cloud } from "lucide-react";

const servicesList = [
  {
    icon: Cpu,
    title: "Custom AI Agents",
    desc: "Autonomous multi-agent frameworks and goal-directed cognitive systems built to automate complex, decision-driven workflows."
  },
  {
    icon: Layers,
    title: "AI & Model Integration",
    desc: "Connect proprietary LLMs, build custom RAG pipelines, and fine-tune domain-specific models for highly accurate business logic."
  },
  {
    icon: Code2,
    title: "Enterprise Consulting",
    desc: "Modernize legacy code, audit software architectures, and design high-concurrency systems to scale enterprise loads without downtime."
  },
  {
    icon: Cloud,
    title: "AI Ops & Infrastructure",
    desc: "Optimize inference latency, orchestrate GPU-accelerated cloud nodes, and deploy high-throughput scaling pipelines for production models."
  }
];

export function Services() {
  return (
    <section id="services" className="py-32 container max-w-7xl mx-auto relative z-10 px-4 md:px-0">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-3">// 01. CAPABILITIES</span>
          <h2 className="text-4xl md:text-5xl font-heading">Our Services</h2>
        </div>
        <p className="font-mono text-sm text-foreground/50 max-w-100">
          Production-grade engineering to deploy autonomous agents, integrate private models, and scale enterprise software.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {servicesList.map((item, index) => {
          const Icon = item.icon;
          return (
            <div 
              key={index}
              className="bg-[#262626]/20 border border-border/40 p-8 hover:border-primary/50 transition-colors duration-300 relative group [clip-path:polygon(8px_0,100%_0,100%_calc(100%_-_8px),calc(100%_-_8px)_100%,0_100%,0_8px)]"
            >
              {/* Corner accent lines */}
              <span className="absolute top-0 left-0 w-2 h-[1px] bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute top-0 left-0 w-[1px] h-2 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute bottom-0 right-0 w-2 h-[1px] bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute bottom-0 right-0 w-[1px] h-2 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="inline-flex items-center justify-center p-3 bg-primary/10 text-primary mb-6">
                <Icon size={24} />
              </div>
              <h3 className="text-xl font-mono uppercase mb-3 text-foreground">{item.title}</h3>
              <p className="font-mono text-sm text-foreground/60 leading-relaxed">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
