import { Button } from "@/registry/ui/button";
import { ButtonGroup } from "@/registry/ui/button-group";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/ui/dropdown-menu";
import { ChevronDown, Plus, Star, X } from "lucide-react";

const SplitButton = () => {
  return (
    <ButtonGroup>
      <Button variant="outline">
        <Star /> Star
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="icon" variant="outline">
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
    </ButtonGroup>
  );
};

export default SplitButton;
