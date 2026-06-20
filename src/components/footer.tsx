import React from "react";
import { Github, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/20 py-12 relative z-10 px-4 md:px-0">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Copyright */}
        <p className="font-mono text-xs text-foreground/45">
          © {new Date().getFullYear()} TekBreed. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-8">
          <a
            href="https://github.com/tekbreed"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-xs uppercase text-foreground/50 hover:text-primary transition-colors duration-200"
          >
            <Github size={14} />
            GitHub
          </a>
          <a
            href="https://x.com/tekbreed"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-xs uppercase text-foreground/50 hover:text-primary transition-colors duration-200"
          >
            <Twitter size={14} />
            X (Twitter)
          </a>
        </div>
      </div>
    </footer>
  );
}
