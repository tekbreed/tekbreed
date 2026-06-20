import { Link } from "react-router";
import { Button } from "~/components/ui/button";

export default function NotFound() {
  return (
    <div className="relative min-h-svh flex items-center justify-center overflow-hidden px-4 md:px-0 bg-background">
      {/* Content */}
      <div className="text-center max-w-lg mx-auto relative z-10 flex flex-col items-center">
        <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-3">// 404 ERROR</span>
        <h1 className="text-4xl sm:text-3xl font-heading mb-6 tracking-tighter">Lost in Space</h1>
        <p className="font-mono text-sm text-foreground/60 leading-relaxed mb-12 max-w-sm">
          The page you are looking for does not exist, or has been moved to another coordinate.
        </p>

        <Link to="/" className="mt-12">
          <Button size="lg" className="px-8 font-mono cursor-pointer ">
            Return to Base
          </Button>
        </Link>
      </div>
    </div>
  );
}
