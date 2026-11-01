import type { Tech } from "../../data/techs";
import TechBadge from "./TechBadge";

interface Props {
  thumbnail?: string;
  title: string;
  description?: string;
  url: string;
  techs?: Tech[];
}

export default function Card({
  thumbnail,
  title,
  description,
  url,
  techs,
}: Props) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col sm:flex-row gap-4 p-4 rounded-sm border-solid border border-line hover:border-accent-hover transition-[border-color] duration-300 hover:duration-400 active:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      {/*Card thumbnail*/}
      {thumbnail && (
        <img
          src={thumbnail}
          alt=""
          width={256}
          height={256}
          loading="lazy"
          decoding="async"
          className="w-full sm:w-32 h-auto rounded-sm object-cover pointer-events-none select-none"
        />
      )}

      {/*Title/description/badges*/}
      <div>
        {/*Title*/}
        <h3 className="text-xl font-semibold text-fg-1 group-hover:text-accent-hover transition-colors duration-300 group-hover:duration-400">
          {title}
        </h3>

        {/*Description*/}
        {description && (
          <p className="line-clamp-3 mb-2 text-fg-2 transition-colors duration-300">
            {description}
          </p>
        )}

        {/*Badges*/}
        {techs && techs.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {techs.map((tech) => (
              <TechBadge key={tech} tech={tech} />
            ))}
          </div>
        )}
      </div>
    </a>
  );
}
