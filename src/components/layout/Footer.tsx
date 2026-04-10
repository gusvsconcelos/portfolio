export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-2 p-6 rounded-sm border-solid border border-fg-2">
      {/*Title*/}
      <h2 className="text-lg text-accent-1">Gustavo | Dev</h2>

      {/*Copyright*/}
      <p className="text-sm text-fg-2 *:hover:text-accent-1 *:transition *:duration-300">
        Powered by{" "}
        <a href="https://www.linkedin.com/in/gusvsconcelos/" target="_blank">
          Gustavo Vasconcelos
        </a>
      </p>
    </footer>
  );
}
