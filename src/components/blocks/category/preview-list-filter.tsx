import CategoryFilter from "./category-filter";
import PreviewListSearch from "./preview-list-search";
import ResetFiltersButton from "./reset-filters-button";

const PreviewListFilter = ({ numberOfBlocks }: { numberOfBlocks: number }) => {
  return (
    <div className="sticky top-14 z-20 border-y border-dashed bg-background">
      <div className="mx-auto flex max-w-(--breakpoint-2xl) items-center justify-between gap-4 px-6 py-4">
        <div className="flex min-w-0 grow items-center gap-2 sm:grow-0">
          <CategoryFilter />
          <PreviewListSearch />
          <ResetFiltersButton />
        </div>

        <p className="shrink-0 text-muted-foreground text-sm max-sm:hidden">
          <span className="font-medium text-foreground tabular-nums">
            {numberOfBlocks}
          </span>{" "}
          {numberOfBlocks === 1 ? "block" : "blocks"} found
        </p>
      </div>
    </div>
  );
};

export default PreviewListFilter;
