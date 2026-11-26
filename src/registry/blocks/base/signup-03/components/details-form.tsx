"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/registry/bases/base/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/registry/bases/base/ui/field";
import { Input } from "@/registry/bases/base/ui/input";

const formSchema = z.object({
  name: z.string().trim().min(1, "Enter your name."),
  email: z.string().email("Enter a valid email address."),
});

export type DetailsValues = z.infer<typeof formSchema>;

interface DetailsFormProps {
  defaultValues: DetailsValues;
  onSubmit: (values: DetailsValues) => void;
}

export const DetailsForm = ({ defaultValues, onSubmit }: DetailsFormProps) => {
  const form = useForm<DetailsValues>({
    defaultValues,
    resolver: zodResolver(formSchema),
  });

  // Coming back from the code step, put focus back on the email to edit.
  useEffect(() => {
    if (defaultValues.email) {
      form.setFocus("email");
    }
  }, [defaultValues.email, form]);

  return (
    <form noValidate onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup>
        <Controller
          control={form.control}
          name="name"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="signup-name">Name</FieldLabel>
              <Input
                aria-invalid={fieldState.invalid}
                autoComplete="name"
                id="signup-name"
                placeholder="Alex Morgan"
                {...field}
              />
              <FieldError errors={[fieldState.error]} />
            </Field>
          )}
        />
        <Controller
          control={form.control}
          name="email"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="signup-email">Email</FieldLabel>
              <Input
                aria-invalid={fieldState.invalid}
                autoComplete="email"
                id="signup-email"
                placeholder="you@company.com"
                type="email"
                {...field}
              />
              <FieldError errors={[fieldState.error]} />
            </Field>
          )}
        />
        <Button className="w-full" type="submit">
          Send code
        </Button>
      </FieldGroup>
    </form>
  );
};
