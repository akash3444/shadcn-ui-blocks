const Stats = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-(--breakpoint-xl) mx-auto py-12 text-center">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter">
          Why Should You Choose Us?
        </h2>
        <p className="mt-4 text-xl text-muted-foreground">
          Because after switching to us...
        </p>

        <div className="mt-16 sm:mt-24 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 justify-center">
          <div className="max-w-3xs">
            <span className="text-5xl font-semibold">96%</span>
            <p className="mt-6 text-lg">
              of customers say they have a better brand experience
            </p>
          </div>
          <div className="max-w-3xs">
            <span className="text-5xl font-semibold">95%</span>
            <p className="mt-6 text-lg">
              of customers say they gather more data, more easily
            </p>
          </div>
          <div className="max-w-3xs">
            <span className="text-5xl font-semibold">87%</span>
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
