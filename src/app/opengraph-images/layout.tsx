import type React from "react";
import Footer from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

function OpengraphImagesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="bg-muted/60">{children}</main>
      <Footer />
    </>
  );
}

export default OpengraphImagesLayout;
