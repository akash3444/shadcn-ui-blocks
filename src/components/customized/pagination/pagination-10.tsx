import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/registry/ui/pagination";
import { ChevronsLeft, ChevronsRight } from "lucide-react";

export default function PaginationWithIconAndLabel() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationLink
            href="#"
            aria-label="Go to previous page"
            size="default"
            className="gap-1 pl-2.5"
          >
            <ChevronsLeft className="h-4 w-4" />
            <span>Previous</span>
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            aria-label="Go to next page"
            size="default"
            className="gap-1 pr-2.5"
          >
            <span>Next</span>
            <ChevronsRight className="h-4 w-4" />
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
