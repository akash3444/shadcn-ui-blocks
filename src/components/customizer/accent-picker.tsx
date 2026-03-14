"use client";

import { MENU_ACCENTS, type MenuAccentValue } from "@/registry/config";
import { Picker, PickerRadioGroup, PickerRadioItem } from "@/components/customizer/picker";
import { useDesignSystemSearchParams } from "@/app/(components)/lib/search-params";

export function MenuAccentPicker() {
  const [params, setParams] = useDesignSystemSearchParams();
  const currentAccent = MENU_ACCENTS.find(
    (accent) => accent.value === params.menuAccent
  );

  return (
    <div className="group/picker relative">
      <Picker
        trigger={
          <>
            <div className="flex flex-col justify-start text-left">
              <div className="text-muted-foreground text-xs">Menu Accent</div>
              <div className="font-medium text-foreground text-sm">
                {currentAccent?.label}
              </div>
            </div>
          </>
        }
      >
        <PickerRadioGroup
          value={currentAccent?.value ?? ""}
          onValueChange={(value) =>
            setParams({ menuAccent: value as MenuAccentValue })
          }
        >
          {MENU_ACCENTS.map((accent) => (
            <PickerRadioItem key={accent.value} value={accent.value}>
              {accent.label}
            </PickerRadioItem>
          ))}
        </PickerRadioGroup>
      </Picker>
    </div>
  );
}
