import { Code } from "lucide-react";
import { VisuallyHidden as VisuallyHiddenPrimitive } from "radix-ui";
import { CopyButton } from "@/components/copy-button";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
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
        <DialogTitle>View component code</DialogTitle>
      </VisuallyHiddenPrimitive.VisuallyHidden>
      <Tooltip>
        <TooltipTrigger asChild>
          <DialogTrigger asChild>
            <Button
              className="h-8 w-8 text-muted-foreground transition-colors hover:text-foreground"
              size="icon"
              variant="ghost"
            >
              <Code className="size-4" />
            </Button>
          </DialogTrigger>
        </TooltipTrigger>
        <TooltipContent side="bottom">View code</TooltipContent>
      </Tooltip>

      <DialogContent className="w-full gap-0 overflow-hidden rounded-xl border bg-card p-0 shadow-xl sm:max-w-2xl">
        {registryUrl && (
          <div className="border-b bg-muted/30 px-6 py-5">
            <h2 className="mb-3 font-semibold text-base">
              Installation Command
            </h2>
            <CodeInstallationCommandTabs registryUrl={registryUrl} />
          </div>
        )}

        <div className="flex flex-col">
          <div className="flex items-center justify-between gap-4 border-b bg-muted/20 py-2.5 ps-6 pe-4">
            <span className="font-medium text-muted-foreground text-sm">
              Component Code
            </span>
            <CopyButton content={code} />
          </div>

          <ScrollArea className="max-h-[min(28rem,70vh)]" type="auto">
            <ScrollArea className="grid" orientation="horizontal" type="auto">
              <div
                className="h-full overflow-auto px-4 py-3 font-mono text-[13px] [&>pre]:h-full [&>pre]:overflow-x-auto [&>pre]:py-2 [&_.line]:leading-[1.75]"
                dangerouslySetInnerHTML={{ __html: codeHtml }}
              />
            </ScrollArea>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  );
};
