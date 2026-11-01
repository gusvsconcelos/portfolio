import { useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";
type ResolvedTheme = "dark" | "light";

const STORAGE_KEY = "theme";

function getStoredTheme(): Theme {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);

    return stored === "dark" || stored === "light" ? stored : "system";
  } catch {
    return "system";
  }
}

function storeTheme(theme: Theme) {
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // Storage can be unavailable in private browsing modes.
  }
}

function getInitialResolvedTheme(): ResolvedTheme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getStoredTheme);

  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>(
    getInitialResolvedTheme,
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
