import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/registry/ui/input-otp";

export default function InputOTPDemo() {
  return (
    <InputOTP maxLength={6}>
      <InputOTPGroup className="space-x-2">
        <InputOTPSlot
          className="rounded-md border-accent/90 border-l shadow-inner dark:shadow-primary/10"
          index={0}
        />
        <InputOTPSlot
          className="rounded-md border-accent/90 border-l shadow-inner dark:shadow-primary/10"
          index={1}
        />
        <InputOTPSlot
          className="rounded-md border-accent/90 border-l shadow-inner dark:shadow-primary/10"
          index={2}
        />
        <InputOTPSlot
          className="rounded-md border-accent/90 border-l shadow-inner dark:shadow-primary/10"
          index={3}
        />
      </InputOTPGroup>
    </InputOTP>
  );
}
