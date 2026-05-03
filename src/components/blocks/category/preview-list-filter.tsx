import CategoryFilter from "./category-filter";
import PreviewListSearch from "./preview-list-search";
import ResetFiltersButton from "./reset-filters-button";

const PreviewListFilter = ({ numberOfBlocks }: { numberOfBlocks: number }) => {
  return (
    <div className="flex justify-between gap-2 max-sm:flex-col">
      <div className="flex items-center gap-1 rounded-xl border border-border/70 bg-muted/50 p-1">
        <CategoryFilter />
        <PreviewListSearch />
        <ResetFiltersButton />
      </div>

      <div className="flex grow items-center gap-2 rounded-xl border border-border/70 bg-muted/50 px-4 max-sm:hidden">
        <p className="ms-auto text-muted-foreground text-sm">
          <span className="font-medium text-foreground">{numberOfBlocks}</span>{" "}
          {numberOfBlocks === 1 ? "block" : "blocks"} found
        </p>
      </div>
    </div>
  );
};

export default PreviewListFilter;
