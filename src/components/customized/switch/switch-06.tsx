"use client";

import { Switch } from "@/registry/ui/switch";
import React, { useState } from "react";

const ControlledSwitchDemo = () => {
  const [checked, setChecked] = useState<boolean>();

  return <Switch checked={checked} onCheckedChange={setChecked} />;
};

export default ControlledSwitchDemo;
