import { Home, Folder, Mail, ContactRound } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex flex-row justify-center items-center gap-6 p-3 rounded-sm border-solid border border-fg-2 text-fg-1 *:flex *:items-center *:gap-2 *:hover:text-accent-1 *:transition *:duration-300">
      {/*Home*/}
      <a href="#">
        <Home size={20} /> <p>Página inícial</p>
      </a>

      {/*Projects*/}
      <a href="#">
        <Folder size={20} /> <p>Projetos</p>
      </a>

      {/*About me*/}
      <a href="#">
        <ContactRound size={20} /> <p>Sobre</p>
      </a>

      {/*Contact*/}
      <a href="#">
        <Mail size={20} /> <p>Contato</p>
      </a>
    </nav>
  );
}
