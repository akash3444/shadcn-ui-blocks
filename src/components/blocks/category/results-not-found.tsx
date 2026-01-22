"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";

export const ResultsNotFound = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const searchParamsString = searchParams.toString();
  const query = searchParams.get("q") || "";

  const resetSearch = () => {
    const searchParams = new URLSearchParams(searchParamsString);
    searchParams.delete("q");
    router.push(`${pathname}?${searchParams.toString()}`);
  };

  return (
    <div className="mt-16 flex justify-center text-center">
      <div>
        <span className="font-bold text-7xl">404</span>
        <p className="mt-6 max-w-md text-lg">
          Could not find any result for query &quot;{query}&quot;. <br />
          Please try searching for something else.
        </p>
        <Button className="mt-8" onClick={resetSearch}>
          Reset your search query
        </Button>
      </div>
    </div>
  );
};
