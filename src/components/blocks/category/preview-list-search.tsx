"use client";

import { SearchIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type React from "react";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { useDebounce } from "@/hooks/use-debounce";
import { capture } from "@/lib/analytics";

const PreviewListSearch = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [value, setValue] = useState(query);
  const pathname = usePathname();
  const searchParamsString = searchParams.toString();
  const router = useRouter();
  const debouncedQuery = useDebounce(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSearch = () => {
    const searchParams = new URLSearchParams(searchParamsString);

    if (!(searchParamsString || debouncedQuery)) {
      return;
    }

    if (!debouncedQuery) {
      searchParams.delete("q");
      router.push(`${pathname}?${searchParams.toString()}`);
      return;
    }

    capture("blocks:search", { query_length: debouncedQuery.length });
    searchParams.set("q", debouncedQuery);
    router.push(`${pathname}?${searchParams.toString()}`);
  };

  useEffect(() => {
    handleSearch();
  }, [debouncedQuery]);

  useEffect(() => {
    setValue(query);
  }, [query]);

  return (
    <div className="relative w-full max-w-80">
      <Input
        className="w-full bg-background ps-9"
        onChange={handleChange}
        placeholder="Search"
        value={value}
      />
      <SearchIcon className="absolute inset-s-2 inset-y-0 my-auto h-5 w-5 text-muted-foreground" />
    </div>
  );
};

export default PreviewListSearch;
