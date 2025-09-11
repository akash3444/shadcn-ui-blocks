import { Sparkles } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "../app-sidebar/theme-toggle";
import { GithubStarButton } from "../github-star-button";
import { Logo } from "../logo";
import { Button } from "../ui/button";
import { VersionSwitcher } from "../version-switcher";
import { AppNavigationMenu } from "./app-navigation-menu";
import { NavigationSheet } from "./navigation-sheet";

export const Navbar = () => {
  return (
    <nav className="px-6 lg:px-0 pt-4">
      <div className="relative z-20 max-w-(--breakpoint-lg) mx-auto bg-background px-2 pl-3 rounded-full text-foreground border border-primary/8 shadow shadow-primary/1">
        <div className="h-12 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Logo className="font-bold rounded-full" />
              <span className="font-semibold hidden lg:block text-lg tracking-tight">
                Shadcn UI Blocks
              </span>
            </Link>
          </div>

          <div className="ml-2 hidden md:block">
            <AppNavigationMenu />
          </div>

          <div className="flex items-center gap-2">
            <Button
              className="relative rounded-full !px-4 bg-linear-to-br from-primary via-primary/85 to-primary"
              asChild
            >
              <Link
                href="https://pro.shadcnui-blocks.com"
                target="_blank"
                rel="noopener"
              >
                <Sparkles /> Get Pro
              </Link>
            </Button>
            <GithubStarButton />
            <div className="hidden sm:block">
              <VersionSwitcher variant="compact" className="h-9" />
            </div>
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
