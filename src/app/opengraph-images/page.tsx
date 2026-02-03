import { BlockInstallCommandCopyButton } from "@/components/blocks/block-intsall-command-copy-button";
import { OGImageCodeExplorer } from "@/components/og-images/og-image-code-explorer";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getOgImagesInDisplayOrder } from "@/config/registry/og-images";
import { OGImageContextProvider } from "@/providers/og-image-provider";

function OpengraphImagesPage() {
  return (
    <div className="mx-auto w-full max-w-[calc(1200px+2px)] border-x">
      <div className="h-20 border-b bg-[repeating-linear-gradient(315deg,var(--muted)_0,var(--muted)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed" />
      {getOgImagesInDisplayOrder().map((ogImage, index) => (
        <OGImageContextProvider key={ogImage.name} name={ogImage.name}>
          <Tabs className="gap-0 border-b" defaultValue="preview">
            <div className="flex items-center justify-between border-b bg-muted/35 px-4 py-2.5 dark:bg-white/15">
              <div className="flex items-center gap-4">
                <h2 className="flex items-center gap-1 font-medium">
                  <span className="mt-0.5 font-mono text-muted-foreground text-sm">
                    {(index + 1).toString().padStart(2, "0")}.
                  </span>{" "}
                  <span>{ogImage.description}</span>
                </h2>
                {!!ogImage.categories?.length && (
                  <div className="flex items-center gap-1.5">
                    {ogImage.categories?.map((category) => (
                      <Badge
                        className="bg-blue-500/20 text-blue-500/95 shadow-xs/3 dark:bg-blue-500/25 dark:text-blue-400"
                        key={category.slug}
                        variant="secondary"
                      >
                        {category.title}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2">
                <BlockInstallCommandCopyButton block={ogImage.name} />
                <TabsList className="h-8">
                  <TabsTrigger value="preview">Preview</TabsTrigger>
                  <TabsTrigger value="code">Code</TabsTrigger>
                </TabsList>
              </div>
            </div>
            <TabsContent value="preview">
              <img
                alt={ogImage.name}
                className="mx-auto"
                height={630}
                src={`/opengraph-images/${ogImage.name}/opengraph-image`}
                width={1200}
              />
            </TabsContent>
            <TabsContent className="bg-muted/50 p-4" value="code">
              <OGImageCodeExplorer />
            </TabsContent>
          </Tabs>
        </OGImageContextProvider>
      ))}
      <div className="h-20 bg-[repeating-linear-gradient(315deg,var(--muted)_0,var(--muted)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed" />
    </div>
  );
}

export default OpengraphImagesPage;
