"use client";

import { useEffect, useRef } from "react";
import type { ImperativePanelHandle } from "react-resizable-panels";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { blockScreens } from "@/description/blocks";
import { useBlockContext } from "@/providers/block-provider";

const BlockPreview = () => {
  const resizablePanelRef = useRef<ImperativePanelHandle>(null);
  const {
    screenSize: selectedScreenSize,
    iframeRef,
    iframeSrc,
  } = useBlockContext();
  const blockScreen = blockScreens.find(
    ({ name }) => name === selectedScreenSize
  );

  useEffect(() => {
    if (resizablePanelRef.current) {
      resizablePanelRef.current.resize(blockScreen?.size || 100);
    }
  }, [selectedScreenSize]);

  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={120} minSize={30} ref={resizablePanelRef}>
        <div className="h-[700px] w-full overflow-auto rounded-lg border">
          <iframe height="100%" ref={iframeRef} src={iframeSrc} width="100%" />
        </div>
      </ResizablePanel>
      <ResizableHandle className="w-0" withHandle />
      <ResizablePanel className="pr-1.5" defaultSize={0} />
    </ResizablePanelGroup>
  );
};

export default BlockPreview;
