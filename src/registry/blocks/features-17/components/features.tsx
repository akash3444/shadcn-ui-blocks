import {
  Cable,
  Code,
  Contrast,
  MonitorSmartphone,
  SquareDashedMousePointer,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    title: "Blazing Fast Performance",
    description:
      "Optimized for speed with minimal loading times and instant interactions, ensuring a smooth experience across devices.",
    icon: Zap,
  },
  {
    title: "Fully Customizable",
    description:
      "Tailor every component to match your brand or workflow — with built-in support for themes, layouts, and configurations.",
    icon: SquareDashedMousePointer,
  },
  {
    title: "Developer-Friendly",
    description:
      "Built with clean, modern code and best practices in mind, making it easy to integrate, extend, and scale.",
    icon: Code,
  },
  {
    title: "Responsive by Default",
    description:
      "Every component is designed to look great on all screen sizes — no extra work needed to make things mobile-friendly.",
    icon: MonitorSmartphone,
  },
  {
    title: "Accessible for Everyone",
    description:
      "Built with accessibility best practices in mind to ensure an inclusive experience for all users, regardless of ability.",
    icon: Contrast,
  },
  {
    title: "Seamless Integration",
    description:
      "Easily connect with your favorite tools, APIs, and services — whether it's authentication, databases, or third-party libraries.",
    icon: Cable,
  },
];

const Features = () => {
  return (
    <div className="mx-auto flex max-w-screen-xl flex-col px-6 py-12 sm:py-14">
      <h2 className="text-pretty text-center font-semibold text-4xl tracking-tight sm:text-5xl">
        Powerful Features, Built for You
      </h2>
      <p className="mt-3 text-center text-muted-foreground text-xl sm:text-2xl">
        Designed for speed, flexibility, and ease of use.
      </p>

      <div className="mt-16 grid grid-cols-1 gap-1.5 border bg-muted p-1.5 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div className="relative -m-px border bg-card px-5 py-7" key={index}>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-primary/15">
              <feature.icon />
            </div>
            <h3 className="mt-5 font-semibold text-xl tracking-[-0.005em]">
              {feature.title}
            </h3>
            <p className="mt-2 text-base text-foreground/90">
              {feature.description}
            </p>
            <Badge
              className="absolute top-0 right-0 rounded-none border-t-0 border-r-0 bg-muted/30 font-mono dark:border-foreground/15 dark:bg-background"
              variant="outline"
            >
              {(index + 1).toString().padStart(2, "0")}
            </Badge>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
