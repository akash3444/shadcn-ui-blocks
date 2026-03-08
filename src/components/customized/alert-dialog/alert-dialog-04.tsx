import { CircleFadingArrowUp, Rocket } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/registry/ui/alert-dialog";
import { Badge } from "@/registry/ui/badge";
import { Button } from "@/registry/ui/button";

export default function AlertDialogInfo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="sm:max-w-lg!">
        <AlertDialogHeader>
          <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 sm:mx-0">
            <CircleFadingArrowUp className="h-[18px] w-[18px] text-primary" />
          </div>
          <AlertDialogTitle className="font-semibold text-2xl tracking-[-0.015em]">
            New Software Update Available
          </AlertDialogTitle>
          <AlertDialogDescription className="text-[15px]">
            A new software update is available for your device. Please update to
            the latest version to continue using the app.
          </AlertDialogDescription>
          <div className="mt-6! flex flex-wrap gap-2">
            <Badge variant="outline">Faster Performance</Badge>
            <Badge variant="outline">Advanced Blocks</Badge>
            <Badge variant="outline">Customized Components</Badge>
            <Badge variant="outline">UI Revamp</Badge>
            <Badge variant="outline">Security Improvements</Badge>
            <Badge variant="outline">Other Improvements</Badge>
            <Badge variant="outline">Bug Fixes</Badge>
            <Badge variant="outline">+ much more</Badge>
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter className="mt-4">
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>
            <Rocket /> Update Now
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
