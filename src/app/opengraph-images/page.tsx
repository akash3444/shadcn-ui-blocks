import { OGImageCodeExplorer } from "@/components/og-images/og-image-code-explorer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ogImages } from "@/config/registry/og-images";
import { OGImageContextProvider } from "@/providers/og-image-provider";

function OpengraphImagesPage() {
  return (
    <div className="mx-auto max-w-7xl border-x">
      <div className="h-20 bg-[repeating-linear-gradient(315deg,var(--muted)_0,var(--muted)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed" />
      {ogImages.map((ogImage) => (
        <OGImageContextProvider key={ogImage.name} name={ogImage.name}>
          <Tabs className="gap-0 border-y" defaultValue="preview">
            <div className="flex items-center justify-between border-b px-4 py-2.5">
              <h2 className="font-semibold text-xl">{ogImage.title}</h2>

              <TabsList>
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="preview">
              <img
                alt={ogImage.name}
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
