import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CircleCheckBigIcon } from "lucide-react";

export default function AlertSuccessDemo() {
  return (
    <Alert className="border-emerald-600/50 text-emerald-600 dark:border-emerald-600 [&>svg]:text-emerald-600">
      <CircleCheckBigIcon className="size-4" />
      <AlertTitle>Operation Successful</AlertTitle>
      <AlertDescription className="text-emerald-600">
        Your action has been completed successfully
      </AlertDescription>
    </Alert>
  );
}
