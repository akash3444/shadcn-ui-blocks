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

export default function PaginationTabs() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" className="border" />
        </PaginationItem>

        {pages.map((page) => {
          const isActive = page === 2;

          return (
            <PaginationItem key={page}>
              <PaginationLink
                href={`#${page}`}
                isActive={page === 2}
                className={cn({
                  [buttonVariants({
                    variant: "default",
                    className:
                      "hover:text-primary-foreground! shadow-none! dark:bg-primary dark:hover:bg-primary/90",
                  })]: isActive,
                  border: !isActive,
                })}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        <PaginationItem>
          <PaginationNext href="#" className="border" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
