import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  url: string;
}

export default function Button({ children, url }: Props) {
  return (
    <a
      href={url}
      className="flex items-center gap-1 p-2 rounded-sm border-solid border border-line text-sm font-semibold text-fg-2 hover:text-accent-hover hover:border-accent-hover transition-colors duration-300 hover:duration-[400ms] active:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      {children}
    </a>
  );
}
