interface Props {
  content: React.ReactNode;
  url: string;
}

export default function Button(props: Props) {
  return (
    <a
      href={props.url}
      target="_blank"
      className="flex items-center gap-1 p-2 rounded-sm border-solid border border-light-border dark:border-fg-dark-2 text-sm font-semibold text-fg-2 dark:text-fg-dark-2 hover:text-accent-1 hover:border-accent-1 transition duration-300"
    >
      {props.content}
    </a>
  );
}
