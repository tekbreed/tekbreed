import { Mail, MapPin } from "lucide-react";
import { Button } from "~/components/ui/button";
import { CornerAccents } from "~/components/corner-accents";

export function Contact() {
  return (
    <section id="contact" className="py-32 border-t border-border/20 container mx-auto relative z-10 px-4 md:px-0">
      <div className="max-w-3xl mx-auto text-center">
        <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-3">// 03. INQUIRIES</span>
        <h2 className="text-4xl md:text-5xl font-heading mb-8">Tell Us What You're Building</h2>
        <p className="font-mono text-sm text-foreground/60 leading-relaxed mb-16 max-w-xl mx-auto">
          You'll talk directly with the engineering team — no sales queue, no discovery calls before you've shared a single detail.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {/* Email Card */}
          <div className="bg-[#262626]/20 border border-border/40 p-8 hover:border-primary/50 transition-colors duration-300 relative group [clip-path:polygon(8px_0,100%_0,100%_calc(100%_-_8px),calc(100%_-_8px)_100%,0_100%,0_8px)]">
            <CornerAccents />

            <div className="inline-flex items-center justify-center p-3 bg-primary/10 text-primary mb-4">
              <Mail size={20} />
            </div>
            <span className="font-mono text-xs text-foreground/40 block mb-2">EMAIL</span>
            <a href="mailto:hello@tekbreed.com" className="font-mono text-sm text-foreground hover:text-primary transition-colors block">
              hello@tekbreed.com
            </a>
          </div>

          {/* Location Card */}
          <div className="bg-[#262626]/20 border border-border/40 p-8 hover:border-primary/50 transition-colors duration-300 relative group [clip-path:polygon(8px_0,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%,0_8px)]">
            <CornerAccents />

            <div className="inline-flex items-center justify-center p-3 bg-primary/10 text-primary mb-4">
              <MapPin size={20} />
            </div>
            <span className="font-mono text-xs text-foreground/40 block mb-2">LOCATION</span>
            <span className="font-mono text-sm text-foreground/80 block">
              Kaduna, Nigeria
            </span>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <a href="mailto:hello@tekbreed.com">
            <Button size="lg" className="px-8 font-mono cursor-pointer">
              Start a Project
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
