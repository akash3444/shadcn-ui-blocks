const features = [
  {
    title: "Identify Opportunities",
    description: "Find untapped areas to explore effortlessly.",
    image: "https://www.fffuel.co/images/dddepth-preview/dddepth-051.jpg",
  },
  {
    title: "Build Authority",
    description: "Craft content that resonates and inspires trust.",
    image: "https://www.fffuel.co/images/dddepth-preview/dddepth-248.jpg",
  },
  {
    title: "Instant Insights",
    description: "Get actionable insights instantly at a glance.",
    image: "https://www.fffuel.co/images/dddepth-preview/dddepth-034.jpg",
  },
];

const Features = () => {
  return (
    <div className="flex min-h-screen items-center justify-center px-6 py-12">
      <div className="w-full grow sm:max-w-(--breakpoint-md) lg:max-w-(--breakpoint-lg)">
        <h2 className="font-satoshi font-semibold text-4xl tracking-tight sm:text-5xl">
          Features that help you build better
        </h2>
        <div className="mt-12 grid w-full gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              className="flex w-full flex-col text-start"
              key={feature.title}
            >
              <div className="relative mb-5 aspect-4/5 w-full overflow-hidden rounded-xl sm:mb-6">
                <img
                  alt=""
                  className="size-full object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  src={feature.image}
                />
              </div>
              <div className="px-1">
                <span className="font-medium text-[22px] tracking-[-0.015em]">
                  {feature.title}
                </span>
                <p className="mt-1 max-w-[25ch] text-[17px] text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
