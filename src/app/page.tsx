import { Features, Hero } from "@/components/home";
import { BlackFridayBanner } from "@/components/layout/black-friday-banner";
import Footer from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
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
      <BlackFridayBanner />
      <div className="relative bg-primary/3">
        <Navbar className="shadow-xl shadow-primary/2 dark:shadow-primary/3 border-primary/11" />
        <div className="-mt-24">
          <Hero />
        </div>
      </div>
      <Features />
      <Footer />
    </>
  );
}
