import { Features, Hero } from "@/components/home";
import Footer from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { VersionBanner } from "@/components/layout/version-banner";
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
      <VersionBanner />
      <Navbar />
      <div className="-mt-16">
        <Hero />
      </div>
      <Features />
      <Footer />
    </>
  );
}
