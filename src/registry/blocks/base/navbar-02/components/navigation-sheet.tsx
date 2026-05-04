import { Menu } from "lucide-react";
import { Logo } from "@/registry/blocks/base/navbar-02/components/logo";
import { NavMenu } from "@/registry/blocks/base/navbar-02/components/nav-menu";
import { Button } from "@/registry/bases/base/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/registry/bases/base/ui/sheet";

export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger render={<Button size="icon" variant="outline" />}>
        <Menu />
      </SheetTrigger>
      <SheetContent className="px-6 py-3">
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <Logo />
        <NavMenu className="mt-6 [&>div]:h-full" orientation="vertical" />
      </SheetContent>
    </Sheet>
  );
};
