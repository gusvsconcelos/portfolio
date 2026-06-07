interface Props {
  activity: string;
}

export default function WorkingOn(prop: Props) {
  return (
    <div className="flex gap-4 items-center text-fg-2 dark:text-fg-dark-2 font-semibold animate-pulse transition duration-300">
      <div className="w-2 h-2 rounded-full bg-accent-2"></div>
      <p>{prop.activity}</p>
    </div>
  );
}
