import { BlackFridayBanner } from "@/components/layout/black-friday-banner";
import Footer from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import React from "react";

export default function TemplatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BlackFridayBanner />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
