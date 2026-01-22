import { Avatar, AvatarFallback, AvatarImage } from "@/registry/ui/avatar";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/registry/ui/tooltip";

export default function AvatarWithTooltipDemo() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Avatar>
          <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </TooltipTrigger>
      <TooltipContent className="font-semibold">shadcn</TooltipContent>
    </Tooltip>
  );
}
