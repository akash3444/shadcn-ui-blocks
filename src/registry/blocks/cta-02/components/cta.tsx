import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <div className="px-0 py-16 sm:px-6">
      <div className="mx-auto max-w-screen-lg overflow-hidden bg-gradient-to-br from-indigo-500 via-40% via-indigo-500 to-purple-300 px-10 py-14 shadow-indigo-200 sm:rounded-xl sm:shadow-lg dark:shadow-indigo-600/50">
        <h2 className="font-semibold text-4xl text-white tracking-tight sm:text-5xl">
          Build Beautiful UIs, Faster
        </h2>
        <p className="mt-4 text-white text-xl">
          Get seamless access to everything you need, right from your phone.
        </p>
        <Button
          className="mt-10 bg-white text-black ring-4 ring-white/30 hover:bg-white/90"
          size="lg"
        >
          Download Now <ArrowUpRight />
        </Button>
      </div>
    </div>
  );
};

export default CTA;
