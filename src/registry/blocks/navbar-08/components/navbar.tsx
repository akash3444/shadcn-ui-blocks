import {
  CircleUserRound,
  Heart,
  Search,
  ShoppingBag,
  Wheat,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  return (
    <div className="px-6">
      <nav className="mx-auto mt-4 flex h-16 max-w-screen-xl items-center justify-between rounded-full border bg-background pr-4 pl-6">
        <div className="flex items-center gap-4">
          {/* Logo */}
          <Link className="flex items-center gap-3" href="/">
            <Wheat />
            <span className="font-bold text-xl">Bloxxee</span>
          </Link>
        </div>

        {/* Search bar */}
        <div className="relative hidden max-w-sm grow md:flex">
          <Input
            className="rounded-full pr-10 pl-4 shadow-none"
            placeholder="What are you looking for?"
            type="text"
          />
          <Button
            className="absolute inset-y-0 right-1 my-auto h-8 w-8"
            size="icon"
          >
            <Search className="!h-5 !w-5" />
          </Button>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Button className="h-10 w-10 md:hidden" size="icon" variant="ghost">
              <Search className="!h-6 !w-6" />
            </Button>
            <Button className="h-10 w-10" size="icon" variant="ghost">
              <Heart className="!h-6 !w-6" />
            </Button>
            <Button className="h-10 w-10" size="icon" variant="ghost">
              <CircleUserRound className="!h-6 !w-6" />
            </Button>
            <Button className="h-10 w-10" size="icon" variant="ghost">
              <ShoppingBag className="!h-6 !w-6" />
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
