import { useTheme } from "next-themes";
import { useCallback, useEffect, useRef, useState } from "react";
import { BLOCK_THEMES, type ColorTheme } from "@/config/block-themes";
import type { Theme } from "@/types/theme";

const THEME_STYLE_ID = "tweakcn-theme-override";
const FONT_VAR_PREFIX = "font-";
const COLOR_THEME_STORAGE_KEY = "block-color-theme";
const COLOR_THEME_CHANGE_EVENT = "block-color-theme-change";

const getStoredColorTheme = (): string => {
  try {
    const stored = localStorage.getItem(COLOR_THEME_STORAGE_KEY);
    if (stored && BLOCK_THEMES.some((t) => t.id === stored)) {
      return stored;
    }
  } catch {
    // localStorage unavailable (SSR or restricted context)
  }
  return "default";
};

const storeColorTheme = (id: string): void => {
  try {
    localStorage.setItem(COLOR_THEME_STORAGE_KEY, id);
  } catch {
    // localStorage unavailable
  }
};

const buildThemeCss = (theme: ColorTheme): string => {
  const toDeclarations = (vars: Record<string, string>) =>
    Object.entries(vars)
      .filter(([key]) => !key.startsWith(FONT_VAR_PREFIX))
      .map(([key, val]) => `  --${key}: ${val};`)
      .join("\n");

  return [
    `:root {\n${toDeclarations(theme.cssVars.light)}\n}`,
    `.dark {\n${toDeclarations(theme.cssVars.dark)}\n}`,
  ].join("\n");
};

const applyThemeToIframe = (
  iframe: HTMLIFrameElement,
  theme: Theme,
  colorThemeId: string
): void => {
  const doc = iframe.contentDocument;
  if (!doc?.documentElement) {
    return;
  }

  // Toggle dark/light class
  const { classList } = doc.documentElement;
  if (theme === "dark") {
    classList.remove("light");
    classList.add("dark");
  } else {
    classList.remove("dark");
    classList.add("light");
  }

  // Inject or remove color theme override
  const existing = doc.getElementById(THEME_STYLE_ID);
  const colorTheme = BLOCK_THEMES.find((t) => t.id === colorThemeId);

  if (!colorTheme || colorThemeId === "default") {
    existing?.remove();
    return;
  }

  const css = buildThemeCss(colorTheme);
  if (existing) {
    existing.textContent = css;
  } else {
    const style = doc.createElement("style");
    style.id = THEME_STYLE_ID;
    style.textContent = css;
    doc.head.appendChild(style);
  }
};

export const useBlockTheme = () => {
  const { resolvedTheme } = useTheme();
  const [theme, setTheme] = useState<Theme>(resolvedTheme as Theme);
  // Lazy initialiser reads from localStorage so the selection persists across blocks
  const [colorTheme, setColorTheme] = useState(() => getStoredColorTheme());

  // Refs hold the latest values for use inside event callbacks (avoids stale closures)
  const themeRef = useRef<Theme>(resolvedTheme as Theme);
  const colorThemeRef = useRef(getStoredColorTheme());
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  const handleThemeChange = useCallback((newTheme: Theme) => {
    themeRef.current = newTheme;
    setTheme(newTheme);
    if (iframeRef.current) {
      applyThemeToIframe(iframeRef.current, newTheme, colorThemeRef.current);
    }
  }, []);

  const handleColorThemeChange = useCallback((newColorTheme: string) => {
    colorThemeRef.current = newColorTheme;
    setColorTheme(newColorTheme);
    storeColorTheme(newColorTheme);
    if (iframeRef.current) {
      applyThemeToIframe(iframeRef.current, themeRef.current, newColorTheme);
    }
    // Notify all other mounted block instances on this page
    window.dispatchEvent(
      new CustomEvent(COLOR_THEME_CHANGE_EVENT, { detail: newColorTheme })
    );
  }, []);

  // Re-apply full theme state whenever the iframe document becomes ready
  const handleIframeLoad = useCallback(() => {
    if (iframeRef.current) {
      applyThemeToIframe(
        iframeRef.current,
        themeRef.current,
        colorThemeRef.current
      );
    }
  }, []);

  // Sync with other mounted block instances when any one of them changes the color theme
  useEffect(() => {
    const onColorThemeChange = (e: Event) => {
      const newColorTheme = (e as CustomEvent<string>).detail;
      if (colorThemeRef.current === newColorTheme) {
        return;
      }
      colorThemeRef.current = newColorTheme;
      setColorTheme(newColorTheme);
      if (iframeRef.current) {
        applyThemeToIframe(iframeRef.current, themeRef.current, newColorTheme);
      }
    };

    window.addEventListener(COLOR_THEME_CHANGE_EVENT, onColorThemeChange);
    return () =>
      window.removeEventListener(COLOR_THEME_CHANGE_EVENT, onColorThemeChange);
  }, []);

  // Keep in sync with the global system/page theme
  useEffect(() => {
    const newTheme = resolvedTheme as Theme;
    themeRef.current = newTheme;
    setTheme(newTheme);
    if (iframeRef.current) {
      applyThemeToIframe(iframeRef.current, newTheme, colorThemeRef.current);
    }
  }, [resolvedTheme]);

  return {
    theme,
    setTheme: handleThemeChange,
    colorTheme,
    setColorTheme: handleColorThemeChange,
    iframeRef,
    handleIframeLoad,
  };
};
