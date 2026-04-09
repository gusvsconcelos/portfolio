import Card from "../ui/Card";

export default function Projects() {
  return (
    <section className="p-6 rounded-sm border-solid border border-fg-2">
      {/*Title*/}
      <h2 className="text-2xl font-semibold text-accent-1">Projetos</h2>

      {/*Projects*/}
      <div className="flex flex-col gap-4 mt-4">
        <Card
          thumbnail="/src/assets/placeholder.jpg"
          thumbnailWidth="132px"
          title="Movie Roulette"
          description="A web app that helps users choose what to watch by randomly selecting a movie from the TMDB API, while also showcasing films currently in theaters."
          url="#"
          techs={["typescript", "react", "tailwindcss"]}
        />

        <Card
          thumbnail="/src/assets/placeholder.jpg"
          thumbnailWidth="132px"
          title="n8n Assistent"
          description="A fully self-hosted virtual assistant built with n8n, powered by LLaMA 3.2 (3B), and running locally through Ollama within Docker containers."
          url="#"
          techs={["javascript", "postgresql", "docker"]}
        />

        <Card
          thumbnail="/src/assets/placeholder.jpg"
          thumbnailWidth="132px"
          title="Dailyway"
          description="A web app that combines a to-do list with a daily streak system to help users maintain consistency."
          url="#"
          techs={["javascript", "html", "css"]}
        />

        <Card
          thumbnail="/src/assets/placeholder.jpg"
          thumbnailWidth="132px"
          title="StakeLab"
          description="A CLI-based sports betting simulator in Python where users place bets, manage a balance, and track history."
          url="#"
          techs={["python"]}
        />

        <Card
          thumbnail="/src/assets/placeholder.jpg"
          thumbnailWidth="132px"
          title="weather.py"
          description="A CLI weather tool that fetches current conditions from the OpenWeatherMap API based on user input and displays them in a clean terminal format."
          url="#"
          techs={["python"]}
        />
      </div>
    </section>
  );
}
