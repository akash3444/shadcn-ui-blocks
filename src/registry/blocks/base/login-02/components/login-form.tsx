"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/registry/bases/base/ui/button";
import {
  Field,
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
} from "@/registry/blocks/base/login-02/components/icons";

const formSchema = z.object({
  email: z.string().email("Enter a valid email address."),
  password: z.string().min(1, "Enter your password."),
});

type LoginValues = z.infer<typeof formSchema>;

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm<LoginValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (_values: LoginValues) => {
    // Send the credentials to your auth provider.
  };

  return (
    <form noValidate onSubmit={form.handleSubmit(onSubmit)}>
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
        <Controller
          control={form.control}
          name="password"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <div className="flex items-center justify-between">
                <FieldLabel htmlFor="login-password">Password</FieldLabel>
                <Link
                  className="text-muted-foreground text-sm leading-snug hover:text-foreground"
                  href="#"
                >
                  Forgot password?
                </Link>
              </div>
              <InputGroup>
                <InputGroupInput
                  aria-invalid={fieldState.invalid}
                  autoComplete="current-password"
                  id="login-password"
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
              <FieldError errors={[fieldState.error]} />
            </Field>
          )}
        />
        <Button className="w-full" type="submit">
          Log in
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
