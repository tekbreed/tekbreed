import { Button } from "~/components/ui/button";

export function Hero() {
  return (
    <div className="flex flex-col min-h-svh justify-center container mx-auto relative z-10 px-4 md:px-0 py-32">
      <div className="text-center max-w-5xl mx-auto w-full">
        <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-6">
          // AI ENGINEERING STUDIO
        </span>

        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl tracking-tight text-balance leading-[1.05] mb-8">
          AI systems and enterprise software, built to ship.
        </h1>

        <p className="font-mono text-base sm:text-lg text-foreground/70 text-balance leading-relaxed mb-12 max-w-2xl mx-auto">
          Autonomous agents and private model integrations on one side. Production-grade
          enterprise software on the other. We build both — and the engineering that makes
          them work together.
        </p>

        <div className="flex justify-center">
          <a href="mailto:hello@tekbreed.com">
            <Button size="lg" className="px-8 font-mono cursor-pointer">
              Start a Project
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
