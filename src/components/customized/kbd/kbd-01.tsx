import { Kbd } from "@/registry/ui/kbd";

const keys = ["⌘", "⇧", "⌥", "⌃", "⏎", "Esc", "K"];

export default function KbdDefaultDemo() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {keys.map((key) => (
        <Kbd key={key}>{key}</Kbd>
      ))}
    </div>
  );
}
