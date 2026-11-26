"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/registry/bases/base/ui/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/registry/bases/base/ui/field";
import { Input } from "@/registry/bases/base/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/registry/bases/base/ui/input-group";
import {
  GitHubLogo,
  GoogleLogo,
} from "@/registry/blocks/base/signup-02/components/icons";

const formSchema = z.object({
  name: z.string().trim().min(1, "Enter your name."),
  email: z.string().email("Enter a valid email address."),
  password: z.string().min(8, "Use at least 8 characters."),
});

type SignUpValues = z.infer<typeof formSchema>;

export const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm<SignUpValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (_values: SignUpValues) => {
    // Create the account with your auth provider.
  };

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
        <Controller
          control={form.control}
          name="password"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="signup-password">Password</FieldLabel>
              <InputGroup>
                <InputGroupInput
                  aria-describedby="signup-password-hint"
                  aria-invalid={fieldState.invalid}
                  autoComplete="new-password"
                  id="signup-password"
                  type={showPassword ? "text" : "password"}
                  {...field}
                />
                <InputGroupAddon align="inline-end">
                  <InputGroupButton
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    aria-pressed={showPassword}
                    onClick={() => setShowPassword((visible) => !visible)}
                    size="icon-xs"
                  >
                    {showPassword ? (
                      <EyeOffIcon className="size-4" />
                    ) : (
                      <EyeIcon className="size-4" />
                    )}
                  </InputGroupButton>
                </InputGroupAddon>
              </InputGroup>
              {fieldState.invalid ? (
                <FieldError
                  errors={[fieldState.error]}
                  id="signup-password-hint"
                />
              ) : (
                <FieldDescription id="signup-password-hint">
                  Use at least 8 characters.
                </FieldDescription>
              )}
            </Field>
          )}
        />
        <Button className="w-full" type="submit">
          Create account
        </Button>
        <FieldSeparator className="my-0">or</FieldSeparator>
        <div className="grid grid-cols-2 gap-2">
          <Button type="button" variant="outline">
            <GoogleLogo />
            Google
          </Button>
          <Button type="button" variant="outline">
            <GitHubLogo />
            GitHub
          </Button>
        </div>
      </FieldGroup>
    </form>
  );
};
