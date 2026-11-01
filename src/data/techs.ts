export type Tech =
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
export const techColors: Record<Tech, TechColor> = {
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
