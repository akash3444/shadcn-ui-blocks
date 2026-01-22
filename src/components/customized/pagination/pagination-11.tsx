import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/registry/ui/pagination";

export default function PaginationNumberless() {
  return (
    <Pagination>
      <PaginationContent className="gap-0 divide-x overflow-hidden rounded-lg border">
        <PaginationItem>
          <PaginationPrevious className="rounded-none" href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext className="rounded-none" href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
