import { Aperture } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { GoogleLogo } from "@/registry/blocks/signup-08/components/icons";
import { SignUpForm } from "@/registry/blocks/signup-08/components/signup-form";

const SignUp = () => (
  <div className="flex h-screen items-center justify-center">
    <div className="mx-auto w-full border border-border/70 pb-0 max-sm:border-t-0 sm:max-w-md sm:rounded-xl sm:bg-card sm:p-1 sm:shadow-lg/3">
      <div className="border border-border/70 bg-muted/60 px-10 py-14 max-sm:border-x-0 sm:rounded-lg">
        <Aperture className="mx-auto size-8" />
        <h1 className="mt-3 text-center font-semibold text-2xl">
          Sign up to Bloxxee
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
      </div>

      <div className="relative py-5">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
        linear-gradient(45deg, transparent 49%, var(--border) 49%, var(--border) 51%, transparent 51%),
        linear-gradient(-45deg, transparent 49%, var(--border) 49%, var(--border) 51%, transparent 51%)
      `,
            backgroundSize: "40px 40px",
            WebkitMaskImage:
              "radial-gradient(ellipse 60% 60% at 50% 50%, #000 10%, transparent 90%)",
            maskImage:
              "radial-gradient(ellipse 60% 60% at 50% 50%, #000 10%, transparent 90%)",
          }}
        />

        <p className="relative isolate text-center text-muted-foreground text-sm">
          Already have an account?{" "}
          <Link className="text-foreground" href="#">
            Login
          </Link>
        </p>
      </div>
    </div>
  </div>
);

export default SignUp;
