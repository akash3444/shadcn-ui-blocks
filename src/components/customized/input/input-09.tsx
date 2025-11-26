import { Input } from "@/registry/ui/input";
import { Label } from "@/registry/ui/label";

export default function InputWithErrorMessageDemo() {
  return (
    <div className="w-full max-w-xs space-y-1.5">
      <Label htmlFor="email-address" className="text-destructive">
        Email Address
      </Label>
      <Input
        id="email-address"
        type="email"
        placeholder="Email"
        className="border-destructive focus-visible:ring-destructive"
      />
      <p className="text-[0.8rem] text-destructive">This email is invalid.</p>
    </div>
  );
}
