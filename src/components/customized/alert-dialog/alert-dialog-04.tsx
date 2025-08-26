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
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CircleFadingArrowUp, Rocket } from "lucide-react";

export default function AlertDialogInfo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="mx-auto sm:mx-0 mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
            <CircleFadingArrowUp className="h-[18px] w-[18px] text-primary" />
          </div>
          <AlertDialogTitle className="text-2xl font-bold tracking-tight">
            New Software Update Available
          </AlertDialogTitle>
          <AlertDialogDescription className="mt-3! text-[15px]">
            A new software update is available for your device. Please update to
            the latest version to continue using the app.
          </AlertDialogDescription>
          <div className="mt-6! flex flex-wrap gap-2">
            <Badge variant="outline" className="py-1">
              Faster Performance
            </Badge>
            <Badge variant="outline" className="py-1">
              Advanced Blocks
            </Badge>
            <Badge variant="outline" className="py-1">
              Customized Components
            </Badge>
            <Badge variant="outline" className="py-1">
              UI Revamp
            </Badge>
            <Badge variant="outline" className="py-1">
              Security Improvements
            </Badge>
            <Badge variant="outline" className="py-1">
              Other Improvements
            </Badge>
            <Badge variant="outline" className="py-1">
              Bug Fixes
            </Badge>
            <Badge variant="outline" className="py-1">
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
