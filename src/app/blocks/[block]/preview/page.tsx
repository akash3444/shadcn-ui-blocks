import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blocks } from "@/config/registry";
import { constructMetadata } from "@/lib/metadata";

export const dynamicParams = false;

export const generateStaticParams = async () => {
  return blocks.map(({ name }) => ({
    block: name,
  }));
};

export const generateMetadata = async (props: {
  params: Promise<{ block: string }>;
}): Promise<Metadata> => {
  const { block } = await props.params;
  const blockDetails = blocks.find((candidate) => candidate.name === block);
  if (!blockDetails) {
    notFound();
  }

  return constructMetadata({
    title: `${blockDetails.title} preview`,
    description: `Fully customized and responsive ${blockDetails.title} Shadcn UI block. Preview, customize, and copy ready-to-use code snippets.`,
    robots: {
      index: false,
      follow: false,
    },
  });
};

const BlockPreviewPage = async (props: {
  params: Promise<{ block: string }>;
}) => {
  const { block } = await props.params;

  const blockDetails = blocks.find((candidate) => candidate.name === block);

  if (!blockDetails) {
    notFound();
  }

  const content = (
    <div>
      <blockDetails.component />
    </div>
  );

  if (blockDetails.layout) {
    return <blockDetails.layout>{content}</blockDetails.layout>;
  }

  return content;
};

export default BlockPreviewPage;
