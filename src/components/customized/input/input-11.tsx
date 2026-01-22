import { Input } from "@/registry/ui/input";
import { Label } from "@/registry/ui/label";

export default function FileInputDemo() {
  return (
    <div className="w-full max-w-xs">
      <Label htmlFor="picture">Profile Picture</Label>
      <Input className="mt-2" id="picture" type="file" />
    </div>
  );
}
