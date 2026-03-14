import { IconPlaceholder } from "@/components/icon-placeholder";
import { getIconProps } from "@/lib/icon-map";

export default function SpinnerSizesDemo() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <IconPlaceholder {...getIconProps("Loader2Icon")} className="h-4 w-4 animate-spin" />
      <IconPlaceholder {...getIconProps("Loader2Icon")} className="h-5 w-5 animate-spin" />
      <IconPlaceholder {...getIconProps("Loader2Icon")} className="h-6 w-6 animate-spin" />
      <IconPlaceholder {...getIconProps("Loader2Icon")} className="h-8 w-8 animate-spin" />
    </div>
  );
}
