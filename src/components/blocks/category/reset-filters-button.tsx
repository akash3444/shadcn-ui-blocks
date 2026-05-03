"use client";

import { RotateCcwIcon } from "lucide-react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const ResetFiltersButton = () => {
  const { category = "all" } = useParams<{ category: string }>();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [spinning, setSpinning] = useState(false);
  const spinKey = useRef(0);

  const query = searchParams.get("q") || "";
  const isDefaultState = category === "all" && !query;

  const handleReset = () => {
    spinKey.current += 1;
    setSpinning(true);
    const params = new URLSearchParams(searchParams.toString());
    params.delete("q");
    router.push(`/blocks/categories/all?${params.toString()}`);
  };

  return (
    <Tooltip delayDuration={600}>
      <TooltipTrigger asChild>
        <Button
          className="shrink-0"
          onClick={handleReset}
          size="icon"
          variant="outline"
        >
          <RotateCcwIcon
            className={cn(
              "h-4 w-4",
              spinning && "animate-[spin_0.4s_ease-in-out]"
            )}
            key={spinKey.current}
            onAnimationEnd={() => setSpinning(false)}
          />
        </Button>
      </TooltipTrigger>
      <TooltipContent>Reset filters</TooltipContent>
    </Tooltip>
  );
};

export default ResetFiltersButton;
