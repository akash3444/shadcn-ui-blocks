"use client";

import * as React from "react";
import { iconLibraries, type IconLibraryName } from "@/registry/config";
import { Picker, PickerRadioGroup, PickerRadioItem } from "@/components/customizer/picker";
import { useDesignSystemSearchParams } from "@/app/(components)/lib/search-params";

export function IconLibraryPicker() {
  const [params, setParams] = useDesignSystemSearchParams();
  const currentIconLibrary = iconLibraries[
    params.iconLibrary as keyof typeof iconLibraries
  ];

  return (
    <div className="group/picker relative">
      <Picker
        trigger={
          <>
            <div className="flex flex-col justify-start text-left">
              <div className="text-muted-foreground text-xs">Icon Library</div>
              <div className="font-medium text-foreground text-sm">
                {currentIconLibrary?.title}
              </div>
            </div>
            <div className="pointer-events-none absolute top-1/2 right-4 flex size-4 -translate-y-1/2 items-center justify-center text-foreground">
              <LucideIcon className="size-4" />
            </div>
          </>
        }
      >
        <PickerRadioGroup
          value={currentIconLibrary?.name ?? ""}
          onValueChange={(value) =>
            setParams({ iconLibrary: value as IconLibraryName })
          }
        >
          {Object.values(iconLibraries).map((iconLibrary) => (
            <PickerRadioItem key={iconLibrary.name} value={iconLibrary.name}>
              {iconLibrary.title}
            </PickerRadioItem>
          ))}
        </PickerRadioGroup>
      </Picker>
    </div>
  );
}

function LucideIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M14 12a4 4 0 0 0-8 0 8 8 0 1 0 16 0 11.97 11.97 0 0 0-4-8.944" />
      <path d="M10 12a4 4 0 0 0 8 0 8 8 0 1 0-16 0 11.97 11.97 0 0 0 4.063 9" />
    </svg>
  );
}
