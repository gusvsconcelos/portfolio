import { Home, Folder, Wrench, Paperclip, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex flex-row justify-center items-center gap-5 p-2 rounded-sm border-solid border border-fg-2 text-fg-1 *:p-2 *:hover:text-accent-1 *:transition *:duration-300">
      {/*Home*/}
      <a href="#" className="tooltip tooltip-bottom" data-tip="Página inicial">
        <Home />
      </a>

      {/*Projects*/}
      <a href="#" className="tooltip tooltip-bottom" data-tip="Projetos">
        <Folder />
      </a>

      {/*Skills/tools*/}
      <a href="#" className="tooltip tooltip-bottom" data-tip="Ferramentas">
        <Wrench />
      </a>

      {/*Resume*/}
      <a href="#" className="tooltip tooltip-bottom" data-tip="Currículo">
        <Paperclip />
      </a>

      {/*Contact*/}
      <a href="#" className="tooltip tooltip-bottom" data-tip="Contato">
        <Mail />
      </a>
    </nav>
  );
}
