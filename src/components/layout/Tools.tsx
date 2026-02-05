import Card from "../ui/Card";

export default function Tools() {
  return (
    <section className="p-8 rounded-sm border-solid border border-fg-2">
      {/*Title*/}
      <h2 className="text-2xl font-semibold text-accent-1">Ferramentas</h2>

      {/*Tools*/}
      <div className="grid grid-cols-2 gap-4 mt-4 **:cursor-pointer">
        <a href="#">
          <Card
            thumbnail="/src/assets/placeholder.jpg"
            thumbnailWidth="48px"
            title="TypeScript"
          />
        </a>

        <a href="#">
          <Card
            thumbnail="/src/assets/placeholder.jpg"
            thumbnailWidth="48px"
            title="React"
          />
        </a>

        <a href="#">
          <Card
            thumbnail="/src/assets/placeholder.jpg"
            thumbnailWidth="48px"
            title="Node.js"
          />
        </a>

        <a href="#">
          <Card
            thumbnail="/src/assets/placeholder.jpg"
            thumbnailWidth="48px"
            title="PostgreSQL"
          />
        </a>

        <a href="#">
          <Card
            thumbnail="/src/assets/placeholder.jpg"
            thumbnailWidth="48px"
            title="Docker"
          />
        </a>

        <a href="#">
          <Card
            thumbnail="/src/assets/placeholder.jpg"
            thumbnailWidth="48px"
            title="Tailwind CSS"
          />
        </a>
      </div>
    </section>
  );
}
