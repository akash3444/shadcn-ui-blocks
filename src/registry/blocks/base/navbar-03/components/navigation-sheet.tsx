import { Menu } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/registry/blocks/base/navbar-03/components/logo";
import {
  foods,
  travelMenuItems,
} from "@/registry/blocks/base/navbar-03/config/navbar";
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
      <SheetTrigger render={<Button size="icon" variant="outline" />}>
        <Menu />
      </SheetTrigger>
      <SheetContent className="px-6 py-3">
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <Logo />

        <div className="mt-12 space-y-4 text-base">
          <Link className="inline-block" href="#">
            Home
          </Link>

          <div>
            <div className="font-bold">Food</div>
            <ul className="mt-2 ml-1 space-y-3 border-l pl-4">
              {foods.map((foodItem) => (
                <li key={foodItem.title}>
                  <Link className="flex items-center gap-2" href="#">
                    <foodItem.icon className="mr-2 h-5 w-5 text-muted-foreground" />
                    {foodItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-bold">Travel</div>
            <ul className="mt-2 ml-1 space-y-3 border-l pl-4">
              {travelMenuItems.map((item) => (
                <li key={item.title}>
                  <Link className="flex items-center gap-2" href="#">
                    <item.icon className="mr-2 h-5 w-5 text-muted-foreground" />
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
