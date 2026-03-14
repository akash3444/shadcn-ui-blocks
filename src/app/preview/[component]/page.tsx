import { notFound } from "next/navigation";
import { Suspense } from "react";
import { customizedComponents } from "@/description/customized-components";
import { componentsMap } from "@/description/app-sidebar";
import { PreviewContent } from "./preview-content";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(componentsMap).map((component) => ({
    component,
  }));
}

export default async function PreviewPage({
  params,
}: {
  params: Promise<{ component: string }>;
}) {
  const { component } = await params;
  const details = componentsMap[component as keyof typeof componentsMap];
  const components =
    customizedComponents[component as keyof typeof customizedComponents] || [];

  if (!details) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <Suspense fallback={<div className="min-h-[400px] animate-pulse rounded-lg bg-muted/50" />}>
        <PreviewContent
          component={component}
          components={components}
          columns={details.columns ?? 2}
        />
      </Suspense>
    </div>
  );
}
