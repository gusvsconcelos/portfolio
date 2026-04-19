import Card from "../ui/Card";
import {
  MovieRoulette,
  n8nAssistant,
  Dailyway,
  StakeLab,
  weatherPy,
} from "../../utils/thumbnails.ts";

export default function Projects() {
  return (
    <section className="p-6 rounded-sm border-solid border border-fg-2 dark:border-fg-dark-2">
      {/*Title*/}
      <h2 className="text-2xl font-semibold text-accent-1">Projetos</h2>

      {/*Projects*/}
      <div className="flex flex-col gap-4 mt-4">
        <Card
          thumbnail={MovieRoulette}
          title="Movie Roulette"
          description="Um aplicativo web que ajuda os usuários a escolher o que assistir, selecionando aleatoriamente um filme da API do TMDB, além de exibir filmes atualmente em cartaz nos cinemas."
          url="https://github.com/gusvsconcelos/movie-roulette"
          techs={["typescript", "react", "tailwindcss"]}
        />

        <Card
          thumbnail={n8nAssistant}
          title="n8n Assistent"
          description="Um assistente virtual totalmente auto-hospedado, construído com n8n, alimentado pelo LLaMA 3.2 (3B) e executado localmente por meio do Ollama dentro de contêineres Docker."
          url="https://github.com/gusvsconcelos/assistant-n8n"
          techs={["javascript", "postgresql", "docker"]}
        />

        <Card
          thumbnail={Dailyway}
          title="Dailyway"
          description="Um aplicativo web que combina uma lista de tarefas com um sistema de sequência diária para ajudar os usuários a manter a consistência."
          url="https://github.com/gusvsconcelos/dailyway"
          techs={["javascript", "html", "css"]}
        />

        <Card
          thumbnail={StakeLab}
          title="StakeLab"
          description="Um simulador de apostas esportivas baseado em CLI em Python, onde os usuários fazem apostas, gerenciam um saldo e acompanham o histórico."
          url="https://github.com/gusvsconcelos/stakelab"
          techs={["python"]}
        />

        <Card
          thumbnail={weatherPy}
          title="weather.py"
          description="Uma ferramenta de clima em CLI que obtém as condições atuais a partir da API do OpenWeatherMap com base na entrada do usuário e as exibe em um formato limpo no terminal."
          url="https://github.com/gusvsconcelos/weather-py"
          techs={["python"]}
        />
      </div>
    </section>
  );
}
