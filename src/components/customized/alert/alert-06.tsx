import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { OctagonAlertIcon } from "lucide-react";

export default function AlertWithBackgroundDemo() {
  return (
    <Alert className="bg-muted">
      <OctagonAlertIcon className="size-4" />
      <AlertTitle className="text-foreground">Something Went Wrong</AlertTitle>
      <AlertDescription className="text-foreground">
        An error occurred while processing your request.
      </AlertDescription>
    </Alert>
  );
}
