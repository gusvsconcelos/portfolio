import type { ReactNode } from "react";

interface Props {
  title?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ title, children, className = "" }: Props) {
  return (
    <section
      className={`p-6 rounded-sm border-solid border border-line transition-[border-color] duration-300 ${className}`}
    >
      {title && (
        <h2 className="mb-4 text-2xl font-semibold text-accent transition-colors duration-300">
          {title}
        </h2>
      )}

      {children}
    </section>
  );
}
