"use client";

import { ChevronDown, ExternalLink, Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useVersion } from "@/hooks/use-version";
import { cn } from "@/lib/utils";

interface VersionSwitcherProps {
  className?: string;
  variant?: "default" | "compact";
}

export function VersionSwitcher({
  className,
  variant = "default",
}: VersionSwitcherProps) {
  const { currentVersion, allVersions, isLoading } = useVersion();

  const handleVersionSwitch = (url: string) => {
    // Open in same tab for better UX
    window.location.href = url;
  };

  if (isLoading || !currentVersion) {
    return (
      <Button
        className={cn("gap-2 font-medium", className)}
        disabled
        size={variant === "compact" ? "sm" : "default"}
        variant="outline"
      >
        <Loader2 className="h-3 w-3 animate-spin" />
        {variant === "compact" ? "..." : "Loading..."}
      </Button>
    );
  }

  if (variant === "compact") {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className={cn("gap-1 font-medium text-xs", className)}
            size="sm"
            variant="outline"
          >
            {currentVersion.version}
            <ChevronDown className="h-3 w-3" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-64">
          {allVersions.map((version) => (
            <DropdownMenuItem
              className="flex cursor-pointer flex-col items-start gap-1 p-3"
              key={version.version}
              onClick={() => handleVersionSwitch(version.url)}
            >
              <div className="flex w-full items-center gap-2">
                <span className="font-medium">{version.label}</span>
                {version.isCurrentVersion && (
                  <Badge className="text-xs" variant="secondary">
                    Current
                  </Badge>
                )}
                {!version.isCurrentVersion && (
                  <ExternalLink className="ml-auto h-3 w-3 text-muted-foreground" />
                )}
              </div>
              <p className="text-muted-foreground text-xs leading-relaxed">
                {version.description}
              </p>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className={cn("gap-2 font-medium", className)}
          variant="outline"
        >
          {currentVersion.label}
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-72">
        <div className="p-2">
          <p className="mb-2 font-medium text-sm">Switch Version</p>
          {allVersions.map((version) => (
            <DropdownMenuItem
              className="flex cursor-pointer flex-col items-start gap-2 rounded-md p-3"
              key={version.version}
              onClick={() => handleVersionSwitch(version.url)}
            >
              <div className="flex w-full items-center gap-2">
                <span className="font-medium">{version.label}</span>
                {version.isCurrentVersion && (
                  <Badge className="text-xs" variant="secondary">
                    Current
                  </Badge>
                )}
                {!version.isCurrentVersion && (
                  <ExternalLink className="ml-1 h-4 w-4 text-muted-foreground" />
                )}
              </div>
              <p className="text-pretty text-muted-foreground text-xs leading-relaxed">
                {version.description}
              </p>
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
