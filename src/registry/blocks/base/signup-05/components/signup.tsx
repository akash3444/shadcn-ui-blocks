import Link from "next/link";
import { Button } from "@/registry/bases/base/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/bases/base/ui/dialog";
import { Logo } from "@/registry/blocks/base/signup-05/components/logo";
import { SignUpForm } from "@/registry/blocks/base/signup-05/components/signup-form";

const SignUp = () => (
  <div className="min-h-svh bg-background">
    <Dialog defaultOpen>
      <div className="flex items-center justify-between border-b px-6 py-4">
        <Link className="flex items-center gap-2" href="#">
          <Logo />
          <span className="font-medium text-base tracking-tight">Calm UI</span>
        </Link>
        <DialogTrigger render={<Button />}>Sign up</DialogTrigger>
      </div>
      <DialogContent className="max-h-[calc(100svh-2rem)] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Create your account</DialogTitle>
          <DialogDescription>
            Join to follow new releases and share feedback.
          </DialogDescription>
        </DialogHeader>
        <SignUpForm />
        <DialogFooter className="text-muted-foreground sm:justify-center">
          <p className="text-center">
            Already have an account?{" "}
            <Link className="underline hover:text-foreground" href="#">
              Log in
            </Link>
          </p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    <div className="mx-auto flex max-w-180 flex-col gap-4 px-6 pt-18 pb-12 md:px-0">
      <h1 className="font-medium text-4xl/11 tracking-tight">
        Launch notes for the spring release
      </h1>
      <p className="text-base/7 text-muted-foreground">
        Three things changed since the last release. Onboarding is shorter,
        exports now run in the background, and the team page finally shows who
        is online. Here is what each one means for the people using it every
        day, and what we want to learn over the next few weeks.
      </p>
      <p className="text-base/7 text-muted-foreground">
        We kept the rollout small on purpose. Most of the feedback so far has
        come from teams of five or fewer, and they have mostly asked for the
        same two things.
      </p>
    </div>
  </div>
);

export default SignUp;
