import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/registry/ui/input-otp";
import { Dot } from "lucide-react";

export default function InputOTPDemo() {
  return (
    <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <div role="separator" className="text-muted-foreground">
        <Dot />
      </div>
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  );
}
