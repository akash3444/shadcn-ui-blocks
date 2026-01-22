"use client";

import { useTheme } from "next-themes";
import DotPattern from "@/components/ui/dot-pattern";
import Particles from "@/components/ui/particles";
import { cn } from "@/lib/utils";

export const BackgroundPattern = () => {
  const { resolvedTheme } = useTheme();
  const isLightTheme = resolvedTheme === "light";

  return (
    <>
      <DotPattern
        className={cn(
          "mask-[radial-gradient(ellipse,rgba(0,0,0,0.3)_30%,black_50%)]",
          "dark:fill-slate-700"
        )}
        cr={1}
        cx={1}
        cy={1}
        height={20}
        width={20}
      />
      <Particles
        className="absolute inset-0"
        color={isLightTheme ? "#000" : "#fff"}
        ease={80}
        quantity={100}
        refresh
      />
    </>
  );
};
