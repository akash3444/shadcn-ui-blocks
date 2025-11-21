import { Input } from "@/registry/ui/input";

export default function FilledInputDemo() {
  return (
    <Input
      type="email"
      placeholder="Email"
      className="bg-secondary border-none shadow-none max-w-xs"
    />
  );
}
