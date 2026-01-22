import { Code } from "lucide-react";
import { VisuallyHidden as VisuallyHiddenPrimitive } from "radix-ui";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { codeToHtml } from "@/lib/shiki";
import { CodeInstallationCommandTabs } from "../code-installation-command-tabs";

function rewriteImports(code: string): string {
  let codeWithRewrittenImports = code;

  codeWithRewrittenImports = codeWithRewrittenImports.replace(
    /(["'])@\/registry\/ui\//g,
    "$1@/components/ui/"
  );
  return codeWithRewrittenImports;
}

export const CodeDialog = async ({
  code,
  registryUrl,
}: {
  code: string;
  registryUrl?: string;
}) => {
  const codeHtml = await codeToHtml(rewriteImports(code));

  return (
    <Dialog>
      <VisuallyHiddenPrimitive.VisuallyHidden>
        <DialogTitle>Code Dialog</DialogTitle>
      </VisuallyHiddenPrimitive.VisuallyHidden>
      <DialogTrigger asChild>
        <Button
          className="h-8 w-8 text-muted-foreground"
          size="icon"
          variant="ghost"
        >
          <Code />
        </Button>
      </DialogTrigger>

      <DialogContent className="w-full gap-0 overflow-hidden rounded-lg border-none p-0 sm:max-w-2xl">
        {registryUrl && (
          <div className="border border-b px-8 pt-6 pb-8">
            <h2 className="mb-2.5 font-semibold text-lg">
              Installation Command
            </h2>
            <CodeInstallationCommandTabs registryUrl={registryUrl} />
          </div>
        )}

        <ScrollArea className="max-h-120" type="auto">
          <ScrollArea className="grid" orientation="horizontal" type="auto">
            <div
              className="h-full overflow-auto text-sm [&>pre]:h-full [&>pre]:overflow-x-auto [&>pre]:pt-4 [&_.line]:leading-[1.7]"
              dangerouslySetInnerHTML={{ __html: codeHtml }}
            />
          </ScrollArea>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
