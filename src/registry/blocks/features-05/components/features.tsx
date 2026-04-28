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
    <div className="px-6 py-20">
      <div className="mx-auto w-full max-w-(--breakpoint-lg)">
        <h2 className="text-pretty text-center font-medium text-4xl tracking-[-0.04em] md:text-[2.75rem]">
          What makes it different
        </h2>
        <p className="mt-3 text-center text-lg text-muted-foreground tracking-[-0.01em] md:text-2xl">
          Minimal setup, clean structure, and easy customization
        </p>
        <div className="mx-auto mt-18 grid w-full gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
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
