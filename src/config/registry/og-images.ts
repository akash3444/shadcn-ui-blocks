export interface RegistryOgImage {
  name: string;
  title: string;
  description?: string;
  files: { path: string; target?: string }[];
  categories?: Category[];
}

interface Category {
  slug: string;
  title: string;
}

const categories: Record<string, Category> = {
  simple: {
    slug: "simple",
    title: "Simple",
  },
  blog: {
    slug: "blog",
    title: "Blog",
  },
  article: {
    slug: "article",
    title: "Article",
  },
  lesson: {
    slug: "lesson",
    title: "Lesson",
  },
};

export const ogImages: RegistryOgImage[] = [
  {
    name: "og-01",
    title: "OG Image 01",
    description: "Simple centered text",
    files: [{ path: "app/api/og/route.tsx", target: "route.tsx" }],
  },
  {
    name: "og-02",
    title: "OG Image 02",
    description: "With logo, title and description",
    files: [{ path: "app/api/og/route.tsx", target: "route.tsx" }],
  },
  {
    name: "og-03",
    title: "OG Image 03",
    description: "With title and image",
    files: [{ path: "app/api/og/route.tsx", target: "route.tsx" }],
  },
  {
    name: "og-04",
    title: "OG Image 04",
    description: "With gradient background",
    files: [{ path: "app/api/og/route.tsx", target: "route.tsx" }],
  },
  {
    name: "og-05",
    title: "OG Image 05",
    description: "With Aurora Silk Fade background",
    files: [{ path: "app/api/og/route.tsx", target: "route.tsx" }],
  },
  {
    name: "og-06",
    title: "OG Image 06",
    description: "With grid background pattern",
    files: [{ path: "app/api/og/route.tsx", target: "route.tsx" }],
  },
  {
    name: "og-07",
    title: "OG Image 07",
    description: "With warm orange glow center",
    files: [{ path: "app/api/og/route.tsx", target: "route.tsx" }],
  },
  {
    name: "og-08",
    title: "OG Image 08",
    description: "With title, logo, description and author image",
    files: [{ path: "app/api/og/route.tsx", target: "route.tsx" }],
  },
  {
    name: "og-09",
    title: "OG Image 09",
    description: "With spilling background",
    files: [{ path: "app/api/og/route.tsx", target: "route.tsx" }],
  },
  {
    name: "og-10",
    title: "OG Image 10",
    description: "With box layout",
    files: [{ path: "app/api/og/route.tsx", target: "route.tsx" }],
  },
  {
    name: "og-11",
    title: "OG Image 11",
    description: "With image on the right",
    files: [{ path: "app/api/og/route.tsx", target: "route.tsx" }],
  },
  {
    name: "og-12",
    title: "OG Image 12",
    description: "With image on the right",
    files: [{ path: "app/api/og/route.tsx", target: "route.tsx" }],
  },
  {
    name: "og-13",
    title: "OG Image 13",
    description: "With image on the right",
    files: [{ path: "app/api/og/route.tsx", target: "route.tsx" }],
    categories: [categories.blog],
  },
  {
    name: "og-14",
    title: "OG Image 14",
    description: "With image on the right",
    files: [{ path: "app/api/og/route.tsx", target: "route.tsx" }],
    categories: [categories.blog, categories.lesson, categories.article],
  },
  {
    name: "og-15",
    title: "OG Image 15",
    description: "With image on the right",
    files: [{ path: "app/api/og/route.tsx", target: "route.tsx" }],
    categories: [categories.blog, categories.lesson, categories.article],
  },
  {
    name: "og-16",
    title: "OG Image 16",
    description: "With image on the right",
    files: [{ path: "app/api/og/route.tsx", target: "route.tsx" }],
    categories: [categories.blog, categories.lesson, categories.article],
  },
  {
    name: "og-17",
    title: "OG Image 17",
    description: "With image on the right",
    files: [{ path: "app/api/og/route.tsx", target: "route.tsx" }],
    categories: [categories.blog, categories.lesson, categories.article],
  },
  {
    name: "og-18",
    title: "OG Image 18",
    description: "With image on the right",
    files: [{ path: "app/api/og/route.tsx", target: "route.tsx" }],
    categories: [categories.blog, categories.lesson, categories.article],
  },
  {
    name: "og-19",
    title: "OG Image 19",
    description: "With image on the right",
    files: [{ path: "app/api/og/route.tsx", target: "route.tsx" }],
  },
  {
    name: "og-20",
    title: "OG Image 20",
    description: "With image on the right",
    files: [{ path: "app/api/og/route.tsx", target: "route.tsx" }],
  },
  {
    name: "og-21",
    title: "OG Image 21",
    description: "With image on the right",
    files: [{ path: "app/api/og/route.tsx", target: "route.tsx" }],
  },
  {
    name: "og-22",
    title: "OG Image 22",
    description: "With image on the right",
    files: [{ path: "app/api/og/route.tsx", target: "route.tsx" }],
    categories: [categories.simple],
  },
  {
    name: "og-23",
    title: "OG Image 23",
    description: "With image on the right",
    files: [{ path: "app/api/og/route.tsx", target: "route.tsx" }],
    categories: [categories.simple],
  },
  {
    name: "og-24",
    title: "OG Image 24",
    description: "With image on the right",
    files: [{ path: "app/api/og/route.tsx", target: "route.tsx" }],
    categories: [categories.simple],
  },
  {
    name: "og-25",
    title: "OG Image 25",
    description: "With image on the right",
    files: [{ path: "app/api/og/route.tsx", target: "route.tsx" }],
    categories: [categories.simple],
  },
  {
    name: "og-26",
    title: "OG Image 26",
    description: "With image on the right",
    files: [{ path: "app/api/og/route.tsx", target: "route.tsx" }],
    categories: [categories.simple],
  },
  {
    name: "og-27",
    title: "OG Image 27",
    description: "With image on the right",
    files: [{ path: "app/api/og/route.tsx", target: "route.tsx" }],
    categories: [categories.simple],
  },
  {
    name: "og-28",
    title: "OG Image 28",
    description: "With image on the right",
    files: [{ path: "app/api/og/route.tsx", target: "route.tsx" }],
    categories: [categories.simple],
  },
  {
    name: "og-29",
    title: "OG Image 29",
    description: "With title, description and image",
    files: [{ path: "app/api/og/route.tsx", target: "route.tsx" }],
  },
  {
    name: "og-30",
    title: "OG Image 30",
    description: "With title, description and image in box layout",
    files: [{ path: "app/api/og/route.tsx", target: "route.tsx" }],
  },
  {
    name: "og-31",
    title: "OG Image 31",
    description: "With image on the right",
    files: [{ path: "app/api/og/route.tsx", target: "route.tsx" }],
  },
  {
    name: "og-32",
    title: "OG Image 32",
    description: "With image on the right",
    files: [{ path: "app/api/og/route.tsx", target: "route.tsx" }],
  },
];

