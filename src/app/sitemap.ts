import type { MetadataRoute } from "next";
import { blockCategories } from "@/blocks";
import { components } from "@/description/app-sidebar";

export default function sitemap(): MetadataRoute.Sitemap {
  const componentsSitemap: MetadataRoute.Sitemap = components.map(
    ({ url }) => ({
      url: `https://www.shadcnui-blocks.com${url}`,
      changeFrequency: "weekly",
      priority: 0.7,
    })
  );

  const blocksCategorySitemap: MetadataRoute.Sitemap = blockCategories.map(
    ({ name }) => ({
      url: `https://www.shadcnui-blocks.com/blocks/categories/${name}`,
      changeFrequency: "weekly",
      priority: 0.7,
    })
  );

  return [
    {
      url: "https://www.shadcnui-blocks.com",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.shadcnui-blocks.com/blocks",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.shadcnui-blocks.com/templates",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.shadcnui-blocks.com/components/introduction",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.shadcnui-blocks.com/roadmap",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://www.shadcnui-blocks.com/sponsors",
      changeFrequency: "monthly",
      priority: 0.5,
    },
    ...componentsSitemap,
    ...blocksCategorySitemap,
  ];
}
