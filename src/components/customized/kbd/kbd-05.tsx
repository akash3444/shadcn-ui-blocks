import { Kbd, KbdGroup } from "@/registry/ui/kbd";

const shortcuts = [
  { action: "Search", keys: ["⌘", "K"] },
  { action: "New file", keys: ["⌘", "N"] },
  { action: "Toggle sidebar", keys: ["⌘", "B"] },
  { action: "Save", keys: ["⌘", "S"] },
  { action: "Save as", keys: ["⌘", "⇧", "S"] },
  { action: "Close tab", keys: ["⌘", "W"] },
];

export default function KbdShortcutsListDemo() {
  return (
    <ul className="flex w-full max-w-64 flex-col gap-3 text-sm">
      {shortcuts.map(({ action, keys }) => (
        <li className="flex items-center justify-between gap-4" key={action}>
          <span>{action}</span>
          <KbdGroup>
            {keys.map((key) => (
              <Kbd key={key}>{key}</Kbd>
            ))}
          </KbdGroup>
        </li>
      ))}
    </ul>
  );
}
