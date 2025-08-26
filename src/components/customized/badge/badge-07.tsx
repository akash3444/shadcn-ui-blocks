import { Badge } from "@/components/ui/badge";
import React from "react";

const BadgeGradientOutlineDemo = () => {
  return (
    <div className="bg-linear-to-r from-sky-400 to-indigo-600 rounded-full p-[2px] flex items-center justify-center">
      <Badge className="bg-background hover:bg-background text-foreground rounded-full border-none">
        Gradient Outline
      </Badge>
    </div>
  );
};

export default BadgeGradientOutlineDemo;
