"use client";

import { Button } from "@/registry/ui/button";
import { Check, Copy } from "lucide-react";
import React from "react";

const CopyButton = () => {
  const { isCopied, copyToClipboard } = useCopyToClipboard();
  const link = "https://www.shadcnui-blocks.com";

  return (
    <div className="flex items-center border rounded-full overflow-hidden p-1">
      <p className="pl-4 pr-2 max-w-[25ch] text-ellipsis overflow-hidden whitespace-nowrap text-sm">
        {link}
      </p>
      <Button
        size="icon"
        className="rounded-full"
        onClick={() => copyToClipboard(link)}
      >
        {isCopied ? <Check /> : <Copy />}
      </Button>
    </div>
  );
};

// @hooks/use-copy-to-clipboard.tsx
function useCopyToClipboard({
  timeout = 2000,
  onCopy,
}: {
  timeout?: number;
  onCopy?: () => void;
} = {}) {
  const [isCopied, setIsCopied] = React.useState(false);

  const copyToClipboard = (value: string) => {
    if (typeof window === "undefined" || !navigator.clipboard.writeText) {
      return;
    }

    if (!value) return;

    navigator.clipboard.writeText(value).then(() => {
      setIsCopied(true);

      if (onCopy) {
        onCopy();
      }

      setTimeout(() => {
        setIsCopied(false);
      }, timeout);
    }, console.error);
  };

  return { isCopied, copyToClipboard };
}

export default CopyButton;
