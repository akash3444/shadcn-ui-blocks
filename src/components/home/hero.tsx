"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { capture } from "@/lib/analytics";
import { cn } from "@/lib/utils";

const previews = [
  {
    title: "Hero section",
    block: "hero-01",
    skeleton: (
      <div className="flex h-full flex-col items-center justify-center gap-3 bg-radial from-primary/10 to-transparent px-8">
        <div className="h-3 w-16 rounded-full bg-primary/20" />
        <div className="mt-1 h-3.5 w-4/5 rounded bg-foreground/25" />
        <div className="h-3.5 w-3/5 rounded bg-foreground/25" />
        <div className="flex w-full flex-col items-center gap-1.5">
          <div className="h-1.5 w-5/6 rounded bg-muted-foreground/20" />
          <div className="h-1.5 w-2/3 rounded bg-muted-foreground/20" />
        </div>
        <div className="mt-2 flex gap-2">
          <div className="h-6 w-16 rounded-full bg-primary/35" />
          <div className="h-6 w-16 rounded-full border border-foreground/15" />
        </div>
      </div>
    ),
  },
  {
    title: "Pricing section",
    block: "pricing-01",
    skeleton: (
      <div className="flex h-full flex-col items-center justify-center gap-2 p-5">
        <div className="h-2.5 w-20 rounded bg-foreground/25" />
        <div className="h-1.5 w-28 rounded bg-muted-foreground/20" />
        <div className="mt-3 grid w-full grid-cols-3 gap-2">
          {[false, true, false].map((featured, index) => (
            <div
              className={cn(
                "flex flex-col gap-2 rounded-lg border p-2.5",
                featured
                  ? "border-primary/30 bg-primary/5"
                  : "border-border bg-background"
              )}
              key={["starter", "advanced", "premium"][index]}
            >
              <div className="h-1.5 w-3/5 rounded bg-muted-foreground/25" />
              <div className="my-1 h-4 w-4/5 rounded bg-foreground/25" />
              <div className="h-1 w-full rounded bg-muted-foreground/15" />
              <div className="my-1 h-px bg-border" />
              {["turnaround", "portraits", "styles", "filters"].map(
                (feature) => (
                  <div className="flex items-center gap-1.5" key={feature}>
                    <div className="size-1.5 shrink-0 rounded-full bg-primary/30" />
                    <div className="h-1 w-full rounded bg-muted-foreground/20" />
                  </div>
                )
              )}
              <div
                className={cn(
                  "mt-2 h-4 w-full rounded",
                  featured ? "bg-primary/40" : "border border-foreground/15"
                )}
              />
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Login form",
    block: "login-01",
    skeleton: (
      <div className="flex h-full items-center justify-center p-5">
        <div className="flex w-36 flex-col items-center gap-2 rounded-lg border bg-background p-4 shadow-xs">
          <div className="size-4 rounded-full bg-primary/30" />
          <div className="h-2 w-20 rounded bg-foreground/25" />
          <div className="mt-1 flex h-5 w-full items-center justify-center gap-2 rounded border">
            <div className="size-2 rounded-full bg-muted-foreground/25" />
            <div className="h-1 w-12 rounded bg-muted-foreground/20" />
          </div>
          <div className="my-1 h-px w-full bg-border" />
          <div className="h-1 w-7 self-start rounded bg-muted-foreground/25" />
          <div className="h-5 w-full rounded border bg-muted/40" />
          <div className="h-1 w-10 self-start rounded bg-muted-foreground/25" />
          <div className="h-5 w-full rounded border bg-muted/40" />
          <div className="mt-1 h-5 w-full rounded bg-primary/35" />
        </div>
      </div>
    ),
  },
];

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

function Preview({
  index = 0,
  className,
}: {
  index?: number;
  className?: string;
}) {
  const item = previews[index];
  return (
    <div
      className={cn(
        "group relative min-w-0 overflow-hidden rounded-xl bg-background shadow-sm/3 ring ring-border/70 transition-shadow hover:shadow-md/5",
        className
      )}
    >
      <Link
        className="flex items-center justify-between gap-2 border-b px-4 py-3 text-xs after:absolute after:inset-0 focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-[-2px]"
        href={`/blocks/${item.block}`}
      >
        <span className="font-medium">{item.title}</span>
        <ArrowRight aria-hidden="true" className="size-3.5" />
      </Link>
      <div
        aria-hidden="true"
        className="pointer-events-none relative h-72 overflow-hidden bg-muted/30"
        inert
      >
        {item.skeleton}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden px-6 pt-36 pb-20 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="font-mono text-muted-foreground text-xs uppercase tracking-[0.1em]">
            Start with the right building blocks
          </p>
          <h1 className="max-w-[18ch] text-balance font-heading font-semibold text-5xl leading-[1.04] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
            A running start for whatever you're building.
          </h1>
          <p className="max-w-[46ch] text-pretty text-base text-muted-foreground leading-relaxed sm:text-lg">
            Explore ready-to-use page blocks and components. Find a section you
            like, copy the code, and make it your own.
          </p>
          <Actions />
        </div>
        <div className="mt-12 grid items-center gap-5 sm:grid-cols-3">
          <div className="sm:translate-y-6 sm:-rotate-3">
            <Preview index={1} />
          </div>
          <div className="sm:scale-105">
            <Preview />
          </div>
          <div className="sm:translate-y-6 sm:rotate-3">
            <Preview index={2} />
          </div>
        </div>
        <div className="mt-14 text-center">
          <Link className={buttonVariants({ variant: "link" })} href="/blocks">
            Explore all blocks <ArrowRight data-icon="inline-end" />
          </Link>
        </div>
      </div>
    </section>
  );
}
