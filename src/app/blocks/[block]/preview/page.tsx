import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blocks } from "@/config/registry";
import { constructMetadata } from "@/lib/metadata";
import type { PrimitiveLibrary } from "@/providers/primitive-provider";

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
  searchParams: Promise<{ primitive?: string }>;
}) => {
  const [params, searchParams] = await Promise.all([
    props.params,
    props.searchParams,
  ]);
  const { block } = params;
  const primitive: PrimitiveLibrary =
    searchParams.primitive === "base" ? "base" : "radix";

  const blockDetails = blocks.find((candidate) => candidate.name === block);

  if (!blockDetails) {
    notFound();
  }

  const BlockComponent = blockDetails.primitives
    ? blockDetails.primitives[primitive].component
    : blockDetails.component;

  if (!BlockComponent) {
    notFound();
  }

  const content = (
    <div>
      <BlockComponent />
    </div>
  );

  if (blockDetails.layout) {
    return <blockDetails.layout>{content}</blockDetails.layout>;
  }

  return content;
};

export default BlockPreviewPage;
