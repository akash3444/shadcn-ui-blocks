"use client";

import { useOGImageContext } from "@/providers/og-image-provider";

export function OgImagePreview() {
  const { registryItem, mode } = useOGImageContext();
  return (
    <img
      alt={registryItem.name}
      className="mx-auto"
      height={630}
      src={`/api/og/blocks/${registryItem.name}?mode=${mode}`}
      width={1200}
    />
  );
}
