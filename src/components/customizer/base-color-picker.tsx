"use client";

import {
  BASE_COLORS,
  getThemesForBaseColor,
  type BaseColorName,
} from "@/registry/config";
import { Picker, PickerRadioGroup, PickerRadioItem } from "@/components/customizer/picker";
import { useDesignSystemSearchParams } from "@/app/(components)/lib/search-params";

export function BaseColorPicker() {
  const [params, setParams] = useDesignSystemSearchParams();
  const currentBaseColor = BASE_COLORS.find(
    (baseColor) => baseColor.name === params.baseColor
  );

  return (
    <div className="group/picker relative">
      <Picker
        trigger={
          <>
            <div className="flex flex-col justify-start text-left">
              <div className="text-muted-foreground text-xs">Base Color</div>
              <div className="font-medium text-foreground text-sm">
                {currentBaseColor?.title}
              </div>
            </div>
            <div
              style={
                {
                  "--color":
                    (currentBaseColor?.cssVars as { dark?: Record<string, string> })?.dark?.["muted-foreground"],
                } as React.CSSProperties
              }
              className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 rounded-full bg-[var(--color)] select-none"
            />
          </>
        }
      >
        <PickerRadioGroup
          value={currentBaseColor?.name ?? ""}
          onValueChange={(value) => {
            const newBaseColor = value as BaseColorName;
            const availableThemes = getThemesForBaseColor(newBaseColor);
            const isCurrentThemeValid = availableThemes.some(
              (t) => t.name === params.theme
            );
            setParams({
              baseColor: newBaseColor,
              theme: isCurrentThemeValid ? params.theme : (availableThemes[0]?.name ?? newBaseColor),
            });
          }}
        >
          {BASE_COLORS.map((baseColor) => (
            <PickerRadioItem key={baseColor.name} value={baseColor.name}>
              {baseColor.title}
            </PickerRadioItem>
          ))}
        </PickerRadioGroup>
      </Picker>
    </div>
  );
}
