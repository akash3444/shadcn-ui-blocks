import { IconPlaceholder } from "@/components/icon-placeholder";
import { getIconProps } from "@/lib/icon-map";

export default function SpinnerDemo() {
  return <IconPlaceholder {...getIconProps("LoaderIcon")} className="animate-spin" />;
}
