import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/registry/ui/pagination";

export default function PaginationNumberless() {
  return (
    <div className="w-full max-w-xs">
      <Pagination className="w-full">
        <PaginationContent className="w-full justify-between">
          <PaginationItem>
            <PaginationPrevious className="border" href="#" />
          </PaginationItem>
          <PaginationItem>
            <span className="text-muted-foreground text-sm">Page 1 of 21</span>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext className="border" href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
