"use client";

import { IconPlaceholder } from "@/components/icon-placeholder";
import { getIconProps } from "@/lib/icon-map";
import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/registry/ui/select";

const fruits = [
  { value: "apple", label: "Apple", icon: "AppleIcon" },
  { value: "banana", label: "Banana", icon: "BananaIcon" },
  { value: "cherry", label: "Cherry", icon: "CherryIcon" },
  { value: "grapes", label: "Grapes", icon: "GrapeIcon" },
  { value: "citrus", label: "Citrus", icon: "CitrusIcon" },
];

export default function SelectWithIconDemo() {
  const [value, setValue] = React.useState("apple");

  return (
    <Select onValueChange={setValue} value={value}>
      <SelectTrigger className="w-[180px]">
        <div className="flex items-center gap-2 [&_svg]:h-4 [&_svg]:w-4">
          <SelectValue placeholder="Select a fruit" />
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          {fruits.map((fruit) => (
            <SelectItem key={fruit.value} value={fruit.value}>
              <div className="flex items-center gap-2">
                <IconPlaceholder {...getIconProps(fruit.icon)} className="h-4 w-4" /> {fruit.label}
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
