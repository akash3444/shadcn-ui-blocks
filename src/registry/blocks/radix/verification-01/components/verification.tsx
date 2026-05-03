import { ApertureIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/registry/ui/radix/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/registry/ui/radix/input-otp";
import { cn } from "@/lib/utils";

export default function Verification() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="w-full max-w-sm border bg-card max-[32rem]:max-w-none max-[32rem]:border-x-0">
        <div
          className={cn(
            "flex w-full items-center justify-center gap-3 border-b py-4 font-medium text-[1.35rem] tracking-tight",
            "bg-[repeating-linear-gradient(315deg,color-mix(in_oklch,var(--border)_35%,transparent)_0,color-mix(in_oklch,var(--border)_35%,transparent)_1px,transparent_0,transparent_50%)] bg-[size:10px_10px] bg-fixed"
          )}
        >
          <ApertureIcon className="size-7" /> Shadcn UI Blocks
        </div>
        <div className="mx-auto flex max-w-[21rem] flex-col items-center px-6 py-10 text-center">
          <b className="font-medium text-[1.4rem] tracking-[-0.01em]">
            Verify your email address
          </b>
          <p className="mt-1.5 text-pretty text-muted-foreground">
            We've sent a verification code to your email address.
          </p>

          <InputOTP containerClassName="mx-auto mt-10" maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
            </InputOTPGroup>
            <InputOTPGroup>
              <InputOTPSlot index={1} />
            </InputOTPGroup>
            <InputOTPGroup>
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPGroup>
              <InputOTPSlot index={3} />
            </InputOTPGroup>
            <InputOTPGroup>
              <InputOTPSlot index={4} />
            </InputOTPGroup>
            <InputOTPGroup>
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>

          <Button className="mt-10 w-full">Verify</Button>

          <p className="mt-8 text-muted-foreground text-sm">
            Didn't receive the code?{" "}
            <Link className="text-primary underline" href="#">
              Resend
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
