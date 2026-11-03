import {
  ArrowRightIcon,
  ChartPieIcon,
  LayoutDashboardIcon,
  LockIcon,
  MessageCircleIcon,
  RefreshCwIcon,
  WorkflowIcon,
} from "lucide-react";
import { buttonVariants } from "@/registry/bases/base/ui/button";

const features = [
  {
    icon: LayoutDashboardIcon,
    title: "Shared workspace",
    description:
      "Keep projects, documents, and conversations together in one place.",
  },
  {
    icon: WorkflowIcon,
    title: "Flexible workflows",
    description:
      "Shape each process around the way your team already gets work done.",
  },
  {
    icon: MessageCircleIcon,
    title: "Real-time collaboration",
    description:
      "Review ideas, share feedback, and make decisions without losing context.",
  },
  {
    icon: RefreshCwIcon,
    title: "Automatic updates",
    description:
      "Keep everyone informed as plans, priorities, and responsibilities change.",
  },
  {
    icon: ChartPieIcon,
    title: "Progress insights",
    description:
      "See what is moving, what is blocked, and where your team needs support.",
  },
  {
    icon: LockIcon,
    title: "Secure by default",
    description:
      "Protect company work with role-based access and clear permissions.",
  },
];

const Features = () => (
  <section className="px-6 py-20 sm:py-28">
    <div className="mx-auto max-w-(--breakpoint-lg) overflow-hidden rounded-3xl bg-muted p-7 sm:p-12">
      <div className="flex flex-col gap-6 px-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-medium text-muted-foreground text-xs uppercase tracking-[0.15em]">
            Platform
          </p>
          <h2 className="mt-5 max-w-[18ch] text-balance font-semibold text-4xl tracking-tight sm:text-5xl/[1.15]">
            One place to plan, build, and ship.
          </h2>
        </div>
        <a className={buttonVariants({ size: "lg" })} href="/features">
          Explore platform
          <ArrowRightIcon data-icon="inline-end" />
        </a>
      </div>
      <div className="-mx-4 mt-12 -mb-4 grid gap-px overflow-hidden rounded-xl bg-border/50 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <article className="bg-background p-8" key={feature.title}>
              <Icon aria-hidden="true" className="size-5" />
              <h3 className="mt-8 font-semibold text-lg">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed">
                {feature.description}
              </p>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

export default Features;
