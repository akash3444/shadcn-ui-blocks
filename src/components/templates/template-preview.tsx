"use client";

import Image from "next/image";
import { useState } from "react";
import type { Template } from "@/description/templates";
import { cn } from "@/lib/utils";

export default function TemplatePreview({
  eager,
  template,
}: {
  eager: boolean;
  template: Template;
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative h-[520px] overflow-hidden rounded-xl border shadow-xs/2 md:h-[720px]">
      <Image
        alt={`${template.name} preview`}
        className={cn(
          "object-cover object-top transition-opacity",
          isLoaded && "opacity-0"
        )}
        fill
        loading={eager ? "eager" : "lazy"}
        sizes="(min-width: 1536px) 1488px, calc(100vw - 3rem)"
        src={template.image}
      />
      {/** biome-ignore lint/a11y/noNoninteractiveElementInteractions: load controls the preview placeholder */}
      <iframe
        className={cn(
          "h-full w-full bg-background transition-opacity",
          isLoaded ? "opacity-100" : "opacity-0"
        )}
        loading={eager ? "eager" : "lazy"}
        onLoad={() => setIsLoaded(true)}
        src={template.url}
        title={`${template.name} live preview`}
      />
    </div>
  );
}
