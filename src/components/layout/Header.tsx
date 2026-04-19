import photo from "../../assets/profile.png";

import { Linkedin, Github, Instagram } from "../ui/Icons";

export default function Header() {
  return (
    <header className="flex flex-col justify-center items-center gap-2 p-6 rounded-sm border-solid border border-fg-2 dark:border-fg-dark-2 text-fg-1 dark:text-fg-dark-1">
      {/*Picture*/}
      <img
        src={photo}
        className="w-32 rounded-full border-solid border-4 border-accent-2 dark:border-accent-1 pointer-events-none select-none"
      />

      {/*Username*/}
      <p className="text-fg-2 dark:text-fg-dark-2">@gusvsconcelos</p>

      {/*Full name*/}
      <h1 className="text-center text-3xl font-semibold">
        Gustavo Vasconcelos
      </h1>

      {/*Links*/}
      <div className="flex gap-2 mb-4 text-accent-1 *:p-1 *:hover:text-accent-2 *:transition *:duration-300">
        <a href="https://www.linkedin.com/in/gusvsconcelos/" target="_blank">
          <Linkedin />
        </a>

        <a href="https://github.com/gusvsconcelos" target="_blank">
          <Github />
        </a>

        <a href="https://www.instagram.com/gusvsconcelos/" target="_blank">
          <Instagram />
        </a>
      </div>

      {/*Introduction*/}
      <p className="max-w-96 text-center text-fg-2 dark:text-fg-dark-2">
        Oi, sou o Gustavo, estudante e desenvolvedor fullstack com foco em
        soluções modernas para web.
      </p>
    </header>
  );
}
