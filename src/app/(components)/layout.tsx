import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s - Shadcn UI Blocks",
    default: "Effortless Shadcn UI Component Previews & Code Snippets",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full p-10 max-w-screen-md">{children}</main>
    </SidebarProvider>
  );
}
