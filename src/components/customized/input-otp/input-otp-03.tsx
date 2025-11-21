import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/registry/ui/input-otp";

export default function InputOTPDemo() {
  return (
    <InputOTP maxLength={6}>
      <InputOTPGroup className="space-x-2">
        <InputOTPSlot index={0} className="rounded-md border-l" />
        <InputOTPSlot index={1} className="rounded-md border-l" />
        <InputOTPSlot index={2} className="rounded-md border-l" />
        <InputOTPSlot index={3} className="rounded-md border-l" />
      </InputOTPGroup>
    </InputOTP>
  );
}
