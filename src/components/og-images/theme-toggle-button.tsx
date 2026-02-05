"use client";

import { useOGImageContext } from "@/providers/og-image-provider";
import { Button } from "@/registry/ui/button";

export function ThemeToggleButton() {
  const { toggleMode } = useOGImageContext();

  return (
    <Button
      className="size-8 dark:border-background dark:bg-background"
      onClick={toggleMode}
      size="icon"
      variant="outline"
    >
      <svg
        className="size-4.5"
        fill="none"
        height="24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0h24v24H0z" fill="none" stroke="none" />
        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
        <path d="M12 3l0 18" />
        <path d="M12 9l4.65 -4.65" />
        <path d="M12 14.3l7.37 -7.37" />
        <path d="M12 19.6l8.85 -8.85" />
      </svg>
    </Button>
  );
}
