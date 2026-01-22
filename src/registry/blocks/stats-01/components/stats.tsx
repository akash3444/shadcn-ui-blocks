const Stats = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="mx-auto max-w-(--breakpoint-xl) py-12 text-center">
        <h2 className="font-semibold text-4xl tracking-tighter md:text-5xl">
          Why Should You Choose Us?
        </h2>
        <p className="mt-4 text-muted-foreground text-xl">
          Because after switching to us...
        </p>

        <div className="mt-16 grid justify-center gap-x-12 gap-y-16 sm:mt-24 sm:grid-cols-2 lg:grid-cols-3">
          <div className="max-w-3xs">
            <span className="font-semibold text-5xl">96%</span>
            <p className="mt-6 text-lg">
              of customers say they have a better brand experience
            </p>
          </div>
          <div className="max-w-3xs">
            <span className="font-semibold text-5xl">95%</span>
            <p className="mt-6 text-lg">
              of customers say they gather more data, more easily
            </p>
          </div>
          <div className="max-w-3xs">
            <span className="font-semibold text-5xl">87%</span>
            <p className="mt-6 text-lg">
              of customers say they reveal deeper insights from data
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
