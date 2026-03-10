import { Separator } from "@/components/ui/separator";

const changelogs = [
  {
    version: "1.0.0",
    date: "2025-06-01",
    title: "Initial Launch",
    description:
      "We're live! The very first release of our Shadcn UI blocks is here. This version includes the core blocks, dark mode support, and a complete landing page setup to get you started. Thanks for being here from day one!",
    features: [
      "Released 10+ customized Shadcn UI blocks",
      "Dark mode support",
      "Landing page with hero, features, and footer sections",
    ],
  },
  {
    version: "1.1.0",
    date: "2025-06-10",
    title: "Pricing Block + Accessibility Improvements",
    description:
      "We've added a sleek pricing block with a monthly/yearly toggle. Accessibility improvements make your UI more inclusive, and we fixed a few layout issues to ensure a smoother mobile experience.",
    features: ["Added pricing block with monthly/yearly toggle"],
    changes: ["Improved accessibility for buttons and links"],
    fixes: ["Fixed mobile layout issues on testimonials section"],
  },
  {
    version: "1.2.0",
    date: "2025-06-20",
    title: "Blog Layout + Search Enhancements",
    description:
      "Introducing a brand-new blog layout designed for content creators. Search now supports fuzzy matching to make discovery easier. We've also optimized assets for faster load times.",
    features: ["Introduced a clean blog layout for content creators"],
    changes: [
      "Search bar now uses fuzzy filtering",
      "Optimized all images for performance and SEO",
    ],
  },
  {
    version: "1.3.0",
    date: "2025-07-01",
    title: "Premium Blocks & Theme Customization",
    description:
      "This is a big one! We're rolling out premium blocks for advanced use cases, along with filtering options and customizable color themes so you can match your brand identity effortlessly.",
    features: [
      "Launched premium blocks section",
      "Added category and search filters",
      "Introduced customizable color themes",
    ],
  },
  {
    version: "1.3.1",
    date: "2025-07-05",
    title: "Minor Fixes",
    description:
      "A quick patch to clean up a few UI glitches. Fixed image paths and polished up the theme switcher to eliminate flicker issues. Nothing major, but definitely smoother!",
    fixes: [
      "Fixed broken image links in logo cloud",
      "Resolved theme switcher flicker issue on dark mode",
    ],
  },
].reverse();

export default function Changelog() {
  return (
    <section className="mx-auto max-w-screen-md px-6 py-16">
      <h2 className="text-balance font-semibold text-4xl tracking-tight sm:text-5xl">
        Changelog
      </h2>
      <p className="mt-2 text-balance text-lg text-muted-foreground tracking-normal sm:mt-4 sm:text-xl">
        We ship fast. Track all the new features, updates, and fixes in one
        place.
      </p>

      <Separator className="mt-10" />

      <div className="flex flex-col divide-y">
        {changelogs.map((changelog) => (
          <div
            className="relative flex items-start gap-4 py-10"
            key={changelog.version}
          >
            <span className="sticky top-4 hidden min-w-36 font-medium text-lg text-muted-foreground tracking-tight sm:block">
              {changelog.date}
            </span>
            <div>
              <h3 className="font-semibold text-2xl">{changelog.title}</h3>
              <span className="mt-2 block font-medium text-lg text-muted-foreground tracking-tight sm:hidden">
                {changelog.date}
              </span>

              <p className="mt-3 text-muted-foreground">
                {changelog.description}
              </p>

              <div className="mt-4 space-y-4">
                {changelog.features && (
                  <div>
                    <h4 className="mb-1 flex items-center gap-2 font-medium text-lg">
                      Features:
                    </h4>
                    <ul className="list-disc pl-5 text-muted-foreground">
                      {changelog.features?.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {changelog.changes && (
                  <div>
                    <h4 className="mb-1 flex items-center gap-2 font-medium text-lg">
                      Changes:
                    </h4>
                    <ul className="list-disc pl-5 text-muted-foreground">
                      {changelog.changes?.map((change) => (
                        <li key={change}>{change}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {changelog.fixes && (
                  <div>
                    <h4 className="mb-1 flex items-center gap-2 font-medium text-lg">
                      Fixes:
                    </h4>
                    <ul className="list-disc pl-5 text-muted-foreground">
                      {changelog.fixes?.map((fix) => (
                        <li key={fix}>{fix}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
