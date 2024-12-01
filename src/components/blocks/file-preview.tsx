import { getFileContent } from "@/lib/file";
import { useBlockContext } from "@/providers/block-provider";
import { CheckIcon, CopyIcon, FileIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { CodeBlock } from "../ui/code-block";
import { removeBlockPrefixFromPath } from "@/lib/blocks";
import { useParams } from "next/navigation";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";

export function FilePreview() {
  const [code, setCode] = useState<string>("");
  const { activeFile } = useBlockContext();
  const { block } = useParams();
  const { copyToClipboard, isCopied } = useCopyToClipboard();

  useEffect(() => {
    const path = activeFile.path.startsWith("@/")
      ? activeFile.path.replace("@", "src")
      : `src/blocks/${block}/${activeFile.path}`;
    console.log("path :", path);
    getFileContent(path).then((code) => setCode(code));
  }, [activeFile, block]);

  return (
    <div className="w-full flex flex-col overflow-x-auto">
      <div className="shrink-0 h-14 pl-6 pr-4 border-b flex items-center gap-2 justify-between bg-sidebar">
        <div className="flex items-center gap-2">
          <FileIcon className="h-4 w-4" />{" "}
          {removeBlockPrefixFromPath(activeFile.target || activeFile.path)}
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => copyToClipboard(code)}
        >
          {isCopied ? <CheckIcon /> : <CopyIcon />}
        </Button>
      </div>

      <CodeBlock code={code} />
    </div>
  );
}
