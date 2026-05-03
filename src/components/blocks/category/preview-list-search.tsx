"use client";

import { RotateCcwIcon, SearchIcon } from "lucide-react";
import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useDebounce } from "@/hooks/use-debounce";
import { capture } from "@/lib/analytics";
import { cn } from "@/lib/utils";

const PreviewListSearch = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [value, setValue] = useState(query);
  const [spinning, setSpinning] = useState(false);
  const spinKey = useRef(0);
  const { category = "all" } = useParams<{ category: string }>();
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

  const isDefaultState = category === "all" && !query;

  const handleReset = () => {
    spinKey.current += 1;
    setSpinning(true);
    setValue("");
    const params = new URLSearchParams(searchParamsString);
    params.delete("q");
    router.push(`/blocks/categories/all?${params.toString()}`);
  };

  return (
    <div className="flex items-center gap-2">
      <div className="relative w-full max-w-80">
        <Input
          className="w-full bg-background ps-9"
          onChange={handleChange}
          placeholder="Search"
          value={value}
        />
        <SearchIcon className="absolute inset-s-2 inset-y-0 my-auto h-5 w-5 text-muted-foreground" />
      </div>
      <Tooltip delayDuration={600}>
        <TooltipTrigger asChild>
          <Button
            className="shrink-0"
            disabled={isDefaultState}
            onClick={handleReset}
            size="icon"
            variant="outline"
          >
            <RotateCcwIcon
              className={cn(
                "h-4 w-4",
                spinning && "animate-[spin_0.4s_ease-in-out]"
              )}
              key={spinKey.current}
              onAnimationEnd={() => setSpinning(false)}
            />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Reset filters</TooltipContent>
      </Tooltip>
    </div>
  );
};

export default PreviewListSearch;
