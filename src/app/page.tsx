import type { Metadata } from "next";
import { Features, Hero } from "@/components/home";
import Footer from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  alternates: {
    canonical: absoluteUrl("/"),
  },
};

export default function Home() {
  return (
    <>
      <div className="mask-b-from-85% relative bg-primary/3">
        <Navbar className="border-primary/11 shadow-primary/2 shadow-xl dark:shadow-primary/3" />
        <div className="-mt-24">
          <Hero />
        </div>
      </div>
      <Features />
      <Footer />
    </>
  );
}
