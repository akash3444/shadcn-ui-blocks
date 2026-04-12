import {
  BookCheck,
  ChartPie,
  FolderSync,
  Goal,
  Users,
  Zap,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const features = [
  {
    icon: Goal,
    title: "Identify Opportunities",
    description:
      "Easily uncover untapped areas to explore and expand your reach effortlessly.",
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
];

const Features = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-(--breakpoint-lg) px-6 py-10">
        <h2 className="text-pretty font-satoshi font-semibold text-4xl tracking-tight md:text-5xl">
          Designed for Speed and Scalability
        </h2>
        <p className="mt-4 text-lg text-muted-foreground md:text-2xl">
          Enhance your strategy with intelligent tools designed for success.
        </p>
        <div className="mx-auto mt-12 grid w-full gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card
              className="flex flex-col overflow-hidden rounded-xl border pb-0 shadow-none"
              key={feature.title}
            >
              <CardHeader>
                <feature.icon />
                <h4 className="mt-3! font-medium text-xl tracking-tight">
                  {feature.title}
                </h4>
                <p className="text-[17px] text-muted-foreground">
                  {feature.description}
                </p>
              </CardHeader>
              <CardContent className="mt-auto px-0 pb-0">
                <div className="ml-6 h-40 rounded-tl-xl bg-muted" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
