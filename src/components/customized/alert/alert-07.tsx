import {
  CircleFadingArrowUpIcon,
  OctagonAlert,
  ShieldAlert,
} from "lucide-react";
import { Alert, AlertTitle } from "@/registry/ui/alert";

export default function AlertCalloutDemo() {
  return (
    <div className="w-full space-y-4">
      <Alert className="border-none bg-emerald-600/10 text-emerald-500 dark:bg-emerald-600/15">
        <CircleFadingArrowUpIcon className="size-4" />
        <AlertTitle>Your action has been completed successfully.</AlertTitle>
      </Alert>
      <Alert className="border-none bg-blue-500/10 text-blue-500 dark:bg-blue-600/20">
        <CircleFadingArrowUpIcon className="size-4" />
        <AlertTitle>A new version of the app is now available.</AlertTitle>
      </Alert>
      <Alert className="border-none bg-amber-600/10 text-amber-500 dark:bg-amber-600/15">
        <ShieldAlert className="size-4" />
        <AlertTitle>Changes will overwrite existing data.</AlertTitle>
      </Alert>
      <Alert className="border-none bg-destructive/10 text-destructive dark:bg-destructive/15">
        <OctagonAlert className="size-4" />
        <AlertTitle>
          Unable to process your request. Please try again later.
        </AlertTitle>
      </Alert>
    </div>
  );
}
