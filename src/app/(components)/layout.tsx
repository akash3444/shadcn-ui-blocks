import { Suspense } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { Customizer } from "@/components/customizer/customizer";
import { Navbar } from "@/components/layout/navbar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function ComponentsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-svh flex-col">
      <Navbar className="w-full max-w-384 ps-4 pe-10" />
      <div className="flex flex-1">
        <SidebarProvider
          style={
            {
              "--sidebar-top": "calc(3.5rem + 1px)",
              "--customizer-width": "14rem",
            } as React.CSSProperties
          }
        >
          <AppSidebar />
          <main className="flex min-w-0 flex-1">
            <div className="min-w-0 flex-1 px-10 pt-6 pb-10">{children}</div>
            <aside className="hidden shrink-0 border-l px-4 py-6 lg:block lg:w-[var(--customizer-width)]">
              <Suspense fallback={<div className="h-64 animate-pulse rounded-lg bg-muted/50" />}>
                <Customizer />
              </Suspense>
            </aside>
          </main>
        </SidebarProvider>
      </div>
    </div>
  );
}
