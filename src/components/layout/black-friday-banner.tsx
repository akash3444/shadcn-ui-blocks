"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/registry/ui/button";
import Link from "next/link";

export function BlackFridayBanner() {
  return (
    <div className="relative z-50 overflow-hidden bg-foreground text-background border-b">
      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-x-4 py-2.5 max-w-7xl mx-auto">
          {/* Main content */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-center">
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
              <span className="text-sm font-semibold">
                🎉 Black Friday Sale!
              </span>
              <span className="text-sm text-background/70">
                Get <span className="font-bold text-background">20% off</span>{" "}
                using code{" "}
                <span className="inline-flex items-center rounded-md bg-background/7 dark:bg-yellow-50 px-2 py-0.5 text-xs font-semibold text-yellow-400 ring-1 ring-inset ring-background/20 dark:ring-background/20">
                  LAUNCH20
                </span>
              </span>
            </div>

            {/* CTA button */}
            <Button
              variant="secondary"
              asChild
              size="sm"
              className="h-6 !px-2 !gap-1  font-medium transition-all duration-200 group shadow-none"
            >
              <Link
                target="_blank"
                href="https://pro.shadcnui-blocks.com/#pricing"
                className="flex items-center gap-2"
              >
                Get Pro
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
