import { Button } from "@/registry/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/registry/ui/sheet";
import { Menu } from "lucide-react";
import { Logo } from "@/registry/blocks/navbar-01/components/logo";
import { NavMenu } from "@/registry/blocks/navbar-01/components/nav-menu";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export const NavigationSheet = () => {
  return (
    <Sheet>
      <VisuallyHidden>
        <SheetTitle>Navigation Menu</SheetTitle>
      </VisuallyHidden>

      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="px-6 py-3">
        <Logo />
        <NavMenu orientation="vertical" className="mt-6 [&>div]:h-full" />
      </SheetContent>
    </Sheet>
  );
};
