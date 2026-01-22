import { OctagonAlert, X } from "lucide-react";
import { AlertDialog as AlertDialogPrimitive } from "radix-ui";
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
import { Button, buttonVariants } from "@/registry/ui/button";

export default function AlertDialogWithCustomizedHeader() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <div className="-mx-6 -mt-3 flex items-center justify-between border-b px-6 pb-3">
          <AlertDialogTitle>Delete Account</AlertDialogTitle>
          <AlertDialogPrimitive.Cancel
            className={buttonVariants({
              variant: "ghost",
              size: "icon",
              className: "h-7! w-7!",
            })}
          >
            <X />
          </AlertDialogPrimitive.Cancel>
        </div>
        <AlertDialogHeader className="pt-2">
          <AlertDialogTitle>
            <div className="mx-auto mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-destructive/10 sm:mx-0">
              <OctagonAlert className="h-5 w-5 text-destructive" />
            </div>
            Are you absolutely sure?
          </AlertDialogTitle>
          <AlertDialogDescription className="text-[15px]">
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="mt-2">
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
