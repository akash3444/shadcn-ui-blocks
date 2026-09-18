import type { RegistryItemCatalogEntry } from "./schema";

export const otherItems = [
  {
    name: "dot-pattern",
    type: "registry:ui",
    title: "Dot Pattern",
    description: "A simple dot pattern",
    files: [
      {
        path: "src/components/ui/dot-pattern.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "particles",
    type: "registry:ui",
    title: "Particles",
    description: "A simple particles",
    files: [
      {
        path: "src/components/ui/particles.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "animated-grid-pattern",
    type: "registry:ui",
    title: "Animated Grid Pattern",
    description: "A simple animated grid pattern",
    files: [
      {
        path: "src/components/ui/animated-grid-pattern.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "marquee",
    type: "registry:ui",
    title: "Marquee",
    description: "A simple marquee",
    files: [
      {
        path: "src/components/ui/marquee.tsx",
        type: "registry:ui",
      },
    ],
    tailwind: {
      config: {
        theme: {
          extend: {
            animation: {
              marquee: "marquee var(--duration) linear infinite",
              "marquee-vertical":
                "marquee-vertical var(--duration) linear infinite",
            },
            keyframes: {
              marquee: {
                from: {
                  transform: "translateX(0)",
                },
                to: {
                  transform: "translateX(calc(-100% - var(--gap)))",
                },
              },
              "marquee-vertical": {
                from: {
                  transform: "translateY(0)",
                },
                to: {
                  transform: "translateY(calc(-100% - var(--gap)))",
                },
              },
            },
          },
        },
      },
    },
  },
  {
    name: "og-01",
    type: "registry:item",
    title: "OG Image 01",
    description: "Simple centered text",
    files: [
      {
        path: "src/registry/og-images/og-01/route.tsx",
        type: "registry:page",
        target: "app/api/og/og-01/route.tsx",
      },
    ],
  },
  {
    name: "og-02",
    type: "registry:item",
    title: "OG Image 02",
    description: "With logo, title and description",
    files: [
      {
        path: "src/registry/og-images/og-02/route.tsx",
        type: "registry:page",
        target: "app/api/og/og-02/route.tsx",
      },
    ],
  },
  {
    name: "og-03",
    type: "registry:item",
    title: "OG Image 03",
    description: "With title and image",
    files: [
      {
        path: "src/registry/og-images/og-03/route.tsx",
        type: "registry:page",
        target: "app/api/og/og-03/route.tsx",
      },
    ],
  },
  {
    name: "og-04",
    type: "registry:item",
    title: "OG Image 04",
    description: "With gradient background",
    files: [
      {
        path: "src/registry/og-images/og-04/route.tsx",
        type: "registry:page",
        target: "app/api/og/og-04/route.tsx",
      },
    ],
  },
  {
    name: "og-05",
    type: "registry:item",
    title: "OG Image 05",
    description: "With Aurora Silk Fade background",
    files: [
      {
        path: "src/registry/og-images/og-05/route.tsx",
        type: "registry:page",
        target: "app/api/og/og-05/route.tsx",
      },
    ],
  },
  {
    name: "og-06",
    type: "registry:item",
    title: "OG Image 06",
    description: "With grid background pattern",
    files: [
      {
        path: "src/registry/og-images/og-06/route.tsx",
        type: "registry:page",
        target: "app/api/og/og-06/route.tsx",
      },
    ],
  },
  {
    name: "og-07",
    type: "registry:item",
    title: "OG Image 07",
    description: "With warm orange glow center",
    files: [
      {
        path: "src/registry/og-images/og-07/route.tsx",
        type: "registry:page",
        target: "app/api/og/og-07/route.tsx",
      },
    ],
  },
  {
    name: "og-08",
    type: "registry:item",
    title: "OG Image 08",
    description: "With title, logo, description and author image",
    files: [
      {
        path: "src/registry/og-images/og-08/route.tsx",
        type: "registry:page",
        target: "app/api/og/og-08/route.tsx",
      },
    ],
  },
  {
    name: "og-09",
    type: "registry:item",
    title: "OG Image 09",
    description: "With spilling background",
    files: [
      {
        path: "src/registry/og-images/og-09/route.tsx",
        type: "registry:page",
        target: "app/api/og/og-09/route.tsx",
      },
    ],
  },
  {
    name: "og-10",
    type: "registry:item",
    title: "OG Image 10",
    description: "With box layout",
    files: [
      {
        path: "src/registry/og-images/og-10/route.tsx",
        type: "registry:page",
        target: "app/api/og/og-10/route.tsx",
      },
    ],
  },
  {
    name: "og-11",
    type: "registry:item",
    title: "OG Image 11",
    description: "With image on the right",
    files: [
      {
        path: "src/registry/og-images/og-11/route.tsx",
        type: "registry:page",
        target: "app/api/og/og-11/route.tsx",
      },
    ],
  },
  {
    name: "og-12",
    type: "registry:item",
    title: "OG Image 12",
    description: "With image on the right",
    files: [
      {
        path: "src/registry/og-images/og-12/route.tsx",
        type: "registry:page",
        target: "app/api/og/og-12/route.tsx",
      },
    ],
  },
  {
    name: "og-13",
    type: "registry:item",
    title: "OG Image 13",
    description: "With image on the right",
    files: [
      {
        path: "src/registry/og-images/og-13/route.tsx",
        type: "registry:page",
        target: "app/api/og/og-13/route.tsx",
      },
    ],
  },
  {
    name: "og-14",
    type: "registry:item",
    title: "OG Image 14",
    description: "With image on the right",
    files: [
      {
        path: "src/registry/og-images/og-14/route.tsx",
        type: "registry:page",
        target: "app/api/og/og-14/route.tsx",
      },
    ],
  },
  {
    name: "og-15",
    type: "registry:item",
    title: "OG Image 15",
    description: "With image on the right",
    files: [
      {
        path: "src/registry/og-images/og-15/route.tsx",
        type: "registry:page",
        target: "app/api/og/og-15/route.tsx",
      },
    ],
  },
  {
    name: "og-16",
    type: "registry:item",
    title: "OG Image 16",
    description: "With image on the right",
    files: [
      {
        path: "src/registry/og-images/og-16/route.tsx",
        type: "registry:page",
        target: "app/api/og/og-16/route.tsx",
      },
    ],
  },
  {
    name: "og-17",
    type: "registry:item",
    title: "OG Image 17",
    description: "With image on the right",
    files: [
      {
        path: "src/registry/og-images/og-17/route.tsx",
        type: "registry:page",
        target: "app/api/og/og-17/route.tsx",
      },
    ],
  },
  {
    name: "og-18",
    type: "registry:item",
    title: "OG Image 18",
    description: "With image on the right",
    files: [
      {
        path: "src/registry/og-images/og-18/route.tsx",
        type: "registry:page",
        target: "app/api/og/og-18/route.tsx",
      },
    ],
  },
  {
    name: "og-19",
    type: "registry:item",
    title: "OG Image 19",
    description: "With image on the right",
    files: [
      {
        path: "src/registry/og-images/og-19/route.tsx",
        type: "registry:page",
        target: "app/api/og/og-19/route.tsx",
      },
    ],
  },
  {
    name: "og-20",
    type: "registry:item",
    title: "OG Image 20",
    description: "With image on the right",
    files: [
      {
        path: "src/registry/og-images/og-20/route.tsx",
        type: "registry:page",
        target: "app/api/og/og-20/route.tsx",
      },
    ],
  },
  {
    name: "og-21",
    type: "registry:item",
    title: "OG Image 21",
    description: "With image on the right",
    files: [
      {
        path: "src/registry/og-images/og-21/route.tsx",
        type: "registry:page",
        target: "app/api/og/og-21/route.tsx",
      },
    ],
  },
  {
    name: "og-22",
    type: "registry:item",
    title: "OG Image 22",
    description: "With image on the right",
    files: [
      {
        path: "src/registry/og-images/og-22/route.tsx",
        type: "registry:page",
        target: "app/api/og/og-22/route.tsx",
      },
    ],
  },
  {
    name: "og-23",
    type: "registry:item",
    title: "OG Image 23",
    description: "With image on the right",
    files: [
      {
        path: "src/registry/og-images/og-23/route.tsx",
        type: "registry:page",
        target: "app/api/og/og-23/route.tsx",
      },
    ],
  },
  {
    name: "og-24",
    type: "registry:item",
    title: "OG Image 24",
    description: "With image on the right",
    files: [
      {
        path: "src/registry/og-images/og-24/route.tsx",
        type: "registry:page",
        target: "app/api/og/og-24/route.tsx",
      },
    ],
  },
  {
    name: "og-25",
    type: "registry:item",
    title: "OG Image 25",
    description: "With image on the right",
    files: [
      {
        path: "src/registry/og-images/og-25/route.tsx",
        type: "registry:page",
        target: "app/api/og/og-25/route.tsx",
      },
    ],
  },
  {
    name: "og-26",
    type: "registry:item",
    title: "OG Image 26",
    description: "With image on the right",
    files: [
      {
        path: "src/registry/og-images/og-26/route.tsx",
        type: "registry:page",
        target: "app/api/og/og-26/route.tsx",
      },
    ],
  },
  {
    name: "og-27",
    type: "registry:item",
    title: "OG Image 27",
    description: "With image on the right",
    files: [
      {
        path: "src/registry/og-images/og-27/route.tsx",
        type: "registry:page",
        target: "app/api/og/og-27/route.tsx",
      },
    ],
  },
  {
    name: "og-28",
    type: "registry:item",
    title: "OG Image 28",
    description: "With image on the right",
    files: [
      {
        path: "src/registry/og-images/og-28/route.tsx",
        type: "registry:page",
        target: "app/api/og/og-28/route.tsx",
      },
    ],
  },
  {
    name: "og-29",
    type: "registry:item",
    title: "OG Image 29",
    description: "With title, description and image",
    files: [
      {
        path: "src/registry/og-images/og-29/route.tsx",
        type: "registry:page",
        target: "app/api/og/og-29/route.tsx",
      },
    ],
  },
  {
    name: "og-30",
    type: "registry:item",
    title: "OG Image 30",
    description: "With title, description and image in box layout",
    files: [
      {
        path: "src/registry/og-images/og-30/route.tsx",
        type: "registry:page",
        target: "app/api/og/og-30/route.tsx",
      },
    ],
  },
  {
    name: "og-31",
    type: "registry:item",
    title: "OG Image 31",
    description: "With image on the right",
    files: [
      {
        path: "src/registry/og-images/og-31/route.tsx",
        type: "registry:page",
        target: "app/api/og/og-31/route.tsx",
      },
    ],
  },
  {
    name: "og-32",
    type: "registry:item",
    title: "OG Image 32",
    description: "With image on the right",
    files: [
      {
        path: "src/registry/og-images/og-32/route.tsx",
        type: "registry:page",
        target: "app/api/og/og-32/route.tsx",
      },
    ],
  },
] as const satisfies readonly RegistryItemCatalogEntry[];
