import React, { JSX } from "react";

interface RegistryBlock {
  name: string;
  title: string;
  description: string;
  component: React.LazyExoticComponent<() => JSX.Element>;
  files: { path: string }[];
}

export const blocks: RegistryBlock[] = [
  {
    name: "navbar-01",
    title: "Navbar 01",
    description: "A simple navbar block",
    component: React.lazy(
      () => import("@/registry/blocks/navbar-01/components/navbar")
    ),
    files: [
      { path: "components/navbar.tsx" },
      { path: "components/logo.tsx" },
      { path: "components/nav-menu.tsx" },
      { path: "components/navigation-sheet.tsx" },
    ],
  },
];
