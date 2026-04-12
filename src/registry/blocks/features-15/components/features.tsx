const features = [
  {
    title: "Blazing Fast Performance",
    description:
      "Optimized for speed with minimal loading times and instant interactions.",
    image: "https://www.fffuel.co/images/dddepth-preview/dddepth-028.jpg",
  },
  {
    title: "Fully Customizable",
    description: "Tailor every component to match your brand or workflow.",
    image: "https://www.fffuel.co/images/dddepth-preview/dddepth-051.jpg",
  },
  {
    title: "Developer-Friendly",
    description: "Built with clean, modern code and best practices in mind.",
    image: "https://www.fffuel.co/images/dddepth-preview/dddepth-248.jpg",
  },
  {
    title: "Responsive by Default",
    description:
      "Every component is designed to look great on all screen sizes.",
    image: "https://www.fffuel.co/images/dddepth-preview/dddepth-045.jpg",
  },
  {
    title: "Accessible for Everyone",
    description: "Built with accessibility best practices in mind.",
    image: "https://www.fffuel.co/images/dddepth-preview/dddepth-034.jpg",
  },
  {
    title: "Seamless Integration",
    description: "Easily connect with your favorite tools, APIs, and services.",
    image: "https://www.fffuel.co/images/dddepth-preview/dddepth-012.jpg",
  },
];

const Features = () => {
  return (
    <div className="mx-auto flex max-w-7xl flex-col px-6 py-12 sm:py-14">
      <h2 className="text-pretty text-center font-satoshi font-semibold text-4xl tracking-tight sm:text-5xl">
        A better way to build interfaces
      </h2>
      <p className="mt-4 text-center text-muted-foreground text-xl sm:text-2xl">
        Simplify your development process with flexible, production-ready UI
        components
      </p>

      <div className="mt-16 grid grid-cols-1 gap-6 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div className="rounded-lg border border-border/80" key={index}>
            <div className="mask-b-from-50% dark:mask-b-from-40% aspect-square w-full rounded-t-lg">
              <img
                alt=""
                className="size-full rounded-t-lg object-cover"
                src={feature.image}
              />
            </div>

            <div className="p-6">
              <h3 className="font-medium text-xl tracking-[-0.005em]">
                {feature.title}
              </h3>
              <p className="mt-2 text-foreground/80 text-lg">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
