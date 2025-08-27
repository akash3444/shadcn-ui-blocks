import { AppSidebar } from "@/components/app-sidebar";
import { Navbar } from "@/components/layout/navbar";
import { ProBanner } from "@/components/layout/pro-banner";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-primary/3">
      <div className="md:hidden">
        <Navbar />
      </div>
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full">
          <ProBanner />
          <div className="w-full p-10">{children}</div>
        </main>
      </SidebarProvider>
    </div>
  );
}
