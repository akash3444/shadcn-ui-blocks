"use client";
import { Loader2Icon } from "lucide-react";
import { useLayoutEffect, useState } from "react";
import { codeToHtml } from "@/lib/shiki";

export function CodeBlock({ code }: { code: string }) {
  const [codeHtml, setCodeHtml] = useState<string | null>(null);

  useLayoutEffect(() => {
    codeToHtml(code).then(setCodeHtml);
  }, [code]);

  return codeHtml ? (
    <div dangerouslySetInnerHTML={{ __html: codeHtml }} />
  ) : (
    <div className="flex h-full w-full items-center justify-center">
      <Loader2Icon className="h-8 w-8 animate-spin" />
    </div>
  );
}
