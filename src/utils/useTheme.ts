import { useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";
type ResolvedTheme = "dark" | "light";

function getStoredTheme(): Theme {
  try {
    const stored = localStorage.getItem("theme");

    return stored === "dark" || stored === "light" ? stored : "system";
  } catch {
    return "system";
  }
}

function storeTheme(theme: Theme) {
  try {
    localStorage.setItem("theme", theme);
  } catch {
    // Storage can be unavailable in private browsing modes.
  }
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getStoredTheme);

  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>(() =>
    document.documentElement.classList.contains("dark") ? "dark" : "light",
  );

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

      // Keep the browser UI color in sync with the active theme.
      const background = getComputedStyle(root)
        .getPropertyValue("--color-bg-1")
        .trim();

      if (background) {
        document
          .querySelectorAll('meta[name="theme-color"]')
          .forEach((meta) => meta.setAttribute("content", background));
      }
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
    storeTheme(next);
  };

  return { resolvedTheme, toggleTheme };
}
