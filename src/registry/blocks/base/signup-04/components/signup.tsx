import { MailIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/registry/bases/base/ui/button";
import {
  GitHubLogo,
  GoogleLogo,
  MicrosoftLogo,
} from "@/registry/blocks/base/signup-04/components/icons";
import { Logo } from "@/registry/blocks/base/signup-04/components/logo";

const providers = [
  { icon: GoogleLogo, name: "Google" },
  { icon: GitHubLogo, name: "GitHub" },
  { icon: MicrosoftLogo, name: "Microsoft" },
  { icon: MailIcon, name: "email" },
];

const SignUp = () => (
  <div className="grid min-h-svh grid-rows-[1fr_auto_1fr] gap-8 bg-background">
    <div className="flex items-center justify-between gap-4 self-start px-4 py-6 sm:px-10">
      <Link className="flex items-center gap-2" href="#">
        <Logo />
        <span className="font-medium text-base tracking-tight">Calm UI</span>
      </Link>
      <div className="flex items-center gap-3">
        <span className="text-muted-foreground text-sm max-sm:hidden">
          Already have an account?
        </span>
        <Button
          nativeButton={false}
          render={<Link href="#" />}
          variant="outline"
        >
          Log in
        </Button>
      </div>
    </div>
    <div className="mx-auto flex w-full max-w-96 flex-col gap-8 px-4">
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="font-medium text-2xl tracking-tight">
          Create your account
        </h1>
        <p className="text-muted-foreground text-sm">
          Choose how you want to sign up.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        {providers.map(({ icon: Icon, name }) => (
          <Button key={name} variant="outline">
            <Icon className="size-4" />
            Sign up with {name}
          </Button>
        ))}
      </div>
    </div>
    <p className="self-end text-balance px-4 pb-8 text-center text-muted-foreground text-sm">
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
