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
  footer: {
    name: "footer",
    title: "Footer",
  },
  contact: {
    name: "contact",
    title: "Contact",
  },
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
  timeline: {
    name: "timeline",
    title: "Timeline",
  },
  blog: {
    name: "blog",
    title: "Blog",
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
  {
    name: "timeline-01",
    title: "Timeline 01",
    description: "A simple timeline block",
    component: React.lazy(
      () => import("@/registry/blocks/timeline-01/components/timeline")
    ),
    categories: [categories.timeline],
    files: [{ path: "components/timeline.tsx" }],
  },
  {
    name: "timeline-02",
    title: "Timeline 02",
    description: "A simple timeline block",
    component: React.lazy(
      () => import("@/registry/blocks/timeline-02/components/timeline")
    ),
    categories: [categories.timeline],
    files: [{ path: "components/timeline.tsx" }],
  },
  {
    name: "timeline-03",
    title: "Timeline 03",
    description: "A simple timeline block",
    component: React.lazy(
      () => import("@/registry/blocks/timeline-03/components/timeline")
    ),
    categories: [categories.timeline],
    files: [{ path: "components/timeline.tsx" }],
  },
  {
    name: "timeline-04",
    title: "Timeline 04",
    description: "A simple timeline block",
    component: React.lazy(
      () => import("@/registry/blocks/timeline-04/components/timeline")
    ),
    categories: [categories.timeline],
    files: [{ path: "components/timeline.tsx" }],
  },
  {
    name: "timeline-05",
    title: "Timeline 05",
    description: "A simple timeline block",
    component: React.lazy(
      () => import("@/registry/blocks/timeline-05/components/timeline")
    ),
    categories: [categories.timeline],
    files: [{ path: "components/timeline.tsx" }],
  },
  {
    name: "timeline-06",
    title: "Timeline 06",
    description: "A simple timeline block",
    component: React.lazy(
      () => import("@/registry/blocks/timeline-06/components/timeline")
    ),
    categories: [categories.timeline],
    files: [{ path: "components/timeline.tsx" }],
  },
  {
    name: "timeline-07",
    title: "Timeline 07",
    description: "A simple timeline block",
    component: React.lazy(
      () => import("@/registry/blocks/timeline-07/components/timeline")
    ),
    categories: [categories.timeline],
    files: [{ path: "components/timeline.tsx" }],
  },
  {
    name: "blog-01",
    title: "Blog 01",
    description: "A simple blog block",
    component: React.lazy(
      () => import("@/registry/blocks/blog-01/components/blog")
    ),
    categories: [categories.blog],
    files: [{ path: "components/blog.tsx" }],
  },
  {
    name: "blog-02",
    title: "Blog 02",
    description: "A simple blog block",
    component: React.lazy(
      () => import("@/registry/blocks/blog-02/components/blog")
    ),
    categories: [categories.blog],
    files: [{ path: "components/blog.tsx" }],
  },
  {
    name: "blog-03",
    title: "Blog 03",
    description: "A simple blog block",
    component: React.lazy(
      () => import("@/registry/blocks/blog-03/components/blog")
    ),
    categories: [categories.blog],
    files: [{ path: "components/blog.tsx" }],
  },
  {
    name: "contact-01",
    title: "Contact 01",
    description: "A simple contact block",
    component: React.lazy(
      () => import("@/registry/blocks/contact-01/components/contact")
    ),
    categories: [categories.contact],
    files: [{ path: "components/contact.tsx" }],
  },
  {
    name: "contact-02",
    title: "Contact 02",
    description: "A simple contact block",
    component: React.lazy(
      () => import("@/registry/blocks/contact-02/components/contact")
    ),
    categories: [categories.contact],
    files: [{ path: "components/contact.tsx" }],
  },
  {
    name: "contact-03",
    title: "Contact 03",
    description: "A simple contact block",
    component: React.lazy(
      () => import("@/registry/blocks/contact-03/components/contact")
    ),
    categories: [categories.contact],
    files: [{ path: "components/contact.tsx" }],
  },
  {
    name: "footer-01",
    title: "Footer 01",
    description: "A simple footer block",
    component: React.lazy(
      () => import("@/registry/blocks/footer-01/components/footer")
    ),
    categories: [categories.footer],
    files: [{ path: "components/footer.tsx" }],
  },
  {
    name: "footer-02",
    title: "Footer 02",
    description: "A simple footer block",
    component: React.lazy(
      () => import("@/registry/blocks/footer-02/components/footer")
    ),
    categories: [categories.footer],
    files: [{ path: "components/footer.tsx" }],
  },
  {
    name: "footer-03",
    title: "Footer 03",
    description: "A simple footer block",
    component: React.lazy(
      () => import("@/registry/blocks/footer-03/components/footer")
    ),
    categories: [categories.footer],
    files: [{ path: "components/footer.tsx" }],
  },
  {
    name: "footer-04",
    title: "Footer 04",
    description: "A simple footer block",
    component: React.lazy(
      () => import("@/registry/blocks/footer-04/components/footer")
    ),
    categories: [categories.footer],
    files: [{ path: "components/footer.tsx" }],
  },
  {
    name: "footer-05",
    title: "Footer 05",
    description: "A simple footer block",
    component: React.lazy(
      () => import("@/registry/blocks/footer-05/components/footer")
    ),
    categories: [categories.footer],
    files: [{ path: "components/footer.tsx" }],
  },
];
