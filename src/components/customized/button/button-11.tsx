import { Instagram, Twitch, Twitter } from "lucide-react";
import { Button } from "@/registry/ui/button";

const SocialButtonDemo = () => {
  return (
    <div className="flex items-center gap-2">
      <Button className="rounded-full" size="icon">
        <Twitch />
      </Button>
      <Button className="rounded-full" size="icon">
        <Instagram />
      </Button>
      <Button className="rounded-full" size="icon">
        <Twitter />
      </Button>
    </div>
  );
};

export default SocialButtonDemo;
