const features = [
  {
    title: "Identify Opportunities",
    description: "Find untapped areas to explore effortlessly.",
  },
  {
    title: "Build Authority",
    description: "Craft content that resonates and inspires trust.",
  },
  {
    title: "Instant Insights",
    description: "Get actionable insights instantly at a glance.",
  },
];

const Features = () => {
  return (
    <div className="flex min-h-screen items-center justify-center px-6 py-12">
      <div className="w-full grow sm:max-w-(--breakpoint-md) lg:max-w-(--breakpoint-lg)">
        <h2 className="font-semibold text-4xl tracking-tight sm:text-5xl">
          Ignite Your Imagination
        </h2>
        <div className="mt-10 grid w-full gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              className="flex w-full flex-col text-start"
              key={feature.title}
            >
              <div className="mb-5 aspect-4/5 w-full rounded-xl bg-muted sm:mb-6" />
              <span className="font-semibold text-2xl tracking-[-0.015em]">
                {feature.title}
              </span>
              <p className="mt-2 max-w-[25ch] text-[17px] text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
