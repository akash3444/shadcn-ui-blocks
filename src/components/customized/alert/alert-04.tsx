import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangleIcon } from "lucide-react";

export default function AlertWarningDemo() {
  return (
    <Alert className="border-amber-500/50 text-amber-500 dark:border-amber-500 [&>svg]:text-amber-500">
      <AlertTriangleIcon className="size-4" />
      <AlertTitle>Proceed with Caution</AlertTitle>
      <AlertDescription className="text-amber-500">
        This action might have unintended consequences.
      </AlertDescription>
    </Alert>
  );
}
