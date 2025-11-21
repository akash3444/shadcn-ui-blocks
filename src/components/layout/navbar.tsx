import { Sparkles } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "../app-sidebar/theme-toggle";
import { GithubStarButton } from "../github-star-button";
import { Logo } from "../logo";
import { Button } from "@/components/ui/button";
import { VersionSwitcher } from "../version-switcher";
import { AppNavigationMenu } from "./app-navigation-menu";
import { NavigationSheet } from "./navigation-sheet";
import { cn } from "@/lib/utils";

export const Navbar = ({ className }: { className?: string }) => {
  return (
    <nav className="px-6 lg:px-0 bg-background ps-4 pe-2 border-b">
      <div
        className={cn(
          "h-14 flex items-center justify-between relative z-20 max-w-(--breakpoint-lg) mx-auto text-foreground border-primary/8 shadow shadow-primary/1",
          className
        )}
      >
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Logo className="font-bold" />
            <span className="font-semibold hidden lg:block text-lg tracking-tight">
              Shadcn UI Blocks
            </span>
          </Link>
        </div>

        <div className="ml-2 hidden md:block">
          <AppNavigationMenu />
        </div>

        <div className="flex items-center gap-2">
          <Button size="sm" className="relative" asChild>
            <Link
              href="https://pro.shadcnui-blocks.com"
              target="_blank"
              rel="noopener"
            >
              <Sparkles /> Get Pro
            </Link>
          </Button>
          <GithubStarButton size="icon-sm" />
          <div className="hidden sm:block">
            <VersionSwitcher variant="compact" />
          </div>
          <ThemeToggle size="icon-sm" />
          <div className="block md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};
