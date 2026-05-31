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
            Desenvolvedor Full Stack e estudante de Análise e Desenvolvimento de
            Sistemas na Universidade Estácio de Sá. Possuo experiência prática
            no desenvolvimento de aplicações completas através de projetos
            pessoais, atuando tanto no frontend quanto no backend.
          </p>
          <p>
            Tenho sólida experiência com React, TypeScript, Tailwind CSS e
            Node.js, além de conhecimento em Python, PHP, bancos de dados
            relacionais (PostgreSQL e MySQL) e Docker. Busco sempre construir
            soluções práticas, bem estruturadas e com boa experiência de
            usuário, priorizando código limpo, performance e manutenibilidade.
          </p>
          <p>
            Além da programação, já atuei em suporte técnico, produção de
            conteúdo digital e operações, experiências que desenvolveram minha
            capacidade de entender as necessidades reais dos usuários e
            trabalhar com prazos e demandas diversas.
          </p>
        </div>
      </div>
    </section>
  );
}
