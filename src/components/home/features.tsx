import {
  ArrowRightIcon,
  Copy,
  Eye,
  Gift,
  Moon,
  Search,
  Shapes,
} from "lucide-react";
import Link from "next/link";
import { FAQ } from "./faq";

const features = [
  {
    icon: Shapes,
    title: "200+ page blocks",
    description:
      "Pick a ready-made section instead of starting with an empty file.",
  },
  {
    icon: Search,
    title: "Browse by section",
    description:
      "Find heroes, feature sections, pricing, and more in one collection.",
  },
  {
    icon: Eye,
    title: "Preview first",
    description:
      "See how a block looks before adding its code to your project.",
  },
  {
    icon: Copy,
    title: "One-click copy",
    description: "Copy the code for a block and adapt it in your own project.",
  },
  {
    icon: Moon,
    title: "Light and dark",
    description: "Use blocks with styles for both light and dark themes.",
  },
  {
    icon: Gift,
    title: "Free to use",
    description: "Use the collection in personal and commercial projects.",
  },
];

export const Features = () => (
  <>
    <section className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-(--breakpoint-lg) overflow-hidden rounded-3xl bg-foreground p-7 text-background sm:p-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-medium text-background/60 text-xs uppercase tracking-[0.2em]">
              Features
            </p>
            <h2 className="mt-5 max-w-[18ch] text-balance font-heading font-semibold text-4xl tracking-tight sm:text-5xl">
              The details that save you time.
            </h2>
          </div>
          <Link
            className="inline-flex h-9 items-center justify-center gap-2 rounded-md bg-background px-4 font-medium text-foreground text-sm"
            href="/blocks"
          >
            Browse blocks <ArrowRightIcon className="size-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-xl bg-background/20 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article className="bg-foreground p-6" key={feature.title}>
                <Icon aria-hidden="true" className="size-5" />
                <h3 className="mt-8 font-heading font-semibold text-lg">
                  {feature.title}
                </h3>
                <p className="mt-2 text-background/65 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
    <section className="mx-auto max-w-(--breakpoint-lg) px-6 pb-20 lg:px-0">
      <FAQ />
    </section>
  </>
);
