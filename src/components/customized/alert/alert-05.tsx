import { CircleAlertIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/registry/ui/alert";

const errors = [
  "Password must be at least 8 characters.",
  "Password must include a number.",
  "Email address is already in use.",
];

export default function AlertWithListDemo() {
  return (
    <Alert className="max-w-sm" variant="destructive">
      <CircleAlertIcon />
      <AlertTitle>Unable to create your account</AlertTitle>
      <AlertDescription className="mt-1">
        Please fix the following issues:
        <ul className="mt-1 list-disc pl-5">
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      </AlertDescription>
    </Alert>
  );
}
