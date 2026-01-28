export interface RegistryOgImage {
  name: string;
  title: string;
  description?: string;
  files: { path: string; target?: string }[];
}

export const ogImages: RegistryOgImage[] = [
  {
    name: "og-01",
    title: "OG Image 01",
    description: "About Acme – simple centered text on white",
    files: [{ path: "app/opengraph-image.tsx", target: "opengraph-image.tsx" }],
  },
];
