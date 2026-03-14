import { IconPlaceholder } from "@/components/icon-placeholder";
import { getIconProps } from "@/lib/icon-map";
import { Alert, AlertDescription, AlertTitle } from "@/registry/ui/alert";

export default function AlertDemo() {
  return (
    <Alert>
      <IconPlaceholder {...getIconProps("CircleFadingArrowUpIcon")} className="size-4" />
      <AlertTitle>Update Available</AlertTitle>
      <AlertDescription>
        A new version of the app is now available.
      </AlertDescription>
    </Alert>
  );
}
