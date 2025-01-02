"use client";
import React, { useCallback } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

function ThemeSwitcher({ className }: { className: string }) {
  const { setTheme, resolvedTheme: theme } = useTheme();
  const toggleTheme = useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light");
  }, [theme, setTheme]);
  return (
    <button
      className={`${className} inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2`}
      onClick={toggleTheme}
    >
      <Sun className="dark:text-white text-black h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="dark:text-white text-black absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}

export default ThemeSwitcher;
