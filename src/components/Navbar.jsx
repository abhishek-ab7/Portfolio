import { cn } from "@/lib/utils";
import { profile } from "@/data/portfolio";
import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "Case Studies", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Engineering", href: "#engineering" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        isScrolled ? "border-b border-border bg-background/80 py-3 shadow-2xl backdrop-blur-xl" : "py-5"
      )}
      aria-label="Primary navigation"
    >
      <div className="container flex items-center justify-between gap-6">
        <a className="group text-left font-bold tracking-tight" href="/#hero" aria-label="Abhishek Saini home">
          <span className="block text-base leading-none text-foreground">Abhishek Saini</span>
          <span className="text-xs uppercase tracking-[0.28em] text-primary">Full-stack engineer</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={`/${item.href}`} className="text-sm text-foreground/75 transition-colors hover:text-primary">
              {item.name}
            </a>
          ))}
          <a href={profile.resume} download className="secondary-button inline-flex items-center gap-2 px-4 py-2 text-sm">
            Resume <Download className="h-4 w-4" />
          </a>
        </div>

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="rounded-full border border-border p-2 text-foreground md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          className={cn(
            "fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-background/95 backdrop-blur-xl transition-all duration-300 md:hidden",
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
        >
          {navItems.map((item) => (
            <a key={item.href} href={`/${item.href}`} className="text-2xl font-semibold text-foreground/85 hover:text-primary" onClick={() => setIsMenuOpen(false)}>
              {item.name}
            </a>
          ))}
          <a href={profile.resume} download className="cosmic-button inline-flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
            Download resume <Download className="h-4 w-4" />
          </a>
        </div>
      </div>
    </nav>
  );
};
