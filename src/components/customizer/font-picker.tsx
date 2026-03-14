"use client";

import * as React from "react";
import { type FontValue } from "@/registry/config";
import {
  Picker,
  PickerRadioGroup,
  PickerRadioItem,
} from "@/components/customizer/picker";
import {
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { useDesignSystemSearchParams } from "@/app/(components)/lib/search-params";
import type { Font } from "@/app/(components)/lib/fonts";

function groupFontsByType(fonts: readonly Font[]) {
  const groups = new Map<Font["type"], Font[]>();
  for (const font of fonts) {
    const existing = groups.get(font.type);
    if (existing) existing.push(font);
    else groups.set(font.type, [font]);
  }
  return Array.from(groups.entries()).map(([type, items]) => ({
    type,
    label: `${type.charAt(0).toUpperCase()}${type.slice(1)}`,
    items,
  }));
}

export function FontPicker({
  fonts,
}: {
  fonts: readonly Font[];
}) {
  const [params, setParams] = useDesignSystemSearchParams();
  const currentFont = fonts.find((font) => font.value === params.font);
  const groupedFonts = React.useMemo(() => groupFontsByType(fonts), [fonts]);

  return (
    <div className="group/picker relative">
      <Picker
        trigger={
          <>
            <div className="flex flex-col justify-start text-left">
              <div className="text-muted-foreground text-xs">Font</div>
              <div className="font-medium text-foreground text-sm">
                {currentFont?.name}
              </div>
            </div>
            <div
              className="pointer-events-none absolute top-1/2 right-4 flex size-4 -translate-y-1/2 items-center justify-center text-foreground"
              style={{ fontFamily: currentFont?.font.style.fontFamily }}
            >
              Aa
            </div>
          </>
        }
      >
        <PickerRadioGroup
          value={currentFont?.value ?? ""}
          onValueChange={(value) => setParams({ font: value as FontValue })}
        >
          {groupedFonts.map((group, index) => (
            <React.Fragment key={group.type}>
              {index > 0 && <DropdownMenuSeparator />}
              <DropdownMenuLabel className="text-muted-foreground text-xs font-normal">
                {group.label}
              </DropdownMenuLabel>
              {group.items.map((font) => (
                <PickerRadioItem key={font.value} value={font.value}>
                  {font.name}
                </PickerRadioItem>
              ))}
            </React.Fragment>
          ))}
        </PickerRadioGroup>
      </Picker>
    </div>
  );
}
