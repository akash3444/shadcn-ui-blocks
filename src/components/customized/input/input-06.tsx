import { Button } from "@/registry/ui/button";
import { Input } from "@/registry/ui/input";

export default function InputWithButtonDemo() {
  return (
    <div className="flex w-full max-w-xs items-center gap-2">
      <Input placeholder="Email" type="email" />
      <Button className="shadow">Subscribe</Button>
    </div>
  );
}
