"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { useDesignSystemSearchParams } from "@/app/(components)/lib/search-params";
import { sendToIframe } from "@/app/(components)/hooks/use-iframe-sync";
import { serializeDesignSystemSearchParams } from "@/app/(components)/lib/search-params";

export function ComponentPreview() {
  const pathname = usePathname();
  const [params, setParams] = useDesignSystemSearchParams();
  const iframeRef = React.useRef<HTMLIFrameElement>(null);

  const component = React.useMemo(() => {
    const match = pathname?.match(/^\/components\/([^/]+)/);
    return match ? match[1] : "accordion";
  }, [pathname]);

  React.useEffect(() => {
    setParams({ component });
  }, [component, setParams]);

  React.useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const sendParams = () => {
      sendToIframe(iframe, "design-system-params", {
        ...params,
        component,
      });
    };

    if (iframe.contentWindow) {
      sendParams();
    }

    iframe.addEventListener("load", sendParams);
    return () => iframe.removeEventListener("load", sendParams);
  }, [params, component]);

  const iframeSrc = React.useMemo(() => {
    const baseUrl = `/preview/${component}`;
    return serializeDesignSystemSearchParams(baseUrl, { ...params, component });
  }, [component, params.preset, params.style, params.baseColor, params.theme, params.font, params.iconLibrary, params.radius, params.menuAccent, params.menuColor]);

  return (
    <div className="relative flex flex-1 flex-col overflow-hidden rounded-lg border">
      <iframe
        key={component}
        ref={iframeRef}
        src={iframeSrc}
        className="size-full min-h-[600px] flex-1"
        title="Component Preview"
      />
    </div>
  );
}
