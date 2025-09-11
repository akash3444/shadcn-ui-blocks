"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { CircleFadingArrowUpIcon, XIcon } from "lucide-react";
import { useState } from "react";

export default function AlertWithActionsDemo() {
  const [isAlertVisible, setIsAlertVisible] = useState(true);

  const showAlert = () => {
    setIsAlertVisible(true);
  };
  const hideAlert = () => {
    setIsAlertVisible(false);
  };

  return (
    <div className="w-full">
      {isAlertVisible && (
        <Alert className="flex justify-between items-center pr-2 [&>svg+div]:translate-y-0">
          <div className="flex items-start gap-3">
            <CircleFadingArrowUpIcon className="mt-0.5 size-4" />
            <div className="flex-col justify-center">
              <AlertTitle>Update Available</AlertTitle>
              <AlertDescription>
                A new version of the app is now available.
              </AlertDescription>
            </div>
          </div>
          <Button
            size="icon"
            variant="ghost"
            className="pl-0!"
            onClick={hideAlert}
          >
            <XIcon className="h-5 w-5" />
          </Button>
        </Alert>
      )}
      {!isAlertVisible && (
        <div className="flex justify-center">
          <Button className="mt-2 mx-auto" onClick={showAlert}>
            Reopen
          </Button>
        </div>
      )}
    </div>
  );
}
