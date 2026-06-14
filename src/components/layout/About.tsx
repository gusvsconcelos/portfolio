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
            Desenvolvimento de Sistemas na Universidade Estácio de Sá. Tenho
            experiência prática no desenvolvimento de aplicações web modernas
            por meio de projetos pessoais, atuando tanto no frontend quanto no
            backend.
          </p>
          <p>
            Trabalho principalmente com React, TypeScript, Tailwind CSS e
            Node.js, além de possuir conhecimentos em Python, PHP, PostgreSQL e
            Docker. Busco desenvolver soluções práticas, bem estruturadas e de
            fácil manutenção, priorizando código limpo, performance e boa
            experiência do usuário.
          </p>
          <p>
            Atualmente, atuo como estagiário de Analista de QA na CodXis,
            ampliando minha experiência em qualidade de software, testes e
            processos de desenvolvimento, o que complementa minha visão sobre a
            construção de aplicações confiáveis e robustas.
          </p>
        </div>
      </div>
    </section>
  );
}
