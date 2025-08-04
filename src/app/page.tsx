import { Features, Hero } from "@/components/home";
import Footer from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ProBanner } from "@/components/layout/pro-banner";
import { absoluteUrl } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: absoluteUrl("/"),
  },
};

export default function Home() {
  return (
    <>
      <ProBanner />
      <Navbar />
      <div className="-mt-16">
        <Hero />
      </div>
      <Features />
      <Footer />
    </>
  );
}
