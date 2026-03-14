import { Heart } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "../app-sidebar/theme-toggle";
import { GithubStarButton } from "../github-star-button";
import { Logo } from "../logo";
import { AppNavigationMenu } from "./app-navigation-menu";
import { NavigationSheet } from "./navigation-sheet";

export const Navbar = ({ className }: { className?: string }) => {
  return (
    <nav className="sticky top-0 z-30 border-b bg-background px-6 ps-4 pe-2 lg:px-0">
      <div
        className={cn(
          "relative z-20 mx-auto flex h-14 max-w-(--breakpoint-lg) items-center justify-between border-primary/8 text-foreground shadow shadow-primary/1",
          className
        )}
      >
        <div className="flex items-center gap-2">
          <Link className="flex items-center gap-2" href="/">
            <Logo className="font-bold" />
            <span className="hidden font-semibold text-lg tracking-tight lg:block">
              Shadcn UI Blocks
            </span>
          </Link>
        </div>

        <div className="ml-2 hidden md:block">
          <AppNavigationMenu />
        </div>

        <div className="flex items-center gap-2">
          <Button asChild className="relative" size="sm">
            <Link
              href="https://github.com/sponsors/akash3444"
              rel="noopener"
              target="_blank"
            >
              <Heart className="size-3.5 fill-current" /> Sponsor Me
            </Link>
          </Button>
          <GithubStarButton size="icon-sm" />
          <ThemeToggle size="icon-sm" />
          <div className="block md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};
