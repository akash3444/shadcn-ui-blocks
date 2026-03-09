import { ArrowUpRight, Menu, Wheat, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { NavMenu } from "./nav-menu";

const Navbar = () => {
  return (
    <div className="h-16 border-b bg-background px-6">
      <nav className="mx-auto flex h-full max-w-screen-xl items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Logo */}
          <Link className="flex items-center gap-3" href="/">
            <Wheat />
            <span className="font-bold text-xl">Bloxxee</span>
          </Link>
        </div>

        {/* Desktop navigation menu */}
        <div className="hidden md:flex">
          <NavMenu />
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Button>
              Sign Up <ArrowUpRight />
            </Button>
            <Button className="hidden sm:inline-flex" variant="secondary">
              Sign In
            </Button>
          </div>

          {/* Mobile navigation menu */}
          <Popover>
            <PopoverTrigger className="group md:hidden">
              <Menu className="group-data-[state=open]:hidden" />
              <X className="hidden group-data-[state=open]:block" />
            </PopoverTrigger>
            <PopoverContent
              className="!animate-none h-[calc(100svh-4rem)] w-screen rounded-none border-none bg-background"
              sideOffset={20}
            >
              <NavMenu orientation="vertical" />
            </PopoverContent>
          </Popover>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
