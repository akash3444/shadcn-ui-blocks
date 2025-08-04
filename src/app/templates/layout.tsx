import Footer from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ProBanner } from "@/components/layout/pro-banner";
import React from "react";

export default function TemplatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ProBanner />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
