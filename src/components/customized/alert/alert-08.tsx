import { Alert, AlertTitle } from "@/components/ui/alert";
import {
  CircleFadingArrowUpIcon,
  OctagonAlert,
  ShieldAlert,
} from "lucide-react";

export default function AlertCalloutDemo() {
  return (
    <div className="w-full space-y-4">
      <Alert className="bg-emerald-500/10 dark:bg-emerald-600/30 text-emerald-500 border-emerald-300 dark:border-emerald-600/70">
        <CircleFadingArrowUpIcon className="h-4 w-4" />
        <AlertTitle>Your action has been completed successfully.</AlertTitle>
      </Alert>
      <Alert className="bg-blue-500/10 dark:bg-blue-600/30 text-blue-500 border-blue-300 dark:border-blue-600/70">
        <CircleFadingArrowUpIcon className="h-4 w-4" />
        <AlertTitle>A new version of the app is now available.</AlertTitle>
      </Alert>
      <Alert className="bg-amber-500/10 dark:bg-amber-600/30 text-amber-500 border-amber-300 dark:border-amber-600/70">
        <ShieldAlert className="h-4 w-4" />
        <AlertTitle>Changes will overwrite existing data.</AlertTitle>
      </Alert>
      <Alert className="bg-destructive/10 dark:bg-destructive/20 text-destructive border-destructive/50 dark:border-destructive/70">
        <OctagonAlert className="h-4 w-4" />
        <AlertTitle>
          Unable to process your request. Please try again later.
        </AlertTitle>
      </Alert>
    </div>
  );
}
