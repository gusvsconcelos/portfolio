import type { Tech } from "./techs";
import movieRoulette from "../assets/thumbnails/movie-roulette.webp";
import n8nAssistant from "../assets/thumbnails/n8n-assistant.webp";
import dailyway from "../assets/thumbnails/dailyway.webp";
import stakeLab from "../assets/thumbnails/stakelab.webp";
import weatherPy from "../assets/thumbnails/weather-py.webp";

export interface Project {
  thumbnail: string;
  title: string;
  description: string;
  url: string;
  techs: Tech[];
}

export const projects: Project[] = [
  {
    thumbnail: movieRoulette,
    title: "Movie Roulette",
    description:
      "Um aplicativo web que ajuda os usuários a escolher o que assistir, selecionando aleatoriamente um filme da API do TMDB, além de exibir filmes atualmente em cartaz nos cinemas.",
    url: "https://github.com/gusvsconcelos/movie-roulette",
    techs: ["typescript", "react", "tailwindcss"],
  },
  {
    thumbnail: n8nAssistant,
    title: "n8n Assistant",
    description:
      "Um assistente virtual totalmente auto-hospedado, construído com n8n, alimentado pelo LLaMA 3.2 (3B) e executado localmente por meio do Ollama dentro de contêineres Docker.",
    url: "https://github.com/gusvsconcelos/assistant-n8n",
    techs: ["n8n", "ollama", "javascript", "postgresql", "docker"],
  },
  {
    thumbnail: dailyway,
    title: "Dailyway",
    description:
      "Um aplicativo web que combina uma lista de tarefas com um sistema de sequência diária para ajudar os usuários a manter a consistência.",
    url: "https://github.com/gusvsconcelos/dailyway",
    techs: ["javascript", "html", "css"],
  },
  {
    thumbnail: stakeLab,
    title: "StakeLab",
    description:
      "Um simulador de apostas esportivas baseado em CLI em Python, onde os usuários fazem apostas, gerenciam um saldo e acompanham o histórico.",
    url: "https://github.com/gusvsconcelos/stakelab",
    techs: ["python"],
  },
  {
    thumbnail: weatherPy,
    title: "weather.py",
    description:
      "Uma ferramenta de clima em CLI que obtém as condições atuais a partir da API do OpenWeatherMap com base na entrada do usuário e as exibe em um formato limpo no terminal.",
    url: "https://github.com/gusvsconcelos/weather-py",
    techs: ["python"],
  },
];
