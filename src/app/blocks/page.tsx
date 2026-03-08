import type { Metadata } from "next";
import BlockCategoryGrid from "@/components/blocks/category/block-category-grid";
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

const BlocksPage = () => (
  <>
    <Navbar className="w-full max-w-384 px-6" />
    <div className="mx-auto max-w-(--breakpoint-2xl) py-12 sm:py-16">
      <BlockCategoryGrid />
    </div>
  </>
);

export default BlocksPage;
