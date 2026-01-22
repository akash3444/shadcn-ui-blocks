import type React from "react";
import Footer from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

export default function TemplatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
