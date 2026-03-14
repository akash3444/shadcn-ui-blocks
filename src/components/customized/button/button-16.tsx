"use client";

import { IconPlaceholder } from "@/components/icon-placeholder";
import { getIconProps } from "@/lib/icon-map";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/registry/ui/button";

const ThemeToggleButton = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent SSR flicker and hydration mismatch
  if (!mounted) {
    return <Button className="rounded-full" size="icon" />;
  }

  return (
    <Button className="rounded-full" onClick={toggleTheme} size="icon">
      {resolvedTheme === "dark" ? <IconPlaceholder {...getIconProps("SunIcon")} /> : <IconPlaceholder {...getIconProps("MoonIcon")} />}
    </Button>
  );
};

export default ThemeToggleButton;
