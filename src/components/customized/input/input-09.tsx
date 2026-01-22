import { Input } from "@/registry/ui/input";
import { Label } from "@/registry/ui/label";

export default function InputWithErrorMessageDemo() {
  return (
    <div className="w-full max-w-xs space-y-2">
      <Label className="text-destructive" htmlFor="email-address">
        Email Address
      </Label>
      <Input
        className="border-destructive focus-visible:ring-destructive"
        id="email-address"
        placeholder="Email"
        type="email"
      />
      <p className="text-[0.8rem] text-destructive">This email is invalid.</p>
    </div>
  );
}
