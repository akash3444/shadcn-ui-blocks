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
    <div className="min-h-screen flex items-center justify-center py-12 px-6">
      <div className="grow w-full sm:max-w-(--breakpoint-md) lg:max-w-(--breakpoint-lg)">
        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">
          Ignite Your Imagination
        </h2>
        <div className="w-full mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col text-start w-full"
            >
              <div className="mb-5 sm:mb-6 w-full aspect-4/5 bg-muted rounded-xl" />
              <span className="text-2xl font-semibold tracking-[-0.015em]">
                {feature.title}
              </span>
              <p className="mt-2 max-w-[25ch] text-muted-foreground text-[17px]">
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
