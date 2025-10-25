"use client";

import { blocks } from "@/blocks";
import {
  Block,
  BlockFile,
  BlockScreenSize,
  BlockScreenSizeUnion,
} from "@/types/blocks";
import { createContext, ReactNode, useContext, useState } from "react";
import registry from "../../registry.json";

const BlockContext = createContext<{
  activeFile: { path: string; target?: string };
  screenSize: BlockScreenSizeUnion;
  selectFile: (file: BlockFile) => void;
  setScreenSize: (screenSize: BlockScreenSize) => void;
  block: Block;
}>({
  activeFile: { path: "" },
  screenSize: "desktop",
  selectFile: () => {},
  setScreenSize: () => {},
  block: {} as Block,
});

export const BlockProvider = ({
  children,
  name,
}: {
  children: ReactNode;
  name: string;
}) => {
  const blockDetails = registry.items.find((item) => item.name === name);

  if (!blockDetails) {
    throw new Error("Block not found");
  }

  const { files } = blockDetails as { files: BlockFile[] };

  const [activeFile, setActiveFile] = useState<BlockFile>({
    path: files[0].path,
    target: files[0].target,
  });

  const [screenSize, setScreenSize] = useState<BlockScreenSizeUnion>("desktop");

  return (
    <BlockContext.Provider
      value={{
        activeFile,
        screenSize,
        setScreenSize,
        selectFile: setActiveFile,
        block: blocks[name as keyof typeof blocks],
      }}
    >
      {children}
    </BlockContext.Provider>
  );
};

export const useBlockContext = () => {
  const context = useContext(BlockContext);
  if (!context) {
    throw new Error("useBlockContext must be used within a BlockProvider.");
  }

  return context;
};
