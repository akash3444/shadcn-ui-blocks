import { useTheme } from "next-themes";
import { useCallback, useEffect, useRef } from "react";
import type { Theme } from "@/types/theme";

const applyThemeToIframe = (iframe: HTMLIFrameElement, theme: Theme): void => {
  const doc = iframe.contentDocument;
  if (!doc?.documentElement) {
    return;
  }

  const { classList } = doc.documentElement;
  if (theme === "dark") {
    classList.remove("light");
    classList.add("dark");
  } else {
    classList.remove("dark");
    classList.add("light");
  }
};

export const useBlockTheme = () => {
  const { resolvedTheme } = useTheme();

  // Ref holds the latest value for use inside the load callback (avoids stale closures)
  const themeRef = useRef<Theme>(resolvedTheme as Theme);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  // Re-apply the theme whenever the iframe document becomes ready
  const handleIframeLoad = useCallback(() => {
    if (iframeRef.current) {
      applyThemeToIframe(iframeRef.current, themeRef.current);
    }
  }, []);

  // Keep in sync with the global system/page theme
  useEffect(() => {
    const newTheme = resolvedTheme as Theme;
    themeRef.current = newTheme;
    if (iframeRef.current) {
      applyThemeToIframe(iframeRef.current, newTheme);
    }
  }, [resolvedTheme]);

  return {
    iframeRef,
    handleIframeLoad,
  };
};
