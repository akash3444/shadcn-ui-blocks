import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card";
import { LoginForm } from "@/registry/blocks/base/login-01/components/login-form";
import { Logo } from "@/registry/blocks/base/login-01/components/logo";

const Login = () => (
  <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-4">
    <Link className="flex items-center gap-2" href="#">
      <Logo />
      <span className="font-medium text-base tracking-tight">Calm UI</span>
    </Link>
    <Card className="w-full max-w-96">
      <CardHeader>
        <CardTitle>
          <h1>Log in to your account</h1>
        </CardTitle>
        <CardDescription>
          Welcome back. Enter your details to continue.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <LoginForm />
      </CardContent>
      <CardFooter className="justify-center text-muted-foreground">
        <p>
          New to Calm UI?{" "}
          <Link className="underline hover:text-foreground" href="#">
            Create an account
          </Link>
        </p>
      </CardFooter>
    </Card>
  </div>
);

export default Login;
