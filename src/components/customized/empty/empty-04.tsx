import { SearchIcon } from "lucide-react";

import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/registry/ui/empty";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/ui/input-group";

export default function EmptyWithSearchDemo() {
  return (
    <Empty className="max-w-md">
      <EmptyHeader>
        <EmptyTitle>404 - Page not found</EmptyTitle>
        <EmptyDescription>
          The page you're looking for doesn't exist or has been moved. Try
          searching for what you need.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <InputGroup className="sm:w-3/4">
          <InputGroupInput
            aria-label="Search pages"
            placeholder="Search pages..."
          />
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
        </InputGroup>
        <EmptyDescription>
          Need help? <a href="#support">Contact support</a>
        </EmptyDescription>
      </EmptyContent>
    </Empty>
  );
}
