import { Cpu, Layers } from "lucide-react";
import { CornerAccents } from "~/components/corner-accents";

const servicesList = [
  {
    icon: Layers,
    title: "Enterprise Software Consultation",
    desc: "Strategic advisory on system architecture, legacy modernization, and building production-grade platforms that scale with your enterprise."
  },
  {
    icon: Cpu,
    title: "AI & Agent Consultation",
    desc: "Expert guidance on integrating private models, designing RAG pipelines, and deploying autonomous agents to handle complex, decision-driven workflows."
  }
];

export function Services() {
  return (
    <section id="services" className="py-32 border-t border-border/20 container max-w-7xl mx-auto relative z-10 px-4 md:px-0">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-3">// 02. CONSULTATION</span>
          <h2 className="text-4xl md:text-5xl font-heading">Our Services</h2>
        </div>
        <p className="font-mono text-sm text-foreground/50 max-w-md">
          Specialized advisory for enterprise software and AI. We don't just write code; we help you architect systems that hold up under real load.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {servicesList.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="bg-[#262626]/20 border border-border/40 p-8 hover:border-primary/50 transition-colors duration-300 relative group [clip-path:polygon(8px_0,100%_0,100%_calc(100%_-_8px),calc(100%_-_8px)_100%,0_100%,0_8px)]"
            >
              <CornerAccents />

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
