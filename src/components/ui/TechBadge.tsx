import type { CSSProperties } from "react";
import { techColors, type Tech } from "../../data/techs";

interface Props {
  tech: Tech;
}

export default function TechBadge({ tech }: Props) {
  const color = techColors[tech];

  return (
    <span
      style={
        {
          "--tech-light": color.light,
          "--tech-dark": color.dark,
        } as CSSProperties
      }
      className="tech-badge px-1 py-px rounded-sm border border-solid text-xs transition-colors duration-300"
    >
      {tech}
    </span>
  );
}
