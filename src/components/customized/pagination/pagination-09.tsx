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

export default function PaginationTabsSecondary() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className="bg-secondary text-secondary-foreground"
            href="#"
          />
        </PaginationItem>

        {pages.map((page) => {
          const isActive = page === 2;

          return (
            <PaginationItem key={page}>
              <PaginationLink
                className={cn({
                  [buttonVariants({
                    variant: "default",
                    className:
                      "shadow-none! hover:text-primary-foreground! dark:bg-primary dark:hover:bg-primary/90",
                  })]: isActive,
                  "bg-secondary text-secondary-foreground": !isActive,
                })}
                href={`#${page}`}
                isActive={page === 2}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        <PaginationItem>
          <PaginationNext
            className="bg-secondary text-secondary-foreground"
            href="#"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
