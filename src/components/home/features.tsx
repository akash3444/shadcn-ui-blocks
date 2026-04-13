import {
  Copy,
  Gift,
  Moon,
  MoveRightIcon,
  PuzzleIcon,
  Shapes,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FAQ } from "./faq";

export const Features = () => {
  return (
    <>
      <section className="px-6 py-20">
        <div className="mx-auto max-w-(--breakpoint-lg)">
          <h2 className="max-w-[35ch] text-balance font-medium text-[2.5rem]/tight tracking-tight">
            Built for developers who ship
          </h2>
          <p className="mt-2 max-w-[48ch] text-pretty text-base text-foreground/65 sm:text-lg">
            Every block and component is production-ready — just preview, copy,
            and paste into your project.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {/* Featured wide card */}
            <div className="relative overflow-hidden rounded-xl border border-border/70 bg-muted/40 p-6 sm:col-span-2">
              <DashedTopFadeGrid />
              <div className="isolate">
                <Shapes className="size-6 text-primary" />
                <h3 className="mt-4 font-semibold text-xl tracking-tight">
                  200+ Production-Ready Blocks
                </h3>
                <p className="mt-2 max-w-[44ch] text-pretty text-foreground/65 text-sm">
                  Hero sections, pricing tables, testimonials, feature grids,
                  footers — every section type you need, designed and coded to
                  production quality.
                </p>
                <Button asChild className="mt-6 rounded-full" size="sm">
                  <Link href="/blocks">
                    Browse Blocks <MoveRightIcon className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Dark mode card */}
            <div className="relative overflow-hidden rounded-xl border border-border/70 bg-muted/40 p-6">
              <DashedTopFadeGrid />
              <div className="isolate">
                <Moon className="size-6 text-primary" />
                <h3 className="mt-4 font-semibold text-lg tracking-tight">
                  Dark Mode Ready
                </h3>
                <p className="mt-2 text-pretty text-foreground/65 text-sm">
                  Every block ships with light and dark mode built in. No extra
                  work needed.
                </p>
              </div>
            </div>

            {/* Copy card */}
            <div className="relative overflow-hidden rounded-xl border border-border/70 bg-muted/40 p-6">
              <DashedTopFadeGrid />
              <div className="isolate">
                <Copy className="size-6 text-primary" />
                <h3 className="mt-4 font-semibold text-lg tracking-tight">
                  One-Click Copy
                </h3>
                <p className="mt-2 text-pretty text-foreground/65 text-sm">
                  Clean code, ready to paste. No reformatting required.
                </p>
              </div>
            </div>

            {/* Components card */}
            <div className="relative overflow-hidden rounded-xl border border-border/70 bg-muted/40 p-6">
              <DashedTopFadeGrid />
              <div className="isolate">
                <PuzzleIcon className="size-6 text-primary" />
                <h3 className="mt-4 font-semibold text-lg tracking-tight">
                  25+ Component Variants
                </h3>
                <p className="mt-2 text-pretty text-foreground/65 text-sm">
                  Extended shadcn/ui components with more styles and sizes than
                  the defaults.
                </p>
              </div>
            </div>

            {/* Free card */}
            <div className="relative overflow-hidden rounded-xl border border-border/70 bg-primary/5 p-6">
              <div className="isolate">
                <Gift className="size-6 text-primary" />
                <h3 className="mt-4 font-semibold text-lg tracking-tight">
                  Free Forever
                </h3>
                <p className="mt-2 text-pretty text-foreground/65 text-sm">
                  No account, no paywall. Use anything here in personal and
                  commercial projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-(--breakpoint-lg) px-6 pb-20 lg:px-0">
        <FAQ />
      </section>
    </>
  );
};

const DashedTopFadeGrid = () => (
  <div
    className="absolute inset-0 -top-px -left-px z-0 dark:opacity-80"
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
