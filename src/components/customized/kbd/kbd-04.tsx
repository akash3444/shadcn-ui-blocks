import { Kbd, KbdGroup } from "@/registry/ui/kbd";

export default function KbdInTextDemo() {
  return (
    <p className="max-w-sm text-center text-muted-foreground text-sm leading-relaxed">
      Press{" "}
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>{" "}
      to open the command menu, or <Kbd>/</Kbd> to jump straight to search.
    </p>
  );
}
