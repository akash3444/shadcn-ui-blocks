"use client";

import { Button } from "@/registry/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function ProBanner() {
  return (
    <div className="relative z-10 overflow-hidden bg-linear-to-r from-violet-500 to-indigo-500 text-white">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-size-[20px_20px] animate-pulse" />
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-x-4 gap-y-1 py-1.5 pb-2 max-w-7xl mx-auto text-center">
          {/* Main content */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <div>
              <span className="text-sm font-semibold block sm:inline">
                🎉 Shadcn UI Blocks Pro is here!
              </span>
              <span className="text-sm text-white/90 block sm:inline sm:ml-2">
                Use code{" "}
                <span className="font-semibold text-yellow-300">LAUNCH20</span>{" "}
                for 20% OFF - Limited time!
              </span>
            </div>
          </div>

          {/* CTA button */}
          <div className="flex items-center gap-2 shrink-0">
            <Button
              asChild
              size="sm"
              className="h-6 bg-white text-purple-600 hover:bg-white/90 font-medium transition-all duration-200 group hidden sm:flex shadow-none"
            >
              <Link
                target="_blank"
                href="https://pro.shadcnui-blocks.com/#pricing"
                className="flex items-center gap-2"
              >
                Claim 20% OFF
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            {/* Mobile CTA */}
            <Button
              asChild
              size="sm"
              className="h-6 bg-white text-purple-600 hover:bg-white/90 font-medium shadow-lg hover:shadow-xl transition-all duration-200 sm:hidden"
            >
              <Link
                target="_blank"
                href="https://pro.shadcnui-blocks.com/#pricing"
                className="flex items-center gap-2"
              >
                Claim 20% OFF
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
