import type { Metadata } from "next";
import { blockCategories } from "@/blocks";
import BlockCategoryGrid from "@/components/blocks/category/block-category-grid";
import Footer from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Shadcn UI Blocks",
  description:
    "Shadcn UI Blocks is a collection of ready-to-use code snippets for web developers to preview, customize, and copy.",
  alternates: {
    canonical: absoluteUrl("/blocks"),
  },
};

const totalBlocks = blockCategories.reduce(
  (sum, category) => sum + category.totalBlocks,
  0
);

const BlocksPage = () => (
  <>
    <Navbar />
    <div className="relative">
      <section className="-mt-24 px-6 pt-36 pb-16 sm:px-10 sm:pb-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
          <p className="font-mono text-muted-foreground text-xs uppercase tracking-[0.1em]">
            Ready-to-use shadcn/ui blocks
          </p>
          <h1 className="max-w-[18ch] text-balance font-heading font-semibold text-5xl leading-[1.04] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
            {totalBlocks} blocks for whatever you're building.
          </h1>
          <p className="max-w-[55ch] text-pretty text-base text-muted-foreground leading-relaxed sm:text-lg">
            Browse a growing collection of page sections built with shadcn/ui.
            Preview a block, copy the code, and make it your own.
          </p>
        </div>
      </section>
    </div>

    <div className="mx-auto mb-8 max-w-(--breakpoint-2xl) py-12 sm:py-16">
      <BlockCategoryGrid />
    </div>

    <Footer />
  </>
);

export default BlocksPage;
