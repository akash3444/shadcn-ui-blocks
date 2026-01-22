"use client";

import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Checkbox } from "@/registry/ui/checkbox";

export default function Checkbox14() {
  return (
    <div>
      <Label className="ps-1 font-medium">Countries</Label>
      <div className="mt-2.5 rounded-lg border bg-muted/30">
        <ScrollArea className="h-60">
          <div className="space-y-2 p-4">
            {countries.map((country, index) => (
              <label
                className="flex items-center justify-between gap-6"
                htmlFor={country.value}
                key={country.value}
              >
                <span className="text-sm">
                  {country.flag}&nbsp;&nbsp;{country.label}
                </span>
                <Checkbox
                  className="bg-background"
                  defaultChecked={index < 3}
                  id={country.value}
                  value={country.value}
                />
              </label>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
const countries = [
  { label: "United States", value: "us", flag: "🇺🇸" },
  { label: "Canada", value: "ca", flag: "🇨🇦" },
  { label: "United Kingdom", value: "uk", flag: "🇬🇧" },
  { label: "Germany", value: "de", flag: "🇩🇪" },
  { label: "France", value: "fr", flag: "🇫🇷" },
  { label: "Japan", value: "jp", flag: "🇯🇵" },
  { label: "Australia", value: "au", flag: "🇦🇺" },
  { label: "Brazil", value: "br", flag: "🇧🇷" },
  { label: "India", value: "in", flag: "🇮🇳" },
  { label: "China", value: "cn", flag: "🇨🇳" },
  { label: "South Korea", value: "kr", flag: "🇰🇷" },
  { label: "Italy", value: "it", flag: "🇮🇹" },
  { label: "Spain", value: "es", flag: "🇪🇸" },
  { label: "Netherlands", value: "nl", flag: "🇳🇱" },
  { label: "Sweden", value: "se", flag: "🇸🇪" },
  { label: "Norway", value: "no", flag: "🇳🇴" },
  { label: "Switzerland", value: "ch", flag: "🇨🇭" },
  { label: "Mexico", value: "mx", flag: "🇲🇽" },
  { label: "Argentina", value: "ar", flag: "🇦🇷" },
  { label: "South Africa", value: "za", flag: "🇿🇦" },
];
