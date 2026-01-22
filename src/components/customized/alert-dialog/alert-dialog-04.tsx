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
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="mx-auto mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 sm:mx-0">
            <CircleFadingArrowUp className="h-[18px] w-[18px] text-primary" />
          </div>
          <AlertDialogTitle className="font-bold text-2xl tracking-tight">
            New Software Update Available
          </AlertDialogTitle>
          <AlertDialogDescription className="mt-3! text-[15px]">
            A new software update is available for your device. Please update to
            the latest version to continue using the app.
          </AlertDialogDescription>
          <div className="mt-6! flex flex-wrap gap-2">
            <Badge className="py-1" variant="outline">
              Faster Performance
            </Badge>
            <Badge className="py-1" variant="outline">
              Advanced Blocks
            </Badge>
            <Badge className="py-1" variant="outline">
              Customized Components
            </Badge>
            <Badge className="py-1" variant="outline">
              UI Revamp
            </Badge>
            <Badge className="py-1" variant="outline">
              Security Improvements
            </Badge>
            <Badge className="py-1" variant="outline">
              Other Improvements
            </Badge>
            <Badge className="py-1" variant="outline">
              Bug Fixes
            </Badge>
            <Badge className="py-1" variant="outline">
              + much more
            </Badge>
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
