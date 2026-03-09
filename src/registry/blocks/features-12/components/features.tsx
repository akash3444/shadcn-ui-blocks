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
import { Button } from "@/components/ui/button";

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

      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div className="-mr-px flex h-16 items-center border px-6 font-medium text-lg sm:col-span-2 md:col-span-1">
          <Smile className="mr-4 text-primary" /> Features that make you happy
        </div>
        <div className="-mr-px hidden h-16 border bg-[image:repeating-linear-gradient(315deg,_var(--muted)_0,_var(--muted)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed md:block lg:col-span-2" />
        {features.map((feature, index) => (
          <div
            className="-mt-px -mr-px border border-border/75 bg-muted/20 px-5 pt-7 pb-5"
            key={index}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-primary/15">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-xl tracking-[-0.005em]">
                {feature.title}
              </h3>
            </div>
            <p className="mt-4 text-base text-foreground/90">
              {feature.description}
            </p>

            <Button asChild className="!px-0 mt-4" variant="link">
              <Link href="#" target="_blank">
                Learn more <ArrowUpRight />
              </Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
