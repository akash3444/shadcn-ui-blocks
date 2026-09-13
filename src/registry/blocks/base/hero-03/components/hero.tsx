import { ArrowUpRight, CirclePlay } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/registry/bases/base/ui/badge";
import { Button } from "@/registry/bases/base/ui/button";
import GradientText from "./gradient-text";
import Navbar from "./navbar";

export default function Hero() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center px-6 pt-8 pb-16">
      <Navbar />

      <div className="mt-16 max-w-3xl text-center">
        <Badge
          className="rounded-full border-border py-1"
          render={<Link href="#" />}
          variant="secondary"
        >
          Just released v1.0.0 <ArrowUpRight className="ml-1 size-4" />
        </Badge>
        <h1 className="mx-auto mt-6 max-w-xl font-medium text-4xl tracking-[-0.045em] sm:text-[2.75rem] md:text-6xl/[1.2]">
          Ship{" "}
          <GradientText
            animationSpeed={2}
            className="border-b-2 border-dotted sm:border-b-3"
            colors={[
              "var(--color-purple-500)",
              "var(--color-indigo-400)",
              "var(--color-sky-500)",
            ]}
            direction="diagonal"
          >
            better UI
          </GradientText>{" "}
          without&nbsp;the&nbsp;hassle
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-muted-foreground text-xl tracking-[-0.01em] md:text-2xl/normal">
          Instead of starting from scratch every time, use thoughtfully designed
          blocks that give you a solid foundation for any UI.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <Button className="rounded-full" size="lg">
            Get Started <ArrowUpRight className="h-5! w-5!" />
          </Button>
          <Button
            className="rounded-full shadow-none"
            size="lg"
            variant="outline"
          >
            <CirclePlay className="h-5! w-5!" /> Watch Demo
          </Button>
        </div>
      </div>
      <div className="relative mx-auto mt-20 aspect-video w-full max-w-(--breakpoint-xl) rounded-xl bg-linear-to-br from-indigo-400/90 via-indigo-300 to-sky-400/80 p-2">
        <div className="size-full rounded-lg bg-background" />
        <div
          className="absolute inset-0 isolate z-0"
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
          radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)
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
          radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)
      `,
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }}
        />
      </div>

      <div
        className="fixed inset-0 isolate -z-1 h-screen [--color-hero-bg:var(--color-indigo-600)] dark:[--color-hero-bg:var(--color-indigo-500)]"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 10%, var(--color-background) 40%, var(--color-hero-bg) 100%)",
        }}
      />
    </div>
  );
}
