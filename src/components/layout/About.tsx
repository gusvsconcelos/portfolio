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
            Desenvolvimento de Sistemas pela Estácio. Venho construindo
            aplicações web por meio de projetos pessoais — desde interfaces até
            APIs e integrações entre camadas.
          </p>

          <p>
            Meu dia a dia de estudos e projetos gira em torno de React,
            TypeScript, Tailwind e Node.js, com conhecimento também em Python,
            PHP, PostgreSQL e Docker. Gosto de código bem estruturado, fácil de
            manter e que preste atenção tanto nos detalhes técnicos quanto na
            experiência de quem usa.
          </p>

          <p>
            Atualmente atuo como estagiário de Analista de QA na CodXis.
            Trabalhar com testes e qualidade tem complementado bastante minha
            visão de desenvolvimento: me ajuda a enxergar não só como construir,
            mas também o que é preciso para que o software realmente chegue
            confiável até o usuário.
          </p>
        </div>
      </div>
    </section>
  );
}
