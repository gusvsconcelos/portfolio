import { Linkedin, Github, Instagram } from "lucide-react";

export default function Header() {
  return (
    <header className="flex flex-col justify-center items-center gap-2 p-8 rounded-sm border-solid border border-fg-2 text-fg-1">
      {/*Picture*/}
      <img
        src="/src/assets/placeholder.jpg"
        width={"128px"}
        className="rounded-full border-solid border-4 border-fg-1 pointer-events-none select-none"
      />

      {/*Username*/}
      <p className="text-sm text-fg-2">@gusvsconcelos</p>

      {/*Full name*/}
      <h1 className="text-3xl font-semibold">Gustavo Vasconcelos</h1>

      {/*Links*/}
      <div className="flex flex-row gap-2 mb-2 text-accent-1 *:p-1 *:hover:text-accent-2 *:transition *:duration-300">
        <a href="#">
          <Linkedin size={20} />
        </a>
        <a href="#">
          <Github size={20} />
        </a>
        <a href="#">
          <Instagram size={20} />
        </a>
      </div>

      {/*Introduction*/}
      <p className="max-w-96 text-center text-fg-2">
        Oi, sou o Gustavo, estudante e desenvolvedor fullstack com foco em
        soluções modernas para web.
      </p>
    </header>
  );
}
