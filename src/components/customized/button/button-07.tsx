import { IconPlaceholder } from "@/components/icon-placeholder";
import { getIconProps } from "@/lib/icon-map";
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

const SplitButton = () => {
  return (
    <ButtonGroup>
      <Button variant="outline">
        <IconPlaceholder {...getIconProps("Star")} /> Star
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="icon" variant="outline">
            <IconPlaceholder {...getIconProps("ChevronDown")} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="min-w-52">
          <DropdownMenuLabel className="flex items-center justify-between gap-2">
            Lists
            <Button className="h-5 w-5" size="icon" variant="ghost">
              <IconPlaceholder {...getIconProps("X")} />
            </Button>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>🔮 Future ideas</DropdownMenuItem>
          <DropdownMenuItem>🚀 My stack</DropdownMenuItem>
          <DropdownMenuItem>✨ Inspiration</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <IconPlaceholder {...getIconProps("Plus")} /> Create List
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </ButtonGroup>
  );
};

export default SplitButton;
