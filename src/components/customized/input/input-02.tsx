import { Input } from "@/registry/ui/input";

export default function InputRingDemo() {
  return (
    <Input
      type="email"
      placeholder="Email"
      className="max-w-xs focus-visible:ring-[3px] focus-visible:ring-blue-500/20 focus-visible:border-blue-500"
    />
  );
}
