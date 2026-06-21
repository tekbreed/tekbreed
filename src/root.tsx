import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import { Header } from "~/components/header";
import { Footer } from "~/components/footer";
import { Button } from "~/components/ui/button";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "TekBreed" },
    { name: "description", content: "Building and helping others build software." },
    { name: "keywords", content: "AI Integration, Software Development, Custom Software, Tech, TekBreed" },
    
    // OpenGraph metadata
    { property: "og:title", content: "TekBreed" },
    { property: "og:description", content: "Building and helping others build software." },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "/images/logo.png" },
    
    // Twitter Card metadata
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "TekBreed" },
    { name: "twitter:description", content: "Building and helping others build software." },
    { name: "twitter:image", content: "/images/logo.png" },
  ];
}


export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function HydrateFallback() {
  return (
    <div className="min-h-svh flex items-center justify-center bg-background text-foreground">
      <div className="flex flex-col items-center">
        <div className="relative w-12 h-12 mb-4">
          <div className="absolute inset-0 rounded-none border border-primary/20 animate-ping" />
          <div className="absolute inset-0 rounded-none border border-primary animate-pulse" />
        </div>
        <p className="font-mono text-xs text-foreground/45 tracking-widest uppercase">// INITIALIZING MEMORY</p>
      </div>
    </div>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
        <div className="mx-auto max-w-xl w-full text-center relative z-10 dark" >
          <span className="font-mono text-xs text-destructive tracking-widest uppercase block mb-3">// SYSTEM CORRUPTION DETECTED</span>
          <h1 className="text-6xl sm:text-7xl font-heading mb-6 tracking-tighter text-destructive">
            {message}
          </h1>
          <p className="font-mono text-sm text-foreground/60 leading-relaxed mb-8 max-w-md mx-auto">
            {details}
          </p>

          {stack && (
            <div className="mb-8 text-left bg-muted/30 border border-border/40 p-4 max-h-60 overflow-auto font-mono text-[10px] text-destructive/80 [clip-path:polygon(4px_0,100%_0,100%_calc(100%-4px),calc(100%-4px)_100%,0_100%,0_4px)]">
              <pre className="whitespace-pre-wrap break-all">
                <code>{stack}</code>
              </pre>
            </div>
          )}

          <a href="/" className="inline-block">
            <Button size="lg" className="px-8 font-mono cursor-pointer">
              Reboot System
            </Button>
          </a>
        </div>
  );
}
