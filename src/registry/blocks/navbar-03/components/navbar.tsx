import { Button } from "@/registry/ui/button";
import { Logo } from "@/registry/blocks/navbar-03/components/logo";
import { NavMenu } from "@/registry/blocks/navbar-03/components/nav-menu";
import { NavigationSheet } from "@/registry/blocks/navbar-03/components/navigation-sheet";
import { ArrowUpRight } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="h-16 bg-background border-b">
      <div className="h-full flex items-center justify-between max-w-(--breakpoint-lg) mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Logo />

          {/* Desktop Menu */}
          <NavMenu className="hidden md:block" />
        </div>

        <div className="flex items-center gap-3">
          <Button>
            Get Started <ArrowUpRight />
          </Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
