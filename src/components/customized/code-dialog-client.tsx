"use client";

import { Check, Code, Copy, FileIcon } from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FramePanel } from "@/components/ui/frame";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { capture } from "@/lib/analytics";
import { CodeInstallationCommandTabs } from "../code-installation-command-tabs";

const CodeHtml = ({ html }: { html: string }) => (
  <div
    className="code-dialog-code py-3 font-mono text-[13px] [&>pre]:w-fit [&>pre]:min-w-full [&>pre]:py-1 [&_.line]:leading-[1.75]"
    dangerouslySetInnerHTML={{ __html: html }}
  />
);

const toTitleCase = (value: string) =>
  value
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

interface CodeDialogClientProps {
  code: string;
  codeHtml: string;
  title?: string;
  registryItem?: string;
  componentName?: string;
  componentType?: string;
}

export const CodeDialogClient = ({
  code,
  codeHtml,
  title,
  registryItem,
  componentName,
  componentType,
}: CodeDialogClientProps) => {
  const { copyToClipboard, isCopied } = useCopyToClipboard();
  const popupRef = useRef<HTMLDivElement>(null);

  const handleOpenChange = (open: boolean) => {
    if (open && componentName && componentType) {
      capture("component:code_dialog_opened", {
        component_name: componentName,
        component_type: componentType,
      });
    }
  };

  const handleCodeCopy = () => {
    copyToClipboard(code);
    if (componentName && componentType) {
      capture("component:code_copied", {
        component_name: componentName,
        component_type: componentType,
        source: "dialog",
      });
    }
  };

  const fileName = componentName ? `${componentName}.tsx` : "component.tsx";

  return (
    <Dialog onOpenChange={handleOpenChange}>
      <Tooltip>
        <TooltipTrigger
          render={
            <DialogTrigger
              render={
                <Button
                  aria-label="View code"
                  className="size-8 text-muted-foreground transition-colors hover:text-foreground"
                  size="icon"
                  variant="ghost"
                />
              }
            />
          }
        >
          <Code className="size-4" />
        </TooltipTrigger>
        <TooltipContent side="bottom">View code</TooltipContent>
      </Tooltip>

      <DialogContent
        className="flex max-h-[min(760px,calc(100dvh-2rem))] flex-col gap-1 overflow-hidden rounded-2xl bg-muted p-1 ring-foreground/8 sm:max-w-3xl [&>[data-slot=dialog-close]]:top-[19px] [&>[data-slot=dialog-close]]:right-3.5"
        initialFocus={popupRef}
        ref={popupRef}
      >
        <FramePanel className="flex shrink-0 flex-col gap-3 py-4 pr-3 pl-4">
          <div className="flex flex-col gap-0.5 pr-10">
            <DialogTitle className="font-semibold text-base leading-6">
              {title ?? "Pattern code"}
            </DialogTitle>
            <DialogDescription>
              {componentType ? toTitleCase(componentType) : "Pattern source code"}
            </DialogDescription>
          </div>

          {registryItem && (
            <CodeInstallationCommandTabs
              componentName={componentName}
              componentType={componentType}
              registryItem={registryItem}
            />
          )}
        </FramePanel>

        <FramePanel className="flex min-h-0 flex-1 flex-col overflow-hidden p-0">
          <div className="flex h-11 shrink-0 items-center justify-between gap-4 border-b pr-3 pl-4">
            <div className="flex min-w-0 items-center gap-2">
              <FileIcon className="size-3.5 shrink-0 text-muted-foreground" />
              <span className="truncate font-mono text-[13px]">{fileName}</span>
            </div>
            <Button onClick={handleCodeCopy} size="sm" variant="outline">
              {isCopied ? <Check className="text-green-600" /> : <Copy />}
              {isCopied ? "Copied" : "Copy"}
            </Button>
          </div>

          <div className="min-h-0 flex-1 overflow-auto overscroll-contain">
            <CodeHtml html={codeHtml} />
          </div>
        </FramePanel>
      </DialogContent>
    </Dialog>
  );
};
