import { IconPlaceholder } from "@/components/icon-placeholder";
import { getIconProps } from "@/lib/icon-map";
import { Button } from "@/registry/ui/button";

const SocialButtonDemo = () => {
  return (
    <div className="flex items-center gap-2">
      <Button className="rounded-full" size="icon">
        <IconPlaceholder {...getIconProps("Twitch")} />
      </Button>
      <Button className="rounded-full" size="icon">
        <IconPlaceholder {...getIconProps("Instagram")} />
      </Button>
      <Button className="rounded-full" size="icon">
        <IconPlaceholder {...getIconProps("Twitter")} />
      </Button>
    </div>
  );
};

export default SocialButtonDemo;
