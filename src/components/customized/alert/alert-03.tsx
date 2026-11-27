import { CircleFadingArrowUpIcon } from "lucide-react";
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/registry/ui/alert";
import { Button } from "@/registry/ui/button";

export default function AlertWithActionDemo() {
  return (
    <Alert>
      <CircleFadingArrowUpIcon />
      <AlertTitle>Update available</AlertTitle>
      <AlertDescription>
        A new version of the app is now available.
      </AlertDescription>
      <AlertAction>
        <Button size="xs">Update</Button>
      </AlertAction>
    </Alert>
  );
}
