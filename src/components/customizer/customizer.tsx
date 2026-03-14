"use client";

import * as React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { getThemesForBaseColor, STYLES } from "@/registry/config";
import { FONTS } from "@/app/(components)/lib/fonts";
import { useDesignSystemSearchParams } from "@/app/(components)/lib/search-params";
import { StylePicker } from "./style-picker";
import { BaseColorPicker } from "./base-color-picker";
import { ThemePicker } from "./theme-picker";
import { IconLibraryPicker } from "./icon-library-picker";
import { FontPicker } from "./font-picker";
import { RadiusPicker } from "./radius-picker";
import { MenuColorPicker } from "./menu-picker";
import { MenuAccentPicker } from "./accent-picker";
import { CopyPreset } from "./copy-preset";
import { RandomButton } from "./random-button";
import { ResetButton } from "./reset-button";
import { ResetDialog } from "./reset-dialog";

export function Customizer() {
  const [params] = useDesignSystemSearchParams();
  const anchorRef = React.useRef<HTMLDivElement | null>(null);

  const availableThemes = React.useMemo(
    () => getThemesForBaseColor(params.baseColor),
    [params.baseColor]
  );

  return (
    <Card
      className="isolate z-10 max-h-full min-h-0 w-full self-start rounded-2xl bg-card/90 shadow-xl backdrop-blur-xl md:w-[var(--customizer-width,14rem)]"
      ref={anchorRef}
    >
      <CardHeader className="border-b">
        <h3 className="font-semibold text-sm">Customize</h3>
      </CardHeader>
      <CardContent className="no-scrollbar min-h-0 flex-1 overflow-y-auto overflow-x-hidden py-4">
        <div className="flex flex-col gap-3">
          <StylePicker styles={STYLES} />
          <BaseColorPicker />
          <ThemePicker themes={availableThemes} />
          <IconLibraryPicker />
          <FontPicker fonts={FONTS} />
          <RadiusPicker />
          <MenuColorPicker />
          <MenuAccentPicker />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2 border-t pt-4">
        <CopyPreset className="w-full" />
        <RandomButton className="w-full" />
        <ResetButton className="w-full" />
        <ResetDialog />
      </CardFooter>
    </Card>
  );
}
