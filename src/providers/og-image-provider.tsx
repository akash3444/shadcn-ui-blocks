"use client";

import { useTheme } from "next-themes";
import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { pathToTree } from "to-path-tree";
import type { RegistryOgImage } from "@/config/registry/og-images";
import { ogImages } from "@/config/registry/og-images";
import { getRegistrySource } from "@/lib/registry-source";
import { codeToHtml } from "@/lib/shiki";

const OGImageContext = createContext<{
  registryItem: RegistryOgImage;
  codeHtml: string | null;
  code: string | null;
  isLoadingCode: boolean;
  fileTree: ReturnType<typeof pathToTree>;
  activeFile: string;
  selectFile: (file: string) => void;
  mode: "dark" | "light";
  toggleMode: () => void;
} | null>(null);

function getFileTreeForOgImage(registryItem: RegistryOgImage) {
  const paths = registryItem.files.map((file) => file.path);
  return pathToTree(paths);
}

export function OGImageContextProvider({
  children,
  name,
}: {
  children: ReactNode;
  name: string;
}) {
  const { resolvedTheme } = useTheme();
  const [mode, setMode] = useState<"dark" | "light">("light");
  const registryItem = ogImages.find((item) => item.name === name) ?? null;

  useEffect(() => {
    setMode(resolvedTheme as "dark" | "light");
  }, [resolvedTheme]);

  if (!registryItem) {
    throw new Error(`OG image not found: ${name}`);
  }

  const fileTree = getFileTreeForOgImage(registryItem);
  const [activeFile, setActiveFile] = useState(
    registryItem.files[0]?.path ?? ""
  );
  const [code, setCode] = useState<string | null>(null);
  const [codeHtml, setCodeHtml] = useState<string | null>(null);
  const [isLoadingCode, setIsLoadingCode] = useState(false);

  const activeFilePath =
    registryItem.files.find((file) => file.path === activeFile)?.target ??
    activeFile;

  useEffect(() => {
    const controller = new AbortController();
    const updateCodeContent = async () => {
      setIsLoadingCode(true);
      try {
        const fileCode = await getRegistrySource({
          itemName: name,
          filePath: `src/registry/og-images/${name}/${activeFilePath}`,
          signal: controller.signal,
        });
        if (controller.signal.aborted) {
          return;
        }
        setCode(fileCode);
        const formattedCode = await codeToHtml(fileCode);
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
  }, [activeFilePath, name]);

  const toggleMode = useCallback(() => {
    setMode((mode) => (mode === "dark" ? "light" : "dark"));
  }, []);

  return (
    <OGImageContext.Provider
      value={{
        registryItem,
        codeHtml,
        code,
        isLoadingCode,
        fileTree,
        activeFile,
        selectFile: setActiveFile,
        mode,
        toggleMode,
      }}
    >
      {children}
    </OGImageContext.Provider>
  );
}

export function useOGImageContext() {
  const context = useContext(OGImageContext);
  if (!context) {
    throw new Error(
      "useOGImageContext must be used within an OGImageContextProvider."
    );
  }
  return context;
}
