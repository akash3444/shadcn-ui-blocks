import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/registry/ui/input-otp";

export default function InputOTPDemo() {
  return (
    <InputOTP maxLength={6}>
      <InputOTPGroup className="space-x-2">
        <InputOTPSlot className="rounded-md border-l" index={0} />
        <InputOTPSlot className="rounded-md border-l" index={1} />
        <InputOTPSlot className="rounded-md border-l" index={2} />
        <InputOTPSlot className="rounded-md border-l" index={3} />
      </InputOTPGroup>
    </InputOTP>
  );
}
