
const products = [
  {
    name: "TekMemo",
    desc: "Intelligent local-first memory for AI agents. Portable, versioned, and instantly available when the next session starts.",
    url: "https://docs.memo.tekbreed.com",
  },
  {
    name: "TekMemo Cloud",
    desc: "Hosted file-replica storage with automatic sync and backup, built for teams who prefer zero-maintenance cloud memory.",
    url: "https://memo.tekbreed.com",
  },
  
];

export function Hero() {
  return (
    <div className="flex flex-col min-h-svh justify-center container mx-auto relative z-10 px-4 md:px-0 py-32">
      <div className="text-center max-w-5xl mx-auto w-full px-4">
        <p className="font-mono text-lg sm:text-xl md:text-2xl text-foreground/80 text-balance leading-relaxed mb-16 max-w-lg mx-auto">
          We engineer autonomous AI agents, integrate advanced models, and build production-grade software for scaling enterprises.
        </p>

        {/* Products Grid */}
        <div id="products" className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left max-w-3xl mx-auto">
          {products.map((p, idx) => (
            <a 
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              key={idx} 
              className="bg-[#262626]/20 border border-border/40 p-8 [clip-path:polygon(8px_0,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%,0_8px)] hover:border-primary/50 transition-all duration-300 relative group block"
            >
              {/* Hover Accent Lines */}
              <span className="absolute top-0 left-0 w-2 h-px bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute top-0 left-0 w-px h-2 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute bottom-0 right-0 w-2 h-px bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute bottom-0 right-0 w-px h-2 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <span className="font-mono text-xs text-primary block mb-3">0{idx + 1}</span>
              <h3 className="font-mono text-base uppercase text-foreground mb-2 flex items-center justify-between">
                {p.name}
                <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 text-primary">↗</span>
              </h3>
              <p className="font-mono text-xs text-foreground/50 leading-relaxed">{p.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
