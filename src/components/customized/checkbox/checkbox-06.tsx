"use client";

import type { Checkbox as CheckboxPrimitive } from "radix-ui";
import { useState } from "react";
import { Checkbox } from "@/registry/ui/checkbox";

export default function ControlledCheckboxDemo() {
  const [checked, setChecked] = useState<CheckboxPrimitive.CheckedState>(false);

  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        checked={checked}
        id="terms-controlled"
        onCheckedChange={setChecked}
      />
      <label
        className="font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        htmlFor="terms-controlled"
      >
        Accept terms and conditions
      </label>
    </div>
  );
}
