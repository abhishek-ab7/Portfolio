import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "dark";
    const light = storedTheme === "light";
    document.documentElement.classList.toggle("light", light);
    localStorage.setItem("theme", storedTheme);
    setIsLightMode(light);
  }, []);

  const toggleTheme = () => {
    const nextIsLight = !isLightMode;
    document.documentElement.classList.toggle("light", nextIsLight);
    localStorage.setItem("theme", nextIsLight ? "light" : "dark");
    setIsLightMode(nextIsLight);
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed right-5 top-5 z-50 rounded-full border border-border bg-card/80 p-2 text-foreground shadow-xl backdrop-blur transition-colors duration-300 max-sm:hidden",
        "focus:outline-hidden focus:ring-2 focus:ring-primary"
      )}
      aria-label={isLightMode ? "Switch to dark theme" : "Switch to light theme"}
    >
      {isLightMode ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5 text-yellow-300" />}
    </button>
  );
};
