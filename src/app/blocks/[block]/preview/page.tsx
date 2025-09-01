import { blockList, blocks } from "@/blocks";
import { constructMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/utils";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const generateStaticParams = async () => {
  return blockList.map(({ name }) => ({
    block: name,
  }));
};

export const generateMetadata = async (props: {
  params: Promise<{ block: string }>;
}): Promise<Metadata> => {
  const { block } = await props.params;
  const blockDetails = blocks[block];

  return constructMetadata({
    title: `${blockDetails.title} Preview - Shadcn UI Blocks`,
    description: `Fully customized and responsive ${blockDetails.title} Shadcn UI block. Preview, customize, and copy ready-to-use code snippets.`,
    alternates: {
      canonical: absoluteUrl(`/blocks/${block}`),
    },
  });
};

const BlockPreviewPage = async (props: {
  params: Promise<{ block: string }>;
}) => {
  const params = await props.params;
  const { block } = params;

  if (!blocks[block]) notFound();

  const { component: Component } = blocks[block];

  return <Component />;
};

export default BlockPreviewPage;
