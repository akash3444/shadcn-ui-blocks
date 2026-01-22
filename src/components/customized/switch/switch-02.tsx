import { Label } from "@/registry/ui/label";
import { Switch } from "@/registry/ui/switch";

const SwitchWithLabelDemo = () => {
  return (
    <div className="flex items-center gap-3">
      <Switch id="enable-feature" />
      <Label htmlFor="enable-feature">Enable Feature</Label>
    </div>
  );
};

export default SwitchWithLabelDemo;
