import type { CSSProperties } from "react";

type Tech =
  | "python"
  | "javascript"
  | "html"
  | "css"
  | "typescript"
  | "react"
  | "nextjs"
  | "tailwindcss"
  | "nodejs"
  | "nestjs"
  | "php"
  | "laravel"
  | "mysql"
  | "postgresql"
  | "mongodb"
  | "docker"
  | "n8n"
  | "ollama";

type TechColor = { light: string; dark: string };

/*
  Each technology keeps its original hue. Light and dark are separate
  lightness stops of that same hue, tuned so the label clears AA (4.5:1)
  against its own 14% tint, in both themes.
*/
const techColors: Record<Tech, TechColor> = {
  python: { light: "#476888", dark: "#698bac" },
  javascript: { light: "#766407", dark: "#c2a93a" },
  html: { light: "#ac4211", dark: "#d4673c" },
  css: { light: "#26699a", dark: "#4d8ec0" },
  typescript: { light: "#35689b", dark: "#588bc1" },
  react: { light: "#086e82", dark: "#4fa3b8" },
  nextjs: { light: "#444444", dark: "#888888" },
  tailwindcss: { light: "#00706b", dark: "#4fafa8" },
  nodejs: { light: "#44702f", dark: "#669452" },
  nestjs: { light: "#ab3e57", dark: "#d46379" },
  php: { light: "#5e6194", dark: "#8084b9" },
  laravel: { light: "#b4372b", dark: "#dd5e4e" },
  mysql: { light: "#3e6b7a", dark: "#618f9e" },
  postgresql: { light: "#44688b", dark: "#668baf" },
  mongodb: { light: "#367143", dark: "#5a9565" },
  docker: { light: "#2b6a93", dark: "#508eb9" },
  n8n: { light: "#be1a4e", dark: "#ea4b71" },
  ollama: { light: "#000000", dark: "#ffffff" },
};

interface Props {
  thumbnail?: string;
  title: string;
  description?: string;
  url: string;
  techs?: Tech[];
}

export default function Card({
  thumbnail,
  title,
  description,
  url,
  techs,
}: Props) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col sm:flex-row gap-4 p-4 rounded-sm border-solid border border-line hover:border-accent-hover transition-[border-color] duration-300 hover:duration-[400ms] active:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      {/*Card thumbnail*/}
      {thumbnail && (
        <img
          src={thumbnail}
          alt=""
          width={256}
          height={256}
          loading="lazy"
          decoding="async"
          className="w-full sm:w-32 h-auto rounded-sm object-cover pointer-events-none select-none"
        />
      )}

      {/*Title/description/badges*/}
      <div>
        {/*Title*/}
        <h3 className="text-xl font-semibold text-fg-1 group-hover:text-accent-hover transition-colors duration-300 group-hover:duration-[400ms]">
          {title}
        </h3>

        {/*Description*/}
        {description && (
          <p className="line-clamp-3 mb-2 text-fg-2 transition-colors duration-300">
            {description}
          </p>
        )}

        {/*Badges*/}
        {techs && techs.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {techs.map((tech) => {
              const color = techColors[tech];

              return (
                <span
                  key={tech}
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
            })}
          </div>
        )}
      </div>
    </a>
  );
}
