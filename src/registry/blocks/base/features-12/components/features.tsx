import {
  ArrowUpRight,
  Cable,
  Code,
  Contrast,
  MonitorSmartphone,
  Smile,
  SquareDashedMousePointer,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/registry/ui/base/button";

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
    <div className="mx-auto flex max-w-7xl flex-col px-6 py-20">
      <h2 className="text-pretty text-center font-medium text-4xl tracking-[-0.04em] sm:text-[2.75rem]">
        Designed to scale
      </h2>
      <p className="mt-3 text-center text-muted-foreground text-xl -tracking-[0.01em] sm:text-2xl">
        Spend less time configuring and more time creating
      </p>

      <div className="mt-20 grid grid-cols-1 bg-card sm:grid-cols-2 lg:grid-cols-3">
        <div className="-mr-px flex h-16 items-center border px-6 font-medium text-lg sm:col-span-2 md:col-span-1">
          <Smile className="mr-4 text-primary" /> Features that make you happy
        </div>
        <div className="-mr-px hidden h-16 border bg-[repeating-linear-gradient(315deg,var(--muted)_0,var(--muted)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed md:block lg:col-span-2" />
        {features.map((feature, index) => (
          <div
            className="-mt-px -mr-px border border-border/75 px-5 pt-7 pb-5"
            key={index}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/7 text-primary dark:bg-primary/10">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="font-medium text-lg tracking-[-0.005em]">
                {feature.title}
              </h3>
            </div>
            <p className="mt-4 text-foreground/80">{feature.description}</p>

            <Button
              className="mt-4 px-0!"
              render={<Link href="#" target="_blank" />}
              variant="link"
            >
              Learn more <ArrowUpRight />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
