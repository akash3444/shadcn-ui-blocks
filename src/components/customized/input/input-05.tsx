import { Input } from "@/registry/ui/input";
import { Label } from "@/registry/ui/label";

export default function InputWithLabelDemo() {
  return (
    <div className="w-full max-w-xs">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="Email" className="mt-0.5" />
    </div>
  );
}
