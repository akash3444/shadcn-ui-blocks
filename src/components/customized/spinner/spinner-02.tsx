import { IconPlaceholder } from "@/components/icon-placeholder";
import { getIconProps } from "@/lib/icon-map";

export default function SpinnerCircleDemo() {
  return <IconPlaceholder {...getIconProps("Loader2Icon")} className="animate-spin" />;
}
