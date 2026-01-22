"use client";
import { ChevronDown, ChevronsUp, ChevronUp, Equal } from "lucide-react";
import { useState } from "react";
import { Button } from "@/registry/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/ui/dropdown-menu";

export default function DropdownMenuWithRadioGroup() {
  const [priority, setPriority] = useState("highest");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Set Priority</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-44">
        <DropdownMenuLabel>Set Priority</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup onValueChange={setPriority} value={priority}>
          <DropdownMenuRadioItem value="highest">
            <ChevronsUp className="mr-2 h-4 w-4 text-destructive" /> Highest
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="high">
            <ChevronUp className="mr-2 h-4 w-4 text-orange-500" /> High
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="medium">
            <Equal className="mr-2 h-4 w-4 text-yellow-500" /> Medium
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="low">
            <ChevronDown className="mr-2 h-4 w-4 text-green-600" /> Low
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
