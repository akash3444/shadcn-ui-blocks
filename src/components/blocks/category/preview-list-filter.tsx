import CategoryFilter from "./category-filter";
import PreviewListSearch from "./preview-list-search";

const PreviewListFilter = ({ numberOfBlocks }: { numberOfBlocks: number }) => {
  return (
    <div className="flex items-center justify-between rounded-lg border border-border/50 bg-muted py-2 ps-2 pe-4">
      <div className="flex items-end gap-3">
        <CategoryFilter />
        <PreviewListSearch />
      </div>
      <p className="text-muted-foreground text-sm max-sm:hidden">
        <span className="font-medium text-foreground">{numberOfBlocks}</span>{" "}
        {numberOfBlocks === 1 ? "block" : "blocks"} found
      </p>
    </div>
  );
};

export default PreviewListFilter;
