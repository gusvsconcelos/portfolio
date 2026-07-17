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
            Desenvolvimento de Sistemas pela Universidade Estácio de Sá. Tenho
            experiência prática no desenvolvimento de aplicações web por meio de
            projetos pessoais, atuando na construção de interfaces, APIs e
            integrações entre diferentes camadas da aplicação.
          </p>
          <p>
            Trabalho principalmente com React, TypeScript, Tailwind CSS e
            Node.js, além de conhecimentos em Python, PHP, PostgreSQL e Docker.
            Busco desenvolver aplicações bem estruturadas, com código
            organizado, foco em manutenção e atenção aos detalhes de
            implementação e experiência do usuário.
          </p>
          <p>
            Atualmente, atuo como estagiário de Analista de QA na CodXis, onde
            desenvolvo experiência em testes, validação de requisitos e
            processos de qualidade de software. Essa atuação complementa minha
            visão sobre desenvolvimento, permitindo compreender não apenas a
            construção de uma aplicação, mas também os critérios necessários
            para entregar software confiável.
          </p>
        </div>
      </div>
    </section>
  );
}
