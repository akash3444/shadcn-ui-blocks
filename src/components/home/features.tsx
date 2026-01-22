import {
  BadgeCheck,
  MoveRightIcon,
  PuzzleIcon,
  ShapesIcon,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { FAQ } from "./faq";

export const Features = () => {
  return (
    <section className="mx-auto max-w-(--breakpoint-lg) px-6 py-20 lg:px-0">
      <h2 className="text-center font-semibold text-5xl tracking-tight">
        Core Features
      </h2>
      <div className="mt-20 mb-14 grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="rounded-xl border border-border/80 bg-muted/50 p-1">
          <Card className="relative h-full gap-3 overflow-hidden rounded-lg border-border/90 bg-background shadow-xs/5 dark:shadow-xs/40">
            <DashedTopFadeGrid />

            <CardHeader className="isolate gap-3 pb-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/7 dark:bg-primary/15">
                <ShapesIcon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-2xl tracking-tight">
                Blocks
              </h3>
            </CardHeader>
            <CardContent className="isolate">
              <p className="text-foreground/70">
                Blocks are uniquely designed sections that make building your
                website easy. Simply preview, copy the code, and add a fresh new
                section to your site instantly.
              </p>
              <ul className="mt-6 space-y-5 text-[15px]">
                <li className="flex items-start gap-2">
                  <BadgeCheck className="h-4.5 w-4.5" />
                  <div>
                    <h6 className="mb-1 font-semibold leading-[1.1]">
                      Fully responsive
                    </h6>
                    <p className="text-foreground/70 text-sm">
                      Each block is optimized for perfect display on any device.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <BadgeCheck className="h-4.5 w-4.5" />
                  <div>
                    <h6 className="mb-1 font-semibold leading-[1.1]">
                      Easily preview and copy
                    </h6>
                    <p className="text-foreground/70 text-sm">
                      Quickly view how blocks look and grab the code in one
                      click.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <BadgeCheck className="h-4.5 w-4.5" />
                  <div>
                    <h6 className="mb-1 font-semibold leading-[1.1]">
                      Absolutely Free to Use
                    </h6>
                    <p className="text-foreground/70 text-sm">
                      Use all blocks without any restrictions or fees.
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="mt-auto pt-1">
              <Button asChild>
                <Link href="/blocks">
                  View Blocks <MoveRightIcon />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="rounded-xl border border-border/80 bg-muted/50 p-1">
          <Card className="relative h-full gap-3 overflow-hidden rounded-lg border-border/90 bg-background shadow-xs/5 dark:shadow-xs/40">
            <DashedTopFadeGrid />

            <CardHeader className="isolate gap-3 pb-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/7 dark:bg-primary/15">
                <PuzzleIcon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-2xl tracking-tight">
                Customized Components
              </h3>
            </CardHeader>
            <CardContent className="isolate">
              <p className="text-foreground/70">
                Enhance your design with our collection of customized Shadcn UI
                components, crafted to give you more flexibility and style
                options for a polished, unique look.
              </p>

              <ul className="mt-6 space-y-5 text-[15px]">
                <li className="flex items-start gap-2">
                  <BadgeCheck className="h-4.5 w-4.5" />
                  <div>
                    <h6 className="mb-1 font-semibold leading-[1.1]">
                      Multiple Variants
                    </h6>
                    <p className="text-foreground/70 text-sm">
                      Access wide range of component styles to fit any design
                      need.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <BadgeCheck className="h-4.5 w-4.5" />
                  <div>
                    <h6 className="mb-1 font-semibold leading-[1.1]">
                      Fully Customizable
                    </h6>
                    <p className="text-foreground/70 text-sm">
                      Adjust colors, sizes, and styles to match your brand.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <BadgeCheck className="h-4.5 w-4.5" />
                  <div>
                    <h6 className="mb-1 font-semibold leading-[1.1]">
                      Absolutely Free to Use
                    </h6>
                    <p className="text-foreground/70 text-sm">
                      Enjoy unlimited access to all components at no cost.
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="pt-6">
              <Button asChild>
                <Link href="/components/accordion">
                  Explore Components
                  <MoveRightIcon />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      <FAQ />
    </section>
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
