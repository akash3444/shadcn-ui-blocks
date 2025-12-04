"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { blockScreens } from "@/description/blocks";
import { useBlockContext } from "@/providers/block-provider";
import { useEffect, useRef } from "react";
import { ImperativePanelHandle } from "react-resizable-panels";

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
      <ResizablePanel ref={resizablePanelRef} defaultSize={120} minSize={30}>
        <div className="w-full rounded-lg border h-[700px] overflow-auto">
          <iframe ref={iframeRef} src={iframeSrc} height="100%" width="100%" />
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle className="w-0" />
      <ResizablePanel defaultSize={0} className="pr-1.5" />
    </ResizablePanelGroup>
  );
};

export default BlockPreview;
