import { IconPlaceholder } from "@/components/icon-placeholder";
import { getIconProps } from "@/lib/icon-map";

export default function SpinnerPinwheelDemo() {
  return <IconPlaceholder {...getIconProps("LoaderPinwheel")} className="animate-spin" />;
}
