import { IconPlaceholder } from "@/components/icon-placeholder";
import { getIconProps } from "@/lib/icon-map";
import { Alert, AlertDescription, AlertTitle } from "@/registry/ui/alert";

export default function DestructiveAlertDemo() {
  return (
    <Alert variant="destructive">
      <IconPlaceholder {...getIconProps("OctagonAlertIcon")} className="size-4" />
      <AlertTitle>Something Went Wrong</AlertTitle>
      <AlertDescription>
        An error occurred while processing your request.
      </AlertDescription>
    </Alert>
  );
}
