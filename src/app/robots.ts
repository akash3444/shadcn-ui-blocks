import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/blocks/*/preview",
    },
    sitemap: "https://www.shadcnui-blocks.com/sitemap.xml",
  };
}
