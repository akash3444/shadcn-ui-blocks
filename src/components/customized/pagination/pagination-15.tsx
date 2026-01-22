import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/registry/ui/pagination";

export default function PaginationDemo() {
  return (
    <div className="flex w-full max-w-xs items-center justify-between gap-3">
      <p className="flex-1 whitespace-nowrap text-muted-foreground text-sm">
        Showing 5 results
      </p>

      <Pagination className="justify-end">
        <PaginationContent className="gap-0 divide-x overflow-hidden rounded-lg border">
          <PaginationItem>
            <PaginationPrevious
              className="rounded-none *:[span]:hidden"
              href="#"
              size="icon-sm"
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              className="rounded-none *:[span]:hidden"
              href="#"
              size="icon-sm"
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
