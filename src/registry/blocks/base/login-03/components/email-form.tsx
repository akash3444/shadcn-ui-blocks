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
  email: z.string().email("Enter a valid email address."),
});

type EmailValues = z.infer<typeof formSchema>;

interface EmailFormProps {
  defaultEmail: string;
  onSubmit: (email: string) => void;
}

export const EmailForm = ({ defaultEmail, onSubmit }: EmailFormProps) => {
  const form = useForm<EmailValues>({
    defaultValues: {
      email: defaultEmail,
    },
    resolver: zodResolver(formSchema),
  });

  // Coming back from the code step, put focus back on the email to edit.
  useEffect(() => {
    if (defaultEmail) {
      form.setFocus("email");
    }
  }, [defaultEmail, form]);

  return (
    <form
      noValidate
      onSubmit={form.handleSubmit(({ email }) => onSubmit(email))}
    >
      <FieldGroup>
        <Controller
          control={form.control}
          name="email"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="login-email">Email</FieldLabel>
              <Input
                aria-invalid={fieldState.invalid}
                autoComplete="email"
                id="login-email"
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
