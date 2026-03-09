import { Aperture } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { GoogleLogo } from "@/registry/blocks/login-06/components/icons";
import { LoginForm } from "@/registry/blocks/login-06/components/login-form";

const Login = () => (
  <div className="flex h-screen items-center justify-center sm:bg-foreground/5">
    <div className="mx-auto w-full max-w-md px-10 py-14 sm:rounded-2xl sm:border sm:bg-card">
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
);

export default Login;