/**
 * Display order for the opengraph-images page. List block names in the order
 * you want. Items not listed appear after in registry order. Leave empty to
 * use registry order as-is.
 */
export const ogImagesDisplayOrder: string[] = [
  "og-22",
  "og-23",
  "og-24",
  "og-25",
  "og-26",
  "og-27",
  "og-28",
  "og-01",
  "og-19",
  "og-20",
  "og-31",
  "og-21",
  "og-04",
  "og-02",
  "og-06",
  "og-05",
  "og-07",
  "og-08",
  "og-10",
  "og-13",
  "og-14",
  "og-15",
  "og-16",
  "og-09",
  "og-03",
  "og-29",
  "og-30",
  "og-32",
];

export function getOgImagesInDisplayOrder(): RegistryOgImage[] {
  const byName = new Map(ogImages.map((o) => [o.name, o]));
  if (!ogImagesDisplayOrder.length) {
    return [...ogImages];
  }
  const ordered: RegistryOgImage[] = [];
  for (const name of ogImagesDisplayOrder) {
    const item = byName.get(name);
    if (item) {
      ordered.push(item);
    }
  }
  for (const o of ogImages) {
    if (!ogImagesDisplayOrder.includes(o.name)) {
      ordered.push(o);
    }
  }
  return ordered;
}
