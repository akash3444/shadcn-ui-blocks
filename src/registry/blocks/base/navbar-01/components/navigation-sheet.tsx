import { Menu } from "lucide-react";
import { Button } from "@/registry/ui/base/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/registry/ui/base/sheet";
import { Logo } from "@/registry/blocks/base/navbar-01/components/logo";
import { NavMenu } from "@/registry/blocks/base/navbar-01/components/nav-menu";

export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="px-6 py-3">
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <Logo />
        <NavMenu className="mt-6 [&>div]:h-full" orientation="vertical" />
      </SheetContent>
    </Sheet>
  );
};
