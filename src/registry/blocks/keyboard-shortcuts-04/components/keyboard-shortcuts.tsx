import { Kbd } from "@/components/ui/kbd";

export default function KeyboardShortcuts() {
  return (
    <div className="px-6 py-8 sm:py-12">
      <div className="mx-auto max-w-184 border">
        <div className="relative overflow-hidden border-b p-6">
          <h2 className="font-semibold text-2xl tracking-tight">
            Keyboard Shortcuts
          </h2>
          <p className="mt-1 text-muted-foreground">
            A list of keyboard shortcuts for the application
          </p>

          {/* Circuit Board - Light Pattern */}
          <div
            className="pointer-events-none absolute inset-0 -top-0.5 z-0 not-dark:opacity-70"
            style={{
              backgroundImage: `
        repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
        repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
        radial-gradient(circle at 20px 20px, rgba(55, 65, 81, 0.12) 2px, transparent 2px),
        radial-gradient(circle at 40px 40px, rgba(55, 65, 81, 0.12) 2px, transparent 2px)
      `,
              backgroundSize: "40px 40px, 40px 40px, 40px 40px, 40px 40px",
            }}
          />
        </div>

        <div className="h-5 bg-[repeating-linear-gradient(315deg,var(--border)_0,var(--border)_1px,transparent_0,transparent_50%)] bg-muted/50 bg-size-[10px_10px] bg-fixed" />

        <ul className="grid grid-cols-1 gap-1 bg-muted/50 pb-1 sm:grid-cols-2">
          {shortcuts.map((shortcut) => (
            <li
              className="flex break-inside-avoid flex-col border bg-background p-5 max-sm:border-x-0 sm:even:border-e-0 sm:odd:border-s-0"
              key={shortcut.category}
            >
              <span className="font-medium text-muted-foreground text-xs uppercase tracking-wide">
                {shortcut.category}
              </span>
              <ul className="mt-3.5 space-y-2">
                {shortcut.shortcuts.map((shortcut) => (
                  <li
                    className="flex items-center justify-between"
                    key={shortcut.shortcut}
                  >
                    <span>{shortcut.description}</span>
                    <Kbd className="shrink-0 whitespace-nowrap border border-border/70 bg-foreground/5 px-1.5 font-mono">
                      {shortcut.shortcut}
                    </Kbd>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const shortcuts = [
  {
    category: "File Operations",
    shortcuts: [
      {
        shortcut: "Ctrl + N",
        description: "Open a new window",
      },
      {
        shortcut: "Ctrl + O",
        description: "Open a file",
      },
      {
        shortcut: "Ctrl + S",
        description: "Save the file",
      },
      {
        shortcut: "Ctrl + Q",
        description: "Quit the application",
      },
    ],
  },
  {
    category: "Navigation",
    shortcuts: [
      {
        shortcut: "Ctrl + K",
        description: "Open the search bar",
      },
      {
        shortcut: "Ctrl + T",
        description: "Open a new tab",
      },
      {
        shortcut: "Ctrl + W",
        description: "Close the tab",
      },
      {
        shortcut: "Ctrl + R",
        description: "Refresh the page",
      },
      {
        shortcut: "Ctrl + [",
        description: "Go back",
      },
      {
        shortcut: "Ctrl + ]",
        description: "Go forward",
      },
    ],
  },
  {
    category: "Editing",
    shortcuts: [
      {
        shortcut: "Ctrl + X",
        description: "Cut the selection",
      },
      {
        shortcut: "Ctrl + Z",
        description: "Undo the last action",
      },
      {
        shortcut: "Ctrl + Y",
        description: "Redo the last action",
      },
    ],
  },
  {
    category: "View",
    shortcuts: [
      {
        shortcut: "Ctrl + +",
        description: "Zoom in",
      },
      {
        shortcut: "Ctrl + -",
        description: "Zoom out",
      },
      {
        shortcut: "Ctrl + 0",
        description: "Reset zoom",
      },
      {
        shortcut: "F11",
        description: "Toggle fullscreen",
      },
    ],
  },
  {
    category: "Selection",
    shortcuts: [
      {
        shortcut: "Ctrl + A",
        description: "Select all",
      },
      {
        shortcut: "Ctrl + D",
        description: "Select word",
      },
      {
        shortcut: "Ctrl + L",
        description: "Select line",
      },
      {
        shortcut: "Shift + Alt + ↑",
        description: "Expand selection up",
      },
      {
        shortcut: "Shift + Alt + ↓",
        description: "Expand selection down",
      },
    ],
  },
  {
    category: "Workspace",
    shortcuts: [
      {
        shortcut: "Ctrl + \\",
        description: "Split editor",
      },
      {
        shortcut: "Ctrl + B",
        description: "Toggle sidebar",
      },
      {
        shortcut: "Ctrl + J",
        description: "Toggle panel",
      },
      {
        shortcut: "Ctrl + Shift + E",
        description: "Focus explorer",
      },
      {
        shortcut: "Ctrl + Shift + N",
        description: "New window",
      },
    ],
  },
  {
    category: "Settings",
    shortcuts: [
      {
        shortcut: "Ctrl + P",
        description: "Open the settings",
      },
      {
        shortcut: "Ctrl + ,",
        description: "Open preferences",
      },
      {
        shortcut: "Ctrl + Shift + T",
        description: "Change theme",
      },
      {
        shortcut: "Ctrl + Alt + S",
        description: "Sync settings",
      },
    ],
  },
  {
    category: "Terminal",
    shortcuts: [
      {
        shortcut: "Ctrl + `",
        description: "Toggle terminal",
      },
      {
        shortcut: "Ctrl + Shift + `",
        description: "New terminal",
      },
      {
        shortcut: "Ctrl + Shift + C",
        description: "Copy selection",
      },
      {
        shortcut: "Ctrl + Shift + V",
        description: "Paste to terminal",
      },
    ],
  },
];
