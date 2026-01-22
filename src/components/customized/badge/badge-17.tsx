import { Button } from "@/components/ui/button";
import { Badge } from "@/registry/ui/badge";
import { Bell, MailIcon, MessageSquare } from "lucide-react";

const BadgeDemo = () => {
  return <div className="flex items-center gap-5">
    <Button variant="outline" size="icon" className="relative"><Bell />
    <Badge className="px-1 min-w-5.5 absolute top-0 right-0 translate-x-1/2 -translate-y-1/2">2</Badge></Button>
    <Button variant="outline" size="icon" className="relative"><MailIcon />
    <Badge variant='destructive' className="px-1 min-w-5.5 absolute top-0 right-0 translate-x-1/2 -translate-y-1/2">@</Badge></Button>
    <Button variant="outline" size="icon" className="relative rounded-full"><MessageSquare />
    <Badge variant='destructive' className="px-0.75 py-0.25 min-w-4.5 absolute -top-2 -right-2">@</Badge></Button>
  </div>;
};

export default BadgeDemo;
