import Link from "next/link";
import { BrandPanel } from "@/registry/blocks/base/signup-02/components/brand-panel";
import { Logo } from "@/registry/blocks/base/signup-02/components/logo";
import { SignUpForm } from "@/registry/blocks/base/signup-02/components/signup-form";

const SignUp = () => (
  <div className="grid min-h-svh bg-background lg:grid-cols-2">
    <div className="flex min-h-svh flex-col justify-between gap-8 px-6 py-8 sm:px-10">
      <div className="flex items-center justify-between gap-4">
        <Link className="flex items-center gap-2" href="#">
          <Logo />
          <span className="font-medium text-base tracking-tight">Calm UI</span>
        </Link>
        <p className="text-muted-foreground text-sm">
          <span className="max-sm:hidden">Already have an account? </span>
          <Link className="underline hover:text-foreground" href="#">
            Log in
          </Link>
        </p>
      </div>
      <div className="mx-auto flex w-full max-w-88 flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="font-medium text-2xl tracking-tight">
            Create your account
          </h1>
          <p className="text-muted-foreground text-sm">
            Start free. No credit card needed.
          </p>
        </div>
        <SignUpForm />
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

export default SignUp;
