import Link from "next/link";
import { Button } from "@/registry/bases/radix/ui/button";
import { Separator } from "@/registry/bases/radix/ui/separator";
import { GoogleLogo } from "@/registry/blocks/radix/login-06/components/icons";
import { LoginForm } from "@/registry/blocks/radix/login-06/components/login-form";
import { Logo } from "@/registry/blocks/radix/login-06/components/logo";

const Login = () => (
  <div className="flex h-screen items-center justify-center">
    <div className="mx-auto w-full max-w-md px-10 py-14 sm:rounded-2xl sm:border sm:border-border/80 sm:bg-card sm:shadow-[0_0_2px_1px_var(--color-muted)]">
      <Logo className="mx-auto size-9" />
      <h1 className="mt-3 text-center font-medium text-2xl tracking-[-0.015em]">
        Login to Shadcn UI Blocks
      </h1>

      <div className="mt-10">
        <Button className="w-full" size="lg" type="button">
          <GoogleLogo className="mr-2 size-4" />
          Continue with Google
        </Button>

        <div className="my-6 flex items-center justify-center gap-2 overflow-hidden">
          <Separator />
          <span className="text-muted-foreground text-sm">OR</span>
          <Separator />
        </div>

        <LoginForm />
      </div>

      <Link
        className="mt-6 block text-center text-muted-foreground text-sm"
        href="#"
      >
        Forgot your password?
      </Link>

      <p className="mt-6 text-center text-sm">
        New to Bloxxee?{" "}
        <Link className="text-muted-foreground" href="#">
          Create an account
        </Link>
      </p>
    </div>
  </div>
);

export default Login;
