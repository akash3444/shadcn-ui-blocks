"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const blocksCategoriesRegex = /^\/blocks\/categories\//;

export const FooterLicense = () => {
  const pathname = usePathname();

  if (!blocksCategoriesRegex.test(pathname)) {
    return null;
  }

  return (
    <p className="mt-6 text-muted-foreground/90 text-xs">
      Logos from{" "}
      <Link
        className="hover:text-foreground"
        href="https://uilogos.co"
        rel="noopener noreferrer"
        target="_blank"
      >
        uilogos.co
      </Link>
      , licensed under{" "}
      <Link
        className="hover:text-foreground"
        href="https://creativecommons.org/licenses/by/4.0/"
        rel="noopener noreferrer"
        target="_blank"
      >
        CC BY 4.0
      </Link>
    </p>
  );
};
