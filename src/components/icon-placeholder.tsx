"use client";

import * as React from "react";
import * as LucideIcons from "lucide-react";
import type { IconLibraryName } from "shadcn/icons";
import { useDesignSystemSearchParams } from "@/app/(components)/lib/search-params";

interface IconPlaceholderProps extends React.ComponentProps<"svg"> {
  lucide?: string;
  tabler?: string;
  hugeicons?: string;
  phosphor?: string;
  remixicon?: string;
}

export function IconPlaceholder({
  lucide,
  tabler,
  hugeicons,
  phosphor,
  remixicon,
  ...props
}: IconPlaceholderProps) {
  const [params] = useDesignSystemSearchParams();
  const iconLibrary = (params?.iconLibrary as IconLibraryName) ?? "lucide";

  const iconName =
    (iconLibrary === "lucide" && lucide) ||
    (iconLibrary === "tabler" && tabler) ||
    (iconLibrary === "hugeicons" && hugeicons) ||
    (iconLibrary === "phosphor" && phosphor) ||
    (iconLibrary === "remixicon" && remixicon) ||
    lucide;

  if (!iconName) {
    return null;
  }

  // Always use Lucide for rendering - other libraries use Lucide as fallback
  // (Multi-library support can be re-enabled when packages are confirmed working)
  const lucideKey = lucide ?? iconName;
  const LucideComponent = (
    LucideIcons as unknown as Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>>
  )[lucideKey];

  return LucideComponent ? <LucideComponent {...props} /> : null;
}
