"use client";

import * as React from "react";
import { type Style, type StyleName } from "@/registry/config";
import { Picker, PickerRadioGroup, PickerRadioItem } from "@/components/customizer/picker";
import { useDesignSystemSearchParams } from "@/app/(components)/lib/search-params";

export function StylePicker({
  styles,
}: {
  styles: readonly Style[];
}) {
  const [params, setParams] = useDesignSystemSearchParams();
  const currentStyle = styles.find((style) => style.name === params.style);

  return (
    <div className="group/picker relative">
      <Picker
        trigger={
          <>
            <div className="flex flex-col justify-start text-left">
              <div className="text-muted-foreground text-xs">Style</div>
              <div className="font-medium text-foreground text-sm">
                {currentStyle?.title}
              </div>
            </div>
            {currentStyle?.icon && (
              <div className="pointer-events-none absolute top-1/2 right-4 flex size-4 -translate-y-1/2 items-center justify-center select-none [&_svg]:size-4">
                {currentStyle.icon}
              </div>
            )}
          </>
        }
      >
        <PickerRadioGroup
          value={currentStyle?.name ?? ""}
          onValueChange={(value) => setParams({ style: value as StyleName })}
        >
          {styles.map((style) => (
            <PickerRadioItem value={style.name} key={style.name}>
              {style.title}
            </PickerRadioItem>
          ))}
        </PickerRadioGroup>
      </Picker>
    </div>
  );
}
