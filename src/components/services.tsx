import { Cpu, Layers, Code2, RefreshCw } from "lucide-react";
import { CornerAccents } from "~/components/corner-accents";

// Two practices, mirrored across two pillars so the cards back up the hero:
// AI systems (agents + integrations) and enterprise software (build + modernize).
const servicesList = [
  // ── AI systems ──────────────────────────────────────────────
  {
    icon: Cpu,
    title: "Custom AI Agents",
    desc: "Autonomous agents that take on complex, decision-driven work — research, drafting, multi-step operations — so your team stops being the bottleneck."
  },
  {
    icon: Layers,
    title: "AI & Model Integration",
    desc: "We connect private models to your data and tools — RAG pipelines, fine-tuned domain models, and the glue that makes them accurate on your business logic."
  },
  // ── Enterprise software ─────────────────────────────────────
  {
    icon: Code2,
    title: "Custom Software Engineering",
    desc: "Web platforms, internal tools, and APIs built for production — the software your business runs on, engineered to hold up under real load."
  },
  {
    icon: RefreshCw,
    title: "Legacy Modernization & Scaling",
    desc: "Modernize legacy systems, refactor brittle code, and re-architect for scale — so what you already have stops slowing you down."
  }
];

export function Services() {
  return (
    <section id="services" className="py-32 border-t border-border/20 container max-w-7xl mx-auto relative z-10 px-4 md:px-0">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-3">// 02. CAPABILITIES</span>
          <h2 className="text-4xl md:text-5xl font-heading">Our Services</h2>
        </div>
        <p className="font-mono text-sm text-foreground/50 max-w-md">
          Two practices under one roof — AI systems and enterprise software engineering — covering everything from agents and integrations to the systems they run on.
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
