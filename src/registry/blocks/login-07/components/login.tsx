import { Aperture } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { GoogleLogo } from "@/registry/blocks/login-07/components/icons";
import { LoginForm } from "@/registry/blocks/login-07/components/login-form";
import { Testimonials } from "./testimonials";

const Login = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 lg:divide-x">
    <div className="flex h-screen items-center justify-center">
      <div className="mx-auto w-full max-w-md px-10 py-14 sm:rounded-2xl sm:border sm:bg-card sm:shadow-2xl/5">
        <Aperture className="mx-auto size-8" />
        <h1 className="mt-3 text-center font-semibold text-2xl">
          Login to Bloxxee
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
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-muted/50 pb-20 dark:bg-muted/30">
      <Testimonials />

      <div
        className="absolute inset-0 -top-px -left-px -z-1 dark:opacity-70"
        style={{
          backgroundImage: `
        linear-gradient(to right, color-mix(in srgb,var(--foreground) 20%, transparent) 1px, transparent 1px),
        linear-gradient(to bottom, color-mix(in srgb,var(--foreground) 20%, transparent) 1px, transparent 1px)
      `,
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 0 0",
          maskImage: `
        repeating-linear-gradient(
          to right,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        ),
        repeating-linear-gradient(
          to bottom,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        )
      `,
          WebkitMaskImage: `
        repeating-linear-gradient(
          to right,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        ),
        repeating-linear-gradient(
          to bottom,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        )
      `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />
    </div>
  </div>
);

export default Login;
