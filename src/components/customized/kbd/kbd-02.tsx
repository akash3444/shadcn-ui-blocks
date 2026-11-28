import { Kbd, KbdGroup } from "@/registry/ui/kbd";

export default function KbdGroupDemo() {
  return (
    <div className="flex flex-col items-center gap-4">
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <span>+</span>
        <Kbd>Shift</Kbd>
        <span>+</span>
        <Kbd>P</Kbd>
      </KbdGroup>
      <KbdGroup>
        <Kbd>⌥</Kbd>
        <Kbd>⇧</Kbd>
        <Kbd>F</Kbd>
      </KbdGroup>
    </div>
  );
}
