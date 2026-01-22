"use client";

import { Heart } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/ui/button";

const ToggleButton = () => {
  const [isLiked, setIsLiked] = React.useState(false);

  return (
    <Button
      className={cn("h-10 w-10 rounded-full", {
        "bg-rose-100 hover:bg-rose-100 focus:bg-rose-100": isLiked,
      })}
      onClick={() => setIsLiked(!isLiked)}
      size="icon"
      variant="secondary"
    >
      <Heart
        className={cn("h-5! w-5!", {
          "fill-rose-600 stroke-rose-600": isLiked,
        })}
      />
    </Button>
  );
};

export default ToggleButton;
