import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/registry/ui/pagination";

export default function PaginationDemo() {
  return (
    <div className="max-w-xs w-full flex items-center justify-between gap-3">
      <p className="flex-1 text-sm text-muted-foreground whitespace-nowrap">
        Showing 5 results
      </p>

      <Pagination className="justify-end">
        <PaginationContent className="gap-0 border rounded-lg divide-x overflow-hidden">
          <PaginationItem>
            <PaginationPrevious
              href="#"
              className="rounded-none *:[span]:hidden"
              size="icon-sm"
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              href="#"
              className="rounded-none *:[span]:hidden"
              size="icon-sm"
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
