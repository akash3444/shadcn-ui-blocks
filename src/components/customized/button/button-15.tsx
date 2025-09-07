"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";
import React from "react";

const ToggleButton = () => {
  const [isLiked, setIsLiked] = React.useState(false);

  return (
    <Button
      size="icon"
      variant="secondary"
      className={cn("rounded-full h-10 w-10", {
        "bg-rose-100 hover:bg-rose-100 focus:bg-rose-100": isLiked,
      })}
      onClick={() => setIsLiked(!isLiked)}
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
