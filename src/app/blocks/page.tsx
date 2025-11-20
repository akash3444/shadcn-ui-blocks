import BlockPreviewList from "@/components/blocks/category/block-preview-list";
import { BlackFridayBanner } from "@/components/layout/black-friday-banner";
import { Navbar } from "@/components/layout/navbar";
import { absoluteUrl } from "@/lib/utils";
import { Metadata } from "next";
import { Suspense } from "react";

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
    <BlackFridayBanner />
    <Navbar />
    <div className="max-w-(--breakpoint-2xl) mx-auto py-12 sm:py-16">
      <Suspense fallback={null}>
        <BlockPreviewList />
      </Suspense>
    </div>
  </>
);

export default BlocksPage;
