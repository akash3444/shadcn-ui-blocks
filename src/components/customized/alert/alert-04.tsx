import { TriangleAlertIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/registry/ui/alert";

export default function AlertWarningDemo() {
  return (
    <Alert className="max-w-sm text-amber-600 *:data-[slot=alert-description]:text-amber-600/90 dark:text-amber-500 dark:*:data-[slot=alert-description]:text-amber-500/90">
      <TriangleAlertIcon />
      <AlertTitle>Storage almost full</AlertTitle>
      <AlertDescription>
        You have used 90% of your storage. Upgrade your plan to avoid
        interruptions.
      </AlertDescription>
    </Alert>
  );
}
