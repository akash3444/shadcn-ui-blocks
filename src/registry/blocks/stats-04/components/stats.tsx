function Stats() {
  return (
    <div className="mx-auto max-w-screen-lg px-6 py-16">
      <h2 className="text-balance text-center font-semibold text-3xl tracking-tight sm:text-4xl md:text-5xl">
        Growing&nbsp;Fast. Loved&nbsp;by&nbsp;Developers.
      </h2>
      <p className="mt-4 text-center text-lg text-muted-foreground sm:text-xl md:text-2xl">
        Trusted by thousands to build modern UIs faster.
      </p>

      <div className="mt-14 grid grid-cols-1 overflow-hidden rounded-2xl border sm:grid-cols-2 md:grid-cols-3">
        <div className="-m-px border-t border-l p-10">
          <span className="font-semibold text-5xl">70%</span>
          <p className="mt-4 text-lg">Faster UI development</p>
        </div>
        <div className="-m-px border-t border-l p-10">
          <span className="font-semibold text-5xl">5x</span>
          <p className="mt-4 text-lg">Increase in productivity</p>
        </div>
        <div className="-m-px border-t border-l p-10 sm:col-span-2 md:col-span-1">
          <span className="font-semibold text-5xl">98%</span>
          <p className="mt-4 text-lg">Customer satisfaction</p>
        </div>
      </div>
    </div>
  );
}

export default Stats;
