import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-18 p-2 rounded-sm border border-light-border dark:border-fg-dark-2 bg-bg-1 dark:bg-bg-dark-1 text-fg-1 dark:text-fg-dark-1 hover:text-accent-1 hover:border-accent-1 transition-all duration-300 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <ArrowUp size={18} />
    </button>
  );
}
