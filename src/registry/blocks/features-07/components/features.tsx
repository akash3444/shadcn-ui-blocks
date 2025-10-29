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
      "Easily uncover untapped areas to explore and expand your reach effortlessly and effectively.",
  },
  {
    icon: BookCheck,
    title: "Build Authority",
    description:
      "Create valuable content that resonates, inspires trust, and positions you as an expert.",
  },
  {
    icon: ChartPie,
    title: "Instant Insights",
    description:
      "Gain immediate, actionable insights with a quick glance, enabling fast decision-making.",
  },
  {
    icon: Users,
    title: "Engage with Your Audience",
    description:
      "Boost audience engagement with interactive features like polls, quizzes, and forms.",
  },
  {
    icon: FolderSync,
    title: "Automate Your Workflow",
    description:
      "Streamline your processes by automating repetitive tasks, saving time and reducing effort.",
  },
  {
    icon: Zap,
    title: "Accelerate Growth",
    description:
      "Supercharge your growth by implementing strategies that drive results quickly and efficiently.",
  },
  {
    icon: BookCheck,
    title: "Build Authority",
    description:
      "Create valuable content that resonates, inspires trust, and positions you as an expert.",
  },
  {
    icon: ChartPie,
    title: "Instant Insights",
    description:
      "Gain immediate, actionable insights with a quick glance, enabling fast decision-making.",
  },
  {
    icon: Goal,
    title: "Identify Opportunities",
    description:
      "Easily uncover untapped areas to explore and expand your reach effortlessly and effectively.",
  },
];

const Features = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-(--breakpoint-xl) w-full py-10 px-6">
        <h2 className="text-4xl md:text-[2.75rem] md:leading-[1.2] font-semibold tracking-[-0.03em] sm:max-w-xl text-pretty sm:mx-auto sm:text-center">
          Strengthen Your Strategy
        </h2>
        <p className="mt-2 text-muted-foreground text-lg sm:text-xl sm:text-center">
          Enhance your strategy with intelligent tools designed for success.
        </p>
        <div className="mt-12 sm:mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-y-8">
          {features.map((feature, index) => (
            <Link key={index} href="#">
              <div className="flex gap-6 items-center rounded-lg -mx-2 sm:mx-0 max-w-lg">
                <div className="h-24 aspect-square shrink-0 rounded-lg bg-muted" />
                <div className="">
                  <span className="font-semibold tracking-[-0.015em] text-lg">
                    {feature.title}
                  </span>
                  <p className="mt-1 text-sm text-muted-foreground text-pretty">
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
