import { Separator } from "@/registry/ui/separator";

export default function SeparatorWithLabelDemo() {
  return (
    <div className="flex w-full max-w-sm items-center gap-3">
      <Separator className="flex-1" />
      <span className="text-muted-foreground text-xs uppercase">
        Or continue with
      </span>
      <Separator className="flex-1" />
    </div>
  );
}
