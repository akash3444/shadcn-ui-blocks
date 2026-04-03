"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { capture } from "@/lib/analytics";

export const CopyToClipboardButton = ({
  content,
  children,
  componentName,
  componentType,
  ...props
}: React.ComponentProps<typeof Button> & {
  content: string;
  componentName?: string;
  componentType?: string;
}) => {
  const { copyToClipboard, isCopied } = useCopyToClipboard();

  const handleClick = () => {
    copyToClipboard(content);
    if (componentName && componentType) {
      capture("component:code_copied", {
        component_name: componentName,
        component_type: componentType,
        source: "inline",
      });
    }
  };

  return (
    <Button {...props} onClick={handleClick}>
      {isCopied ? <Check className="text-green-600" /> : children}
    </Button>
  );
};
