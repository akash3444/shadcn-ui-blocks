import { KeyboardIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Kbd } from "@/components/ui/kbd";
import { cn } from "@/lib/utils";

export default function KeyboardShortcuts() {
  return (
    <div className="px-6 py-12">
      <div className="mx-auto max-w-sm space-y-1 rounded-xl border bg-muted/40 p-1">
        <Card className="shadow/5 dark:shadow/40 relative overflow-hidden rounded-lg bg-background py-5">
          {/* Circuit Board - Light Pattern */}
          <CircuitBoardPattern />
          <KeyboardIcon className="mask-r-from-55% mask-r-to-75% dark:mask-r-from-50% absolute -top-1 -right-1 size-11 -rotate-45 stroke-[1.5px] text-muted-foreground opacity-60 dark:opacity-40" />

          <CardHeader className="relative isolate">
            <CardTitle>Keyboard Shortcuts</CardTitle>
            <CardDescription>
              A list of keyboard shortcuts for the application
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="shadow/5 dark:shadow/40 relative overflow-hidden rounded-lg bg-background">
          <CircuitBoardPattern />

          <CardContent className="relative isolate">
            <ul className="space-y-5">
              {shortcuts.map((shortcut) => (
                <li key={shortcut.category}>
                  <span className="font-medium text-muted-foreground text-sm">
                    {shortcut.category}
                  </span>
                  <ul className="mt-2 space-y-2">
                    {shortcut.shortcuts.map((shortcut) => (
                      <li
                        className="flex items-center justify-between"
                        key={shortcut.shortcut}
                      >
                        <span>{shortcut.description}</span>
                        <Kbd className="border border-border/50 px-1.5 font-mono">
                          {shortcut.shortcut}
                        </Kbd>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

const CircuitBoardPattern = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div
      {...props}
      className={cn(
        "pointer-events-none absolute inset-0 -top-px z-0 opacity-40 dark:opacity-100",
        className
      )}
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
  );
};

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
    category: "Settings",
    shortcuts: [
      {
        shortcut: "Ctrl + P",
        description: "Open the settings",
      },
    ],
  },
];
