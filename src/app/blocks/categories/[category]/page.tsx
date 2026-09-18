import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { blockCategories } from "@/blocks";
import BlockPreviewList from "@/components/blocks/category/block-preview-list";
import CategoryNavigation from "@/components/blocks/category/category-navigation";
import CarbonAd from "@/components/carbon-ads";
import Footer from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { blocks } from "@/config/registry";
import { constructMetadata } from "@/lib/metadata";
import { generateOgImageUrl } from "@/lib/og";
import { absoluteUrl } from "@/lib/utils";

export const dynamicParams = false;

export const generateStaticParams = async () => {
  return [
    { category: "all" },
    ...blockCategories.map((category) => ({ category: category.name })),
  ];
};

export const generateMetadata = async (props: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> => {
  const params = await props.params;
  const { category } = params;

  if (category === "all") {
    return constructMetadata({
      title: "All shadcn/ui blocks",
      description: `Browse all ${blocks.length} ready-to-use blocks built with shadcn/ui. Preview each design and copy the code for your project.`,
      alternates: { canonical: absoluteUrl("/blocks/categories/all") },
    });
  }

  const categoryDetails = blockCategories.find(
    (candidate) => candidate.name === category
  );
  if (!categoryDetails) {
    notFound();
  }

  const title = `${categoryDetails.totalBlocks} ${categoryDetails.title} shadcn/ui blocks`;
  const description = `Browse ${categoryDetails.totalBlocks} ready-to-use ${categoryDetails.title} blocks built with shadcn/ui. Preview each design and copy the code for your project.`;
  const openGraph = {
    images: [
      {
        url: generateOgImageUrl({
          title,
          type: "Block",
        }),
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  };

  return constructMetadata({
    title,
    description,
    openGraph,
    twitter: {
      title,
      description,
    },
    alternates: {
      canonical: absoluteUrl(`/blocks/categories/${category}`),
    },
  });
};

const BlockCategoryPage = async (props: {
  params: Promise<{ category: string }>;
}) => {
  const params = await props.params;
  const { category } = params;

  if (
    category !== "all" &&
    !blockCategories.some((candidate) => candidate.name === category)
  ) {
    notFound();
  }

  return (
    <div>
      <Navbar />
      <div className="mx-auto max-w-(--breakpoint-2xl) py-12 sm:py-16">
        <Suspense fallback={null}>
          <BlockPreviewList />
        </Suspense>

        <CategoryNavigation category={category} />
      </div>

      <Footer />

      <CarbonAd className="fixed right-2 bottom-2" />
    </div>
  );
};

export default BlockCategoryPage;
