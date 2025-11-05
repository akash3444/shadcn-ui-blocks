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
  layout?: React.FC<{ children: React.ReactNode }>;
}

export const categories = {
  logoCloud: {
    name: "logoCloud",
    title: "Logo Cloud",
  },
  testimonials: {
    name: "testimonials",
    title: "Testimonials",
  },
  signup: {
    name: "signup",
    title: "Signup",
  },
  hero: {
    name: "hero",
    title: "Hero",
  },
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
  {
    name: "hero-01",
    title: "Hero 01",
    description: "A simple hero block",
    component: React.lazy(
      () => import("@/registry/blocks/hero-01/components/hero")
    ),
    categories: [categories.hero],
    files: [{ path: "components/hero.tsx" }],
  },
  {
    name: "hero-02",
    title: "Hero 02",
    description: "A simple hero block",
    component: React.lazy(
      () => import("@/registry/blocks/hero-02/components/hero")
    ),
    categories: [categories.hero],
    files: [{ path: "components/hero.tsx" }],
  },
  {
    name: "hero-03",
    title: "Hero 03",
    description: "A simple hero block",
    component: React.lazy(
      () => import("@/registry/blocks/hero-03/components/hero")
    ),
    categories: [categories.hero],
    files: [{ path: "components/hero.tsx" }],
  },
  {
    name: "hero-04",
    title: "Hero 04",
    description: "A simple hero block",
    component: React.lazy(
      () => import("@/registry/blocks/hero-04/components/hero")
    ),
    categories: [categories.hero],
    files: [{ path: "components/hero.tsx" }],
  },
  {
    name: "hero-05",
    title: "Hero 05",
    description: "A simple hero block",
    component: React.lazy(
      () => import("@/registry/blocks/hero-05/components/hero")
    ),
    categories: [categories.hero],
    files: [{ path: "components/hero.tsx" }],
  },
  {
    name: "hero-06",
    title: "Hero 06",
    description: "A simple hero block",
    component: React.lazy(
      () => import("@/registry/blocks/hero-06/components/hero")
    ),
    categories: [categories.hero],
    files: [
      { path: "components/hero.tsx" },
      { path: "components/background-pattern.tsx" },
      { path: "components/ui/dot-pattern.tsx" },
      { path: "components/ui/particles.tsx" },
    ],
  },
  {
    name: "hero-07",
    title: "Hero 07",
    description: "A simple hero block",
    component: React.lazy(
      () => import("@/registry/blocks/hero-07/components/hero")
    ),
    categories: [categories.hero],
    files: [
      { path: "components/hero.tsx" },
      { path: "components/ui/animated-grid-pattern.tsx" },
    ],
  },
  {
    name: "signup-01",
    title: "Signup 01",
    description: "A simple signup block",
    component: React.lazy(
      () => import("@/registry/blocks/signup-01/components/signup")
    ),
    categories: [categories.signup, categories.authentication],
    files: [{ path: "components/signup.tsx" }, { path: "components/logo.tsx" }],
  },
  {
    name: "signup-02",
    title: "Signup 02",
    description: "A simple signup block",
    component: React.lazy(
      () => import("@/registry/blocks/signup-02/components/signup")
    ),
    categories: [categories.signup, categories.authentication],
    files: [{ path: "components/signup.tsx" }, { path: "components/logo.tsx" }],
  },
  {
    name: "signup-03",
    title: "Signup 03",
    description: "A simple signup block",
    component: React.lazy(
      () => import("@/registry/blocks/signup-03/components/signup")
    ),
    categories: [categories.signup, categories.authentication],
    files: [{ path: "components/signup.tsx" }, { path: "components/logo.tsx" }],
  },
  {
    name: "signup-04",
    title: "Signup 04",
    description: "A simple signup block",
    component: React.lazy(
      () => import("@/registry/blocks/signup-04/components/signup")
    ),
    categories: [categories.signup, categories.authentication],
    files: [{ path: "components/signup.tsx" }, { path: "components/logo.tsx" }],
  },
  {
    name: "signup-05",
    title: "Signup 05",
    description: "A simple signup block",
    component: React.lazy(
      () => import("@/registry/blocks/signup-05/components/signup")
    ),
    categories: [categories.signup, categories.authentication],
    files: [{ path: "components/signup.tsx" }, { path: "components/logo.tsx" }],
  },
  {
    name: "testimonials-01",
    title: "Testimonials 01",
    description: "A simple testimonials block",
    component: React.lazy(
      () => import("@/registry/blocks/testimonials-01/components/testimonials")
    ),
    categories: [categories.testimonials],
    files: [{ path: "components/testimonials.tsx" }],
  },
  {
    name: "testimonials-02",
    title: "Testimonials 02",
    description: "A simple testimonials block",
    component: React.lazy(
      () => import("@/registry/blocks/testimonials-02/components/testimonials")
    ),
    categories: [categories.testimonials],
    files: [{ path: "components/testimonials.tsx" }],
  },
  {
    name: "testimonials-03",
    title: "Testimonials 03",
    description: "A simple testimonials block",
    component: React.lazy(
      () => import("@/registry/blocks/testimonials-03/components/testimonials")
    ),
    categories: [categories.testimonials],
    files: [{ path: "components/testimonials.tsx" }],
  },
  {
    name: "testimonials-04",
    title: "Testimonials 04",
    description: "A simple testimonials block",
    component: React.lazy(
      () => import("@/registry/blocks/testimonials-04/components/testimonials")
    ),
    categories: [categories.testimonials],
    files: [
      { path: "components/testimonials.tsx" },
      { path: "components/ui/marquee.tsx" },
    ],
  },
  {
    name: "testimonials-05",
    title: "Testimonials 05",
    description: "A simple testimonials block",
    component: React.lazy(
      () => import("@/registry/blocks/testimonials-05/components/testimonials")
    ),
    categories: [categories.testimonials],
    files: [{ path: "components/testimonials.tsx" }],
  },
  {
    name: "testimonials-06",
    title: "Testimonials 06",
    description: "A simple testimonials block",
    component: React.lazy(
      () => import("@/registry/blocks/testimonials-06/components/testimonials")
    ),
    categories: [categories.testimonials],
    files: [{ path: "components/testimonials.tsx" }],
  },
  {
    name: "logo-cloud-01",
    title: "Logo Cloud 01",
    description: "A simple logo cloud block",
    component: React.lazy(
      () => import("@/registry/blocks/logo-cloud-01/components/logo-cloud")
    ),
    categories: [categories.logoCloud],
    files: [
      { path: "components/logo-cloud.tsx" },
      { path: "components/logos.tsx" },
    ],
  },
  {
    name: "logo-cloud-02",
    title: "Logo Cloud 02",
    description: "A simple logo cloud block",
    component: React.lazy(
      () => import("@/registry/blocks/logo-cloud-02/components/logo-cloud")
    ),
    categories: [categories.logoCloud],
    files: [
      { path: "components/logo-cloud.tsx" },
      { path: "components/logos.tsx" },
    ],
  },
  {
    name: "logo-cloud-03",
    title: "Logo Cloud 03",
    description: "A simple logo cloud block",
    component: React.lazy(
      () => import("@/registry/blocks/logo-cloud-03/components/logo-cloud")
    ),
    categories: [categories.logoCloud],
    files: [
      { path: "components/logo-cloud.tsx" },
      { path: "components/logos.tsx" },
    ],
  },
  {
    name: "logo-cloud-04",
    title: "Logo Cloud 04",
    description: "A simple logo cloud block",
    component: React.lazy(
      () => import("@/registry/blocks/logo-cloud-04/components/logo-cloud")
    ),
    categories: [categories.logoCloud],
    files: [
      { path: "components/logo-cloud.tsx" },
      { path: "components/logos.tsx" },
    ],
  },
  {
    name: "logo-cloud-05",
    title: "Logo Cloud 05",
    description: "A simple logo cloud block",
    component: React.lazy(
      () => import("@/registry/blocks/logo-cloud-05/components/logo-cloud")
    ),
    categories: [categories.logoCloud],
    files: [
      { path: "components/logo-cloud.tsx" },
      { path: "components/logos.tsx" },
    ],
  },
  {
    name: "logo-cloud-06",
    title: "Logo Cloud 06",
    description: "A simple logo cloud block",
    component: React.lazy(
      () => import("@/registry/blocks/logo-cloud-06/components/logo-cloud")
    ),
    categories: [categories.logoCloud],
    files: [
      { path: "components/logo-cloud.tsx" },
      { path: "components/logos.tsx" },
      { path: "components/ui/marquee.tsx" },
    ],
  },
  {
    name: "logo-cloud-07",
    title: "Logo Cloud 07",
    description: "A simple logo cloud block",
    component: React.lazy(
      () => import("@/registry/blocks/logo-cloud-07/components/logo-cloud")
    ),
    categories: [categories.logoCloud],
    files: [
      { path: "components/logo-cloud.tsx" },
      { path: "components/logos.tsx" },
      { path: "components/ui/marquee.tsx" },
    ],
  },
];
