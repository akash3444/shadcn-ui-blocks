import { ChevronDownIcon } from "lucide-react";
import { Button } from "@/registry/ui/button";
import { ButtonGroup } from "@/registry/ui/button-group";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/ui/dropdown-menu";

const SplitButtonDemo = () => (
  <ButtonGroup>
    <Button variant="outline">Save</Button>
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button aria-label="More save options" size="icon" variant="outline" />
        }
      >
        <ChevronDownIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-44">
        <DropdownMenuItem>Save as draft</DropdownMenuItem>
        <DropdownMenuItem>Save as template</DropdownMenuItem>
        <DropdownMenuItem>Save and publish</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </ButtonGroup>
);

export default SplitButtonDemo;
