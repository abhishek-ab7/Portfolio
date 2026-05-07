import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/60 px-4 py-8">
      <div className="container flex justify-end">
        <a href="#hero" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-primary transition hover:border-primary" aria-label="Back to top">
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};
