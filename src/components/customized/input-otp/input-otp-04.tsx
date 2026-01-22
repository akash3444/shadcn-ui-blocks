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
        <InputOTPSlot className="rounded-md border-l" index={0} />
        <InputOTPSlot className="rounded-md border-l" index={1} />
        <InputOTPSlot className="rounded-md border-l" index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup className="space-x-1">
        <InputOTPSlot className="rounded-md border-l" index={3} />
        <InputOTPSlot className="rounded-md border-l" index={4} />
        <InputOTPSlot className="rounded-md border-l" index={5} />
      </InputOTPGroup>
    </InputOTP>
  );
}
