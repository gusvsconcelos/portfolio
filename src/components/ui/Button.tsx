export default function Button({ content }: { content: React.ReactNode }) {
  return (
    <a
      href="#"
      className="flex items-center gap-1 p-2 rounded-sm border-solid border border-fg-2 text-sm font-semibold text-fg-2 hover:text-accent-1 hover:border-accent-1 transition duration-300"
    >
      {content}
    </a>
  );
}
