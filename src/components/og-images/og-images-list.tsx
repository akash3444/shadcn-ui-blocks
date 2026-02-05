"use client";

import { useEffect, useRef, useState } from "react";
import { BlockInstallCommandCopyButton } from "@/components/blocks/block-intsall-command-copy-button";
import { OGImageCodeExplorer } from "@/components/og-images/og-image-code-explorer";
import { OgImagePreview } from "@/components/og-images/og-image-preview";
import { ThemeToggleButton } from "@/components/og-images/theme-toggle-button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { RegistryOgImage } from "@/config/registry/og-images";
import { cn } from "@/lib/utils";
import { OGImageContextProvider } from "@/providers/og-image-provider";

const INITIAL_BLOCK_COUNT = 5;
const BLOCKS_PER_LOAD = 5;

interface OgImagesListProps {
  ogImages: RegistryOgImage[];
}

export function OgImagesList({ ogImages }: OgImagesListProps) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_BLOCK_COUNT);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  // Set up intersection observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry?.isIntersecting && visibleCount < ogImages.length) {
          setVisibleCount((prev) =>
            Math.min(prev + BLOCKS_PER_LOAD, ogImages.length)
          );
        }
      },
      {
        threshold: 0.1,
      }
    );

    const currentRef = loadMoreRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [visibleCount, ogImages.length]);

  const visibleImages = ogImages.slice(0, visibleCount);
  const hasMore = visibleCount < ogImages.length;

  return (
    <>
      {visibleImages.map((ogImage, index) => (
        <OGImageContextProvider key={ogImage.name} name={ogImage.name}>
          <Tabs className="gap-0 border-b" defaultValue="preview">
            <div className="flex items-center justify-between border-b bg-muted/35 px-4 py-2.5 dark:bg-white/15">
              <div className="flex items-center gap-4">
                <h2 className="flex items-center gap-1 font-medium">
                  <span className="mt-0.5 font-mono text-muted-foreground text-sm">
                    {(index + 1).toString().padStart(2, "0")}.
                  </span>{" "}
                  <span>{ogImage.description}</span>
                </h2>
                {!!ogImage.categories?.length && (
                  <div className="flex items-center gap-1.5">
                    {ogImage.categories?.map((category) => (
                      <Badge
                        className="bg-blue-500/20 text-blue-500/95 shadow-xs/3 dark:bg-blue-500/25 dark:text-blue-400"
                        key={category.slug}
                        variant="secondary"
                      >
                        {category.title}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2">
                <BlockInstallCommandCopyButton block={ogImage.name} />
                <ThemeToggleButton />
                <TabsList
                  className={cn(
                    "h-8 bg-foreground/5 dark:bg-background",
                    "*:data-[state=active]:rounded-[7px] dark:*:data-[state=active]:bg-foreground/20"
                  )}
                >
                  <TabsTrigger value="preview">Preview</TabsTrigger>
                  <TabsTrigger value="code">Code</TabsTrigger>
                </TabsList>
              </div>
            </div>
            <TabsContent value="preview">
              <OgImagePreview />
            </TabsContent>
            <TabsContent className="bg-muted/50 p-4" value="code">
              <OGImageCodeExplorer />
            </TabsContent>
          </Tabs>
        </OGImageContextProvider>
      ))}
      {hasMore && (
        <div
          className="flex h-20 items-center justify-center border-b"
          ref={loadMoreRef}
        >
          <div className="text-muted-foreground text-sm">
            Loading more blocks...
          </div>
        </div>
      )}
    </>
  );
}
