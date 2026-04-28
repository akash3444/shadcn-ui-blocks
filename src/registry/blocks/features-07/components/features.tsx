import {
  BookCheck,
  ChartPie,
  FolderSync,
  Goal,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Goal,
    title: "Identify Opportunities",
    description:
      "Easily uncover untapped areas to explore and expand your reach.",
    image: "https://www.fffuel.co/images/dddepth-preview/dddepth-051.jpg",
  },
  {
    icon: BookCheck,
    title: "Build Authority",
    description: "Create valuable content that resonates and inspires trust.",
    image: "https://www.fffuel.co/images/dddepth-preview/dddepth-248.jpg",
  },
  {
    icon: ChartPie,
    title: "Instant Insights",
    description: "Gain immediate, actionable insights with a quick glance.",
    image: "https://www.fffuel.co/images/dddepth-preview/dddepth-177.jpg",
  },
  {
    icon: Users,
    title: "Engage with Your Audience",
    description: "Boost audience engagement with interactive features.",
    image: "https://www.fffuel.co/images/dddepth-preview/dddepth-012.jpg",
  },
  {
    icon: FolderSync,
    title: "Automate Your Workflow",
    description: "Streamline your processes by automating repetitive tasks.",
    image: "https://www.fffuel.co/images/dddepth-preview/dddepth-045.jpg",
  },
  {
    icon: Zap,
    title: "Accelerate Growth",
    description: "Supercharge your growth by implementing strategies.",
    image: "https://www.fffuel.co/images/dddepth-preview/dddepth-028.jpg",
  },
  {
    icon: BookCheck,
    title: "Build Authority",
    description: "Create valuable content that resonates and inspires trust.",
    image: "https://www.fffuel.co/images/dddepth-preview/dddepth-031.jpg",
  },
  {
    icon: ChartPie,
    title: "Instant Insights",
    description: "Gain immediate, actionable insights with a quick glance.",
    image: "https://www.fffuel.co/images/dddepth-preview/dddepth-034.jpg",
  },
  {
    icon: Goal,
    title: "Identify Opportunities",
    description:
      "Easily uncover untapped areas to explore and expand your reach.",
    image: "https://www.fffuel.co/images/dddepth-preview/dddepth-059.jpg",
  },
];

const Features = () => {
  return (
    <div className="px-6 py-20">
      <div className="mx-auto w-full max-w-(--breakpoint-xl)">
        <h2 className="text-pretty font-medium text-4xl tracking-[-0.04em] sm:mx-auto sm:max-w-xl sm:text-center md:text-[2.75rem] md:leading-[1.2]">
          Strengthen your strategy
        </h2>
        <p className="mt-3 text-pretty text-muted-foreground text-xl -tracking-[0.01em] sm:text-center md:text-2xl">
          No complex configs. Just copy, paste, and start building
        </p>
        <div className="mt-12 grid gap-6 sm:mt-18 sm:gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Link href="#" key={index}>
              <div className="-mx-2 flex max-w-lg items-center gap-6 rounded-lg sm:mx-0">
                <div className="aspect-square h-24 shrink-0 overflow-hidden rounded-lg border border-border/20 bg-muted">
                  <img
                    alt=""
                    className="size-full object-cover"
                    height={96}
                    src={feature.image}
                    width={96}
                  />
                </div>
                <div className="">
                  <span className="font-medium text-lg tracking-[-0.015em]">
                    {feature.title}
                  </span>
                  <p className="mt-1 text-pretty text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
