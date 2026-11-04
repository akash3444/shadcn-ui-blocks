import { ArrowUpRight } from "lucide-react";
import {
  Logo01,
  Logo02,
  Logo03,
  Logo04,
  Logo05,
  Logo06,
  Logo07,
  Logo08,
} from "@/components/logos";
import { Button } from "@/registry/ui/button";

const logos = [
  Logo01,
  Logo02,
  Logo03,
  Logo04,
  Logo05,
  Logo06,
  Logo07,
  Logo08,
  Logo01,
];

const LogoCloud = () => {
  return (
    <div className="px-6 py-12">
      <div className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        <div className="flex flex-col rounded-xl bg-muted p-5 max-sm:col-span-full sm:row-span-3">
          <p className="mb-8 max-w-[20ch] text-balance font-medium text-2xl tracking-tight sm:text-xl lg:text-2xl">
            Trusted by teams and companies around the world
          </p>

          <Button className="mt-auto max-sm:me-auto" size="lg">
            View companies <ArrowUpRight />
          </Button>
        </div>
        {logos.map((Logo, index) => (
          <div
            className="flex w-full items-center justify-center rounded-xl bg-muted px-3 py-7"
            key={index}
          >
            <Logo className="h-7 sm:h-8" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoCloud;
