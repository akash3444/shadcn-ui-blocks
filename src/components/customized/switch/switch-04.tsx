import { Switch } from "@/registry/ui/switch";
import * as React from "react";

const SwitchColorsDemo = () => {
  return (
    <div className="flex items-center gap-3">
      <Switch defaultChecked />
      <Switch defaultChecked className="data-[state=checked]:bg-green-500" />
      <Switch defaultChecked className="data-[state=checked]:bg-indigo-500" />
      <Switch defaultChecked className="data-[state=checked]:bg-rose-500" />
    </div>
  );
};

export default SwitchColorsDemo;
