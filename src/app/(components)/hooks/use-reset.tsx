"use client";

import * as React from "react";
import { DEFAULT_CONFIG } from "@/registry/config";
import { useDesignSystemSearchParams } from "@/app/(components)/lib/search-params";

export function useReset() {
  const [, setParams] = useDesignSystemSearchParams();
  const [showResetDialog, setShowResetDialog] = React.useState(false);

  const reset = React.useCallback(() => {
    setParams({
      style: DEFAULT_CONFIG.style,
      baseColor: DEFAULT_CONFIG.baseColor,
      theme: DEFAULT_CONFIG.theme,
      iconLibrary: DEFAULT_CONFIG.iconLibrary,
      font: DEFAULT_CONFIG.font,
      menuAccent: DEFAULT_CONFIG.menuAccent,
      menuColor: DEFAULT_CONFIG.menuColor,
      radius: DEFAULT_CONFIG.radius,
    });
  }, [setParams]);

  const confirmReset = React.useCallback(() => {
    reset();
    setShowResetDialog(false);
  }, [reset]);

  return {
    reset,
    showResetDialog,
    setShowResetDialog,
    confirmReset,
  };
}
