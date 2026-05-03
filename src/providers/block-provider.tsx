"use client";

import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import type { pathToTree } from "to-path-tree";
import { blocks } from "@/config/registry";
import { useBlockTheme } from "@/hooks/use-block-theme";
import { getFileContent } from "@/lib/file";
import { getFileTree } from "@/lib/file-tree";
import { codeToHtml } from "@/lib/shiki";
import type { BlockScreenSize, BlockScreenSizeUnion } from "@/types/blocks";
import type { Theme } from "@/types/theme";
import { usePrimitive } from "./primitive-provider";

const BlockContext = createContext<{
  codeHtml: string | null;
  code: string | null;
  isLoadingCode: boolean;
  fileTree: ReturnType<typeof pathToTree>;
  activeFile: string;
  screenSize: BlockScreenSizeUnion;
  selectFile: (file: string) => void;
  setScreenSize: (screenSize: BlockScreenSize) => void;
  block: (typeof blocks)[number];
  theme: Theme;
  setTheme: (theme: Theme) => void;
  colorTheme: string;
  setColorTheme: (id: string) => void;
  iframeRef: React.RefObject<HTMLIFrameElement | null>;
  iframeSrc: string;
  handleIframeLoad: () => void;
}>({
  codeHtml: null,
  code: null,
  isLoadingCode: false,
  fileTree: {} as ReturnType<typeof pathToTree>,
  activeFile: "",
  screenSize: "desktop",
  selectFile: () => {},
  setScreenSize: () => {},
  block: {} as (typeof blocks)[number],
  theme: "light",
  setTheme: () => {},
  colorTheme: "default",
  setColorTheme: () => {},
  iframeRef: { current: null },
  iframeSrc: "",
  handleIframeLoad: () => {},
});

const transformCode = (code: string) => {
  let transformedCode = code;

  // Replace `@/registry/.../components` with `@/components`
  transformedCode = transformedCode.replace(
    /@\/registry\/(.+)\/components/g,
    "@/components"
  );

  // Replace `@/registry/.../hooks` with `@/hooks`
  transformedCode = transformedCode.replace(
    /@\/registry\/(.+)\/hooks/g,
    "@/hooks"
  );

  // Replace `@/registry/.../config` with `@/config`
  transformedCode = transformedCode.replace(
    /@\/registry\/(.+)\/config/g,
    "@/config"
  );

  // Replace `@/registry/ui/radix/` and `@/registry/ui/base/` with `@/components/ui/`
  transformedCode = transformedCode.replace(
    /@\/registry\/ui\/(radix|base)\//g,
    "@/components/ui/"
  );

  // Replace remaining `@/registry/.../ui` with `@/components/ui`
  transformedCode = transformedCode.replace(
    /@\/registry\/(.+)\/ui/g,
    "@/components/ui"
  );

  return transformedCode;
};

const getBlockFiles = (
  block: (typeof blocks)[number],
  primitive: "radix" | "base"
) => {
  if (block.primitives) {
    return block.primitives[primitive].files;
  }
  return block.files ?? [];
};

const getBlockFilePath = (
  block: (typeof blocks)[number],
  primitive: "radix" | "base",
  activeFile: string
) => {
  if (block.primitives) {
    return `src/registry/blocks/${primitive}/${block.name}/${activeFile}`;
  }
  return `src/registry/blocks/shared/${block.name}/${activeFile}`;
};

export const BlockProvider = ({
  children,
  name,
}: {
  children: ReactNode;
  name: string;
}) => {
  const block = blocks.find((b) => b.name === name);

  if (!block) {
    throw new Error("Block not found");
  }

  const { selectedPrimitive } = usePrimitive();

  const activeFiles = getBlockFiles(block, selectedPrimitive);
  const fileTree = getFileTree(block as (typeof blocks)[number], selectedPrimitive);

  const [activeFile, setActiveFile] = useState(activeFiles[0]?.path);
  const [screenSize, setScreenSize] = useState<BlockScreenSizeUnion>("desktop");
  const [code, setCode] = useState<string | null>(null);
  const [codeHtml, setCodeHtml] = useState<string | null>(null);
  const [isLoadingCode, setIsLoadingCode] = useState(false);

  const {
    theme,
    setTheme,
    colorTheme,
    setColorTheme,
    iframeRef,
    handleIframeLoad,
  } = useBlockTheme();

  const iframeSrc = `/blocks/${block.name}/preview?primitive=${selectedPrimitive}`;

  const updateCodeContent = async () => {
    if (!activeFile) return;
    setIsLoadingCode(true);

    try {
      const filePath = getBlockFilePath(block, selectedPrimitive, activeFile);
      const rawCode = await getFileContent(filePath);
      const transformedCode = transformCode(rawCode);
      setCode(transformedCode);

      const formattedCode = await codeToHtml(transformedCode ?? "");
      setCodeHtml(formattedCode);
    } finally {
      setIsLoadingCode(false);
    }
  };

  // Reset active file when primitive changes
  useEffect(() => {
    const files = getBlockFiles(block, selectedPrimitive);
    setActiveFile(files[0]?.path);
  }, [selectedPrimitive]);

  // Update the code content when the active file or primitive changes
  useEffect(() => {
    updateCodeContent();
  }, [activeFile, selectedPrimitive]);

  return (
    <BlockContext.Provider
      value={{
        codeHtml,
        code,
        isLoadingCode,
        fileTree,
        activeFile: activeFile ?? "",
        screenSize,
        setScreenSize,
        selectFile: setActiveFile,
        block,
        theme,
        setTheme,
        colorTheme,
        setColorTheme,
        iframeRef,
        iframeSrc,
        handleIframeLoad,
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
