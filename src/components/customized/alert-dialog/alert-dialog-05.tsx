"use client";

import { useState } from "react";
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
import { Button } from "@/registry/ui/button";
import { Field, FieldLabel } from "@/registry/ui/field";
import { Input } from "@/registry/ui/input";

const PROJECT_NAME = "acme-web";

export default function AlertDialogConfirmWithInputDemo() {
  const [confirmation, setConfirmation] = useState("");
  const isConfirmed = confirmation === PROJECT_NAME;

  return (
    <AlertDialog onOpenChange={() => setConfirmation("")}>
      <AlertDialogTrigger render={<Button variant="outline" />}>
        Delete Project
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete project?</AlertDialogTitle>
          <AlertDialogDescription>
            This permanently deletes the {PROJECT_NAME} project and all of its
            deployments. This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <Field>
          <FieldLabel htmlFor="confirm-project-name">
            Type {PROJECT_NAME} to confirm
          </FieldLabel>
          <Input
            autoComplete="off"
            id="confirm-project-name"
            onChange={(event) => setConfirmation(event.target.value)}
            placeholder={PROJECT_NAME}
            value={confirmation}
          />
        </Field>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction disabled={!isConfirmed} variant="destructive">
            Delete project
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
