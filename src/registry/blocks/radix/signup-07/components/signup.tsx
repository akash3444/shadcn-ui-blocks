import Link from "next/link";
import { Button } from "@/registry/ui/radix/button";
import { Separator } from "@/registry/ui/radix/separator";
import { GoogleLogo } from "@/registry/blocks/radix/signup-07/components/icons";
import { Logo } from "@/registry/blocks/radix/signup-07/components/logo";
import { SignUpForm } from "@/registry/blocks/radix/signup-07/components/signup-form";
import { Testimonials } from "./testimonials";

const SignUp = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 lg:divide-x">
    <div className="flex h-screen items-center justify-center">
      <div className="mx-auto w-full max-w-md px-10 py-14 sm:rounded-2xl sm:border sm:bg-card sm:shadow-2xl/5">
        <Logo className="mx-auto size-9" />
        <h1 className="mt-3 text-center font-medium text-2xl tracking-[-0.015em]">
          Sign up to Shadcn UI Blocks
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

          <SignUpForm />
        </div>

        <p className="mt-6 text-center text-sm">
          Already have an account?{" "}
          <Link className="text-muted-foreground" href="#">
            Login
          </Link>
        </p>
      </div>
    </div>
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-muted/50 dark:bg-muted/30">
      <img
        alt="Sign up"
        className="absolute inset-0 size-full object-cover"
        src="/images/ascii-art.png"
      />

      <Testimonials />
    </div>
  </div>
);

export default SignUp;
