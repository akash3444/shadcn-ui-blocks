import { cn } from "@/lib/utils";
import { buttonVariants } from "@/registry/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/registry/ui/pagination";

const pages = [1, 2, 3];

export default function PaginationBordered() {
  return (
    <Pagination>
      <PaginationContent className="gap-0 divide-x overflow-hidden rounded-lg border">
        <PaginationItem>
          <PaginationPrevious className="rounded-none" href="#" />
        </PaginationItem>
        {pages.map((page) => {
          const isActive = page === 2;

          return (
            <PaginationItem key={page}>
              <PaginationLink
                className={cn(
                  {
                    [buttonVariants({
                      variant: "default",
                      className:
                        "hover:text-primary-foreground! dark:bg-primary dark:hover:bg-primary/90",
                    })]: isActive,
                  },
                  "rounded-none border-none"
                )}
                href={`#${page}`}
                isActive={isActive}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          );
        })}
        <PaginationItem>
          <PaginationNext className="rounded-none" href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
