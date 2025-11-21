"use client";

import { useTheme } from "next-themes";
import { Button } from "../../registry/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const pathname = usePathname();
  const isBlockPreviewPage =
    pathname.startsWith("/blocks") && pathname.endsWith("/preview");

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (isBlockPreviewPage) return null;

  // To avoid flickering
  if (!mounted) {
    return (
      <Button
        onClick={toggleTheme}
        variant="outline"
        size="icon"
        className="rounded-full"
      />
    );
  }

  return (
    <Button
      onClick={toggleTheme}
      variant="outline"
      size="icon"
      className="rounded-full"
    >
      {resolvedTheme === "dark" ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
};
