"use client";

import { useBlockContext } from "@/providers/block-provider";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../ui/resizable";
import { blockScreens } from "@/description/blocks";
import { useEffect, useRef } from "react";
import { ImperativePanelHandle } from "react-resizable-panels";

const BlockPreview = () => {
  const resizablePanelRef = useRef<ImperativePanelHandle>(null);
  const {
    block,
    screenSize: selectedScreenSize,
    iframeRef,
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
    <ResizablePanelGroup
      direction="horizontal"
      className="relative border border-t-0 rounded-b-lg overflow-visible!"
    >
      <ResizablePanel ref={resizablePanelRef} defaultSize={120} minSize={30}>
        <div className="w-full rounded-b-lg h-[700px] overflow-auto">
          <iframe
            ref={iframeRef}
            src={`/blocks/${block.name}/preview`}
            height="100%"
            width="100%"
          />
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle className="w-px -me-px" />
      <ResizablePanel defaultSize={0} className="bg-primary/2"></ResizablePanel>

      <div
        className="absolute inset-0 -z-1 top-px left-px"
        style={{
          backgroundImage: `
        linear-gradient(to right, var(--border) 1px, transparent 1px),
        linear-gradient(to bottom, var(--border) 1px, transparent 1px)
      `,
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 0 0",
          maskImage: `
        repeating-linear-gradient(
          to right,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        ),
        repeating-linear-gradient(
          to bottom,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        )
      `,
          WebkitMaskImage: `
        repeating-linear-gradient(
          to right,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        ),
        repeating-linear-gradient(
          to bottom,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        )
      `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />
    </ResizablePanelGroup>
  );
};

export default BlockPreview;
