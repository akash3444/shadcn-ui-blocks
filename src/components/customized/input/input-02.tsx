import { Input } from "@/registry/ui/input";

export default function InputRingDemo() {
  return (
    <Input
      className="max-w-xs focus-visible:border-blue-500 focus-visible:ring-[3px] focus-visible:ring-blue-500/20"
      placeholder="Email"
      type="email"
    />
  );
}
