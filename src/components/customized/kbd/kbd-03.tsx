import { Button } from "@/registry/ui/button";
import { Kbd, KbdGroup } from "@/registry/ui/kbd";

export default function KbdInButtonDemo() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button variant="outline">
        Search
        <KbdGroup data-icon="inline-end">
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
      </Button>
      <Button variant="outline">
        Cancel
        <Kbd data-icon="inline-end">Esc</Kbd>
      </Button>
      <Button variant="outline">
        Save
        <KbdGroup data-icon="inline-end">
          <Kbd>⌘</Kbd>
          <Kbd>S</Kbd>
        </KbdGroup>
      </Button>
    </div>
  );
}
