"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { capture } from "@/lib/analytics";

// Graph paper pattern from Calm UI Pro (8px minor grid, 40px major grid).
const GRID_MINOR = "8px 8px";
const GRID_MAJOR = "40px 40px";
const majorLine = "currentColor 1px, transparent 1px";
const minorLine =
  "color-mix(in oklab, currentColor 40%, transparent) 1px, transparent 1px";

const graphPaperStyle = {
  backgroundImage: [
    `linear-gradient(to right, ${majorLine})`,
    `linear-gradient(to bottom, ${majorLine})`,
    `linear-gradient(to right, ${minorLine})`,
    `linear-gradient(to bottom, ${minorLine})`,
  ].join(", "),
  backgroundSize: [GRID_MAJOR, GRID_MAJOR, GRID_MINOR, GRID_MINOR].join(", "),
  // Hide the grid behind the hero content, and soften it at the section edges.
  maskImage: [
    "radial-gradient(ellipse at center, transparent 25%, #000 70%)",
    "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
    "linear-gradient(to bottom, transparent, #000 8%, #000 85%, transparent)",
  ].join(", "),
  maskComposite: "intersect",
};

function GraphPaper() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 text-foreground opacity-10"
      style={graphPaperStyle}
    />
  );
}

function Actions() {
  return (
    <div className="flex flex-wrap gap-3 text-foreground">
      <Link
        className={buttonVariants({ size: "lg" })}
        href="/blocks"
        onClick={() =>
          capture("marketing:hero_cta_click", { cta: "explore_blocks" })
        }
      >
        Explore Blocks <ArrowRight data-icon="inline-end" />
      </Link>
      <Link
        className={buttonVariants({ size: "lg", variant: "ghost" })}
        href="/components/accordion"
        onClick={() =>
          capture("marketing:hero_cta_click", { cta: "view_components" })
        }
      >
        View Components
      </Link>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative isolate flex min-h-svh items-center overflow-hidden px-6 pt-32 pb-24 sm:px-10">
      <GraphPaper />
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="max-w-[18ch] text-balance font-heading font-medium text-4xl leading-[1.1] tracking-tighter sm:text-5xl lg:text-6xl">
            A running start for whatever you're building
          </h1>
          <p className="max-w-[46ch] text-pretty text-base text-muted-foreground leading-relaxed sm:text-lg">
            Explore ready-to-use page blocks and components. Find a section you
            like, copy the code, and make it your own.
          </p>
          <Actions />
        </div>
      </div>
    </section>
  );
}
