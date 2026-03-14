"use client";

import dynamic from "next/dynamic";
import { DesignSystemProvider } from "@/app/(components)/components/design-system-provider";
import { cn } from "@/lib/utils";

interface ComponentItem {
  title: string;
  type: string;
  name: string;
}

interface PreviewContentProps {
  component: string;
  components: ComponentItem[];
  columns: number;
}

function BlockNotFound() {
  return <p className="text-muted-foreground text-sm">Block not found</p>;
}

export function PreviewContent({
  components,
  columns,
}: PreviewContentProps) {
  return (
    <DesignSystemProvider>
      <div
        className={cn(
          "grid gap-4 rounded-xl border border-border/80 bg-muted/50 p-4",
          {
            "lg:grid-cols-2": columns === 2,
            "sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3": columns === 3,
          }
        )}
      >
        {components.map((item, index) => {
          const DynamicComponent = dynamic(
            () =>
              import(
                `@/components/customized/${item.type}/${item.name}.tsx`
              ).catch(() => BlockNotFound),
            { ssr: false }
          );

          return (
            <div
              key={`${item.title}-${index}`}
              className="flex min-h-32 w-full flex-1 items-center justify-center rounded-lg border bg-background p-6"
            >
              <DynamicComponent />
            </div>
          );
        })}
      </div>
    </DesignSystemProvider>
  );
}
