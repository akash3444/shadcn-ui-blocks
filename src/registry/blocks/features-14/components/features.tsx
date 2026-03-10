import {
  ArrowUpRightIcon,
  BinocularsIcon,
  CogIcon,
  ShieldCheckIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const plusPoints = [
  {
    icon: ShieldCheckIcon,
    title: "Real-Time Protection",
    description:
      "Stay alert with instant notifications and smart security monitoring.",
  },
  {
    icon: CogIcon,
    title: "Smart & Simple Setup",
    description: "Install easily in minutes with no complex tools or wiring.",
  },
  {
    icon: BinocularsIcon,
    title: "Peace of Mind Anywhere",
    description: "Monitor and control your home from anywhere, anytime.",
  },
];

export default function Features() {
  return (
    <div
      className="mx-auto max-w-(--breakpoint-xl) px-6 py-24 text-center"
      id="why-choose-us"
    >
      <strong className="font-medium text-muted-foreground text-sm uppercase tracking-wide">
        Why Choose Us
      </strong>
      <h2 className="mx-auto mt-5 max-w-4xl text-balance font-semibold text-4xl leading-[1.2] tracking-tight sm:text-5xl">
        We are Leading in Smart Assistants with Nearly 20 Years of Experience
      </h2>
      <p className="mt-5 text-muted-foreground text-xl">
        We are constantly always keep pace with the time.
      </p>

      <div className="mt-16 flex flex-wrap justify-center gap-4">
        {plusPoints.map((plusPoint) => (
          <div
            className="relative w-full overflow-hidden rounded-lg border bg-gradient-to-b from-foreground/3 px-6 py-10 sm:max-w-xs"
            key={plusPoint.title}
          >
            <BackgroundPattern />

            <div className="isolate flex flex-col items-center gap-2">
              <plusPoint.icon className="size-14 stroke-[1.5px] text-foreground" />
              <h3 className="mt-8 font-semibold text-xl tracking-[-0.005em]">
                {plusPoint.title}
              </h3>
              <p className="text-balance text-muted-foreground">
                {plusPoint.description}
              </p>
              <Button className="mt-6">
                Learn More <ArrowUpRightIcon />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function BackgroundPattern() {
  return (
    <div
      className="absolute inset-0 -top-px -left-px"
      style={{
        backgroundImage: `
        linear-gradient(to right, var(--border) 1px, transparent 1px),
        linear-gradient(to bottom, var(--border) 1px, transparent 1px)
      `,
        backgroundSize: "20px 20px",
        backgroundPosition: "0 0, 0 0",
        maskImage: `
        repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      `,
        WebkitMaskImage: `
 repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      `,
        maskComposite: "intersect",
        WebkitMaskComposite: "source-in",
      }}
    />
  );
}
