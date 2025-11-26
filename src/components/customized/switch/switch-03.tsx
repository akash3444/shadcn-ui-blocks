import { Label } from "@/registry/ui/label";
import { Switch } from "@/registry/ui/switch";
import React from "react";

const DisabledSwitchDemo = () => {
  return (
    <div className="flex items-center gap-3">
      <Switch id="enable-feature-disabled" disabled />
      <Label htmlFor="enable-feature-disabled">Enable Feature</Label>
    </div>
  );
};

export default DisabledSwitchDemo;
