import { useTheme } from "../../utils/useTheme";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { resolvedTheme, toggleTheme } = useTheme();

  const toggle = () => {
    toggleTheme();
  };

  return (
    <button
      onClick={toggle}
      className="fixed bottom-6 right-6 p-2 rounded-sm border border-fg-2 dark:border-fg-dark-2 bg-bg-1 dark:bg-bg-dark-1 text-fg-1 dark:text-fg-dark-1 hover:text-accent-1 hover:border-accent-1 transition-all duration-300"
    >
      {resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
