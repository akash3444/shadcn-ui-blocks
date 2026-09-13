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
    <div className="mx-auto flex max-w-7xl flex-col px-6 py-20">
      <h2 className="text-pretty text-center font-medium text-4xl tracking-[-0.04em] sm:text-[2.75rem]">
        Consistency first
      </h2>
      <p className="mt-3 text-pretty text-center text-muted-foreground text-xl -tracking-[0.01em] sm:text-2xl">
        Maintain a clean and consistent UI across your app
      </p>

      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div
            className="relative rounded-lg border border-border/80"
            key={index}
          >
            <div className="mask-b-from-50% dark:mask-b-from-40% aspect-4/5 w-full rounded-t-lg">
              <img
                alt=""
                className="size-full rounded-t-lg object-cover"
                src={feature.image}
              />
            </div>

            <div className="mask-t-from-50% absolute inset-x-0 bottom-0 rounded-b-lg bg-background/80 p-6 pt-20">
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
