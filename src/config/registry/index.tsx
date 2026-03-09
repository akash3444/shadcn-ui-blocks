import React, { type JSX } from "react";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { NavbarLayout } from "./block-layouts";

export interface BlockCategory {
  name: string;
  title: string;
}

export interface RegistryBlock {
  name: string;
  title: string;
  description: string;
  categories: BlockCategory[];
  component?: React.LazyExoticComponent<
    () => JSX.Element | Promise<JSX.Element>
  >;
  files: { path: string }[];
  layout?: React.FC<{ children: React.ReactNode }>;
}

export const categories = {
  banner: {
    name: "banner",
    title: "Banner",
  },
  carousel: {
    name: "carousel",
    title: "Carousel",
  },
  changelog: {
    name: "changelog",
    title: "Changelog",
  },
  codeBlock: {
    name: "codeBlock",
    title: "Code Block",
  },
  emptyState: {
    name: "emptyState",
    title: "Empty State",
  },
  inviteMember: {
    name: "inviteMember",
    title: "Invite Member",
  },
  keyboardShortcuts: {
    name: "keyboardShortcuts",
    title: "Keyboard Shortcuts",
  },
  members: {
    name: "members",
    title: "Members",
  },
  orderConfirmation: {
    name: "orderConfirmation",
    title: "Order Confirmation",
  },
  profile: {
    name: "profile",
    title: "Profile",
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
  verification: {
    name: "verification",
    title: "Verification",
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

const FooterLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex h-full min-h-screen w-full items-end bg-muted/30">
      <DotPattern className="opacity-50" cx={15} height={24} width={24} />
      <div className="relative z-10 grow">{children}</div>
    </div>
  );
};

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
    description: "A simple hero block",
    component: React.lazy(
      () => import("@/registry/blocks/hero-08/components/hero")
    ),
    categories: [categories.hero],
    files: [
      { path: "components/hero.tsx" },
      { path: "components/logos.tsx" },
      { path: "components/navbar.tsx" },
      { path: "components/nav-menu.tsx" },
    ],
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
    description: "A simple features block",
    component: React.lazy(
      () => import("@/registry/blocks/features-08/components/features")
    ),
    categories: [categories.features],
    files: [{ path: "components/features.tsx" }],
  },
  {
    name: "features-09",
    title: "Features 09",
    description: "A simple features block",
    component: React.lazy(
      () => import("@/registry/blocks/features-09/components/features")
    ),
    categories: [categories.features],
    files: [
      { path: "components/features.tsx" },
      { path: "components/stats-card.tsx" },
    ],
  },
  {
    name: "features-10",
    title: "Features 10",
    description: "A simple features block",
    component: React.lazy(
      () => import("@/registry/blocks/features-10/components/features")
    ),
    categories: [categories.features],
    files: [{ path: "components/features.tsx" }],
  },
  {
    name: "features-11",
    title: "Features 11",
    description: "A simple features block",
    component: React.lazy(
      () => import("@/registry/blocks/features-11/components/features")
    ),
    categories: [categories.features],
    files: [{ path: "components/features.tsx" }],
  },
  {
    name: "features-12",
    title: "Features 12",
    description: "A simple features block",
    component: React.lazy(
      () => import("@/registry/blocks/features-12/components/features")
    ),
    categories: [categories.features],
    files: [{ path: "components/features.tsx" }],
  },
  {
    name: "features-13",
    title: "Features 13",
    description: "A simple features block",
    component: React.lazy(
      () => import("@/registry/blocks/features-13/components/features")
    ),
    categories: [categories.features],
    files: [{ path: "components/features.tsx" }],
  },
  {
    name: "features-14",
    title: "Features 14",
    description: "A simple features block",
    component: React.lazy(
      () => import("@/registry/blocks/features-14/components/features")
    ),
    categories: [categories.features],
    files: [{ path: "components/features.tsx" }],
  },
  {
    name: "features-15",
    title: "Features 15",
    description: "A simple features block",
    component: React.lazy(
      () => import("@/registry/blocks/features-15/components/features")
    ),
    categories: [categories.features],
    files: [{ path: "components/features.tsx" }],
  },
  {
    name: "features-16",
    title: "Features 16",
    description: "A simple features block",
    component: React.lazy(
      () => import("@/registry/blocks/features-16/components/features")
    ),
    categories: [categories.features],
    files: [{ path: "components/features.tsx" }],
  },
  {
    name: "features-17",
    title: "Features 17",
    description: "A simple features block",
    component: React.lazy(
      () => import("@/registry/blocks/features-17/components/features")
    ),
    categories: [categories.features],
    files: [{ path: "components/features.tsx" }],
  },
  {
    name: "features-18",
    title: "Features 18",
    description: "A simple features block",
    component: React.lazy(
      () => import("@/registry/blocks/features-18/components/features")
    ),
    categories: [categories.features],
    files: [{ path: "components/features.tsx" }],
  },
  // Integrations Blocks
  {
    name: "integrations-01",
    title: "Integrations 01",
    description: "A simple integrations block",
    component: React.lazy(
      () => import("@/registry/blocks/integrations-01/components/integrations")
    ),
    categories: [categories.integrations],
    files: [{ path: "components/integrations.tsx" }],
  },
  {
    name: "integrations-02",
    title: "Integrations 02",
    description: "A simple integrations block",
    component: React.lazy(
      () => import("@/registry/blocks/integrations-02/components/integrations")
    ),
    categories: [categories.integrations],
    files: [{ path: "components/integrations.tsx" }],
  },
  {
    name: "integrations-03",
    title: "Integrations 03",
    description: "A simple integrations block",
    component: React.lazy(
      () => import("@/registry/blocks/integrations-03/components/integrations")
    ),
    categories: [categories.integrations],
    files: [{ path: "components/integrations.tsx" }],
  },
  {
    name: "integrations-04",
    title: "Integrations 04",
    description: "A simple integrations block",
    component: React.lazy(
      () => import("@/registry/blocks/integrations-04/components/integrations")
    ),
    categories: [categories.integrations],
    files: [{ path: "components/integrations.tsx" }],
  },
  {
    name: "integrations-05",
    title: "Integrations 05",
    description: "A simple integrations block",
    component: React.lazy(
      () => import("@/registry/blocks/integrations-05/components/integrations")
    ),
    categories: [categories.integrations],
    files: [{ path: "components/integrations.tsx" }],
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
    description: "A simple team block",
    component: React.lazy(
      () => import("@/registry/blocks/team-06/components/team")
    ),
    categories: [categories.team],
    files: [{ path: "components/team.tsx" }],
  },
  {
    name: "team-07",
    title: "Team 07",
    description: "A simple team block",
    component: React.lazy(
      () => import("@/registry/blocks/team-07/components/team")
    ),
    categories: [categories.team],
    files: [{ path: "components/team.tsx" }],
  },
  {
    name: "team-08",
    title: "Team 08",
    description: "A simple team block",
    component: React.lazy(
      () => import("@/registry/blocks/team-08/components/team")
    ),
    categories: [categories.team],
    files: [{ path: "components/team.tsx" }],
  },
  {
    name: "team-09",
    title: "Team 09",
    description: "A simple team block",
    component: React.lazy(
      () => import("@/registry/blocks/team-09/components/team")
    ),
    categories: [categories.team],
    files: [{ path: "components/team.tsx" }],
  },
  {
    name: "team-10",
    title: "Team 10",
    description: "A simple team block",
    component: React.lazy(
      () => import("@/registry/blocks/team-10/components/team")
    ),
    categories: [categories.team],
    files: [{ path: "components/team.tsx" }],
  },
  {
    name: "team-11",
    title: "Team 11",
    description: "A simple team block",
    component: React.lazy(
      () => import("@/registry/blocks/team-11/components/team")
    ),
    categories: [categories.team],
    files: [{ path: "components/team.tsx" }],
  },
  {
    name: "team-12",
    title: "Team 12",
    description: "A simple team block",
    component: React.lazy(
      () => import("@/registry/blocks/team-12/components/team")
    ),
    categories: [categories.team],
    files: [{ path: "components/team.tsx" }],
  },
  {
    name: "team-13",
    title: "Team 13",
    description: "A simple team block",
    component: React.lazy(
      () => import("@/registry/blocks/team-13/components/team")
    ),
    categories: [categories.team],
    files: [{ path: "components/team.tsx" }],
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
    name: "pricing-07",
    title: "Pricing 07",
    description: "A simple pricing block",
    component: React.lazy(
      () => import("@/registry/blocks/pricing-07/components/pricing")
    ),
    categories: [categories.pricing],
    files: [{ path: "components/pricing.tsx" }],
  },
  {
    name: "pricing-08",
    title: "Pricing 08",
    description: "A simple pricing block",
    component: React.lazy(
      () => import("@/registry/blocks/pricing-08/components/pricing")
    ),
    categories: [categories.pricing],
    files: [{ path: "components/pricing.tsx" }],
  },
  {
    name: "pricing-09",
    title: "Pricing 09",
    description: "A simple pricing block",
    component: React.lazy(
      () => import("@/registry/blocks/pricing-09/components/pricing")
    ),
    categories: [categories.pricing],
    files: [
      { path: "components/pricing.tsx" },
      { path: "components/magicui/border-beam.tsx" },
    ],
  },
  {
    name: "pricing-10",
    title: "Pricing 10",
    description: "A simple pricing block",
    component: React.lazy(
      () => import("@/registry/blocks/pricing-10/components/pricing")
    ),
    categories: [categories.pricing],
    files: [{ path: "components/pricing.tsx" }],
  },
  // CTA Blocks
  {
    name: "cta-01",
    title: "CTA 01",
    description: "A simple CTA block",
    component: React.lazy(
      () => import("@/registry/blocks/cta-01/components/cta")
    ),
    categories: [categories.cta],
    files: [{ path: "components/cta.tsx" }],
  },
  {
    name: "cta-02",
    title: "CTA 02",
    description: "A simple CTA block",
    component: React.lazy(
      () => import("@/registry/blocks/cta-02/components/cta")
    ),
    categories: [categories.cta],
    files: [{ path: "components/cta.tsx" }],
  },
  {
    name: "cta-03",
    title: "CTA 03",
    description: "A simple CTA block",
    component: React.lazy(
      () => import("@/registry/blocks/cta-03/components/cta")
    ),
    categories: [categories.cta],
    files: [{ path: "components/cta.tsx" }],
  },
  {
    name: "cta-04",
    title: "CTA 04",
    description: "A simple CTA block",
    component: React.lazy(
      () => import("@/registry/blocks/cta-04/components/cta")
    ),
    categories: [categories.cta],
    files: [{ path: "components/cta.tsx" }],
  },
  {
    name: "cta-05",
    title: "CTA 05",
    description: "A simple CTA block",
    component: React.lazy(
      () => import("@/registry/blocks/cta-05/components/cta")
    ),
    categories: [categories.cta],
    files: [{ path: "components/cta.tsx" }],
  },
  {
    name: "cta-06",
    title: "CTA 06",
    description: "A simple CTA block",
    component: React.lazy(
      () => import("@/registry/blocks/cta-06/components/cta")
    ),
    categories: [categories.cta],
    files: [{ path: "components/cta.tsx" }],
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
    name: "faq-08",
    title: "FAQ 08",
    description: "A simple FAQ block",
    component: React.lazy(
      () => import("@/registry/blocks/faq-08/components/faq")
    ),
    categories: [categories.faq],
    files: [{ path: "components/faq.tsx" }],
  },
  {
    name: "faq-09",
    title: "FAQ 09",
    description: "A simple FAQ block",
    component: React.lazy(
      () => import("@/registry/blocks/faq-09/components/faq")
    ),
    categories: [categories.faq],
    files: [{ path: "components/faq.tsx" }],
  },
  {
    name: "faq-10",
    title: "FAQ 10",
    description: "A simple FAQ block",
    component: React.lazy(
      () => import("@/registry/blocks/faq-10/components/faq")
    ),
    categories: [categories.faq],
    files: [{ path: "components/faq.tsx" }],
  },
  {
    name: "faq-11",
    title: "FAQ 11",
    description: "A simple FAQ block",
    component: React.lazy(
      () => import("@/registry/blocks/faq-11/components/faq")
    ),
    categories: [categories.faq],
    files: [{ path: "components/faq.tsx" }],
  },
  {
    name: "faq-12",
    title: "FAQ 12",
    description: "A simple FAQ block",
    component: React.lazy(
      () => import("@/registry/blocks/faq-12/components/faq")
    ),
    categories: [categories.faq],
    files: [{ path: "components/faq.tsx" }],
  },
  {
    name: "faq-13",
    title: "FAQ 13",
    description: "A simple FAQ block",
    component: React.lazy(
      () => import("@/registry/blocks/faq-13/components/faq")
    ),
    categories: [categories.faq],
    files: [{ path: "components/faq.tsx" }],
  },
  {
    name: "faq-14",
    title: "FAQ 14",
    description: "A simple FAQ block",
    component: React.lazy(
      () => import("@/registry/blocks/faq-14/components/faq")
    ),
    categories: [categories.faq],
    files: [{ path: "components/faq.tsx" }],
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
    name: "testimonials-07",
    title: "Testimonials 07",
    description: "A simple testimonials block",
    component: React.lazy(
      () => import("@/registry/blocks/testimonials-07/components/testimonials")
    ),
    categories: [categories.testimonials],
    files: [{ path: "components/testimonials.tsx" }],
  },
  {
    name: "testimonials-08",
    title: "Testimonials 08",
    description: "A simple testimonials block",
    component: React.lazy(
      () => import("@/registry/blocks/testimonials-08/components/testimonials")
    ),
    categories: [categories.testimonials],
    files: [{ path: "components/testimonials.tsx" }],
  },
  {
    name: "testimonials-09",
    title: "Testimonials 09",
    description: "A simple testimonials block",
    component: React.lazy(
      () => import("@/registry/blocks/testimonials-09/components/testimonials")
    ),
    categories: [categories.testimonials],
    files: [{ path: "components/testimonials.tsx" }],
  },
  {
    name: "testimonials-10",
    title: "Testimonials 10",
    description: "A simple testimonials block",
    component: React.lazy(
      () => import("@/registry/blocks/testimonials-10/components/testimonials")
    ),
    categories: [categories.testimonials],
    files: [{ path: "components/testimonials.tsx" }],
  },
  {
    name: "testimonials-11",
    title: "Testimonials 11",
    description: "A simple testimonials block",
    component: React.lazy(
      () => import("@/registry/blocks/testimonials-11/components/testimonials")
    ),
    categories: [categories.testimonials],
    files: [{ path: "components/testimonials.tsx" }],
  },
  {
    name: "testimonials-12",
    title: "Testimonials 12",
    description: "A simple testimonials block",
    component: React.lazy(
      () => import("@/registry/blocks/testimonials-12/components/testimonials")
    ),
    categories: [categories.testimonials],
    files: [{ path: "components/testimonials.tsx" }],
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
    name: "login-06",
    title: "Login 06",
    description: "A simple login block",
    component: React.lazy(
      () => import("@/registry/blocks/login-06/components/login")
    ),
    categories: [categories.login, categories.authentication],
    files: [
      { path: "components/login.tsx" },
      { path: "components/login-form.tsx" },
      { path: "components/icons.tsx" },
    ],
  },
  {
    name: "login-07",
    title: "Login 07",
    description: "A simple login block",
    component: React.lazy(
      () => import("@/registry/blocks/login-07/components/login")
    ),
    categories: [categories.login, categories.authentication],
    files: [
      { path: "components/login.tsx" },
      { path: "components/login-form.tsx" },
      { path: "components/icons.tsx" },
      { path: "components/testimonials.tsx" },
    ],
  },
  {
    name: "login-08",
    title: "Login 08",
    description: "A simple login block",
    component: React.lazy(
      () => import("@/registry/blocks/login-08/components/login")
    ),
    categories: [categories.login, categories.authentication],
    files: [
      { path: "components/login.tsx" },
      { path: "components/login-form.tsx" },
      { path: "components/icons.tsx" },
    ],
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
    name: "signup-06",
    title: "Signup 06",
    description: "A simple signup block",
    component: React.lazy(
      () => import("@/registry/blocks/signup-06/components/signup")
    ),
    categories: [categories.signup, categories.authentication],
    files: [
      { path: "components/signup.tsx" },
      { path: "components/signup-form.tsx" },
      { path: "components/icons.tsx" },
    ],
  },
  {
    name: "signup-07",
    title: "Signup 07",
    description: "A simple signup block",
    component: React.lazy(
      () => import("@/registry/blocks/signup-07/components/signup")
    ),
    categories: [categories.signup, categories.authentication],
    files: [
      { path: "components/signup.tsx" },
      { path: "components/signup-form.tsx" },
      { path: "components/icons.tsx" },
      { path: "components/testimonials.tsx" },
    ],
  },
  {
    name: "signup-08",
    title: "Signup 08",
    description: "A simple signup block",
    component: React.lazy(
      () => import("@/registry/blocks/signup-08/components/signup")
    ),
    categories: [categories.signup, categories.authentication],
    files: [
      { path: "components/signup.tsx" },
      { path: "components/signup-form.tsx" },
      { path: "components/icons.tsx" },
    ],
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
  {
    name: "footer-06",
    title: "Footer 06",
    description: "A simple footer block",
    component: React.lazy(
      () => import("@/registry/blocks/footer-06/components/footer")
    ),
    categories: [categories.footer],
    files: [{ path: "components/footer.tsx" }],
    layout: FooterLayout,
  },
  {
    name: "footer-07",
    title: "Footer 07",
    description: "A simple footer block",
    component: React.lazy(
      () => import("@/registry/blocks/footer-07/components/footer")
    ),
    categories: [categories.footer],
    files: [{ path: "components/footer.tsx" }],
    layout: FooterLayout,
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
    name: "logo-cloud-08",
    title: "Logo Cloud 08",
    description: "A simple logo cloud block",
    component: React.lazy(
      () => import("@/registry/blocks/logo-cloud-08/components/logo-cloud")
    ),
    categories: [categories.logoCloud],
    files: [
      { path: "components/logo-cloud.tsx" },
      { path: "components/logos.tsx" },
    ],
  },
  {
    name: "logo-cloud-09",
    title: "Logo Cloud 09",
    description: "A simple logo cloud block",
    component: React.lazy(
      () => import("@/registry/blocks/logo-cloud-09/components/logo-cloud")
    ),
    categories: [categories.logoCloud],
    files: [
      { path: "components/logo-cloud.tsx" },
      { path: "components/logos.tsx" },
    ],
  },
  {
    name: "logo-cloud-10",
    title: "Logo Cloud 10",
    description: "A simple logo cloud block",
    component: React.lazy(
      () => import("@/registry/blocks/logo-cloud-10/components/logo-cloud")
    ),
    categories: [categories.logoCloud],
    files: [
      { path: "components/logo-cloud.tsx" },
      { path: "components/logos.tsx" },
      { path: "components/magicui/marquee.tsx" },
    ],
  },
  {
    name: "logo-cloud-11",
    title: "Logo Cloud 11",
    description: "A simple logo cloud block",
    component: React.lazy(
      () => import("@/registry/blocks/logo-cloud-11/components/logo-cloud")
    ),
    categories: [categories.logoCloud],
    files: [
      { path: "components/logo-cloud.tsx" },
      { path: "components/logos.tsx" },
    ],
  },
  {
    name: "logo-cloud-12",
    title: "Logo Cloud 12",
    description: "A simple logo cloud block",
    component: React.lazy(
      () => import("@/registry/blocks/logo-cloud-12/components/logo-cloud")
    ),
    categories: [categories.logoCloud],
    files: [
      { path: "components/logo-cloud.tsx" },
      { path: "components/logos.tsx" },
    ],
  },
  {
    name: "logo-cloud-13",
    title: "Logo Cloud 13",
    description: "A simple logo cloud block",
    component: React.lazy(
      () => import("@/registry/blocks/logo-cloud-13/components/logo-cloud")
    ),
    categories: [categories.logoCloud],
    files: [
      { path: "components/logo-cloud.tsx" },
      { path: "components/logos.tsx" },
      { path: "components/magicui/marquee.tsx" },
    ],
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
    name: "stats-03",
    title: "Stats 03",
    description: "A simple stats block",
    component: React.lazy(
      () => import("@/registry/blocks/stats-03/components/stats")
    ),
    categories: [categories.stats],
    files: [{ path: "components/stats.tsx" }],
  },
  {
    name: "stats-04",
    title: "Stats 04",
    description: "A simple stats block",
    component: React.lazy(
      () => import("@/registry/blocks/stats-04/components/stats")
    ),
    categories: [categories.stats],
    files: [{ path: "components/stats.tsx" }],
  },
  {
    name: "stats-05",
    title: "Stats 05",
    description: "A simple stats block",
    component: React.lazy(
      () => import("@/registry/blocks/stats-05/components/stats")
    ),
    categories: [categories.stats],
    files: [{ path: "components/stats.tsx" }],
  },
  {
    name: "stats-06",
    title: "Stats 06",
    description: "A simple stats block",
    component: React.lazy(
      () => import("@/registry/blocks/stats-06/components/stats")
    ),
    categories: [categories.stats],
    files: [{ path: "components/stats.tsx" }],
  },
  {
    name: "stats-07",
    title: "Stats 07",
    description: "A simple stats block",
    component: React.lazy(
      () => import("@/registry/blocks/stats-07/components/stats")
    ),
    categories: [categories.stats],
    files: [{ path: "components/stats.tsx" }],
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
  // Carousel Blocks
  {
    name: "carousel-01",
    title: "Carousel 01",
    description: "A simple carousel block",
    component: React.lazy(
      () => import("@/registry/blocks/carousel-01/components/carousel")
    ),
    categories: [categories.carousel],
    files: [{ path: "components/carousel.tsx" }],
  },
  {
    name: "carousel-02",
    title: "Carousel 02",
    description: "A simple carousel block",
    component: React.lazy(
      () => import("@/registry/blocks/carousel-02/components/carousel")
    ),
    categories: [categories.carousel],
    files: [{ path: "components/carousel.tsx" }],
  },
  // Changelog Blocks
  {
    name: "changelog-01",
    title: "Changelog 01",
    description: "A simple changelog block",
    component: React.lazy(
      () => import("@/registry/blocks/changelog-01/components/changelog")
    ),
    categories: [categories.changelog],
    files: [{ path: "components/changelog.tsx" }],
  },
  {
    name: "changelog-02",
    title: "Changelog 02",
    description: "A simple changelog block",
    component: React.lazy(
      () => import("@/registry/blocks/changelog-02/components/changelog")
    ),
    categories: [categories.changelog],
    files: [{ path: "components/changelog.tsx" }],
  },
  {
    name: "changelog-03",
    title: "Changelog 03",
    description: "A simple changelog block",
    component: React.lazy(
      () => import("@/registry/blocks/changelog-03/components/changelog")
    ),
    categories: [categories.changelog],
    files: [{ path: "components/changelog.tsx" }],
  },
  // Code Block Blocks
  {
    name: "code-block-01",
    title: "Code Block 01",
    description: "A simple code block",
    component: React.lazy(
      () => import("@/registry/blocks/code-block-01/components/code-block")
    ),
    categories: [categories.codeBlock],
    files: [{ path: "components/code-block.tsx" }],
  },
  {
    name: "code-block-02",
    title: "Code Block 02",
    description: "A simple code block",
    component: React.lazy(
      () => import("@/registry/blocks/code-block-02/components/code-block")
    ),
    categories: [categories.codeBlock],
    files: [
      { path: "components/code-block.tsx" },
      { path: "components/code-block-header.tsx" },
      { path: "hooks/use-copy-to-clipboard.tsx" },
    ],
  },
  {
    name: "code-block-03",
    title: "Code Block 03",
    description: "A simple code block",
    component: React.lazy(
      () => import("@/registry/blocks/code-block-03/components/code-block")
    ),
    categories: [categories.codeBlock],
    files: [{ path: "components/code-block.tsx" }],
  },
  // Empty State Blocks
  {
    name: "empty-state-01",
    title: "Empty State 01",
    description: "A simple empty state block",
    component: React.lazy(
      () => import("@/registry/blocks/empty-state-01/components/empty-state")
    ),
    categories: [categories.emptyState],
    files: [{ path: "components/empty-state.tsx" }],
  },
  {
    name: "empty-state-02",
    title: "Empty State 02",
    description: "A simple empty state block",
    component: React.lazy(
      () => import("@/registry/blocks/empty-state-02/components/empty-state")
    ),
    categories: [categories.emptyState],
    files: [{ path: "components/empty-state.tsx" }],
  },
  {
    name: "empty-state-03",
    title: "Empty State 03",
    description: "A simple empty state block",
    component: React.lazy(
      () => import("@/registry/blocks/empty-state-03/components/empty-state")
    ),
    categories: [categories.emptyState],
    files: [{ path: "components/empty-state.tsx" }],
  },
  {
    name: "empty-state-04",
    title: "Empty State 04",
    description: "A simple empty state block",
    component: React.lazy(
      () => import("@/registry/blocks/empty-state-04/components/empty-state")
    ),
    categories: [categories.emptyState],
    files: [
      { path: "components/empty-state.tsx" },
      { path: "components/magicui/marquee.tsx" },
    ],
  },
  // Invite Member Blocks
  {
    name: "invite-member-01",
    title: "Invite Member 01",
    description: "A simple invite member block",
    component: React.lazy(
      () =>
        import("@/registry/blocks/invite-member-01/components/invite-member")
    ),
    categories: [categories.inviteMember],
    files: [{ path: "components/invite-member.tsx" }],
  },
  {
    name: "invite-member-02",
    title: "Invite Member 02",
    description: "A simple invite member block",
    component: React.lazy(
      () =>
        import("@/registry/blocks/invite-member-02/components/invite-member")
    ),
    categories: [categories.inviteMember],
    files: [{ path: "components/invite-member.tsx" }],
  },
  {
    name: "invite-member-03",
    title: "Invite Member 03",
    description: "A simple invite member block",
    component: React.lazy(
      () =>
        import("@/registry/blocks/invite-member-03/components/invite-member")
    ),
    categories: [categories.inviteMember],
    files: [{ path: "components/invite-member.tsx" }],
  },
  // Keyboard Shortcuts Blocks
  {
    name: "keyboard-shortcuts-01",
    title: "Keyboard Shortcuts 01",
    description: "A simple keyboard shortcuts block",
    component: React.lazy(
      () =>
        import(
          "@/registry/blocks/keyboard-shortcuts-01/components/keyboard-shortcuts"
        )
    ),
    categories: [categories.keyboardShortcuts],
    files: [{ path: "components/keyboard-shortcuts.tsx" }],
  },
  {
    name: "keyboard-shortcuts-02",
    title: "Keyboard Shortcuts 02",
    description: "A simple keyboard shortcuts block",
    component: React.lazy(
      () =>
        import(
          "@/registry/blocks/keyboard-shortcuts-02/components/keyboard-shortcuts"
        )
    ),
    categories: [categories.keyboardShortcuts],
    files: [{ path: "components/keyboard-shortcuts.tsx" }],
  },
  {
    name: "keyboard-shortcuts-03",
    title: "Keyboard Shortcuts 03",
    description: "A simple keyboard shortcuts block",
    component: React.lazy(
      () =>
        import(
          "@/registry/blocks/keyboard-shortcuts-03/components/keyboard-shortcuts"
        )
    ),
    categories: [categories.keyboardShortcuts],
    files: [{ path: "components/keyboard-shortcuts.tsx" }],
  },
  {
    name: "keyboard-shortcuts-04",
    title: "Keyboard Shortcuts 04",
    description: "A simple keyboard shortcuts block",
    component: React.lazy(
      () =>
        import(
          "@/registry/blocks/keyboard-shortcuts-04/components/keyboard-shortcuts"
        )
    ),
    categories: [categories.keyboardShortcuts],
    files: [{ path: "components/keyboard-shortcuts.tsx" }],
  },
  // Members Blocks
  {
    name: "members-01",
    title: "Members 01",
    description: "A simple members block",
    component: React.lazy(
      () => import("@/registry/blocks/members-01/components/members")
    ),
    categories: [categories.members],
    files: [{ path: "components/members.tsx" }],
  },
  {
    name: "members-02",
    title: "Members 02",
    description: "A simple members block",
    component: React.lazy(
      () => import("@/registry/blocks/members-02/components/members")
    ),
    categories: [categories.members],
    files: [{ path: "components/members.tsx" }],
  },
  {
    name: "members-03",
    title: "Members 03",
    description: "A simple members block",
    component: React.lazy(
      () => import("@/registry/blocks/members-03/components/members")
    ),
    categories: [categories.members],
    files: [{ path: "components/members.tsx" }],
  },
  // Order Confirmation Blocks
  {
    name: "order-confirmation-01",
    title: "Order Confirmation 01",
    description: "A simple order confirmation block",
    component: React.lazy(
      () =>
        import(
          "@/registry/blocks/order-confirmation-01/components/order-confirmation"
        )
    ),
    categories: [categories.orderConfirmation],
    files: [{ path: "components/order-confirmation.tsx" }],
  },
  {
    name: "order-confirmation-02",
    title: "Order Confirmation 02",
    description: "A simple order confirmation block",
    component: React.lazy(
      () =>
        import(
          "@/registry/blocks/order-confirmation-02/components/order-confirmation"
        )
    ),
    categories: [categories.orderConfirmation],
    files: [{ path: "components/order-confirmation.tsx" }],
  },
  // Profile Blocks
  {
    name: "profile-01",
    title: "Profile 01",
    description: "A simple profile block",
    component: React.lazy(
      () => import("@/registry/blocks/profile-01/components/profile")
    ),
    categories: [categories.profile],
    files: [{ path: "components/profile.tsx" }],
  },
  {
    name: "profile-02",
    title: "Profile 02",
    description: "A simple profile block",
    component: React.lazy(
      () => import("@/registry/blocks/profile-02/components/profile")
    ),
    categories: [categories.profile],
    files: [{ path: "components/profile.tsx" }],
  },
  {
    name: "profile-03",
    title: "Profile 03",
    description: "A simple profile block",
    component: React.lazy(
      () => import("@/registry/blocks/profile-03/components/profile")
    ),
    categories: [categories.profile],
    files: [{ path: "components/profile.tsx" }],
  },
  {
    name: "profile-04",
    title: "Profile 04",
    description: "A simple profile block",
    component: React.lazy(
      () => import("@/registry/blocks/profile-04/components/profile")
    ),
    categories: [categories.profile],
    files: [{ path: "components/profile.tsx" }],
  },
  // Setup Guide Blocks
  {
    name: "setup-guide-01",
    title: "Setup Guide 01",
    description: "A simple setup guide block",
    component: React.lazy(
      () => import("@/registry/blocks/setup-guide-01/components/setup-guide")
    ),
    categories: [categories.setupGuide],
    files: [{ path: "components/setup-guide.tsx" }],
  },
  {
    name: "setup-guide-02",
    title: "Setup Guide 02",
    description: "A simple setup guide block",
    component: React.lazy(
      () => import("@/registry/blocks/setup-guide-02/components/setup-guide")
    ),
    categories: [categories.setupGuide],
    files: [{ path: "components/setup-guide.tsx" }],
  },
  {
    name: "setup-guide-03",
    title: "Setup Guide 03",
    description: "A simple setup guide block",
    component: React.lazy(
      () => import("@/registry/blocks/setup-guide-03/components/setup-guide")
    ),
    categories: [categories.setupGuide],
    files: [{ path: "components/setup-guide.tsx" }],
  },
  {
    name: "setup-guide-04",
    title: "Setup Guide 04",
    description: "A simple setup guide block",
    component: React.lazy(
      () => import("@/registry/blocks/setup-guide-04/components/setup-guide")
    ),
    categories: [categories.setupGuide],
    files: [{ path: "components/setup-guide.tsx" }],
  },
  // Verification Blocks
  {
    name: "verification-01",
    title: "Verification 01",
    description: "A simple verification block",
    component: React.lazy(
      () => import("@/registry/blocks/verification-01/components/verification")
    ),
    categories: [categories.verification],
    files: [{ path: "components/verification.tsx" }],
  },
  // Banner Blocks
  {
    name: "banner-01",
    title: "Banner 01",
    description: "A simple banner block",
    component: React.lazy(
      () => import("@/registry/blocks/banner-01/components/banner")
    ),
    categories: [categories.banner],
    files: [{ path: "components/banner.tsx" }],
  },
  {
    name: "banner-02",
    title: "Banner 02",
    description: "A simple banner block",
    component: React.lazy(
      () => import("@/registry/blocks/banner-02/components/banner")
    ),
    categories: [categories.banner],
    files: [{ path: "components/banner.tsx" }],
  },
  {
    name: "banner-03",
    title: "Banner 03",
    description: "A simple banner block",
    component: React.lazy(
      () => import("@/registry/blocks/banner-03/components/banner")
    ),
    categories: [categories.banner],
    files: [{ path: "components/banner.tsx" }],
  },
  {
    name: "banner-04",
    title: "Banner 04",
    description: "A simple banner block",
    component: React.lazy(
      () => import("@/registry/blocks/banner-04/components/banner")
    ),
    categories: [categories.banner],
    files: [{ path: "components/banner.tsx" }],
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
    name: "blog-04",
    title: "Blog 04",
    description: "A simple blog block",
    component: React.lazy(
      () => import("@/registry/blocks/blog-04/components/blog")
    ),
    categories: [categories.blog],
    files: [{ path: "components/blog.tsx" }],
  },
  {
    name: "blog-05",
    title: "Blog 05",
    description: "A simple blog block",
    component: React.lazy(
      () => import("@/registry/blocks/blog-05/components/blog")
    ),
    categories: [categories.blog],
    files: [{ path: "components/blog.tsx" }],
  },
  {
    name: "blog-06",
    title: "Blog 06",
    description: "A simple blog block",
    component: React.lazy(
      () => import("@/registry/blocks/blog-06/components/blog")
    ),
    categories: [categories.blog],
    files: [{ path: "components/blog.tsx" }],
  },
];
