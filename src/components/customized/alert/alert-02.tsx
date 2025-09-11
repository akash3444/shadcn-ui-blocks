import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { OctagonAlertIcon } from "lucide-react";

export default function DestructiveAlertDemo() {
  return (
    <Alert variant="destructive">
      <OctagonAlertIcon className="size-4" />
      <AlertTitle>Something Went Wrong</AlertTitle>
      <AlertDescription>
        An error occurred while processing your request.
      </AlertDescription>
    </Alert>
  );
}
