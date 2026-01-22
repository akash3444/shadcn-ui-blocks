import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/registry/ui/input-otp";

export default function InputOTPDemo() {
  return (
    <InputOTP maxLength={6}>
      <InputOTPGroup className="space-x-2">
        <InputOTPSlot
          className="rounded-md border-accent border-l bg-secondary font-semibold shadow-none"
          index={0}
        />
        <InputOTPSlot
          className="rounded-md border-accent border-l bg-secondary font-semibold shadow-none"
          index={1}
        />
        <InputOTPSlot
          className="rounded-md border-accent border-l bg-secondary font-semibold shadow-none"
          index={2}
        />
        <InputOTPSlot
          className="rounded-md border-accent border-l bg-secondary font-semibold shadow-none"
          index={3}
        />
      </InputOTPGroup>
    </InputOTP>
  );
}
