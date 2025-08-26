import BlockPreviewList from "@/components/blocks/category/block-preview-list";
import { Navbar } from "@/components/layout/navbar";
import { ProBanner } from "@/components/layout/pro-banner";
import { absoluteUrl } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shadcn UI Blocks",
  description:
    "Shadcn UI Blocks is a collection of ready-to-use code snippets for web developers to preview, customize, and copy.",
  alternates: {
    canonical: absoluteUrl("/blocks"),
  },
};

const BlocksPage = async (props: {
  searchParams: Promise<{ columns: string; q: string }>;
}) => {
  const searchParams = await props.searchParams;
  return (
    <>
      <ProBanner />
      <Navbar />
      <div className="max-w-(--breakpoint-2xl) mx-auto py-12 sm:py-16">
        <BlockPreviewList {...searchParams} />
      </div>
    </>
  );
};

export default BlocksPage;
