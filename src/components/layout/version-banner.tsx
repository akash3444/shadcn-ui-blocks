"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Info } from "lucide-react";
import Link from "next/link";
import { useVersion } from "@/hooks/use-version";

export function VersionBanner() {
  const { currentVersion, allVersions } = useVersion();

  // Find the latest version (assuming v4 is latest)
  const latestVersion = allVersions.find((v) => v.version === "v4");
  const isLatestVersion = currentVersion?.version === "v4";

  if (!currentVersion) return null;

  return (
    <div className="relative z-10 overflow-hidden bg-gradient-to-r bg-primary text-primary-foreground">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px] animate-pulse" />
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-x-4 gap-y-1 py-1.5 pb-2 max-w-7xl mx-auto text-center">
          {/* Main content */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-2">
              <Info className="h-4 w-4" />
              <span className="text-sm font-semibold">
                You&apos;re viewing {currentVersion.label} -{" "}
                {currentVersion.description}
              </span>
            </div>
          </div>

          {/* CTA button - only show if not on latest version */}
          {!isLatestVersion && latestVersion && (
            <div className="flex items-center gap-2 shrink-0">
              <Button
                asChild
                size="sm"
                variant="secondary"
                className="h-6 font-medium transition-all duration-200 group hidden sm:flex shadow-none"
              >
                <Link
                  href={latestVersion.url}
                  className="flex items-center gap-2"
                >
                  View Latest ({latestVersion.version})
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              {/* Mobile CTA */}
              <Button
                asChild
                size="sm"
                variant="secondary"
                className="h-6 font-medium shadow-lg hover:shadow-xl transition-all duration-200 sm:hidden"
              >
                <Link
                  href={latestVersion.url}
                  className="flex items-center gap-2"
                >
                  View Latest
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          )}

          {/* Show "Latest Version" badge if on latest */}
          {isLatestVersion && (
            <div className="flex items-center gap-2 shrink-0">
              <div className="px-2 py-1 bg-white/20 rounded-full">
                <span className="text-xs font-medium">Latest Version</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
