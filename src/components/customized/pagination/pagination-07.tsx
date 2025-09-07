import { buttonVariants } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

const pages = [1, 2, 3];

export default function PaginationBordered() {
  return (
    <Pagination>
      <PaginationContent className="gap-0 border rounded-lg divide-x overflow-hidden">
        <PaginationItem>
          <PaginationPrevious href="#" className="rounded-none" />
        </PaginationItem>
        {pages.map((page) => {
          const isActive = page === 2;

          return (
            <PaginationItem key={page}>
              <PaginationLink
                href={`#${page}`}
                className={cn(
                  {
                    [buttonVariants({
                      variant: "default",
                      className:
                        "dark:bg-primary dark:hover:bg-primary/90 hover:text-primary-foreground!",
                    })]: isActive,
                  },
                  "rounded-none border-none"
                )}
                isActive={isActive}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          );
        })}
        <PaginationItem>
          <PaginationNext href="#" className="rounded-none" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
