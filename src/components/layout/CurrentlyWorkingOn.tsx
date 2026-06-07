import WorkingOn from "../ui/WorkingOn";

export default function CurrentlyWorkingOn() {
  return (
    <section className="p-6 rounded-sm border-solid border border-fg-2 dark:border-fg-dark-2">
      {/*Title*/}
      <h2 className="text-2xl font-semibold text-accent-1">Em andamento</h2>

      {/*Working on*/}
      <div className="mt-4">
        <WorkingOn activity="Desenvolvendo capacitação em QA" />
        <WorkingOn activity="Estudando PHP (Laravel)" />
      </div>
    </section>
  );
}
