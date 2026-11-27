import { SearchIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/ui/input-group";

export default function InputWithIconDemo() {
  return (
    <InputGroup className="max-w-xs">
      <InputGroupInput
        aria-label="Search"
        placeholder="Search..."
        type="search"
      />
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
    </InputGroup>
  );
}
