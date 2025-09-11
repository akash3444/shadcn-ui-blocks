import { Alert, AlertTitle } from "@/components/ui/alert";
import { CircleFadingArrowUpIcon } from "lucide-react";

export default function AlertCalloutDemo() {
  return (
    <div className="w-full space-y-4">
      <Alert className="bg-blue-500/10 dark:bg-blue-500/20 border-0 border-l-4 border-l-blue-500 rounded-none">
        <CircleFadingArrowUpIcon className="h-4 w-4 text-blue-500!" />
        <AlertTitle>A new version of the app is now available.</AlertTitle>
      </Alert>
      <Alert className="bg-blue-500/10 dark:bg-blue-600/20 border-blue-300 dark:border-blue-500/60 dark:border-l-blue-500 border-l-4 border-l-blue-500 rounded-none">
        <CircleFadingArrowUpIcon className="h-4 w-4 text-blue-500!" />
        <AlertTitle>A new version of the app is now available.</AlertTitle>
      </Alert>
      <Alert className="bg-blue-500/10 dark:bg-blue-500/20 border-0 border-l-4 border-l-blue-500">
        <CircleFadingArrowUpIcon className="h-4 w-4 text-blue-500!" />
        <AlertTitle>A new version of the app is now available.</AlertTitle>
      </Alert>
      <Alert className="bg-blue-500/10 dark:bg-blue-600/20 border-blue-300 dark:border-blue-500/60 dark:border-l-blue-500 border-l-4 border-l-blue-500">
        <CircleFadingArrowUpIcon className="h-4 w-4 text-blue-500!" />
        <AlertTitle>A new version of the app is now available.</AlertTitle>
      </Alert>
    </div>
  );
}
