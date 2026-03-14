"use client";

import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

interface PickerProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
}

export function Picker({ trigger, children }: PickerProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className={cn(
            "relative w-full shrink-0 touch-manipulation rounded-lg p-3 ring-1 ring-border select-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none disabled:opacity-50 data-[state=open]:bg-muted text-left"
          )}
        >
          {trigger}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" side="right" className="min-w-[8rem]">
        {children}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function PickerRadioGroup({
  value,
  onValueChange,
  children,
}: {
  value: string;
  onValueChange: (value: string) => void;
  children: React.ReactNode;
}) {
  return (
    <DropdownMenuRadioGroup value={value} onValueChange={onValueChange}>
      {children}
    </DropdownMenuRadioGroup>
  );
}

export function PickerRadioItem({
  value,
  children,
}: {
  value: string;
  children: React.ReactNode;
}) {
  return (
    <DropdownMenuRadioItem value={value}>{children}</DropdownMenuRadioItem>
  );
}
