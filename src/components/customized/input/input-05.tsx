import { Input } from "@/registry/ui/input";
import { Label } from "@/registry/ui/label";

export default function InputWithLabelDemo() {
  return (
    <div className="w-full max-w-xs">
      <Label htmlFor="email">Email</Label>
      <Input className="mt-2" id="email" placeholder="Email" type="email" />
    </div>
  );
}
