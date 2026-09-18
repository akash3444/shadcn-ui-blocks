import { CheckIcon, CopyIcon, FileIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { removeBlockPrefixFromPath } from "@/lib/blocks";
import { useBlockContext } from "@/providers/block-provider";
import { CodeBlock } from "../code-block";

export function FilePreview() {
  const { activeFile, code } = useBlockContext();
  const { copyToClipboard, isCopied } = useCopyToClipboard();
  const source = code ?? "";

  return (
    <div className="flex w-full flex-col overflow-x-auto">
      <div className="flex h-14 shrink-0 items-center justify-between gap-2 border-b bg-sidebar pr-4 pl-6">
        <div className="flex items-center gap-2">
          <FileIcon className="h-4 w-4" />{" "}
          {removeBlockPrefixFromPath(activeFile)}
        </div>
        <Button
          onClick={() => copyToClipboard(source)}
          size="icon"
          variant="ghost"
        >
          {isCopied ? <CheckIcon /> : <CopyIcon />}
        </Button>
      </div>

      <CodeBlock code={source} />
    </div>
  );
}
