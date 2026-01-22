import { SunIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/registry/blocks/navbar-02/components/logo";
import { NavMenu } from "@/registry/blocks/navbar-02/components/nav-menu";
import { NavigationSheet } from "@/registry/blocks/navbar-02/components/navigation-sheet";

const Navbar = () => {
  return (
    <nav className="h-16 border-b bg-background">
      <div className="mx-auto flex h-full max-w-(--breakpoint-xl) items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-12">
          <Logo />

          {/* Desktop Menu */}
          <NavMenu className="hidden md:block" />
        </div>

        <div className="flex items-center gap-3">
          <Button className="hidden sm:inline-flex" variant="outline">
            Sign In
          </Button>
          <Button>Sign Up</Button>
          <Button size="icon" variant="outline">
            <SunIcon />
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
