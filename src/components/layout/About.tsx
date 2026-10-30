import Section from "../ui/Section";

export default function About() {
  return (
    <Section title="Sobre">
      <div className="flex text-fg-2 transition-colors duration-300">
        {/*Decoration*/}
        <div className="w-0.5 shrink-0 self-stretch mr-4 rounded-full bg-accent transition-colors duration-300"></div>

        {/* About me */}
        <div className="flex flex-col gap-4">
          <p>
            Sou Desenvolvedor Full Stack e graduando em Análise e
            Desenvolvimento de Sistemas. Venho desenvolvendo projetos próprios
            para colocar em prática meus conhecimentos, trabalhando tanto no
            frontend quanto no backend de aplicações web.
          </p>

          <p>
            Minha stack principal envolve React, TypeScript, Tailwind CSS e
            Node.js. Também trabalho com Python, PostgreSQL e Docker em meus
            estudos e projetos.
          </p>

          <p>
            Atualmente, atuo como Analista de QA na CodXis. A experiência com
            testes me permite olhar para o software além da implementação,
            entendendo melhor como as funcionalidades se comportam e
            identificando problemas que poderiam passar despercebidos durante o
            desenvolvimento.
          </p>
        </div>
      </div>
    </Section>
  );
}
