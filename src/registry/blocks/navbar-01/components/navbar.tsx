import { Button } from "@/components/ui/button";
import { Logo } from "@/registry/blocks/navbar-01/components/logo";
import { NavMenu } from "@/registry/blocks/navbar-01/components/nav-menu";
import { NavigationSheet } from "@/registry/blocks/navbar-01/components/navigation-sheet";

const Navbar01Page = () => {
  return (
    <div className="min-h-screen bg-muted">
      <nav className="h-16 bg-background border-b">
        <div className="h-full flex items-center justify-between max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 lg:px-8">
          <Logo />

          {/* Desktop Menu */}
          <NavMenu className="hidden md:block" />

          <div className="flex items-center gap-3">
            <Button variant="outline" className="hidden sm:inline-flex">
              Sign In
            </Button>
            <Button>Get Started</Button>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar01Page;
