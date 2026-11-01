import { site } from "../../data/site";

export default function Footer() {
  return (
    <footer className="m-auto pt-3 sm:pt-6 text-center">
      <a
        href={site.social.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-fg-2 hover:text-accent-hover transition-colors duration-300 hover:duration-400 active:opacity-80 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        &copy; {new Date().getFullYear()} {site.name}
      </a>
    </footer>
  );
}
