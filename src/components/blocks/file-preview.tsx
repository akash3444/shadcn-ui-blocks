import { CheckIcon, CopyIcon, FileIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { removeBlockPrefixFromPath } from "@/lib/blocks";
import { getFileContent } from "@/lib/file";
import { useBlockContext } from "@/providers/block-provider";
import { CodeBlock } from "../code-block";

export function FilePreview() {
  const [code, setCode] = useState<string>("");
  const { activeFile, block } = useBlockContext();
  const { copyToClipboard, isCopied } = useCopyToClipboard();

  useEffect(() => {
    const filePath = activeFile.startsWith("src/")
      ? activeFile
      : `src/blocks/${block.name}/${activeFile}`;
    getFileContent(filePath).then((code) => setCode(code));
  }, [activeFile, block.name]);

  return (
    <div className="flex w-full flex-col overflow-x-auto">
      <div className="flex h-14 shrink-0 items-center justify-between gap-2 border-b bg-sidebar pr-4 pl-6">
        <div className="flex items-center gap-2">
          <FileIcon className="h-4 w-4" />{" "}
          {removeBlockPrefixFromPath(activeFile)}
        </div>
        <Button
          onClick={() => copyToClipboard(code)}
          size="icon"
          variant="ghost"
        >
          {isCopied ? <CheckIcon /> : <CopyIcon />}
        </Button>
      </div>

      <CodeBlock code={code} />
    </div>
  );
}
