"use client";

import { Button } from "@/registry/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

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
    return <Button size="icon" className="rounded-full" />;
  }

  return (
    <Button size="icon" className="rounded-full" onClick={toggleTheme}>
      {resolvedTheme === "dark" ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
};

export default ThemeToggleButton;
