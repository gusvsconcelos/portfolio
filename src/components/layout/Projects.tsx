import Section from "../ui/Section";
import Card from "../ui/Card";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <Section title="Projetos">
      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <Card key={project.title} {...project} />
        ))}
      </div>
    </Section>
  );
}
