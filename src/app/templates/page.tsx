import { Layers } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/logo";
import TemplateCard from "@/components/templates/template-card";
import { Button } from "@/components/ui/button";
import { NextLogo, ShadcnLogo, TailwindLogo } from "@/components/ui/icons";
import { categories, categorizedTemplates } from "@/description/templates";
import { constructMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = constructMetadata({
  title: "Beautifully Designed Shadcn UI Templates",
  description:
    "Discover a collection of premium Shadcn UI templates designed to make your project shine. With modern designs and smooth functionality, these templates help you build stunning UIs with ease!",
  keywords: [
    "Shadcn UI",
    "Shadcn UI templates",
    "Tailwind CSS templates",
    "Beautiful Shadcn UI templates",
    "Beautifully designed Shadcn UI templates",
    "Beautiful Tailwind CSS templates",
    "Premium Shadcn UI templates",
    "Premium Tailwind CSS templates",
    "Free Shadcn UI templates",
    "Free Tailwind CSS templates",
    "Shadcn UI landing page templates",
    "Landing page templates",
    "Shadcn UI portfolio templates",
    "Portfolio templates",
  ],
  alternates: {
    canonical: absoluteUrl("/templates"),
  },
});

export default function TemplatesPage() {
  return (
    <div>
      {/* Hero */}
      <div className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden">
        <div className="relative z-1 mx-auto max-w-4xl space-y-8 px-6 text-center">
          <div className="relative inline-flex items-center justify-center gap-4 overflow-hidden rounded-full bg-accent py-1.5 pr-2 pl-4">
            <span className="text-sm">Built using</span>
            <div className="flex items-center justify-center gap-3">
              <NextLogo className="h-6 w-6" />
              <TailwindLogo className="h-6 w-6 text-sky-400" />
              <ShadcnLogo className="h-5 w-5" />
              <Logo className="h-6 w-6 [&_svg]:h-4 [&_svg]:w-4" />
            </div>
          </div>
          <h1 className="font-semibold text-[2.5rem] leading-[1.15]! tracking-[-0.035em] sm:text-5xl lg:text-6xl">
            <span className="text-blue-500">Beautifully Designed</span> Shadcn
            UI Templates for Every Project
          </h1>
          <p className="sm:text-xl">
            Discover a collection of premium Shadcn UI templates designed to
            make your project shine. With modern designs and smooth
            functionality, these templates help you build stunning UIs with
            ease!
          </p>
          <Button asChild className="!px-6 h-13 text-lg" size="lg">
            <Link href="#templates">
              <Layers className="mr-2 h-5! w-5!" /> Browse Templates
            </Link>
          </Button>
        </div>
      </div>

      {/* Main */}
      <section
        className="container mx-auto max-w-(--breakpoint-lg) px-6 py-20"
        id="templates"
      >
        <div className="space-y-14">
          {categories.map((category) => {
            const templates = categorizedTemplates[category.slug];

            return (
              <div key={category.slug}>
                <h2 className="mb-5 font-bold text-3xl tracking-tight sm:text-4xl">
                  {category.name} Templates
                </h2>
                {templates?.length ? (
                  <div className="grid gap-8 md:grid-cols-2">
                    {categorizedTemplates[category.slug].map((template) => (
                      <TemplateCard key={template.slug} template={template} />
                    ))}
                  </div>
                ) : (
                  <div className="rounded-xl bg-accent p-6">
                    <div className="flex flex-col gap-2">
                      <p className="font-semibold text-lg">Coming Soon!</p>
                    </div>
                    <p className="mt-2">
                      We&apos;re currently working on crafting high-quality
                      templates for this category. Our team is dedicated to
                      designing beautiful, functional, and modern templates to
                      help you create stunning websites effortlessly. Stay tuned
                      as we bring you fresh and innovative designs soon!
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
