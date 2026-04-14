import { useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";
type ResolvedTheme = "dark" | "light";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem("theme") as Theme) || "system";
  });

  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>("light");

  useEffect(() => {
    const root = document.documentElement;
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const resolve = (): ResolvedTheme => {
      if (theme === "system") {
        return media.matches ? "dark" : "light";
      }

      return theme;
    };

    const apply = () => {
      const current = resolve();

      root.classList.toggle("dark", current === "dark");
      setResolvedTheme(current);
    };

    apply();

    if (theme === "system") {
      media.addEventListener("change", apply);

      return () => media.removeEventListener("change", apply);
    }
  }, [theme]);

  const toggleTheme = () => {
    const next = resolvedTheme === "dark" ? "light" : "dark";

    setTheme(next);
    localStorage.setItem("theme", next);
  };

  return { resolvedTheme, toggleTheme };
}
