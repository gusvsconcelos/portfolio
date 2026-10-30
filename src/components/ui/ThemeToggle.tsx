import { useTheme } from "../../utils/useTheme";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { resolvedTheme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        resolvedTheme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"
      }
      className="fixed bottom-6 right-6 p-2 rounded-sm border border-line bg-bg-1 text-fg-1 hover:text-accent-hover hover:border-accent-hover transition-colors duration-300 hover:duration-[400ms] active:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      {resolvedTheme === "dark" ? (
        <Sun size={18} aria-hidden="true" />
      ) : (
        <Moon size={18} aria-hidden="true" />
      )}
    </button>
  );
}
