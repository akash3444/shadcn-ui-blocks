"use client";

import * as React from "react";
import {
  buildRegistryTheme,
  DEFAULT_CONFIG,
  type DesignSystemConfig,
  type RadiusValue,
} from "@/registry/config";
import { useIframeMessageListener } from "@/app/(components)/hooks/use-iframe-sync";
import { FONTS } from "@/app/(components)/lib/fonts";
import {
  useDesignSystemSearchParams,
  type DesignSystemSearchParams,
} from "@/app/(components)/lib/search-params";

export function DesignSystemProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [searchParams, setSearchParams] = useDesignSystemSearchParams({
    shallow: true,
    history: "replace",
  });
  const [liveSearchParams, setLiveSearchParams] = React.useState(searchParams);
  const [isReady, setIsReady] = React.useState(false);
  const { style, theme, font, baseColor, menuAccent, menuColor, radius } =
    liveSearchParams;
  const effectiveRadius = style === "lyra" ? "none" : radius;

  React.useEffect(() => {
    setLiveSearchParams(searchParams);
  }, [searchParams]);

  const handleDesignSystemMessage = React.useCallback(
    (nextParams: DesignSystemSearchParams) => {
      setLiveSearchParams(nextParams);
      setSearchParams(nextParams);
    },
    [setSearchParams]
  );

  useIframeMessageListener("design-system-params", handleDesignSystemMessage);

  React.useEffect(() => {
    if (style === "lyra" && radius !== "none") {
      setLiveSearchParams((prev) => ({
        ...prev,
        radius: "none",
      }));
      setSearchParams({ radius: "none" as RadiusValue });
    }
  }, [style, radius, setSearchParams]);

  React.useLayoutEffect(() => {
    if (!style || !theme || !font || !baseColor) {
      return;
    }

    const body = document.body;

    Array.from(body.classList).forEach((className) => {
      if (
        className.startsWith("style-") ||
        className.startsWith("base-color-")
      ) {
        body.classList.remove(className);
      }
    });
    body.classList.add(`style-${style}`, `base-color-${baseColor}`);

    // Update font. Always set --font-sans for the preview so the selected font is visible.
    const selectedFont = FONTS.find((f) => f.value === font);
    if (selectedFont) {
      const fontFamily = selectedFont.font.style.fontFamily;
      document.documentElement.style.setProperty("--font-sans", fontFamily);
    }

    setIsReady(true);
  }, [style, theme, font, baseColor]);

  const registryTheme = React.useMemo(() => {
    if (!baseColor || !theme || !menuAccent || !effectiveRadius) {
      return null;
    }

    const config: DesignSystemConfig = {
      ...DEFAULT_CONFIG,
      baseColor,
      theme,
      menuAccent,
      radius: effectiveRadius,
    };

    return buildRegistryTheme(config);
  }, [baseColor, theme, menuAccent, effectiveRadius]);

  React.useLayoutEffect(() => {
    if (!registryTheme?.cssVars) {
      return;
    }

    const styleId = "design-system-theme-vars";
    let styleElement = document.getElementById(
      styleId
    ) as HTMLStyleElement | null;

    if (!styleElement) {
      styleElement = document.createElement("style");
      styleElement.id = styleId;
      document.head.appendChild(styleElement);
    }

    const {
      light: lightVars,
      dark: darkVars,
      theme: themeVars,
    } = registryTheme.cssVars;

    let cssText = ":root {\n";
    if (themeVars) {
      Object.entries(themeVars).forEach(([key, value]) => {
        if (value) {
          cssText += `  --${key}: ${value};\n`;
        }
      });
    }
    if (lightVars) {
      Object.entries(lightVars).forEach(([key, value]) => {
        if (value) {
          cssText += `  --${key}: ${value};\n`;
        }
      });
    }
    cssText += "}\n\n";

    cssText += ".dark {\n";
    if (darkVars) {
      Object.entries(darkVars).forEach(([key, value]) => {
        if (value) {
          cssText += `  --${key}: ${value};\n`;
        }
      });
    }
    cssText += "}\n";

    styleElement.textContent = cssText;
  }, [registryTheme]);

  React.useEffect(() => {
    if (!menuColor) {
      return;
    }

    const updateMenuElements = () => {
      const menuElements = document.querySelectorAll(".cn-menu-target");
      menuElements.forEach((element) => {
        if (menuColor === "inverted") {
          element.classList.add("dark");
        } else {
          element.classList.remove("dark");
        }
      });
    };

    updateMenuElements();

    const observer = new MutationObserver(() => {
      updateMenuElements();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
    };
  }, [menuColor]);

  if (!isReady) {
    return null;
  }

  return <>{children}</>;
}
