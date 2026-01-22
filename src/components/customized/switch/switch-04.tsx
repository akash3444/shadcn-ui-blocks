import { Switch } from "@/registry/ui/switch";

const SwitchColorsDemo = () => {
  return (
    <div className="flex items-center gap-3">
      <Switch defaultChecked />
      <Switch className="data-[state=checked]:bg-green-500" defaultChecked />
      <Switch className="data-[state=checked]:bg-indigo-500" defaultChecked />
      <Switch className="data-[state=checked]:bg-rose-500" defaultChecked />
    </div>
  );
};

export default SwitchColorsDemo;
