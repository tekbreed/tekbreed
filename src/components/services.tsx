import React from "react";
import { Cpu, Code2, Layers, Cloud } from "lucide-react";

const servicesList = [
  {
    icon: Cpu,
    title: "AI Integration",
    desc: "Custom LLM integrations, RAG architectures, and agentic workflows tailored to optimize your operations."
  },
  {
    icon: Code2,
    title: "Custom Software",
    desc: "End-to-end full-stack development focusing on performant, reliable, and scalable web and mobile systems."
  },
  {
    icon: Layers,
    title: "UI/UX & Design Systems",
    desc: "Engineering-led product design, interactive mockups, and unified design systems that elevate user experience."
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "Robust cloud infrastructure provisioning, containerized deployments, and automated CI/CD pipelines."
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
          Engineered solutions bridging advanced AI integration, custom software architectures, and product design.
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
