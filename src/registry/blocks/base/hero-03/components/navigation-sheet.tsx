import { Menu } from "lucide-react";
import { Logo } from "@/registry/blocks/base/hero-03/components/logo";
import { NavMenu } from "@/registry/blocks/base/hero-03/components/nav-menu";
import { Button } from "@/registry/ui/base/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/registry/ui/base/sheet";

export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button className="rounded-full" size="icon" variant="outline" />
        }
      >
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
