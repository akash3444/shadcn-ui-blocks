"use client";

import { Code } from "lucide-react";
import { VisuallyHidden as VisuallyHiddenPrimitive } from "radix-ui";
import { CopyButton } from "@/components/copy-button";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { capture } from "@/lib/analytics";
import { CodeInstallationCommandTabs } from "../code-installation-command-tabs";

const CodeHtml = ({ html }: { html: string }) => (
  <div
    className="h-full overflow-auto px-4 py-3 font-mono text-[13px] [&>pre]:h-full [&>pre]:overflow-x-auto [&>pre]:py-2 [&_.line]:leading-[1.75]"
    dangerouslySetInnerHTML={{ __html: html }}
  />
);

interface CodeDialogClientProps {
  code: string;
  codeHtml: string;
  registryItem?: string;
  componentName?: string;
  componentType?: string;
}

export const CodeDialogClient = ({
  code,
  codeHtml,
  registryItem,
  componentName,
  componentType,
}: CodeDialogClientProps) => {
  const handleOpenChange = (open: boolean) => {
    if (open && componentName && componentType) {
      capture("component:code_dialog_opened", {
        component_name: componentName,
        component_type: componentType,
      });
    }
  };

  const handleCodeCopy = () => {
    if (componentName && componentType) {
      capture("component:code_copied", {
        component_name: componentName,
        component_type: componentType,
        source: "dialog",
      });
    }
  };

  return (
    <Sheet onOpenChange={handleOpenChange}>
      <Tooltip>
        <TooltipTrigger asChild>
          <SheetTrigger asChild>
            <Button
              className="h-8 w-8 text-muted-foreground transition-colors hover:text-foreground"
              size="icon"
              variant="ghost"
            >
              <Code className="size-4" />
            </Button>
          </SheetTrigger>
        </TooltipTrigger>
        <TooltipContent side="bottom">View code</TooltipContent>
      </Tooltip>

      <SheetContent
        className="w-full gap-0 overflow-hidden border bg-card p-0 sm:max-w-2xl"
        side="right"
      >
        <VisuallyHiddenPrimitive.VisuallyHidden>
          <SheetTitle>View component code</SheetTitle>
        </VisuallyHiddenPrimitive.VisuallyHidden>
        {registryItem && (
          <div className="border-b bg-muted/30 ps-6 pe-4 py-5">
            <h2 className="mb-3 font-semibold text-base">
              Installation Command
            </h2>
            <CodeInstallationCommandTabs
              componentName={componentName}
              componentType={componentType}
              registryItem={registryItem}
            />
          </div>
        )}

        <div className="flex min-h-0 flex-1 flex-col">
          <div className="flex items-center justify-between gap-4 border-b bg-muted/20 py-1.5 ps-6 pe-4">
            <span className="font-medium text-muted-foreground text-sm">
              Component Code
            </span>
            <CopyButton content={code} onCopy={handleCodeCopy} />
          </div>

          <ScrollArea className="min-h-0 flex-1" type="auto">
            <ScrollArea className="grid" orientation="horizontal" type="auto">
              <CodeHtml html={codeHtml} />
            </ScrollArea>
          </ScrollArea>
        </div>
      </SheetContent>
    </Sheet>
  );
};
