"use client";

import { HTMLAttributes, useEffect, useRef } from "react";

export default function CarbonAd({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  const reference = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!reference.current) return;

    reference.current.innerHTML = "";
    const s = document.createElement("script");
    s.id = "_carbonads_js";
    s.src = `//cdn.carbonads.com/carbon.js?serve=CW7ILKQL&placement=wwwshadcnui-blockscom&format=cover`;
    reference.current.appendChild(s);
  }, []);

  return <div className={className} ref={reference} {...props} />;
}
