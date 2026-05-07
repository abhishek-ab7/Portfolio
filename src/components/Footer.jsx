import { ArrowUp } from "lucide-react";
import { profile } from "@/data/portfolio";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/60 px-4 py-10">
      <div className="container flex flex-col gap-6 text-left md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold">{profile.name}</p>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Premium full-stack portfolio. Built with React, Vite, and Tailwind CSS.</p>
        </div>
        <a href="#hero" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-primary transition hover:border-primary" aria-label="Back to top">
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};
