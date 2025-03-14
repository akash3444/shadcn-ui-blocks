import Footer from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import React from "react";

const CoreLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default CoreLayout;
