import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card";
import { Logo } from "@/registry/blocks/base/signup-01/components/logo";
import { SignUpForm } from "@/registry/blocks/base/signup-01/components/signup-form";

const SignUp = () => (
  <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-4">
    <Link className="flex items-center gap-2" href="#">
      <Logo />
      <span className="font-medium text-base tracking-tight">Calm UI</span>
    </Link>
    <Card className="w-full max-w-96">
      <CardHeader>
        <CardTitle>
          <h1>Create your account</h1>
        </CardTitle>
        <CardDescription>
          Get started with Calm UI in under a minute.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SignUpForm />
      </CardContent>
      <CardFooter className="justify-center text-muted-foreground">
        <p>
          Already have an account?{" "}
          <Link className="underline hover:text-foreground" href="#">
            Log in
          </Link>
        </p>
      </CardFooter>
    </Card>
    <p className="max-w-96 text-balance text-center text-muted-foreground text-sm">
      By continuing you agree to the{" "}
      <Link className="underline hover:text-foreground" href="#">
        Terms
      </Link>{" "}
      and{" "}
      <Link className="underline hover:text-foreground" href="#">
        Privacy Policy
      </Link>
      .
    </p>
  </div>
);

export default SignUp;
