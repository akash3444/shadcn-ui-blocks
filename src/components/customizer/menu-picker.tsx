"use client";

import { MENU_COLORS, type MenuColorValue } from "@/registry/config";
import { Picker, PickerRadioGroup, PickerRadioItem } from "@/components/customizer/picker";
import { useDesignSystemSearchParams } from "@/app/(components)/lib/search-params";

export function MenuColorPicker() {
  const [params, setParams] = useDesignSystemSearchParams();
  const currentMenu = MENU_COLORS.find(
    (menu) => menu.value === params.menuColor
  );

  return (
    <div className="group/picker relative">
      <Picker
        trigger={
          <>
            <div className="flex flex-col justify-start text-left">
              <div className="text-muted-foreground text-xs">Menu Color</div>
              <div className="font-medium text-foreground text-sm">
                {currentMenu?.label}
              </div>
            </div>
          </>
        }
      >
        <PickerRadioGroup
          value={currentMenu?.value ?? ""}
          onValueChange={(value) =>
            setParams({ menuColor: value as MenuColorValue })
          }
        >
          {MENU_COLORS.map((menu) => (
            <PickerRadioItem key={menu.value} value={menu.value}>
              {menu.label}
            </PickerRadioItem>
          ))}
        </PickerRadioGroup>
      </Picker>
    </div>
  );
}
