import Link from "next/link";
import { GithubStarButton } from "../github-star-button";
import { Logo } from "../logo";
import { AppNavigationMenu } from "./app-navigation-menu";
import { ThemeToggle } from "../app-sidebar/theme-toggle";
import { NavigationSheet } from "./navigation-sheet";
import { VersionSwitcher } from "../version-switcher";

export const Navbar = () => {
  return (
    <nav className="px-6 lg:px-0 pt-4">
      <div className="relative z-20 max-w-screen-lg mx-auto bg-background px-2 pl-3 rounded-full text-foreground border">
        <div className="h-12 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Logo className="font-bold rounded-full" />
              <span className="font-semibold hidden lg:block text-lg">
                Shadcn UI Blocks
              </span>
            </Link>
          </div>

          <div className="ml-2 hidden md:block">
            <AppNavigationMenu />
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <VersionSwitcher variant="compact" />
            </div>
            <GithubStarButton />
            <ThemeToggle />
            <div className="block md:hidden">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
