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

export const categories = {
  faq: {
    name: "faq",
    title: "FAQ",
  },
  pricing: {
    name: "pricing",
    title: "Pricing",
  },
  features: {
    name: "features",
    title: "Features",
  },
  team: {
    name: "team",
    title: "Team",
  },
  stats: {
    name: "stats",
    title: "Stats",
  },
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
  {
    name: "stats-01",
    title: "Stats 01",
    description: "A simple stats block",
    component: React.lazy(
      () => import("@/registry/blocks/stats-01/components/stats")
    ),
    categories: [categories.stats],
    files: [{ path: "components/stats.tsx" }],
  },
  {
    name: "stats-02",
    title: "Stats 02",
    description: "A simple stats block",
    component: React.lazy(
      () => import("@/registry/blocks/stats-02/components/stats")
    ),
    categories: [categories.stats],
    files: [{ path: "components/stats.tsx" }],
  },
  {
    name: "pricing-01",
    title: "Pricing 01",
    description: "A simple pricing block",
    component: React.lazy(
      () => import("@/registry/blocks/pricing-01/components/pricing")
    ),
    categories: [categories.pricing],
    files: [{ path: "components/pricing.tsx" }],
  },
  {
    name: "pricing-02",
    title: "Pricing 02",
    description: "A simple pricing block",
    component: React.lazy(
      () => import("@/registry/blocks/pricing-02/components/pricing")
    ),
    categories: [categories.pricing],
    files: [{ path: "components/pricing.tsx" }],
  },
  {
    name: "pricing-03",
    title: "Pricing 03",
    description: "A simple pricing block",
    component: React.lazy(
      () => import("@/registry/blocks/pricing-03/components/pricing")
    ),
    categories: [categories.pricing],
    files: [{ path: "components/pricing.tsx" }],
  },
  {
    name: "pricing-04",
    title: "Pricing 04",
    description: "A simple pricing block",
    component: React.lazy(
      () => import("@/registry/blocks/pricing-04/components/pricing")
    ),
    categories: [categories.pricing],
    files: [{ path: "components/pricing.tsx" }],
  },
  {
    name: "pricing-05",
    title: "Pricing 05",
    description: "A simple pricing block",
    component: React.lazy(
      () => import("@/registry/blocks/pricing-05/components/pricing")
    ),
    categories: [categories.pricing],
    files: [{ path: "components/pricing.tsx" }],
  },
  {
    name: "team-01",
    title: "Team 01",
    description: "A simple team block",
    component: React.lazy(
      () => import("@/registry/blocks/team-01/components/team")
    ),
    categories: [categories.team],
    files: [{ path: "components/team.tsx" }],
  },
  {
    name: "team-02",
    title: "Team 02",
    description: "A simple team block",
    component: React.lazy(
      () => import("@/registry/blocks/team-02/components/team")
    ),
    categories: [categories.team],
    files: [{ path: "components/team.tsx" }],
  },
  {
    name: "team-03",
    title: "Team 03",
    description: "A simple team block",
    component: React.lazy(
      () => import("@/registry/blocks/team-03/components/team")
    ),
    categories: [categories.team],
    files: [{ path: "components/team.tsx" }],
  },
  {
    name: "team-04",
    title: "Team 04",
    description: "A simple team block",
    component: React.lazy(
      () => import("@/registry/blocks/team-04/components/team")
    ),
    categories: [categories.team],
    files: [{ path: "components/team.tsx" }],
  },
  {
    name: "team-05",
    title: "Team 05",
    description: "A simple team block",
    component: React.lazy(
      () => import("@/registry/blocks/team-05/components/team")
    ),
    categories: [categories.team],
    files: [{ path: "components/team.tsx" }],
  },
  {
    name: "faq-01",
    title: "FAQ 01",
    description: "A simple FAQ block",
    component: React.lazy(
      () => import("@/registry/blocks/faq-01/components/faq")
    ),
    categories: [categories.faq],
    files: [{ path: "components/faq.tsx" }],
  },
  {
    name: "faq-02",
    title: "FAQ 02",
    description: "A simple FAQ block",
    component: React.lazy(
      () => import("@/registry/blocks/faq-02/components/faq")
    ),
    categories: [categories.faq],
    files: [{ path: "components/faq.tsx" }],
  },
  {
    name: "faq-03",
    title: "FAQ 03",
    description: "A simple FAQ block",
    component: React.lazy(
      () => import("@/registry/blocks/faq-03/components/faq")
    ),
    categories: [categories.faq],
    files: [{ path: "components/faq.tsx" }],
  },
  {
    name: "faq-04",
    title: "FAQ 04",
    description: "A simple FAQ block",
    component: React.lazy(
      () => import("@/registry/blocks/faq-04/components/faq")
    ),
    categories: [categories.faq],
    files: [{ path: "components/faq.tsx" }],
  },
  {
    name: "faq-05",
    title: "FAQ 05",
    description: "A simple FAQ block",
    component: React.lazy(
      () => import("@/registry/blocks/faq-05/components/faq")
    ),
    categories: [categories.faq],
    files: [{ path: "components/faq.tsx" }],
  },
  {
    name: "faq-06",
    title: "FAQ 06",
    description: "A simple FAQ block",
    component: React.lazy(
      () => import("@/registry/blocks/faq-06/components/faq")
    ),
    categories: [categories.faq],
    files: [{ path: "components/faq.tsx" }],
  },
  {
    name: "faq-07",
    title: "FAQ 07",
    description: "A simple FAQ block",
    component: React.lazy(
      () => import("@/registry/blocks/faq-07/components/faq")
    ),
    categories: [categories.faq],
    files: [{ path: "components/faq.tsx" }],
  },
  {
    name: "features-01",
    title: "Features 01",
    description: "A simple features block",
    component: React.lazy(
      () => import("@/registry/blocks/features-01/components/features")
    ),
    categories: [categories.features],
    files: [{ path: "components/features.tsx" }],
  },
  {
    name: "features-02",
    title: "Features 02",
    description: "A simple features block",
    component: React.lazy(
      () => import("@/registry/blocks/features-02/components/features")
    ),
    categories: [categories.features],
    files: [{ path: "components/features.tsx" }],
  },
  {
    name: "features-03",
    title: "Features 03",
    description: "A simple features block",
    component: React.lazy(
      () => import("@/registry/blocks/features-03/components/features")
    ),
    categories: [categories.features],
    files: [{ path: "components/features.tsx" }],
  },
  {
    name: "features-04",
    title: "Features 04",
    description: "A simple features block",
    component: React.lazy(
      () => import("@/registry/blocks/features-04/components/features")
    ),
    categories: [categories.features],
    files: [{ path: "components/features.tsx" }],
  },
  {
    name: "features-05",
    title: "Features 05",
    description: "A simple features block",
    component: React.lazy(
      () => import("@/registry/blocks/features-05/components/features")
    ),
    categories: [categories.features],
    files: [{ path: "components/features.tsx" }],
  },
  {
    name: "features-06",
    title: "Features 06",
    description: "A simple features block",
    component: React.lazy(
      () => import("@/registry/blocks/features-06/components/features")
    ),
    categories: [categories.features],
    files: [{ path: "components/features.tsx" }],
  },
  {
    name: "features-07",
    title: "Features 07",
    description: "A simple features block",
    component: React.lazy(
      () => import("@/registry/blocks/features-07/components/features")
    ),
    categories: [categories.features],
    files: [{ path: "components/features.tsx" }],
  },
];
