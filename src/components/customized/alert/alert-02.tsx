import { CircleAlertIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/registry/ui/alert";

export default function AlertDestructiveDemo() {
  return (
    <Alert className="max-w-sm" variant="destructive">
      <CircleAlertIcon />
      <AlertTitle>Payment failed</AlertTitle>
      <AlertDescription>
        Your card was declined. Please update your billing details.
      </AlertDescription>
    </Alert>
  );
}
