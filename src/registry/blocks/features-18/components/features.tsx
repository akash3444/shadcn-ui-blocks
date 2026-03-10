import {
  ArrowUpRightIcon,
  BinocularsIcon,
  GlobeIcon,
  HouseIcon,
  LockIcon,
  ShieldCheckIcon,
  ZapIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const plusPoints = [
  {
    icon: ShieldCheckIcon,
    title: "Real-Time Protection",
    description:
      "Stay alert with instant notifications and smart security monitoring.",
  },
  {
    icon: ZapIcon,
    title: "Smart & Simple Setup",
    description: "Install easily in minutes with no complex tools or wiring.",
  },
  {
    icon: BinocularsIcon,
    title: "Peace of Mind Anywhere",
    description: "Monitor and control your home from anywhere, anytime.",
  },
  {
    icon: HouseIcon,
    title: "Smart Home Integration",
    description:
      "Easily connect with your favorite smart home devices and services.",
  },
  {
    icon: GlobeIcon,
    title: "Global Coverage",
    description: "Monitor and control your home from anywhere, anytime.",
  },
  {
    icon: LockIcon,
    title: "Secure & Reliable",
    description:
      "Built with the latest security technologies to protect your home and family.",
  },
];

export default function Features() {
  return (
    <div
      className="mx-auto max-w-(--breakpoint-xl) overflow-clip px-8 py-24 text-center"
      id="why-choose-us"
    >
      <strong className="font-medium text-muted-foreground text-sm uppercase tracking-wide">
        Why Choose Us
      </strong>
      <h2 className="mx-auto mt-5 max-w-4xl text-balance font-semibold text-4xl leading-[1.3] tracking-[-0.02em] sm:text-5xl">
        Advanced Home Security Solutions Built for Modern Living
      </h2>
      <p className="mt-5 text-muted-foreground text-xl">
        We are constantly always keep pace with the time.
      </p>

      <div className="relative mx-auto mt-16 grid max-w-5xl grid-cols-1 border nth-3:border sm:grid-cols-2 lg:grid-cols-3">
        <div className="mask-y-from-95% absolute -inset-y-14 left-0 -translate-x-px border-s border-dashed" />
        <div className="mask-y-from-95% absolute -inset-y-14 right-0 translate-x-px border-s border-dashed" />
        <div className="mask-x-from-95% absolute -inset-x-14 top-0 -translate-y-px border-t border-dashed" />
        <div className="mask-x-from-95% absolute -inset-x-14 bottom-0 translate-y-px border-b border-dashed" />

        {plusPoints.map((plusPoint, index) => (
          <div
            className={cn(
              "relative -mt-px flex w-full flex-col items-center gap-2 border-t p-6 pt-9 odd:bg-muted/40",
              "lg:not-[&:nth-child(3n+1)]:border-e",
              "max-sm:odd:border-e-0 max-lg:odd:border-e"
            )}
            key={index}
          >
            <plusPoint.icon className="size-12 fill-foreground/10 stroke-[1.5px] text-foreground" />
            <h3 className="mt-8 font-semibold text-xl tracking-[-0.005em]">
              {plusPoint.title}
            </h3>
            <p className="text-balance text-muted-foreground">
              {plusPoint.description}
            </p>
            <Button className="mt-6 font-medium" variant="link">
              Learn More <ArrowUpRightIcon />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
