import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/registry/ui/input-otp";

export default function InputOTPDemo() {
  return (
    <InputOTP maxLength={6}>
      <InputOTPGroup className="space-x-1">
        <InputOTPSlot index={0} className="rounded-md border-l" />
        <InputOTPSlot index={1} className="rounded-md border-l" />
        <InputOTPSlot index={2} className="rounded-md border-l" />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup className="space-x-1">
        <InputOTPSlot index={3} className="rounded-md border-l" />
        <InputOTPSlot index={4} className="rounded-md border-l" />
        <InputOTPSlot index={5} className="rounded-md border-l" />
      </InputOTPGroup>
    </InputOTP>
  );
}
