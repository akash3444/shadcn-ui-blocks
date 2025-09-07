import { Badge } from "@/components/ui/badge";
import React from "react";

const BadgeGradientDemo = () => {
  return (
    <Badge className="rounded-full border-none bg-linear-to-r from-sky-500 to-indigo-600 text-white">
      Gradient
    </Badge>
  );
};

export default BadgeGradientDemo;
