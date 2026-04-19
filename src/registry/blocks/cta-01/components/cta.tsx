"use client";

import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <div className="px-0 py-16 sm:px-6">
      <div className="relative flex w-full flex-col items-center justify-center py-16">
        <h2 className="font-medium text-5xl tracking-tighter">
          Ready to Build Faster?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-center text-muted-foreground text-xl/normal">
          Join thousands of developers using our premium component library to
          ship beautiful UIs in minutes, not hours.
        </p>
        <Button className="mt-8">Get Started</Button>
      </div>
    </div>
  );
};

export default CTA;
