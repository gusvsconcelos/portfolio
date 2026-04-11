interface Props {
  thumbnail?: string;
  thumbnailWidth?: string;
  title: string;
  description?: string;
  url?: string;
  techs?: string[];
}

const colorMap: Record<string, string> = {
  python: "bg-[#4B6C8C]/20 border-[#4B6C8C] text-[#4B6C8C]",
  javascript: "bg-[#C2A93A]/20 border-[#C2A93A] text-[#C2A93A]",
  html: "bg-[#C65A2E]/20 border-[#C65A2E] text-[#C65A2E]",
  css: "bg-[#3E7FB1]/20 border-[#3E7FB1] text-[#3E7FB1]",
  typescript: "bg-[#3C6FA3]/20 border-[#3C6FA3] text-[#3C6FA3]",
  react: "bg-[#4FA3B8]/20 border-[#4FA3B8] text-[#4FA3B8]",
  nextjs: "bg-[#444444]/20 border-[#444444] text-[#444444]",
  tailwindcss: "bg-[#4FAFA8]/20 border-[#4FAFA8] text-[#4FAFA8] ",
  nodejs: "bg-[#5E8C4A]/20 border-[#5E8C4A] text-[#5E8C4A]",
  nestjs: "bg-[#B0435B]/20 border-[#B0435B] text-[#B0435B]",
  php: "bg-[#6C6FA3]/20 border-[#6C6FA3] text-[#6C6FA3]",
  laravel: "bg-[#C94B3D]/20 border-[#C94B3D] text-[#C94B3D]",
  mysql: "bg-[#4F7C8B]/20 border-[#4F7C8B] text-[#4F7C8B]",
  postgresql: "bg-[#4A6E91]/20 border-[#4A6E91] text-[#4A6E91]",
  mongodb: "bg-[#4F8A5B]/20 border-[#4F8A5B] text-[#4F8A5B]",
  docker: "bg-[#4F8DB8]/20 border-[#4F8DB8] text-[#4F8DB8]",
};

export default function Card(props: Props) {
  const techBadges = props.techs?.map((tech) => (
    <span
      className={`px-1 pb-px rounded-sm border border-solid text-sm ${colorMap[tech]} opacity-80`}
    >
      {tech}
    </span>
  ));

  return (
    <a href={props.url} target="_blank">
      <div className="group flex items-start gap-4 p-4 rounded-sm border-solid border border-fg-2 hover:border-accent-1 transition duration-300 cursor-pointer">
        {/*Card thumbnail*/}
        {props.thumbnail && (
          <img
            src={props.thumbnail}
            width={props.thumbnailWidth}
            className="h-auto rounded-sm pointer-events-none select-none"
          />
        )}

        {/*Title/description/badges*/}
        <div className="flex justify-between items-center w-full">
          <div>
            {/*Title*/}
            <h3 className="text-xl font-semibold text-fg-1 group-hover:text-accent-1">
              {props.title}
            </h3>

            {/*Description*/}
            <p className="line-clamp-3 mb-3 text-fg-2">{props.description}</p>

            {/*Badges*/}
            <div className="flex flex-wrap gap-2">
              {props.techs && techBadges}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
