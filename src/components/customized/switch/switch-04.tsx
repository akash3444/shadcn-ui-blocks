import { Switch } from "@/registry/ui/switch";

const SwitchDisabledDemo = () => (
  <div className="flex items-center gap-3">
    <Switch aria-label="Disabled" disabled />
    <Switch aria-label="Disabled checked" defaultChecked disabled />
  </div>
);

export default SwitchDisabledDemo;
