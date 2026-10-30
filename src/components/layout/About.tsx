export default function About() {
  return (
    <section className="p-6 rounded-sm border-solid border border-fg-2 dark:border-fg-dark-2">
      {/*Title*/}
      <h2 className="text-2xl font-semibold text-accent-1">Sobre</h2>

      <div className="flex mt-4 text-fg-2 dark:text-fg-dark-2">
        {/*Decoration*/}
        <div className="min-w-0.5 min-h-fit mr-4 rounded-2xl bg-accent-1"></div>

        {/* About me */}
        <div className="flex flex-col gap-4 transition duration-300">
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
    </section>
  );
}
