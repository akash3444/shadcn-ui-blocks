import React, { JSX } from "react";
import { NavbarLayout } from "./block-layouts";

export type BlockCategory = {
  name: string;
  title: string;
};

type Plan = "free" | "pro" | "premium";

export const BLOCK_PRICING: Record<Plan, Plan> = {
  free: "free",
  pro: "pro",
  premium: "premium",
};

export type RegistryBlock = {
  name: string;
  title: string;
  slug?: string;
  description: string;
  categories: BlockCategory[];
  component?: React.LazyExoticComponent<() => JSX.Element>;
  files: { path: string }[];
  layout?: React.FC<{ children: React.ReactNode }>;
  pricing?: Plan;
};

export const categories = {
  carousel: {
    name: "carousel",
    title: "Carousel",
  },
  inviteMember: {
    name: "inviteMember",
    title: "Invite Member",
  },
  members: {
    name: "members",
    title: "Members",
  },
  orderConfirmation: {
    name: "orderConfirmation",
    title: "Order Confirmation",
  },
  cta: {
    name: "cta",
    title: "CTA",
  },
  setupGuide: {
    name: "setupGuide",
    title: "Setup Guide",
  },
  integrations: {
    name: "integrations",
    title: "Integrations",
  },
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
  // Hero Blocks
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
    name: "hero-08",
    title: "Hero 08",
    slug: "hero-05",
    description: "A simple hero page",
    component: React.lazy(
      () => import("@/registry/blocks/hero-05/components/hero")
    ),
    files: [],
    categories: [categories.hero],
    pricing: BLOCK_PRICING.premium,
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
    name: "features-08",
    title: "Features 08",
    slug: "features-03",
    description: "A simple features page",
    files: [],
    categories: [categories.features],
    pricing: BLOCK_PRICING.premium,
  },
  {
    name: "features-09",
    title: "Features 09",
    slug: "features-05",
    description: "A simple features page",
    files: [],
    categories: [categories.features],
    pricing: BLOCK_PRICING.premium,
  },
  {
    name: "features-10",
    title: "Features 10",
    slug: "features-06",
    description: "A simple features page",
    files: [],
    categories: [categories.features],
    pricing: BLOCK_PRICING.pro,
  },
  {
    name: "features-11",
    title: "Features 11",
    slug: "features-07",
    description: "A simple features page",
    files: [],
    categories: [categories.features],
    pricing: BLOCK_PRICING.premium,
  },
  {
    name: "features-12",
    title: "Features 12",
    slug: "features-08",
    description: "A simple features page",
    files: [],
    categories: [categories.features],
    pricing: BLOCK_PRICING.premium,
  },
  {
    name: "features-13",
    title: "Features 13",
    slug: "features-09",
    description: "A simple features page",
    files: [],
    categories: [categories.features],
    pricing: BLOCK_PRICING.premium,
  },
  {
    name: "features-14",
    title: "Features 14",
    slug: "features-10",
    description: "A simple features page",
    files: [],
    categories: [categories.features],
    pricing: BLOCK_PRICING.pro,
  },
  // Setup Guide Blocks
  {
    name: "setup-guide-01",
    slug: "setup-guide-01",
    title: "Setup Guide 01",
    description: "A simple tutorial page",
    files: [],
    categories: [categories.setupGuide],
    pricing: BLOCK_PRICING.pro,
  },
  {
    name: "setup-guide-02",
    slug: "setup-guide-02",
    title: "Setup Guide 02",
    description: "A simple tutorial page",
    files: [],
    categories: [categories.setupGuide],
    pricing: BLOCK_PRICING.pro,
  },
  {
    name: "setup-guide-03",
    slug: "setup-guide-03",
    title: "Setup Guide 03",
    description: "A simple tutorial page",
    files: [],
    categories: [categories.setupGuide],
    pricing: BLOCK_PRICING.premium,
  },
  {
    name: "setup-guide-04",
    slug: "setup-guide-04",
    title: "Setup Guide 04",
    description: "A simple tutorial page",
    files: [],
    categories: [categories.setupGuide],
    pricing: BLOCK_PRICING.premium,
  },
  // Integrations Blocks
  {
    name: "integrations-01",
    slug: "integrations-01",
    title: "Integrations 01",
    description: "A simple integrations page",
    files: [],
    categories: [categories.integrations],
    pricing: BLOCK_PRICING.pro,
  },
  {
    name: "integrations-02",
    slug: "integrations-02",
    title: "Integrations 02",
    description: "A simple integrations page",
    files: [],
    categories: [categories.integrations],
    pricing: BLOCK_PRICING.pro,
  },
  {
    name: "integrations-03",
    slug: "integrations-03",
    title: "Integrations 03",
    description: "A simple integrations page",
    files: [],
    categories: [categories.integrations],
    pricing: BLOCK_PRICING.premium,
  },
  {
    name: "integrations-04",
    slug: "integrations-04",
    title: "Integrations 04",
    description: "A simple integrations page",
    files: [],
    categories: [categories.integrations],
    pricing: BLOCK_PRICING.premium,
  },
  {
    name: "integrations-05",
    slug: "integrations-05",
    title: "Integrations 05",
    description: "A simple integrations page",
    files: [],
    categories: [categories.integrations],
    pricing: BLOCK_PRICING.premium,
  },
  // Team Blocks
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
    name: "team-06",
    title: "Team 06",
    slug: "team-03",
    description: "A simple team page",
    files: [],
    categories: [categories.team],
    pricing: BLOCK_PRICING.pro,
  },
  {
    name: "team-07",
    title: "Team 07",
    slug: "team-04",
    description: "A simple team page",
    files: [],
    categories: [categories.team],
    pricing: BLOCK_PRICING.pro,
  },
  {
    slug: "team-05",
    name: "team-08",
    title: "Team 08",
    description: "A simple team page",
    files: [],
    categories: [categories.team],
    pricing: BLOCK_PRICING.premium,
  },
  // Pricing Blocks
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
    name: "pricing-06",
    title: "Pricing 06",
    description: "A simple pricing block",
    component: React.lazy(
      () => import("@/registry/blocks/pricing-06/components/pricing")
    ),
    categories: [categories.pricing],
    files: [{ path: "components/pricing.tsx" }],
  },
  {
    slug: "pricing-03",
    name: "pricing-07",
    title: "Pricing 07",
    description: "A simple pricing block",
    files: [],
    categories: [categories.pricing],
    pricing: BLOCK_PRICING.premium,
  },
  // CTA Blocks
  {
    name: "cta-01",
    slug: "cta-01",
    title: "CTA 01",
    description: "A simple FAQ page",
    files: [],
    categories: [categories.cta],
    pricing: BLOCK_PRICING.pro,
  },
  {
    slug: "cta-02",
    name: "cta-02",
    title: "CTA 02",
    description: "A simple FAQ page",
    files: [],
    categories: [categories.cta],
    pricing: BLOCK_PRICING.pro,
  },
  {
    slug: "cta-03",
    name: "cta-03",
    title: "CTA 03",
    description: "A simple FAQ page",
    files: [],
    categories: [categories.cta],
    pricing: BLOCK_PRICING.premium,
  },
  // FAQ Blocks
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
    slug: "faq-04",
    name: "faq-08",
    title: "FAQ 08",
    description: "A simple FAQ block",
    files: [],
    categories: [categories.faq],
    pricing: BLOCK_PRICING.premium,
  },
  {
    slug: "faq-05",
    name: "faq-09",
    title: "FAQ 09",
    description: "A simple FAQ block",
    files: [],
    categories: [categories.faq],
    pricing: BLOCK_PRICING.premium,
  },
  {
    slug: "faq-06",
    name: "faq-10",
    title: "FAQ 10",
    description: "A simple FAQ page",
    files: [],
    categories: [categories.faq],
    pricing: BLOCK_PRICING.premium,
  },
  // Testimonials Blocks
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
    slug: "testimonials-04",
    name: "testimonials-08",
    title: "Testimonials 08",
    description: "A simple testimonials block",
    files: [],
    categories: [categories.testimonials],
    pricing: BLOCK_PRICING.premium,
  },
  // Login Blocks
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
    slug: "login-02",
    name: "login-06",
    title: "Login 06",
    description: "A simple login page",
    files: [],
    categories: [categories.login, categories.authentication],
    pricing: BLOCK_PRICING.pro,
  },
  {
    slug: "login-03",
    name: "login-07",
    title: "Login 07",
    description: "A simple login page",
    files: [],
    categories: [categories.login, categories.authentication],
    pricing: BLOCK_PRICING.pro,
  },
  // Signup Blocks
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
    slug: "signup-02",
    name: "signup-06",
    title: "Signup 06",
    description: "A simple signup page",
    files: [],
    categories: [categories.signup, categories.authentication],
    pricing: BLOCK_PRICING.pro,
  },
  {
    slug: "signup-03",
    name: "signup-07",
    title: "Signup 07",
    description: "A simple signup page",
    files: [],
    categories: [categories.signup, categories.authentication],
    pricing: BLOCK_PRICING.pro,
  },
  // Navbar Blocks
  {
    name: "navbar-01",
    title: "Navbar 01",
    description: "A simple navbar block",
    component: React.lazy(
      () => import("@/registry/blocks/navbar-01/components/navbar")
    ),
    layout: NavbarLayout,
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
    layout: NavbarLayout,
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
    layout: NavbarLayout,
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
    layout: NavbarLayout,
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
    layout: NavbarLayout,
    categories: [categories.navbar],
    files: [{ path: "components/navbar.tsx" }, { path: "components/logo.tsx" }],
  },
  // Footer Blocks
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
  // Logo Cloud Blocks
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
  {
    slug: "logo-cloud-01",
    name: "logo-cloud-08",
    title: "Logo Cloud 08",
    description: "A simple logo cloud page",
    files: [],
    categories: [categories.logoCloud],
    pricing: BLOCK_PRICING.pro,
  },
  {
    slug: "logo-cloud-04",
    name: "logo-cloud-09",
    title: "Logo Cloud 09",
    description: "A simple logo cloud page",
    files: [],
    categories: [categories.logoCloud],
    pricing: BLOCK_PRICING.premium,
  },
  {
    slug: "logo-cloud-05",
    name: "logo-cloud-10",
    title: "Logo Cloud 10",
    description: "A simple logo cloud page",
    files: [],
    categories: [categories.logoCloud],
    pricing: BLOCK_PRICING.pro,
  },
  {
    slug: "logo-cloud-06",
    name: "logo-cloud-11",
    title: "Logo Cloud 11",
    description: "A simple logo cloud page",
    files: [],
    categories: [categories.logoCloud],
    pricing: BLOCK_PRICING.premium,
  },
  // Stats Blocks
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
    slug: "stats-01",
    name: "stats-03",
    title: "Stats 03",
    description: "A simple stats page",
    files: [],
    categories: [categories.stats],
    pricing: BLOCK_PRICING.pro,
  },
  {
    slug: "stats-02",
    name: "stats-04",
    title: "Stats 04",
    description: "A simple stats page",
    files: [],
    categories: [categories.stats],
    pricing: BLOCK_PRICING.pro,
  },
  {
    slug: "stats-03",
    name: "stats-05",
    title: "Stats 05",
    description: "A simple stats page",
    files: [],
    categories: [categories.stats],
    pricing: BLOCK_PRICING.pro,
  },
  {
    slug: "stats-04",
    name: "stats-06",
    title: "Stats 06",
    description: "A simple stats page",
    files: [],
    categories: [categories.stats],
    pricing: BLOCK_PRICING.premium,
  },
  {
    slug: "stats-05",
    name: "stats-07",
    title: "Stats 07",
    description: "A simple stats page",
    files: [],
    categories: [categories.stats],
    pricing: BLOCK_PRICING.pro,
  },
  // Contact Blocks
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
  // Order Confirmation Blocks
  {
    name: "order-confirmation-01",
    slug: "order-confirmation-01",
    title: "Order Confirmation 01",
    description: "A simple order confirmation page",
    files: [],
    categories: [categories.orderConfirmation],
    pricing: BLOCK_PRICING.pro,
  },
  {
    slug: "order-confirmation-02",
    name: "order-confirmation-02",
    title: "Order Confirmation 02",
    description: "A simple order confirmation page",
    files: [],
    categories: [categories.orderConfirmation],
    pricing: BLOCK_PRICING.premium,
  },
  // Carousel Blocks
  {
    name: "carousel-01",
    slug: "carousel-01",
    title: "Carousel 01",
    description: "A simple carousel block",
    files: [],
    categories: [categories.carousel],
    pricing: BLOCK_PRICING.pro,
  },
  {
    slug: "carousel-02",
    name: "carousel-02",
    title: "Carousel 02",
    description: "A simple carousel block",
    files: [],
    categories: [categories.carousel],
    pricing: BLOCK_PRICING.premium,
  },
  // Invite Member Blocks
  {
    slug: "invite-member-01",
    name: "invite-member-01",
    title: "Invite Member 01",
    description: "A simple invite member block",
    files: [],
    categories: [categories.inviteMember],
    pricing: BLOCK_PRICING.pro,
  },
  {
    slug: "invite-member-02",
    name: "invite-member-02",
    title: "Invite Member 02",
    description: "A simple invite member block",
    files: [],
    categories: [categories.inviteMember],
    pricing: BLOCK_PRICING.pro,
  },
  {
    slug: "invite-member-03",
    name: "invite-member-03",
    title: "Invite Member 03",
    description: "A simple invite member block",
    files: [],
    categories: [categories.inviteMember],
    pricing: BLOCK_PRICING.pro,
  },
  // Members Blocks
  {
    slug: "members-01",
    name: "members-01",
    title: "Members 01",
    description: "A simple members block",
    files: [],
    categories: [categories.members],
    pricing: BLOCK_PRICING.pro,
  },
  {
    slug: "members-02",
    name: "members-02",
    title: "Members 02",
    description: "A simple members block",
    files: [],
    categories: [categories.members],
    pricing: BLOCK_PRICING.pro,
  },
  {
    slug: "members-03",
    name: "members-03",
    title: "Members 03",
    description: "A simple members block",
    files: [],
    categories: [categories.members],
    pricing: BLOCK_PRICING.pro,
  },
  // Timeline Blocks
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
  // Blog Blocks
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
    slug: "blog-01",
    name: "blog-04",
    title: "Blog 04",
    description: "A simple blog page",
    files: [],
    categories: [categories.blog],
    pricing: BLOCK_PRICING.pro,
  },
  {
    slug: "blog-02",
    name: "blog-05",
    title: "Blog 05",
    description: "A simple blog page",
    files: [],
    categories: [categories.blog],
    pricing: BLOCK_PRICING.pro,
  },
  {
    slug: "blog-03",
    name: "blog-06",
    title: "Blog 06",
    description: "A simple blog page",
    files: [],
    categories: [categories.blog],
    pricing: BLOCK_PRICING.premium,
  },
];
