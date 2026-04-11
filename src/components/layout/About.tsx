export default function About() {
  return (
    <section className="p-6 rounded-sm border-solid border border-fg-2">
      {/*Title*/}
      <h2 className="text-2xl font-semibold text-accent-1">Sobre</h2>

      <div className="flex mt-4 text-fg-2">
        {/*Decoration*/}
        <div className="min-w-0.5 min-h-fit mr-4 rounded-2xl bg-accent-1"></div>

        {/*About me*/}
        <div className="flex flex-col gap-4">
          <p>
            Sou estudante de Análise e Desenvolvimento de Sistemas, com foco em
            desenvolvimento web. Já atuei como desenvolvedor autônomo, criando e
            mantendo sites, além de experiências com suporte técnico e produção
            de conteúdo, o que me deu uma visão mais prática sobre como as
            aplicações são usadas no dia a dia.
          </p>

          <p>
            Atualmente, concentro meus estudos em aplicações completas,
            trabalhando tanto no front-end quanto no back-end. Tenho experiência
            com TypeScript, React, Node.js e Python, e aprendo principalmente
            desenvolvendo projetos próprios e resolvendo problemas reais.
          </p>

          <p>
            Tenho interesse em entender como as coisas funcionam além do código,
            incluindo organização, estrutura e decisões de projeto. Prefiro
            soluções simples, bem construídas e que funcionem na prática,
            evitando complexidade desnecessária.
          </p>
        </div>
      </div>
    </section>
  );
}
