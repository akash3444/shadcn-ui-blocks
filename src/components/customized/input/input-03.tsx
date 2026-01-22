import { Input } from "@/registry/ui/input";

export default function FilledInputDemo() {
  return (
    <Input
      className="max-w-xs border-none bg-secondary shadow-none"
      placeholder="Email"
      type="email"
    />
  );
}
