import photo from "../../assets/profile.webp";
import { site } from "../../data/site";
import { Linkedin, Github, Instagram } from "../ui/Icons";

const socialLinks = [
  {
    href: site.social.linkedin,
    label: "LinkedIn",
    Icon: Linkedin,
  },
  {
    href: site.social.github,
    label: "GitHub",
    Icon: Github,
  },
  {
    href: site.social.instagram,
    label: "Instagram",
    Icon: Instagram,
  },
];

export default function Header() {
  return (
    <header className="flex flex-col justify-center items-center gap-2 p-6 rounded-sm border-solid border border-line transition-[border-color] duration-300">
      {/*Picture*/}
      <img
        src={photo}
        alt="Foto de perfil de Gustavo Vasconcelos"
        width={256}
        height={256}
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className="w-28 rounded-full border-solid border-3 border-accent pointer-events-none select-none transition-colors duration-300"
      />

      {/*Username*/}
      <p className="text-fg-2 transition-colors duration-300">
        {site.username}
      </p>

      {/*Full name*/}
      <h1 className="text-center text-3xl font-semibold text-fg-1 transition-colors duration-300">
        {site.name}
      </h1>

      {/*Links*/}
      <div className="flex gap-2 mb-4 text-accent">
        {socialLinks.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="p-1 rounded-sm hover:text-accent-hover transition-colors duration-300 hover:duration-400 active:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <Icon />
          </a>
        ))}
      </div>

      {/*Introduction*/}
      <p className="max-w-98 text-center text-fg-2 transition-colors duration-300">
        Projetos, experimentos e estudos em desenvolvimento web e engenharia de
        software.
      </p>
    </header>
  );
}
