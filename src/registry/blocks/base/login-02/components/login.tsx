import Link from "next/link";
import { BrandPanel } from "@/registry/blocks/base/login-02/components/brand-panel";
import { LoginForm } from "@/registry/blocks/base/login-02/components/login-form";
import { Logo } from "@/registry/blocks/base/login-02/components/logo";

const Login = () => (
  <div className="grid min-h-svh bg-background lg:grid-cols-2">
    <div className="flex min-h-svh flex-col justify-between gap-8 px-6 py-8 sm:px-10">
      <div className="flex items-center justify-between gap-4">
        <Link className="flex items-center gap-2" href="#">
          <Logo />
          <span className="font-medium text-base tracking-tight">Calm UI</span>
        </Link>
        <p className="text-muted-foreground text-sm">
          <span className="max-sm:hidden">New to Calm UI? </span>
          <Link className="underline hover:text-foreground" href="#">
            Create an account
          </Link>
        </p>
      </div>
      <div className="mx-auto flex w-full max-w-88 flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="font-medium text-2xl tracking-tight">Welcome back</h1>
          <p className="text-muted-foreground text-sm">
            Log in to pick up where you left off.
          </p>
        </div>
        <LoginForm />
      </div>
      <p className="text-balance text-center text-muted-foreground text-sm">
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
    <BrandPanel />
  </div>
);

export default Login;
