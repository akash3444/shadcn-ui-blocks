import { IconPlaceholder } from "@/components/icon-placeholder";
import { getIconProps } from "@/lib/icon-map";
import { Avatar, AvatarFallback } from "@/registry/ui/avatar";

export default function AvatarFallbackDemo() {
  return (
    <div className="grid gap-5">
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarFallback className="bg-indigo-500/25 text-indigo-500">
            C
          </AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback className="bg-indigo-500/25 text-indigo-500">
            CN
          </AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback className="bg-indigo-500/25 text-indigo-500">
            <IconPlaceholder {...getIconProps("UserRoundIcon")} className="size-4.5" />
          </AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback className="bg-indigo-500/25 text-indigo-500">
            <IconPlaceholder {...getIconProps("BuildingIcon")} className="size-4.5" />
          </AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback className="bg-indigo-500/25 text-indigo-500">
            <IconPlaceholder {...getIconProps("StoreIcon")} className="size-4.5" />
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
