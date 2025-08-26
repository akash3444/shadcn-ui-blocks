import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Plus, Star, X } from "lucide-react";

const SplitButton = () => {
  return (
    <div className="*:rounded-none [&>button:first-child]:rounded-l-md [&>button:last-child]:rounded-r-md divide-x divide-border/40">
      <Button>
        <Star /> Star
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="icon">
            <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="min-w-52">
          <DropdownMenuLabel className="flex items-center justify-between gap-2">
            Lists
            <Button size="icon" variant="ghost" className="h-5 w-5">
              <X />
            </Button>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>🔮 Future ideas</DropdownMenuItem>
          <DropdownMenuItem>🚀 My stack</DropdownMenuItem>
          <DropdownMenuItem>✨ Inspiration</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Plus /> Create List
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default SplitButton;
