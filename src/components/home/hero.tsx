"use client";

import { ArrowRight, Shapes } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { capture } from "@/lib/analytics";
import { BackgroundPattern } from "./background-pattern";

export const Hero = () => {
  return (
    <div className="relative flex min-h-dvh flex-col items-center justify-center px-6 pt-14 text-center">
      <p className="font-mono text-foreground/45 text-sm uppercase tracking-[0.2em]">
        shadcn/ui blocks & components
      </p>
      <h1 className="relative z-10 mx-auto mt-8 max-w-[22ch] text-balance font-medium text-5xl tracking-tight md:text-6xl lg:text-7xl/[1.2]">
        Build Beautiful Interfaces Faster Than Ever
      </h1>
      <p className="mx-auto mt-8 max-w-[44ch] text-pretty text-base text-foreground/65 sm:text-lg">
        Production-ready blocks and customized components built on shadcn/ui.
        Preview, copy, and ship — no setup required.
      </p>
      <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
        <Button asChild className="group gap-3 rounded-full" size="lg">
          <Link
            href="/blocks"
            onClick={() =>
              capture("marketing:hero_cta_click", { cta: "explore_blocks" })
            }
          >
            Explore Blocks{" "}
            <Shapes className="transition-transform group-hover:-rotate-12" />
          </Link>
        </Button>
        <Button
          asChild
          className="group gap-2 rounded-full"
          size="lg"
          variant="ghost"
        >
          <Link
            href="/components/accordion"
            onClick={() =>
              capture("marketing:hero_cta_click", { cta: "view_components" })
            }
          >
            View Components{" "}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
      {/* Stats row */}
      <div className="relative z-10 mt-16 flex items-center gap-8">
        <div>
          <div className="font-semibold text-3xl tabular-nums tracking-tight">
            200+
          </div>
          <div className="mt-1 text-foreground/50 text-sm">Blocks</div>
        </div>
        <div className="h-8 w-px bg-border" />
        <div>
          <div className="font-semibold text-3xl tabular-nums tracking-tight">
            100%
          </div>
          <div className="mt-1 text-foreground/50 text-sm">Free</div>
        </div>
        <div className="h-8 w-px bg-border" />
        <div>
          <div className="font-semibold text-3xl tabular-nums tracking-tight">
            25+
          </div>
          <div className="mt-1 text-foreground/50 text-sm">Components</div>
        </div>
      </div>
      <BackgroundPattern />
    </div>
  );
};
