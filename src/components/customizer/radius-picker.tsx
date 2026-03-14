"use client";

import { RADII, type RadiusValue } from "@/registry/config";
import { Picker, PickerRadioGroup, PickerRadioItem } from "@/components/customizer/picker";
import { useDesignSystemSearchParams } from "@/app/(components)/lib/search-params";

export function RadiusPicker() {
  const [params, setParams] = useDesignSystemSearchParams();
  const isRadiusLocked = params.style === "lyra";
  const selectedRadiusName = isRadiusLocked ? "none" : params.radius;
  const currentRadius = RADII.find(
    (radius) => radius.name === selectedRadiusName
  );

  return (
    <div className="group/picker relative">
      <Picker
        trigger={
          <>
            <div className="flex flex-col justify-start text-left">
              <div className="text-muted-foreground text-xs">Radius</div>
              <div className="font-medium text-foreground text-sm">
                {currentRadius?.label}
              </div>
            </div>
            <div className="pointer-events-none absolute top-1/2 right-4 flex size-4 -translate-y-1/2 rotate-90 items-center justify-center text-foreground">
              <RadiusIcon className="size-4" />
            </div>
          </>
        }
      >
        <PickerRadioGroup
          value={currentRadius?.name ?? ""}
          onValueChange={(value) => {
            if (!isRadiusLocked) {
              setParams({ radius: value as RadiusValue });
            }
          }}
        >
          {RADII.map((radius) => (
            <PickerRadioItem key={radius.name} value={radius.name}>
              {radius.label}
            </PickerRadioItem>
          ))}
        </PickerRadioGroup>
      </Picker>
    </div>
  );
}

function RadiusIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 20v-5C4 8.925 8.925 4 15 4h5"
      />
    </svg>
  );
}
