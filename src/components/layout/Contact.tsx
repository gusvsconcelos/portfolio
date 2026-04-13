import Button from "../ui/Button";
import { Send } from "lucide-react";

export default function Contact() {
  return (
    <section className="flex flex-col items-center gap-6 p-6 rounded-sm border-solid border border-light-border dark:border-fg-dark-2">
      {/*Call-to-action*/}
      <h2 className="max-w-80 text-center text-2xl font-semibold text-fg-1 dark:text-fg-dark-1">
        Disponível para projetos e colaborações.
      </h2>

      {/*Button*/}
      <Button
        content={
          <>
            <Send size={16} /> <p>Contato</p>
          </>
        }
        url="mailto:gustavo.vs.me@gmail.com"
      />
    </section>
  );
}
