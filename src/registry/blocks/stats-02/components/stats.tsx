const Stats = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="mx-auto w-full max-w-(--breakpoint-xl) px-6 py-12 xl:px-0">
        <h2 className="font-semibold text-4xl tracking-tighter md:text-5xl">
          The perfect starting point for any project
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          The world&apos;s most advanced UI kit for Figma. Meticulously crafted
          with 100% Auto Layout 5.0, variables, smart variants, and WCAG
          accessibility.
        </p>

        <div className="mt-16 grid justify-center gap-x-10 gap-y-16 sm:mt-24 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <span className="font-semibold text-5xl tracking-tight md:text-6xl">
              900+
            </span>
            <p className="mt-6 font-medium text-xl">
              Global styles + variables
            </p>
            <p className="mt-2 text-muted-foreground">
              Super smart global color, typography and effects styles +
              variables!
            </p>
          </div>
          <div>
            <span className="font-semibold text-5xl text-muted-foreground tracking-tight md:text-6xl">
              10,000+
            </span>
            <p className="mt-6 font-medium text-xl">Components and variants</p>
            <p className="mt-2 text-muted-foreground">
              We&apos;ve thought of everything you need so you don&apos;t have
              to.
            </p>
          </div>
          <div>
            <span className="font-semibold text-5xl tracking-tight md:text-6xl">
              420+
            </span>
            <p className="mt-6 font-medium text-xl">Page design examples</p>
            <p className="mt-2 text-muted-foreground">
              A whopping 420+ ready-to-go desktop and mobile page examples.
            </p>
          </div>
          <div>
            <span className="font-semibold text-5xl text-muted-foreground tracking-tight md:text-6xl">
              2,000+
            </span>
            <p className="mt-6 font-medium text-xl">Icons and logos</p>
            <p className="mt-2 text-muted-foreground">
              All the icons you&apos;ll need, including country flags and
              payments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
