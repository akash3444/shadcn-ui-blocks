import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const constructMetadata = (metadata: Metadata): Metadata => {
  return {
    title: metadata.title,
    description: metadata.description,
    openGraph: {
      title: metadata.title!,
      description: metadata.description!,
      siteName: siteConfig.name,
      type: "website",
      images: [
        {
          url: "/images/og-image.png",
          height: 630,
          width: 1200,
          alt: siteConfig.title,
        },
      ],
      locale: "en_US",
      ...metadata.openGraph,
    },
    authors: [
      {
        name: "Akash Moradiya",
        url: "https://twitter.com/akash_3444",
      },
    ],
    ...metadata,
  };
};
