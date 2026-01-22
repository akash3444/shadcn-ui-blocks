import { Label } from "@/registry/ui/label";
import { Switch } from "@/registry/ui/switch";

const DisabledSwitchDemo = () => {
  return (
    <div className="flex items-center gap-3">
      <Switch disabled id="enable-feature-disabled" />
      <Label htmlFor="enable-feature-disabled">Enable Feature</Label>
    </div>
  );
};

export default DisabledSwitchDemo;
