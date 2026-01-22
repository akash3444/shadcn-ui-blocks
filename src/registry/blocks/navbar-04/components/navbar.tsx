import { Button } from "@/components/ui/button";
import { Logo } from "@/registry/blocks/navbar-04/components/logo";
import { NavMenu } from "@/registry/blocks/navbar-04/components/nav-menu";
import { NavigationSheet } from "@/registry/blocks/navbar-04/components/navigation-sheet";

const Navbar = () => {
  return (
    <nav className="fixed inset-x-4 top-6 mx-auto h-16 max-w-(--breakpoint-xl) rounded-full border bg-background">
      <div className="mx-auto flex h-full items-center justify-between px-4">
        <Logo />

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">
          <Button
            className="hidden rounded-full sm:inline-flex"
            variant="outline"
          >
            Sign In
          </Button>
          <Button className="rounded-full">Get Started</Button>

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
