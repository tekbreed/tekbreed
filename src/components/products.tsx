import { CornerAccents } from "~/components/corner-accents";

const products = [
  {
    name: "TekMemo",
    desc: "Local-first memory for AI agents. Portable, versioned, and instantly available when the next session starts.",
    url: "https://docs.memo.tekbreed.com",
  },
  {
    name: "TekMemo Cloud",
    desc: "Hosted memory with automatic sync and backup — zero maintenance, for teams who want their agents to remember everything.",
    url: "https://memo.tekbreed.com",
  },
];

export function Products() {
  return (
    <section id="products" className="py-32 border-t border-border/20 container max-w-7xl mx-auto relative z-10 px-4 md:px-0">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-3">// 01. PRODUCTS</span>
          <h2 className="text-4xl md:text-5xl font-heading">Products</h2>
        </div>
        <p className="font-mono text-sm text-foreground/50 max-w-md">
          Our own tools, built from the same engineering we do for clients.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl">
        {products.map((p, idx) => (
          <a
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            key={p.name}
            className="bg-[#262626]/20 border border-border/40 p-8 [clip-path:polygon(8px_0,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%,0_8px)] hover:border-primary/50 transition-colors duration-300 relative group block"
          >
            <CornerAccents />

            <span className="font-mono text-xs text-primary block mb-3">0{idx + 1}</span>
            <h3 className="font-mono text-base uppercase text-foreground mb-2 flex items-center justify-between">
              {p.name}
              <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 text-primary">↗</span>
            </h3>
            <p className="font-mono text-xs text-foreground/50 leading-relaxed">{p.desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
