import { ArrowRightIcon } from "lucide-react";

interface props {
  thumbnail?: string;
  thumbnailWidth?: string;
  title: string;
  description?: string;
  button?: boolean;
  url?: string;
}

export default function Card(props: props) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-sm border-solid border border-fg-2 hover:border-accent-1 hover:**:text-accent-1 hover:**:border-accent-1 **:transition **:duration-300 transition duration-300 cursor-default">
      {/*Card thumbnail*/}
      {props.thumbnail && (
        <img
          src={props.thumbnail}
          width={props.thumbnailWidth}
          className="rounded-sm pointer-events-none select-none"
        />
      )}

      {/*Title/description/button*/}
      <div className="flex justify-between items-center w-full">
        <div>
          {/*Title*/}
          <h3 className="text-xl font-semibold text-fg-1">{props.title}</h3>

          {/*Description*/}
          <p className="text-fg-2">{props.description}</p>
        </div>

        {/*Button*/}
        {props.button && (
          <a
            href={props.url}
            className="p-1 rounded-sm border-solid border border-fg-2 text-fg-2 hover:text-accent-1 transition duration-300 tooltip tooltip-right"
            data-tip="Ver mais"
          >
            <ArrowRightIcon />
          </a>
        )}
      </div>
    </div>
  );
}
