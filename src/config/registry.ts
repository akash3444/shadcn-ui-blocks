import React, { JSX } from "react";

export type BlockCategory = {
  name: string;
  title: string;
};

export interface RegistryBlock {
  name: string;
  title: string;
  description: string;
  categories: BlockCategory[];
  component: React.LazyExoticComponent<() => JSX.Element>;
  files: { path: string }[];
}

const categories = {
  navbar: {
    name: "navbar",
    title: "Navbar",
  },
  login: {
    name: "login",
    title: "Login",
  },
  authentication: {
    name: "authentication",
    title: "Authentication",
  },
} as const;

export const blocks: RegistryBlock[] = [
  {
    name: "navbar-01",
    title: "Navbar 01",
    description: "A simple navbar block",
    component: React.lazy(
      () => import("@/registry/blocks/navbar-01/components/navbar")
    ),
    categories: [categories.navbar],
    files: [
      { path: "components/navbar.tsx" },
      { path: "components/logo.tsx" },
      { path: "components/nav-menu.tsx" },
      { path: "components/navigation-sheet.tsx" },
    ],
  },
  {
    name: "navbar-02",
    title: "Navbar 02",
    description: "A simple navbar block",
    component: React.lazy(
      () => import("@/registry/blocks/navbar-02/components/navbar")
    ),
    categories: [categories.navbar],
    files: [
      { path: "components/navbar.tsx" },
      { path: "components/logo.tsx" },
      { path: "components/nav-menu.tsx" },
      { path: "components/navigation-sheet.tsx" },
    ],
  },
  {
    name: "navbar-03",
    title: "Navbar 03",
    description: "A simple navbar block",
    component: React.lazy(
      () => import("@/registry/blocks/navbar-03/components/navbar")
    ),
    categories: [categories.navbar],
    files: [
      { path: "components/navbar.tsx" },
      { path: "components/logo.tsx" },
      { path: "components/nav-menu.tsx" },
      { path: "components/navigation-sheet.tsx" },
      { path: "config/navbar.ts" },
    ],
  },
  {
    name: "navbar-04",
    title: "Navbar 04",
    description: "A simple navbar block",
    component: React.lazy(
      () => import("@/registry/blocks/navbar-04/components/navbar")
    ),
    categories: [categories.navbar],
    files: [
      { path: "components/navbar.tsx" },
      { path: "components/logo.tsx" },
      { path: "components/nav-menu.tsx" },
      { path: "components/navigation-sheet.tsx" },
    ],
  },
  {
    name: "navbar-05",
    title: "Navbar 05",
    description: "A simple navbar block",
    component: React.lazy(
      () => import("@/registry/blocks/navbar-05/components/navbar")
    ),
    categories: [categories.navbar],
    files: [{ path: "components/navbar.tsx" }, { path: "components/logo.tsx" }],
  },
  {
    name: "login-01",
    title: "Login 01",
    description: "A simple login block",
    component: React.lazy(
      () => import("@/registry/blocks/login-01/components/login")
    ),
    categories: [categories.login, categories.authentication],
    files: [{ path: "components/login.tsx" }, { path: "components/logo.tsx" }],
  },
  {
    name: "login-02",
    title: "Login 02",
    description: "A simple login block",
    component: React.lazy(
      () => import("@/registry/blocks/login-02/components/login")
    ),
    categories: [categories.login, categories.authentication],
    files: [{ path: "components/login.tsx" }, { path: "components/logo.tsx" }],
  },
  {
    name: "login-03",
    title: "Login 03",
    description: "A simple login block",
    component: React.lazy(
      () => import("@/registry/blocks/login-03/components/login")
    ),
    categories: [categories.login, categories.authentication],
    files: [{ path: "components/login.tsx" }, { path: "components/logo.tsx" }],
  },
  {
    name: "login-04",
    title: "Login 04",
    description: "A simple login block",
    component: React.lazy(
      () => import("@/registry/blocks/login-04/components/login")
    ),
    categories: [categories.login, categories.authentication],
    files: [{ path: "components/login.tsx" }, { path: "components/logo.tsx" }],
  },
  {
    name: "login-05",
    title: "Login 05",
    description: "A simple login block",
    component: React.lazy(
      () => import("@/registry/blocks/login-05/components/login")
    ),
    categories: [categories.login, categories.authentication],
    files: [{ path: "components/login.tsx" }, { path: "components/logo.tsx" }],
  },
];
