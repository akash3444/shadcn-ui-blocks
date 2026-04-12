function Stats() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-balance text-center font-satoshi font-semibold text-3xl tracking-tight sm:text-4xl md:text-5xl">
        Backed by real usage
      </h2>
      <p className="mt-4 text-center text-muted-foreground text-xl tracking-[-0.015em] sm:text-lg md:text-2xl">
        Trusted by thousands to build modern UIs faster.
      </p>

      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <div className="rounded-xl border px-8 py-10">
          <span className="font-satoshi font-semibold text-5xl">70%</span>
          <p className="mt-4 text-foreground/80 text-xl">
            Faster UI development
          </p>
        </div>
        <div className="rounded-xl border px-8 py-10">
          <span className="font-satoshi font-semibold text-5xl">5x</span>
          <p className="mt-4 text-foreground/80 text-xl">
            Increase in productivity
          </p>
        </div>
        <div className="rounded-xl border px-8 py-10">
          <span className="font-satoshi font-semibold text-5xl">98%</span>
          <p className="mt-4 text-foreground/80 text-xl">
            Customer satisfaction
          </p>
        </div>
      </div>
    </div>
  );
}

export default Stats;
