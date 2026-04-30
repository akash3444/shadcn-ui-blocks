import type { ReactNode } from "react";
import { BlockPreviewKeyboardNav } from "@/components/blocks/block-preview-keyboard-nav";
import { Toaster } from "@/components/ui/sonner";

const BlockPreviewLayout = async ({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ block: string }>;
}) => {
  const { block } = await params;

  return (
    <div className="block-preview-wrapper min-h-screen not-dark:bg-neutral-50/50">
      {process.env.NODE_ENV === "development" && (
        <>
          <BlockPreviewKeyboardNav blockName={block} />
          <Toaster />
        </>
      )}
      {children}
    </div>
  );
};

export default BlockPreviewLayout;
