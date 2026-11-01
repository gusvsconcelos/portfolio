import Section from "../ui/Section";
import Button from "../ui/Button";
import { site } from "../../data/site";
import { Send } from "lucide-react";

export default function Contact() {
  return (
    <Section className="flex flex-col items-center gap-4">
      {/*Call-to-action*/}
      <h2 className="max-w-80 text-center text-2xl font-semibold text-fg-1 transition-colors duration-300">
        Disponível para projetos e colaborações
      </h2>

      {/*Button*/}
      <Button url={`mailto:${site.email}`}>
        <Send size={16} aria-hidden="true" /> <span>Contato</span>
      </Button>
    </Section>
  );
}
