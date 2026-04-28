"use client";

import { useEffect, useRef, useState } from "react";
import type { ImperativePanelHandle } from "react-resizable-panels";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { blockScreens } from "@/description/blocks";
import { cn } from "@/lib/utils";
import { useBlockContext } from "@/providers/block-provider";
import { Spinner } from "../ui/spinner";

const BlockPreview = () => {
  const [isIframeHeightDefined, setIsIframeHeightDefined] = useState(false);
  const resizablePanelRef = useRef<ImperativePanelHandle>(null);
  const {
    screenSize: selectedScreenSize,
    iframeRef,
    iframeSrc,
    handleIframeLoad: applyTheme,
  } = useBlockContext();
  const blockScreen = blockScreens.find(
    ({ name }) => name === selectedScreenSize
  );

  useEffect(() => {
    if (resizablePanelRef.current) {
      resizablePanelRef.current.resize(blockScreen?.size || 100);
    }
  }, [selectedScreenSize]);

  const handleIframeLoad = () => {
    if (iframeRef.current) {
      iframeRef.current.style.height = `${iframeRef.current.contentWindow?.document.body.scrollHeight}px`;
    }
    setIsIframeHeightDefined(true);
    applyTheme();
  };

  return (
    <div className="shadow-xs/2">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={120} minSize={30} ref={resizablePanelRef}>
          <div
            className={cn(
              "relative flex h-full w-full items-center justify-center overflow-auto rounded-xl border",
              !isIframeHeightDefined && "h-[700px]"
            )}
          >
            {/** biome-ignore lint/a11y/noNoninteractiveElementInteractions: iframe is interactive */}
            <iframe
              className={cn({ invisible: !isIframeHeightDefined })}
              height="100%"
              onLoad={handleIframeLoad}
              ref={iframeRef}
              src={iframeSrc}
              title="Block Preview"
              width="100%"
            />
            {!isIframeHeightDefined && (
              <Spinner className="absolute inset-0 m-auto size-8" />
            )}
          </div>
        </ResizablePanel>
        <ResizableHandle className="w-0" withHandle />
        <ResizablePanel className="pr-1.5" defaultSize={0} />
      </ResizablePanelGroup>
    </div>
  );
};

export default BlockPreview;
