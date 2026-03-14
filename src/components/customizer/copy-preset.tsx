"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { usePresetCode } from "@/app/(components)/hooks/use-preset-code";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { cn } from "@/lib/utils";

export function CopyPreset({
  className,
  ...props
}: React.ComponentProps<typeof Button>) {
  const presetCode = usePresetCode();
  const { copyToClipboard, isCopied } = useCopyToClipboard();

  const handleCopy = React.useCallback(() => {
    copyToClipboard(`--preset ${presetCode}`);
  }, [presetCode, copyToClipboard]);

  return (
    <Button
      variant="outline"
      onClick={handleCopy}
      className={cn(
        "touch-manipulation bg-transparent! px-2! py-0! text-sm! transition-none select-none hover:bg-muted!",
        className
      )}
      {...props}
    >
      <span>{isCopied ? "Copied" : `--preset ${presetCode}`}</span>
    </Button>
  );
}
