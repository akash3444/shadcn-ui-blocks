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
      <Navbar />
      <SidebarProvider
        className="mx-auto min-h-0 max-w-(--breakpoint-2xl) flex-1 gap-6 px-6"
        style={
          {
            "--sidebar-top": "calc(3.5rem + 1px)",
            "--sidebar-gap": "1.5rem",
            // Leaves room for the card border around the collapsed icon rail.
            "--sidebar-width-icon": "calc(3rem + 2px)",
          } as React.CSSProperties
        }
      >
        <AppSidebar />
        <main className="min-w-0 flex-1 py-6">{children}</main>
      </SidebarProvider>
    </div>
  );
}
