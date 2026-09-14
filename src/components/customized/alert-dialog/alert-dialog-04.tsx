import { CircleCheckIcon, CircleFadingArrowUp } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/registry/ui/alert-dialog";
import { Button } from "@/registry/ui/button";

export default function AlertDialogInfo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogMedia>
            <CircleFadingArrowUp />
          </AlertDialogMedia>
          <AlertDialogTitle>Update available</AlertDialogTitle>
          <AlertDialogDescription>
            Install version 2.4 to get the latest improvements.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="mx-auto flex max-w-max flex-col gap-2 text-sm">
          <div className="flex items-center gap-2">
            <CircleCheckIcon className="size-4 shrink-0 fill-muted text-muted-foreground" />
            Faster performance
          </div>
          <div className="flex items-center gap-2">
            <CircleCheckIcon className="size-4 shrink-0 fill-muted text-muted-foreground" />
            Refreshed interface
          </div>
          <div className="flex items-center gap-2">
            <CircleCheckIcon className="size-4 shrink-0 fill-muted text-muted-foreground" />
            Security and stability fixes
          </div>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Later</AlertDialogCancel>
          <AlertDialogAction>Update now</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
