import { IconPlaceholder } from "@/components/icon-placeholder";
import { getIconProps } from "@/lib/icon-map";

export default function SpinnerColorsDemo() {
  return (
    <div className="flex flex-wrap gap-4">
      <IconPlaceholder {...getIconProps("Loader2Icon")} className="animate-spin" />
      <IconPlaceholder {...getIconProps("Loader2Icon")} className="animate-spin text-green-500" />
      <IconPlaceholder {...getIconProps("Loader2Icon")} className="animate-spin text-indigo-500" />
      <IconPlaceholder {...getIconProps("Loader2Icon")} className="animate-spin text-rose-500" />
    </div>
  );
}
