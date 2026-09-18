import type { MetadataRoute } from "next";
import { blockCategories } from "@/blocks";
import { components } from "@/description/app-sidebar";
import { absoluteUrl } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const componentsSitemap: MetadataRoute.Sitemap = components.map(
    ({ url }) => ({
      url: absoluteUrl(url),
      changeFrequency: "weekly",
      priority: 0.7,
    })
  );

  const blocksCategorySitemap: MetadataRoute.Sitemap = [
    { name: "all" },
    ...blockCategories,
  ].map(({ name }) => ({
    url: absoluteUrl(`/blocks/categories/${name}`),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [
    {
      url: absoluteUrl("/"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: absoluteUrl("/blocks"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/templates"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/sponsors"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    ...componentsSitemap,
    ...blocksCategorySitemap,
  ];
}
