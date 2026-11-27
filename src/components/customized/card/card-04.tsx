import { Button } from "@/registry/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/registry/ui/field";
import { Input } from "@/registry/ui/input";

export default function CardFormDemo() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Sign in to your account</CardTitle>
        <CardDescription>
          Enter your email and password to continue.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form id="card-login-form">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="card-login-email">Email</FieldLabel>
              <Input
                autoComplete="email"
                id="card-login-email"
                placeholder="you@example.com"
                required
                type="email"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="card-login-password">Password</FieldLabel>
              <Input
                autoComplete="current-password"
                id="card-login-password"
                required
                type="password"
              />
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Button className="w-full" form="card-login-form" type="submit">
          Sign in
        </Button>
      </CardFooter>
    </Card>
  );
}
