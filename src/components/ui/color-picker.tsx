"use client";

import { useState } from "react";
import { HslaColor, HslaColorPicker } from "react-colorful";

export const ColorPicker = () => {
  const [color, setColor] = useState<HslaColor>();
  console.log("color :", color);

  return <HslaColorPicker color={color} onChange={setColor} />;
};
