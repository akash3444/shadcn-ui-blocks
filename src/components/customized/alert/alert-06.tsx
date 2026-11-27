import { CircleCheckIcon } from "lucide-react";
import { Alert, AlertTitle } from "@/registry/ui/alert";

export default function AlertTitleOnlyDemo() {
  return (
    <Alert className="max-w-sm">
      <CircleCheckIcon />
      <AlertTitle>Your changes have been saved.</AlertTitle>
    </Alert>
  );
}
