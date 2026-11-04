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
import { getFileTree } from "@/lib/file-tree";
import { getRegistrySource } from "@/lib/registry-source";
import { codeToHtml } from "@/lib/shiki";
import type { BlockScreenSize, BlockScreenSizeUnion } from "@/types/blocks";
import type { Theme } from "@/types/theme";

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
} | null>(null);

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

  // Replace `@/registry/.../ui` (e.g. `@/registry/bases/base/ui`) with `@/components/ui`
  transformedCode = transformedCode.replace(
    /@\/registry\/(.+)\/ui/g,
    "@/components/ui"
  );

  return transformedCode;
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

  const fileTree = getFileTree(block);

  const [activeFile, setActiveFile] = useState(block.files[0]?.path);
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

  const iframeSrc = `/blocks/${block.name}/preview`;

  // Reset active file when the block changes
  useEffect(() => {
    setActiveFile(block.files[0]?.path);
  }, [block]);

  // Update the code content when the active file changes
  useEffect(() => {
    const controller = new AbortController();
    const updateCodeContent = async () => {
      if (!activeFile) {
        return;
      }
      setIsLoadingCode(true);

      try {
        const filePath = `src/registry/blocks/${block.source}/${block.name}/${activeFile}`;
        const rawCode = await getRegistrySource({
          itemName: block.name,
          filePath,
          signal: controller.signal,
        });
        const transformedCode = transformCode(rawCode);
        if (controller.signal.aborted) {
          return;
        }
        setCode(transformedCode);

        const formattedCode = await codeToHtml(transformedCode);
        if (controller.signal.aborted) {
          return;
        }
        setCodeHtml(formattedCode);
      } catch (error) {
        if (!controller.signal.aborted) {
          console.error(error);
          setCode(null);
          setCodeHtml(null);
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoadingCode(false);
        }
      }
    };

    updateCodeContent();

    return () => controller.abort();
  }, [activeFile, block]);

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
