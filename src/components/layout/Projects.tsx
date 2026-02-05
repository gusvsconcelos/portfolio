import Card from "../ui/Card";

export default function Projects() {
  return (
    <section className="p-8 rounded-sm border-solid border border-fg-2">
      {/*Title*/}
      <h2 className="text-2xl font-semibold text-accent-1">Projetos</h2>

      {/*Projects*/}
      <div className="flex flex-col gap-4 mt-4">
        <Card
          thumbnail="/src/assets/placeholder.jpg"
          thumbnailWidth="64px"
          title="Nome do projeto"
          description="Descrição do projeto"
          button={true}
          url="#"
        />
        <Card
          thumbnail="/src/assets/placeholder.jpg"
          thumbnailWidth="64px"
          title="Nome do projeto"
          description="Descrição do projeto"
          button={true}
          url="#"
        />
        <Card
          thumbnail="/src/assets/placeholder.jpg"
          thumbnailWidth="64px"
          title="Nome do projeto"
          description="Descrição do projeto"
          button={true}
          url="#"
        />
      </div>
    </section>
  );
}
