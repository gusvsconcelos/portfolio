export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-4 p-8 rounded-sm border-solid border border-fg-2">
      {/*Title*/}
      <h2 className="text-lg text-accent-1">Gustavo | Dev</h2>

      {/*Links*/}
      <div className="flex justify-center gap-4 w-full pb-4 border-solid border-b border-fg-2 text-fg-2 *:hover:text-accent-1 *:transition *:duration-300">
        <a href="#">Página inicial</a>
        <a href="#">Projetos</a>
        <a href="#">Ferramentas</a>
        <a href="#">Currículo</a>
        <a href="#">Contato</a>
      </div>

      {/*Stamp*/}
      <p className="text-sm text-fg-2">Powered by Gustavo Vasconcelos</p>
    </footer>
  );
}
