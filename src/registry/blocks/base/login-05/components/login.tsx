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
import { LoginForm } from "@/registry/blocks/base/login-05/components/login-form";
import { Logo } from "@/registry/blocks/base/login-05/components/logo";

const Login = () => (
  <div className="min-h-svh bg-background">
    <Dialog defaultOpen>
      <div className="flex items-center justify-between border-b px-6 py-4">
        <Link className="flex items-center gap-2" href="#">
          <Logo />
          <span className="font-medium text-base tracking-tight">Calm UI</span>
        </Link>
        <DialogTrigger render={<Button />}>Log in</DialogTrigger>
      </div>
      <DialogContent className="max-h-[calc(100svh-2rem)] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Log in to your account</DialogTitle>
          <DialogDescription>
            Welcome back. Enter your details to continue.
          </DialogDescription>
        </DialogHeader>
        <LoginForm />
        <DialogFooter className="text-muted-foreground sm:justify-center">
          <p className="text-center">
            New to Calm UI?{" "}
            <Link className="underline hover:text-foreground" href="#">
              Create an account
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

export default Login;
