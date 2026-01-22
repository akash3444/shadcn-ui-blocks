import { CircleFadingArrowUpIcon } from "lucide-react";
import { Alert, AlertTitle } from "@/registry/ui/alert";

export default function AlertCalloutDemo() {
  return (
    <div className="w-full space-y-4">
      <Alert className="rounded-none border-0 border-l-4 border-l-blue-500 bg-blue-500/10 dark:bg-blue-500/20">
        <CircleFadingArrowUpIcon className="h-4 w-4 text-blue-500!" />
        <AlertTitle>A new version of the app is now available.</AlertTitle>
      </Alert>
      <Alert className="rounded-none border-blue-300 border-l-4 border-l-blue-500 bg-blue-500/10 dark:border-blue-500/60 dark:border-l-blue-500 dark:bg-blue-600/20">
        <CircleFadingArrowUpIcon className="h-4 w-4 text-blue-500!" />
        <AlertTitle>A new version of the app is now available.</AlertTitle>
      </Alert>
      <Alert className="border-0 border-l-4 border-l-blue-500 bg-blue-500/10 dark:bg-blue-500/20">
        <CircleFadingArrowUpIcon className="h-4 w-4 text-blue-500!" />
        <AlertTitle>A new version of the app is now available.</AlertTitle>
      </Alert>
      <Alert className="border-blue-300 border-l-4 border-l-blue-500 bg-blue-500/10 dark:border-blue-500/60 dark:border-l-blue-500 dark:bg-blue-600/20">
        <CircleFadingArrowUpIcon className="h-4 w-4 text-blue-500!" />
        <AlertTitle>A new version of the app is now available.</AlertTitle>
      </Alert>
    </div>
  );
}
