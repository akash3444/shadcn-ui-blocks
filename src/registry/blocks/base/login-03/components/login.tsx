"use client";

import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/registry/bases/base/ui/button";
import { CodeForm } from "@/registry/blocks/base/login-03/components/code-form";
import { EmailForm } from "@/registry/blocks/base/login-03/components/email-form";
import { Logo } from "@/registry/blocks/base/login-03/components/logo";

const Login = () => {
  const [email, setEmail] = useState("");
  const [codeSent, setCodeSent] = useState(false);

  const handleEmailSubmit = (submittedEmail: string) => {
    setEmail(submittedEmail);
    setCodeSent(true);
  };

  return (
    <div className="grid min-h-svh grid-rows-[1fr_auto_1fr] gap-8 bg-background p-4 sm:p-8">
      <div>
        {codeSent && (
          <Button onClick={() => setCodeSent(false)} variant="ghost">
            <ArrowLeftIcon data-icon="inline-start" />
            Use a different email
          </Button>
        )}
      </div>
      <div className="mx-auto flex w-full max-w-80 flex-col gap-8">
        <div className="flex flex-col items-center gap-2 text-center">
          <Logo className="mb-2 size-10" />
          <h1 className="font-medium text-2xl tracking-tight">
            {codeSent ? "Check your email" : "Log in to Calm UI"}
          </h1>
          {codeSent ? (
            <p className="wrap-anywhere text-muted-foreground text-sm">
              We sent a 6-digit code to{" "}
              <span className="text-foreground">{email}</span>
            </p>
          ) : (
            <p className="text-muted-foreground text-sm">
              No password. We’ll email you a 6-digit code.
            </p>
          )}
        </div>
        {codeSent ? (
          <CodeForm />
        ) : (
          <EmailForm defaultEmail={email} onSubmit={handleEmailSubmit} />
        )}
      </div>
      <p className="self-end text-balance text-center text-muted-foreground text-sm">
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
};

export default Login;
