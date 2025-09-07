import Footer from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { VersionBanner } from "@/components/layout/version-banner";
import React from "react";

export default function TemplatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <VersionBanner />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
