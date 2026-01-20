"use client";

import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Checkbox } from "@/registry/ui/checkbox";

export default function Checkbox14() {
  return (
    <div>
      <Label className="font-medium ps-1">Countries</Label>
      <div className="bg-muted/30 mt-2.5 border rounded-lg">
        <ScrollArea className="h-60">
          <div className="p-4 space-y-2">
            {countries.map((country, index) => (
              <label
                key={country.value}
                htmlFor={country.value}
                className="flex items-center justify-between gap-6"
              >
                <span className="text-sm">
                  {country.flag}&nbsp;&nbsp;{country.label}
                </span>
                <Checkbox
                  value={country.value}
                  id={country.value}
                  defaultChecked={index < 3}
                  className="bg-background"
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
