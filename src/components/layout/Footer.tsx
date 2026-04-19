export default function Footer() {
  return (
    <footer className="m-auto pt-3 sm:pt-6 text-center">
      <a
        href="https://www.linkedin.com/in/gusvsconcelos/"
        target="_blank"
        className="text-fg-2 dark:text-fg-dark-2 hover:text-accent-1 transition duration-300"
      >
        &copy; {new Date().getFullYear()} Gustavo Vasconcelos
      </a>
    </footer>
  );
}
