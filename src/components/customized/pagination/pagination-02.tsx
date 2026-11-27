import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/registry/ui/pagination";

const currentPage = 3;
const totalPages = 10;

export default function PaginationCompactDemo() {
  return (
    <Pagination>
      <PaginationContent className="gap-3">
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem className="text-muted-foreground text-sm tabular-nums">
          Page{" "}
          <span className="font-medium text-foreground">{currentPage}</span> of{" "}
          <span className="font-medium text-foreground">{totalPages}</span>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
