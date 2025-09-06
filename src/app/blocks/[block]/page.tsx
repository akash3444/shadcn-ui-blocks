import { blockList, blocks } from "@/blocks";
import BlockToolbar from "@/components/blocks/block-toolbar";
import BlockPreview from "@/components/blocks/block-preview";
import FileExplorer from "@/components/blocks/file-explorer";
import { Navbar } from "@/components/layout/navbar";
import { DescriptionText, MainHeading } from "@/components/typography";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { constructMetadata } from "@/lib/metadata";
import { absoluteUrl, capitalize } from "@/lib/utils";
import { BlockProvider } from "@/providers/block-provider";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import registry from "../../../../registry.json";
import BlockDetails from "@/components/blocks/block-details";

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
    title: `${blockDetails.title} - ${capitalize(
      blockDetails.category
    )} section Shadcn UI block`,
    description: `Fully customized and responsive ${blockDetails.title} Shadcn UI block. Preview, customize, and copy ready-to-use code snippets.`,
    alternates: {
      canonical: absoluteUrl(`/blocks/${block}`),
    },
  });
};

const BlockPage = async (props: { params: Promise<{ block: string }> }) => {
  const params = await props.params;
  const { block } = params;

  const blockDetails = registry.items.find((item) => item.name === block);
  if (!blockDetails) notFound();

  const { title, description } = blockDetails;
  const files = blockDetails.files.map((file) => ({
    ...file,
    path: file.path.replace(`src/blocks/${block}/`, ""),
  }));

  return (
    <BlockProvider>
      <Navbar />
      <div className="max-w-(--breakpoint-2xl) mx-auto py-8 px-4">
        <MainHeading>{title}</MainHeading>
        {description && (
          <DescriptionText className="mt-1">{description}</DescriptionText>
        )}

        <Tabs defaultValue="preview" className="mt-6">
          <div className="mb-4 flex items-center gap-2 justify-between pr-1.5">
            <TabsList>
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>
            <BlockToolbar />
          </div>

          <TabsContent value="preview">
            <BlockPreview block={block} />
          </TabsContent>
          <TabsContent value="code">
            <FileExplorer files={files} />
          </TabsContent>
        </Tabs>

        <BlockDetails />
      </div>
    </BlockProvider>
  );
};

export default BlockPage;
