export default function About() {
  return (
    <section className="p-6 rounded-sm border-solid border border-fg-2">
      {/*Title*/}
      <h2 className="text-2xl font-semibold text-accent-1">Sobre</h2>

      <div className="flex flex-row mt-4 text-fg-2">
        {/*Decoration*/}
        <div className="w-3 max-h-fit mr-6 rounded-2xl bg-accent-1"></div>

        {/*About me*/}
        <div>
          <p>
            Sou estudante de Análise e Desenvolvimento de Sistemas e venho
            construindo minha experiência principalmente com desenvolvimento
            web. Já trabalhei como desenvolvedor autônomo criando e mantendo
            sites, além de ter passado por funções como suporte técnico e
            produção de conteúdo, o que acabou ampliando minha visão sobre
            tecnologia, comunicação e uso real das aplicações.
          </p>
          <br />
          <p>
            Hoje, foco meus estudos e projetos em aplicações completas,
            envolvendo tanto o front-end quanto o back-end. Tenho familiaridade
            com JavaScript, React, Node.js e Python, e costumo aprender na
            prática, desenvolvendo projetos próprios e explorando novas
            ferramentas conforme surge a necessidade.
          </p>
          <br />
          <p>
            Me interesso por entender como as coisas funcionam por trás, não só
            em termos de código, mas também organização, estrutura e decisões de
            projeto. Valorizo soluções simples, bem feitas e que realmente
            funcionem no dia a dia, em vez de complexidade desnecessária.
          </p>
        </div>
      </div>
    </section>
  );
}
