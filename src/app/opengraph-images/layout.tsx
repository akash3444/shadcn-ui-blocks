import type React from "react";
import Footer from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

function OpengraphImagesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar className="max-w-7xl border-border border-x px-4" />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default OpengraphImagesLayout;
