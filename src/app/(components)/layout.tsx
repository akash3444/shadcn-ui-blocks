import { AppSidebar } from "@/components/app-sidebar";
import { Navbar } from "@/components/layout/navbar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function RootLayout({
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
            { "--sidebar-top": "calc(3.5rem + 1px)" } as React.CSSProperties
          }
        >
          <AppSidebar />
          <main className="w-full">
            <div className="w-full px-10 pt-6 pb-10">{children}</div>
          </main>
        </SidebarProvider>
      </div>
    </div>
  );
}
