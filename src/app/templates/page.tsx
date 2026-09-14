import type { Metadata } from "next";
import TemplateCard from "@/components/templates/template-card";
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
      <div className="relative">
        <section className="-mt-24 px-6 pt-36 pb-16 sm:px-10 sm:pb-10">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
            <p className="font-mono text-muted-foreground text-xs uppercase tracking-[0.1em]">
              Ready-to-use shadcn/ui templates
            </p>
            <h1 className="max-w-[18ch] text-balance font-heading font-semibold text-5xl leading-[1.04] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Build faster with polished shadcn/ui templates.
            </h1>
            <p className="max-w-[55ch] text-pretty text-base text-muted-foreground leading-relaxed sm:text-lg">
              Browse complete websites built with shadcn/ui. Preview a template,
              explore the code, and make it your own.
            </p>
          </div>
        </section>
      </div>

      <section
        className="container mx-auto max-w-(--breakpoint-lg) px-6 py-12 sm:py-16"
        id="templates"
      >
        <div className="space-y-14">
          {categories.map((category) => {
            const templates = categorizedTemplates[category.slug];

            return (
              <div key={category.slug}>
                <h2 className="mb-5 font-heading font-semibold text-3xl tracking-[-0.02em] sm:text-4xl">
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
