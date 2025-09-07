import { AppSidebar } from "@/components/app-sidebar";
import { Navbar } from "@/components/layout/navbar";
import { VersionBanner } from "@/components/layout/version-banner";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-slate-100 dark:bg-gray-800">
      <div className="md:hidden">
        <Navbar />
      </div>
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full">
          <VersionBanner />
          <div className="w-full p-10">{children}</div>
        </main>
      </SidebarProvider>
    </div>
  );
}
