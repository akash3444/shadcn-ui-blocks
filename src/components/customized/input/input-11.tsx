import { Input } from "@/registry/ui/input";
import { Label } from "@/registry/ui/label";

export default function FileInputDemo() {
  return (
    <div className="w-full max-w-xs">
      <Label htmlFor="picture">Profile Picture</Label>
      <Input id="picture" type="file" className="mt-2" />
    </div>
  );
}
