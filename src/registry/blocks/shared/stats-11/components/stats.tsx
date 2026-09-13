function Stats() {
  return (
    <div className="w-full px-6">
      <div className="relative mx-auto my-20 max-w-5xl overflow-hidden rounded-2xl bg-muted px-6 py-16">
        <h2 className="text-balance text-center font-medium text-3xl tracking-[-0.04em] sm:text-4xl md:text-[2.75rem]">
          Reliable by Design
        </h2>
        <p className="mt-4 text-center text-muted-foreground text-xl tracking-[-0.01em] sm:text-lg md:text-2xl">
          Trusted by thousands to build modern UIs faster
        </p>

        <div className="mt-20 grid grid-cols-1 gap-4 gap-y-16 text-center sm:grid-cols-2 md:grid-cols-3">
          <div>
            <span className="font-medium text-5xl text-foreground">70%</span>
            <p className="mt-4 text-foreground/80 text-xl">
              Faster UI development
            </p>
          </div>
          <div>
            <span className="font-medium text-5xl text-foreground">5x</span>
            <p className="mt-4 text-foreground/80 text-xl">
              Increase in productivity
            </p>
          </div>
          <div>
            <span className="font-medium text-5xl">98%</span>
            <p className="mt-4 text-foreground/80 text-xl">
              Customer satisfaction
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
