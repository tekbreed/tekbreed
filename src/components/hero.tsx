import { Button } from "~/components/ui/button";

export function Hero() {
  return (
    <div className="flex flex-col min-h-svh justify-center container mx-auto relative z-10 px-4 md:px-0 py-32">
      <div className="text-center max-w-5xl mx-auto w-full">
        <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-6">
          // PARENT COMPANY & CONSULTATION STUDIO
        </span>

        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl tracking-tight text-balance leading-[1.05] mb-8">
          Tekbreed
        </h1>

        <p className="font-mono text-base sm:text-lg text-foreground/70 text-balance leading-relaxed mb-12 max-w-2xl mx-auto">
          Building and helping others build. We operate as the parent company behind our in-house platforms, and provide specialized enterprise consultation for software engineering and AI systems.
        </p>

        <div className="flex justify-center">
          <a href="mailto:hello@tekbreed.com">
            <Button size="lg" className="px-8 font-mono cursor-pointer">
              Book a Consultation
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
