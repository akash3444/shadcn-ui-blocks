import { Aperture } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { GoogleLogo } from "@/registry/blocks/signup-06/components/icons";
import { SignUpForm } from "@/registry/blocks/signup-06/components/signup-form";

const SignUp = () => (
  <div className="flex h-screen items-center justify-center sm:bg-foreground/5">
    <div className="mx-auto w-full max-w-md px-10 py-14 sm:rounded-2xl sm:border sm:bg-card">
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

      <p className="mt-6 text-center text-muted-foreground text-sm">
        Already have an account?{" "}
        <Link className="text-foreground" href="#">
          Login
        </Link>
      </p>
    </div>
  </div>
);

export default SignUp;
