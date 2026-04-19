export default function CurrentlyWorkingOn() {
  return (
    <section className="p-6 rounded-sm border-solid border border-fg-2 dark:border-fg-dark-2">
      {/*Title*/}
      <h2 className="text-2xl font-semibold text-accent-1">Em andamento</h2>

      {/*Working on*/}
      <div className="flex flex-wrap gap-4 mt-4 *:flex *:items-center *:gap-2 *:text-fg-2 *:dark:text-fg-dark-2 *:font-semibold *:animate-pulse">
        <div>
          <div className="w-2 h-2 rounded-full bg-accent-2"></div>
          <p>Estudando PHP (Laravel)</p>
        </div>
      </div>
    </section>
  );
}
