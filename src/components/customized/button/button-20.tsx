"use client";

import { Check, Copy } from "lucide-react";
import React from "react";
import { Button } from "@/registry/ui/button";

const CopyButton = () => {
  const { isCopied, copyToClipboard } = useCopyToClipboard();
  const link = "https://www.shadcnui-blocks.com";

  return (
    <div className="flex items-center overflow-hidden rounded-xl border bg-muted/70 p-0.75 ps-0">
      <p className="max-w-[25ch] select-all overflow-hidden text-ellipsis whitespace-nowrap pr-2 pl-3 text-sm">
        {link}
      </p>
      <Button onClick={() => copyToClipboard(link)} size="icon">
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

    if (!value) {
      return;
    }

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
