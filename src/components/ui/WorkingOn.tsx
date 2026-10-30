interface Props {
  activity: string;
}

export default function WorkingOn({ activity }: Props) {
  return (
    <div className="flex gap-4 items-center text-fg-2 font-semibold transition-colors duration-300">
      <span
        aria-hidden="true"
        className="w-2 h-2 shrink-0 rounded-full bg-accent transition-colors duration-300 animate-pulse motion-reduce:animate-none"
      />
      <p>{activity}</p>
    </div>
  );
}
