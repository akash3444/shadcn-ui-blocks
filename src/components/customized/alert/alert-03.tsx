import { CircleCheckIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/registry/ui/alert";

export default function AlertSuccessDemo() {
  return (
    <Alert className="max-w-sm text-emerald-600 *:data-[slot=alert-description]:text-emerald-600/90 dark:text-emerald-500 dark:*:data-[slot=alert-description]:text-emerald-500/90">
      <CircleCheckIcon />
      <AlertTitle>Payment received</AlertTitle>
      <AlertDescription>
        Your subscription is active. A receipt has been sent to your email.
      </AlertDescription>
    </Alert>
  );
}
