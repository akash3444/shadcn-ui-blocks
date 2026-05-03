import React, { type JSX } from "react";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { NavbarLayout } from "./block-layouts";

export interface BlockCategory {
  name: string;
  title: string;
}

export interface BlockPrimitiveVariant {
  component: React.LazyExoticComponent<() => JSX.Element | Promise<JSX.Element>>;
  files: { path: string }[];
}

export interface RegistryBlock {
  name: string;
  title: string;
  description: string;
  categories: BlockCategory[];
  component?: React.LazyExoticComponent<
    () => JSX.Element | Promise<JSX.Element>
  >;
  files?: { path: string }[];
  primitives?: {
    radix: BlockPrimitiveVariant;
    base: BlockPrimitiveVariant;
  };
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
  notFound: {
    name: "notFound",
    title: "Not Found",
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
      () => import("@/registry/blocks/shared/hero-01/components/hero")
    ),
    categories: [categories.hero],
    files: [{ path: "components/hero.tsx" }],
  },
  {
    name: "hero-02",
    title: "Hero 02",
    description: "A simple hero block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/hero-02/components/hero")
    ),
    categories: [categories.hero],
    files: [{ path: "components/hero.tsx" }],
  },
  {
    name: "hero-03",
    title: "Hero 03",
    description: "A simple hero block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/hero-03/components/hero")
        ),
        files: [
      { path: "components/hero.tsx" },
      { path: "components/gradient-text.tsx" },
      { path: "components/navbar.tsx" },
      { path: "components/logo.tsx" },
      { path: "components/nav-menu.tsx" },
      { path: "components/navigation-sheet.tsx" },
    ]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/hero-03/components/hero")
        ),
        files: [
      { path: "components/hero.tsx" },
      { path: "components/gradient-text.tsx" },
      { path: "components/navbar.tsx" },
      { path: "components/logo.tsx" },
      { path: "components/nav-menu.tsx" },
      { path: "components/navigation-sheet.tsx" },
    ]
      },
    },
    categories: [categories.hero],
  },
  {
    name: "hero-04",
    title: "Hero 04",
    description: "A simple hero block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/hero-04/components/hero")
    ),
    categories: [categories.hero],
    files: [{ path: "components/hero.tsx" }],
  },
  {
    name: "hero-05",
    title: "Hero 05",
    description: "A simple hero block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/hero-05/components/hero")
    ),
    categories: [categories.hero],
    files: [{ path: "components/hero.tsx" }],
  },
  {
    name: "hero-06",
    title: "Hero 06",
    description: "A simple hero block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/hero-06/components/hero")
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
      () => import("@/registry/blocks/shared/hero-07/components/hero")
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
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/hero-08/components/hero")
        ),
        files: [
      { path: "components/hero.tsx" },
      { path: "components/logos.tsx" },
      { path: "components/navbar.tsx" },
      { path: "components/nav-menu.tsx" },
    ]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/hero-08/components/hero")
        ),
        files: [
      { path: "components/hero.tsx" },
      { path: "components/logos.tsx" },
      { path: "components/navbar.tsx" },
      { path: "components/nav-menu.tsx" },
    ]
      },
    },
    categories: [categories.hero],
  },
  {
    name: "features-01",
    title: "Features 01",
    description: "A simple features block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/features-01/components/features")
    ),
    categories: [categories.features],
    files: [{ path: "components/features.tsx" }],
  },
  {
    name: "features-02",
    title: "Features 02",
    description: "A simple features block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/features-02/components/features")
    ),
    categories: [categories.features],
    files: [{ path: "components/features.tsx" }],
  },
  {
    name: "features-03",
    title: "Features 03",
    description: "A simple features block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/features-03/components/features")
    ),
    categories: [categories.features],
    files: [{ path: "components/features.tsx" }],
  },
  {
    name: "features-04",
    title: "Features 04",
    description: "A simple features block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/features-04/components/features")
        ),
        files: [{ path: "components/features.tsx" }]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/features-04/components/features")
        ),
        files: [{ path: "components/features.tsx" }]
      },
    },
    categories: [categories.features],
  },
  {
    name: "features-05",
    title: "Features 05",
    description: "A simple features block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/features-05/components/features")
    ),
    categories: [categories.features],
    files: [{ path: "components/features.tsx" }],
  },
  {
    name: "features-06",
    title: "Features 06",
    description: "A simple features block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/features-06/components/features")
    ),
    categories: [categories.features],
    files: [{ path: "components/features.tsx" }],
  },
  {
    name: "features-07",
    title: "Features 07",
    description: "A simple features block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/features-07/components/features")
    ),
    categories: [categories.features],
    files: [{ path: "components/features.tsx" }],
  },
  {
    name: "features-08",
    title: "Features 08",
    description: "A simple features block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/features-08/components/features")
    ),
    categories: [categories.features],
    files: [{ path: "components/features.tsx" }],
  },
  {
    name: "features-09",
    title: "Features 09",
    description: "A simple features block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/features-09/components/features")
    ),
    categories: [categories.features],
    files: [{ path: "components/features.tsx" }],
  },
  {
    name: "features-10",
    title: "Features 10",
    description: "A simple features block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/features-10/components/features")
    ),
    categories: [categories.features],
    files: [
      { path: "components/features.tsx" },
      { path: "components/stats-card.tsx" },
    ],
  },
  {
    name: "features-11",
    title: "Features 11",
    description: "A simple features block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/features-11/components/features")
    ),
    categories: [categories.features],
    files: [{ path: "components/features.tsx" }],
  },
  {
    name: "features-12",
    title: "Features 12",
    description: "A simple features block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/features-12/components/features")
    ),
    categories: [categories.features],
    files: [{ path: "components/features.tsx" }],
  },
  {
    name: "features-13",
    title: "Features 13",
    description: "A simple features block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/features-13/components/features")
    ),
    categories: [categories.features],
    files: [{ path: "components/features.tsx" }],
  },
  {
    name: "features-14",
    title: "Features 14",
    description: "A simple features block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/features-14/components/features")
    ),
    categories: [categories.features],
    files: [{ path: "components/features.tsx" }],
  },
  {
    name: "features-15",
    title: "Features 15",
    description: "A simple features block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/features-15/components/features")
    ),
    categories: [categories.features],
    files: [{ path: "components/features.tsx" }],
  },
  {
    name: "features-16",
    title: "Features 16",
    description: "A simple features block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/features-16/components/features")
    ),
    categories: [categories.features],
    files: [{ path: "components/features.tsx" }],
  },
  {
    name: "features-17",
    title: "Features 17",
    description: "A simple features block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/features-17/components/features")
    ),
    categories: [categories.features],
    files: [{ path: "components/features.tsx" }],
  },
  {
    name: "features-18",
    title: "Features 18",
    description: "A simple features block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/features-18/components/features")
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
      () => import("@/registry/blocks/shared/integrations-01/components/integrations")
    ),
    categories: [categories.integrations],
    files: [{ path: "components/integrations.tsx" }],
  },
  {
    name: "integrations-02",
    title: "Integrations 02",
    description: "A simple integrations block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/integrations-02/components/integrations")
    ),
    categories: [categories.integrations],
    files: [{ path: "components/integrations.tsx" }],
  },
  {
    name: "integrations-03",
    title: "Integrations 03",
    description: "A simple integrations block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/integrations-03/components/integrations")
    ),
    categories: [categories.integrations],
    files: [{ path: "components/integrations.tsx" }],
  },
  {
    name: "integrations-04",
    title: "Integrations 04",
    description: "A simple integrations block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/integrations-04/components/integrations")
    ),
    categories: [categories.integrations],
    files: [{ path: "components/integrations.tsx" }],
  },
  {
    name: "integrations-05",
    title: "Integrations 05",
    description: "A simple integrations block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/integrations-05/components/integrations")
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
      () => import("@/registry/blocks/shared/team-01/components/team")
    ),
    categories: [categories.team],
    files: [{ path: "components/team.tsx" }],
  },
  {
    name: "team-02",
    title: "Team 02",
    description: "A simple team block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/team-02/components/team")
    ),
    categories: [categories.team],
    files: [{ path: "components/team.tsx" }],
  },
  {
    name: "team-03",
    title: "Team 03",
    description: "A simple team block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/team-03/components/team")
    ),
    categories: [categories.team],
    files: [{ path: "components/team.tsx" }],
  },
  {
    name: "team-04",
    title: "Team 04",
    description: "A simple team block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/team-04/components/team")
    ),
    categories: [categories.team],
    files: [{ path: "components/team.tsx" }],
  },
  {
    name: "team-05",
    title: "Team 05",
    description: "A simple team block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/team-05/components/team")
    ),
    categories: [categories.team],
    files: [{ path: "components/team.tsx" }],
  },
  {
    name: "team-06",
    title: "Team 06",
    description: "A simple team block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/team-06/components/team")
    ),
    categories: [categories.team],
    files: [{ path: "components/team.tsx" }],
  },
  {
    name: "team-07",
    title: "Team 07",
    description: "A simple team block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/team-07/components/team")
    ),
    categories: [categories.team],
    files: [{ path: "components/team.tsx" }],
  },
  {
    name: "team-08",
    title: "Team 08",
    description: "A simple team block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/team-08/components/team")
    ),
    categories: [categories.team],
    files: [{ path: "components/team.tsx" }],
  },
  {
    name: "team-09",
    title: "Team 09",
    description: "A simple team block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/team-09/components/team")
    ),
    categories: [categories.team],
    files: [{ path: "components/team.tsx" }],
  },
  {
    name: "team-10",
    title: "Team 10",
    description: "A simple team block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/team-10/components/team")
    ),
    categories: [categories.team],
    files: [{ path: "components/team.tsx" }],
  },
  {
    name: "team-11",
    title: "Team 11",
    description: "A simple team block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/team-11/components/team")
    ),
    categories: [categories.team],
    files: [{ path: "components/team.tsx" }],
  },
  {
    name: "team-12",
    title: "Team 12",
    description: "A simple team block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/team-12/components/team")
    ),
    categories: [categories.team],
    files: [{ path: "components/team.tsx" }],
  },
  {
    name: "team-13",
    title: "Team 13",
    description: "A simple team block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/team-13/components/team")
    ),
    categories: [categories.team],
    files: [{ path: "components/team.tsx" }],
  },
  // Pricing Blocks
  {
    name: "pricing-01",
    title: "Pricing 01",
    description: "A simple pricing block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/pricing-01/components/pricing")
        ),
        files: [{ path: "components/pricing.tsx" }]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/pricing-01/components/pricing")
        ),
        files: [{ path: "components/pricing.tsx" }]
      },
    },
    categories: [categories.pricing],
  },
  {
    name: "pricing-02",
    title: "Pricing 02",
    description: "A simple pricing block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/pricing-02/components/pricing")
        ),
        files: [{ path: "components/pricing.tsx" }]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/pricing-02/components/pricing")
        ),
        files: [{ path: "components/pricing.tsx" }]
      },
    },
    categories: [categories.pricing],
  },
  {
    name: "pricing-03",
    title: "Pricing 03",
    description: "A simple pricing block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/pricing-03/components/pricing")
        ),
        files: [{ path: "components/pricing.tsx" }]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/pricing-03/components/pricing")
        ),
        files: [{ path: "components/pricing.tsx" }]
      },
    },
    categories: [categories.pricing],
  },
  {
    name: "pricing-04",
    title: "Pricing 04",
    description: "A simple pricing block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/pricing-04/components/pricing")
        ),
        files: [{ path: "components/pricing.tsx" }]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/pricing-04/components/pricing")
        ),
        files: [{ path: "components/pricing.tsx" }]
      },
    },
    categories: [categories.pricing],
  },
  {
    name: "pricing-05",
    title: "Pricing 05",
    description: "A simple pricing block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/pricing-05/components/pricing")
        ),
        files: [{ path: "components/pricing.tsx" }]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/pricing-05/components/pricing")
        ),
        files: [{ path: "components/pricing.tsx" }]
      },
    },
    categories: [categories.pricing],
  },
  {
    name: "pricing-06",
    title: "Pricing 06",
    description: "A simple pricing block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/pricing-06/components/pricing")
        ),
        files: [{ path: "components/pricing.tsx" }]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/pricing-06/components/pricing")
        ),
        files: [{ path: "components/pricing.tsx" }]
      },
    },
    categories: [categories.pricing],
  },
  {
    name: "pricing-07",
    title: "Pricing 07",
    description: "A simple pricing block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/pricing-07/components/pricing")
        ),
        files: [{ path: "components/pricing.tsx" }]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/pricing-07/components/pricing")
        ),
        files: [{ path: "components/pricing.tsx" }]
      },
    },
    categories: [categories.pricing],
  },
  {
    name: "pricing-08",
    title: "Pricing 08",
    description: "A simple pricing block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/pricing-08/components/pricing")
        ),
        files: [{ path: "components/pricing.tsx" }]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/pricing-08/components/pricing")
        ),
        files: [{ path: "components/pricing.tsx" }]
      },
    },
    categories: [categories.pricing],
  },
  {
    name: "pricing-09",
    title: "Pricing 09",
    description: "A simple pricing block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/pricing-09/components/pricing")
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
      () => import("@/registry/blocks/shared/pricing-10/components/pricing")
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
      () => import("@/registry/blocks/shared/cta-01/components/cta")
    ),
    categories: [categories.cta],
    files: [{ path: "components/cta.tsx" }],
  },
  {
    name: "cta-02",
    title: "CTA 02",
    description: "A simple CTA block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/cta-02/components/cta")
    ),
    categories: [categories.cta],
    files: [{ path: "components/cta.tsx" }],
  },
  {
    name: "cta-03",
    title: "CTA 03",
    description: "A simple CTA block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/cta-03/components/cta")
    ),
    categories: [categories.cta],
    files: [{ path: "components/cta.tsx" }],
  },
  {
    name: "cta-04",
    title: "CTA 04",
    description: "A simple CTA block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/cta-04/components/cta")
    ),
    categories: [categories.cta],
    files: [{ path: "components/cta.tsx" }],
  },
  {
    name: "cta-05",
    title: "CTA 05",
    description: "A simple CTA block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/cta-05/components/cta")
    ),
    categories: [categories.cta],
    files: [{ path: "components/cta.tsx" }],
  },
  {
    name: "cta-06",
    title: "CTA 06",
    description: "A simple CTA block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/cta-06/components/cta")
    ),
    categories: [categories.cta],
    files: [{ path: "components/cta.tsx" }],
  },
  {
    name: "cta-07",
    title: "CTA 07",
    description: "A simple CTA block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/cta-07/components/cta")
    ),
    categories: [categories.cta],
    files: [{ path: "components/cta.tsx" }],
  },
  // FAQ Blocks
  {
    name: "faq-01",
    title: "FAQ 01",
    description: "A simple FAQ block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/faq-01/components/faq")
        ),
        files: [{ path: "components/faq.tsx" }]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/faq-01/components/faq")
        ),
        files: [{ path: "components/faq.tsx" }]
      },
    },
    categories: [categories.faq],
  },
  {
    name: "faq-02",
    title: "FAQ 02",
    description: "A simple FAQ block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/faq-02/components/faq")
        ),
        files: [{ path: "components/faq.tsx" }]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/faq-02/components/faq")
        ),
        files: [{ path: "components/faq.tsx" }]
      },
    },
    categories: [categories.faq],
  },
  {
    name: "faq-03",
    title: "FAQ 03",
    description: "A simple FAQ block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/faq-03/components/faq")
        ),
        files: [{ path: "components/faq.tsx" }]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/faq-03/components/faq")
        ),
        files: [{ path: "components/faq.tsx" }]
      },
    },
    categories: [categories.faq],
  },
  {
    name: "faq-04",
    title: "FAQ 04",
    description: "A simple FAQ block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/faq-04/components/faq")
    ),
    categories: [categories.faq],
    files: [{ path: "components/faq.tsx" }],
  },
  {
    name: "faq-05",
    title: "FAQ 05",
    description: "A simple FAQ block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/faq-05/components/faq")
    ),
    categories: [categories.faq],
    files: [{ path: "components/faq.tsx" }],
  },
  {
    name: "faq-06",
    title: "FAQ 06",
    description: "A simple FAQ block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/faq-06/components/faq")
        ),
        files: [{ path: "components/faq.tsx" }]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/faq-06/components/faq")
        ),
        files: [{ path: "components/faq.tsx" }]
      },
    },
    categories: [categories.faq],
  },
  {
    name: "faq-07",
    title: "FAQ 07",
    description: "A simple FAQ block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/faq-07/components/faq")
        ),
        files: [{ path: "components/faq.tsx" }]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/faq-07/components/faq")
        ),
        files: [{ path: "components/faq.tsx" }]
      },
    },
    categories: [categories.faq],
  },
  {
    name: "faq-08",
    title: "FAQ 08",
    description: "A simple FAQ block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/faq-08/components/faq")
        ),
        files: [{ path: "components/faq.tsx" }]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/faq-08/components/faq")
        ),
        files: [{ path: "components/faq.tsx" }]
      },
    },
    categories: [categories.faq],
  },
  {
    name: "faq-09",
    title: "FAQ 09",
    description: "A simple FAQ block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/faq-09/components/faq")
        ),
        files: [{ path: "components/faq.tsx" }]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/faq-09/components/faq")
        ),
        files: [{ path: "components/faq.tsx" }]
      },
    },
    categories: [categories.faq],
  },
  {
    name: "faq-10",
    title: "FAQ 10",
    description: "A simple FAQ block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/faq-10/components/faq")
        ),
        files: [{ path: "components/faq.tsx" }]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/faq-10/components/faq")
        ),
        files: [{ path: "components/faq.tsx" }]
      },
    },
    categories: [categories.faq],
  },
  {
    name: "faq-11",
    title: "FAQ 11",
    description: "A simple FAQ block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/faq-11/components/faq")
        ),
        files: [{ path: "components/faq.tsx" }]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/faq-11/components/faq")
        ),
        files: [{ path: "components/faq.tsx" }]
      },
    },
    categories: [categories.faq],
  },
  {
    name: "faq-12",
    title: "FAQ 12",
    description: "A simple FAQ block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/faq-12/components/faq")
    ),
    categories: [categories.faq],
    files: [{ path: "components/faq.tsx" }],
  },
  {
    name: "faq-13",
    title: "FAQ 13",
    description: "A simple FAQ block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/faq-13/components/faq")
    ),
    categories: [categories.faq],
    files: [{ path: "components/faq.tsx" }],
  },
  {
    name: "faq-14",
    title: "FAQ 14",
    description: "A simple FAQ block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/faq-14/components/faq")
        ),
        files: [{ path: "components/faq.tsx" }]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/faq-14/components/faq")
        ),
        files: [{ path: "components/faq.tsx" }]
      },
    },
    categories: [categories.faq],
  },
  // Testimonials Blocks
  {
    name: "testimonials-01",
    title: "Testimonials 01",
    description: "A simple testimonials block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/testimonials-01/components/testimonials")
        ),
        files: [{ path: "components/testimonials.tsx" }]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/testimonials-01/components/testimonials")
        ),
        files: [{ path: "components/testimonials.tsx" }]
      },
    },
    categories: [categories.testimonials],
  },
  {
    name: "testimonials-02",
    title: "Testimonials 02",
    description: "A simple testimonials block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/testimonials-02/components/testimonials")
        ),
        files: [{ path: "components/testimonials.tsx" }]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/testimonials-02/components/testimonials")
        ),
        files: [{ path: "components/testimonials.tsx" }]
      },
    },
    categories: [categories.testimonials],
  },
  {
    name: "testimonials-03",
    title: "Testimonials 03",
    description: "A simple testimonials block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/testimonials-03/components/testimonials")
        ),
        files: [{ path: "components/testimonials.tsx" }]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/testimonials-03/components/testimonials")
        ),
        files: [{ path: "components/testimonials.tsx" }]
      },
    },
    categories: [categories.testimonials],
  },
  {
    name: "testimonials-04",
    title: "Testimonials 04",
    description: "A simple testimonials block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/testimonials-04/components/testimonials")
        ),
        files: [
      { path: "components/testimonials.tsx" },
      { path: "components/ui/marquee.tsx" },
    ]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/testimonials-04/components/testimonials")
        ),
        files: [
      { path: "components/testimonials.tsx" },
      { path: "components/ui/marquee.tsx" },
    ]
      },
    },
    categories: [categories.testimonials],
  },
  {
    name: "testimonials-05",
    title: "Testimonials 05",
    description: "A simple testimonials block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/testimonials-05/components/testimonials")
        ),
        files: [{ path: "components/testimonials.tsx" }]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/testimonials-05/components/testimonials")
        ),
        files: [{ path: "components/testimonials.tsx" }]
      },
    },
    categories: [categories.testimonials],
  },
  {
    name: "testimonials-06",
    title: "Testimonials 06",
    description: "A simple testimonials block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/testimonials-06/components/testimonials")
        ),
        files: [{ path: "components/testimonials.tsx" }]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/testimonials-06/components/testimonials")
        ),
        files: [{ path: "components/testimonials.tsx" }]
      },
    },
    categories: [categories.testimonials],
  },
  {
    name: "testimonials-07",
    title: "Testimonials 07",
    description: "A simple testimonials block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/testimonials-07/components/testimonials")
        ),
        files: [{ path: "components/testimonials.tsx" }]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/testimonials-07/components/testimonials")
        ),
        files: [{ path: "components/testimonials.tsx" }]
      },
    },
    categories: [categories.testimonials],
  },
  {
    name: "testimonials-08",
    title: "Testimonials 08",
    description: "A simple testimonials block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/testimonials-08/components/testimonials")
        ),
        files: [{ path: "components/testimonials.tsx" }]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/testimonials-08/components/testimonials")
        ),
        files: [{ path: "components/testimonials.tsx" }]
      },
    },
    categories: [categories.testimonials],
  },
  {
    name: "testimonials-09",
    title: "Testimonials 09",
    description: "A simple testimonials block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/testimonials-09/components/testimonials")
    ),
    categories: [categories.testimonials],
    files: [{ path: "components/testimonials.tsx" }],
  },
  {
    name: "testimonials-10",
    title: "Testimonials 10",
    description: "A simple testimonials block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/testimonials-10/components/testimonials")
    ),
    categories: [categories.testimonials],
    files: [{ path: "components/testimonials.tsx" }],
  },
  {
    name: "testimonials-11",
    title: "Testimonials 11",
    description: "A simple testimonials block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/testimonials-11/components/testimonials")
    ),
    categories: [categories.testimonials],
    files: [{ path: "components/testimonials.tsx" }],
  },
  {
    name: "testimonials-12",
    title: "Testimonials 12",
    description: "A simple testimonials block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/testimonials-12/components/testimonials")
    ),
    categories: [categories.testimonials],
    files: [{ path: "components/testimonials.tsx" }],
  },
  {
    name: "testimonials-13",
    title: "Testimonials 13",
    description: "A simple testimonials block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/testimonials-13/components/testimonials")
        ),
        files: [
      { path: "components/testimonials.tsx" },
      { path: "components/ui/marquee.tsx" },
    ]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/testimonials-13/components/testimonials")
        ),
        files: [
      { path: "components/testimonials.tsx" },
      { path: "components/ui/marquee.tsx" },
    ]
      },
    },
    categories: [categories.testimonials],
  },
  // Login Blocks
  {
    name: "login-01",
    title: "Login 01",
    description: "A simple login block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/login-01/components/login")
        ),
        files: [{ path: "components/login.tsx" }, { path: "components/logo.tsx" }]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/login-01/components/login")
        ),
        files: [{ path: "components/login.tsx" }, { path: "components/logo.tsx" }]
      },
    },
    categories: [categories.login, categories.authentication],
  },
  {
    name: "login-02",
    title: "Login 02",
    description: "A simple login block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/login-02/components/login")
        ),
        files: [{ path: "components/login.tsx" }, { path: "components/logo.tsx" }]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/login-02/components/login")
        ),
        files: [{ path: "components/login.tsx" }, { path: "components/logo.tsx" }]
      },
    },
    categories: [categories.login, categories.authentication],
  },
  {
    name: "login-03",
    title: "Login 03",
    description: "A simple login block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/login-03/components/login")
        ),
        files: [{ path: "components/login.tsx" }, { path: "components/logo.tsx" }]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/login-03/components/login")
        ),
        files: [{ path: "components/login.tsx" }, { path: "components/logo.tsx" }]
      },
    },
    categories: [categories.login, categories.authentication],
  },
  {
    name: "login-04",
    title: "Login 04",
    description: "A simple login block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/login-04/components/login")
        ),
        files: [{ path: "components/login.tsx" }, { path: "components/logo.tsx" }]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/login-04/components/login")
        ),
        files: [{ path: "components/login.tsx" }, { path: "components/logo.tsx" }]
      },
    },
    categories: [categories.login, categories.authentication],
  },
  {
    name: "login-05",
    title: "Login 05",
    description: "A simple login block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/login-05/components/login")
        ),
        files: [{ path: "components/login.tsx" }, { path: "components/logo.tsx" }]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/login-05/components/login")
        ),
        files: [{ path: "components/login.tsx" }, { path: "components/logo.tsx" }]
      },
    },
    categories: [categories.login, categories.authentication],
  },
  {
    name: "login-06",
    title: "Login 06",
    description: "A simple login block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/login-06/components/login")
        ),
        files: [
      { path: "components/login.tsx" },
      { path: "components/login-form.tsx" },
      { path: "components/icons.tsx" },
      { path: "components/logo.tsx" },
    ]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/login-06/components/login")
        ),
        files: [
      { path: "components/login.tsx" },
      { path: "components/login-form.tsx" },
      { path: "components/icons.tsx" },
      { path: "components/logo.tsx" },
    ]
      },
    },
    categories: [categories.login, categories.authentication],
  },
  {
    name: "login-07",
    title: "Login 07",
    description: "A simple login block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/login-07/components/login")
        ),
        files: [
      { path: "components/login.tsx" },
      { path: "components/login-form.tsx" },
      { path: "components/icons.tsx" },
      { path: "components/testimonials.tsx" },
      { path: "components/logo.tsx" },
    ]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/login-07/components/login")
        ),
        files: [
      { path: "components/login.tsx" },
      { path: "components/login-form.tsx" },
      { path: "components/icons.tsx" },
      { path: "components/testimonials.tsx" },
      { path: "components/logo.tsx" },
    ]
      },
    },
    categories: [categories.login, categories.authentication],
  },
  {
    name: "login-08",
    title: "Login 08",
    description: "A simple login block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/login-08/components/login")
        ),
        files: [
      { path: "components/login.tsx" },
      { path: "components/login-form.tsx" },
      { path: "components/icons.tsx" },
      { path: "components/logo.tsx" },
    ]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/login-08/components/login")
        ),
        files: [
      { path: "components/login.tsx" },
      { path: "components/login-form.tsx" },
      { path: "components/icons.tsx" },
      { path: "components/logo.tsx" },
    ]
      },
    },
    categories: [categories.login, categories.authentication],
  },
  // Signup Blocks
  {
    name: "signup-01",
    title: "Signup 01",
    description: "A simple signup block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/signup-01/components/signup")
        ),
        files: [{ path: "components/signup.tsx" }, { path: "components/logo.tsx" }]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/signup-01/components/signup")
        ),
        files: [{ path: "components/signup.tsx" }, { path: "components/logo.tsx" }]
      },
    },
    categories: [categories.signup, categories.authentication],
  },
  {
    name: "signup-02",
    title: "Signup 02",
    description: "A simple signup block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/signup-02/components/signup")
        ),
        files: [{ path: "components/signup.tsx" }, { path: "components/logo.tsx" }]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/signup-02/components/signup")
        ),
        files: [{ path: "components/signup.tsx" }, { path: "components/logo.tsx" }]
      },
    },
    categories: [categories.signup, categories.authentication],
  },
  {
    name: "signup-03",
    title: "Signup 03",
    description: "A simple signup block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/signup-03/components/signup")
        ),
        files: [{ path: "components/signup.tsx" }, { path: "components/logo.tsx" }]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/signup-03/components/signup")
        ),
        files: [{ path: "components/signup.tsx" }, { path: "components/logo.tsx" }]
      },
    },
    categories: [categories.signup, categories.authentication],
  },
  {
    name: "signup-04",
    title: "Signup 04",
    description: "A simple signup block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/signup-04/components/signup")
        ),
        files: [{ path: "components/signup.tsx" }, { path: "components/logo.tsx" }]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/signup-04/components/signup")
        ),
        files: [{ path: "components/signup.tsx" }, { path: "components/logo.tsx" }]
      },
    },
    categories: [categories.signup, categories.authentication],
  },
  {
    name: "signup-05",
    title: "Signup 05",
    description: "A simple signup block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/signup-05/components/signup")
        ),
        files: [{ path: "components/signup.tsx" }, { path: "components/logo.tsx" }]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/signup-05/components/signup")
        ),
        files: [{ path: "components/signup.tsx" }, { path: "components/logo.tsx" }]
      },
    },
    categories: [categories.signup, categories.authentication],
  },
  {
    name: "signup-06",
    title: "Signup 06",
    description: "A simple signup block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/signup-06/components/signup")
        ),
        files: [
      { path: "components/signup.tsx" },
      { path: "components/signup-form.tsx" },
      { path: "components/icons.tsx" },
      { path: "components/logo.tsx" },
    ]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/signup-06/components/signup")
        ),
        files: [
      { path: "components/signup.tsx" },
      { path: "components/signup-form.tsx" },
      { path: "components/icons.tsx" },
      { path: "components/logo.tsx" },
    ]
      },
    },
    categories: [categories.signup, categories.authentication],
  },
  {
    name: "signup-07",
    title: "Signup 07",
    description: "A simple signup block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/signup-07/components/signup")
        ),
        files: [
      { path: "components/signup.tsx" },
      { path: "components/signup-form.tsx" },
      { path: "components/icons.tsx" },
      { path: "components/testimonials.tsx" },
      { path: "components/logo.tsx" },
    ]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/signup-07/components/signup")
        ),
        files: [
      { path: "components/signup.tsx" },
      { path: "components/signup-form.tsx" },
      { path: "components/icons.tsx" },
      { path: "components/testimonials.tsx" },
      { path: "components/logo.tsx" },
    ]
      },
    },
    categories: [categories.signup, categories.authentication],
  },
  {
    name: "signup-08",
    title: "Signup 08",
    description: "A simple signup block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/signup-08/components/signup")
        ),
        files: [
      { path: "components/signup.tsx" },
      { path: "components/signup-form.tsx" },
      { path: "components/icons.tsx" },
      { path: "components/logo.tsx" },
    ]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/signup-08/components/signup")
        ),
        files: [
      { path: "components/signup.tsx" },
      { path: "components/signup-form.tsx" },
      { path: "components/icons.tsx" },
      { path: "components/logo.tsx" },
    ]
      },
    },
    categories: [categories.signup, categories.authentication],
  },
  // Navbar Blocks
  {
    name: "navbar-01",
    title: "Navbar 01",
    description: "A simple navbar block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/navbar-01/components/navbar")
        ),
        files: [
      { path: "components/navbar.tsx" },
      { path: "components/logo.tsx" },
      { path: "components/nav-menu.tsx" },
      { path: "components/navigation-sheet.tsx" },
    ]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/navbar-01/components/navbar")
        ),
        files: [
      { path: "components/navbar.tsx" },
      { path: "components/logo.tsx" },
      { path: "components/nav-menu.tsx" },
      { path: "components/navigation-sheet.tsx" },
    ]
      },
    },
    layout: NavbarLayout,
    categories: [categories.navbar],
  },
  {
    name: "navbar-02",
    title: "Navbar 02",
    description: "A simple navbar block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/navbar-02/components/navbar")
        ),
        files: [
      { path: "components/navbar.tsx" },
      { path: "components/logo.tsx" },
      { path: "components/nav-menu.tsx" },
      { path: "components/navigation-sheet.tsx" },
    ]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/navbar-02/components/navbar")
        ),
        files: [
      { path: "components/navbar.tsx" },
      { path: "components/logo.tsx" },
      { path: "components/nav-menu.tsx" },
      { path: "components/navigation-sheet.tsx" },
    ]
      },
    },
    layout: NavbarLayout,
    categories: [categories.navbar],
  },
  {
    name: "navbar-03",
    title: "Navbar 03",
    description: "A simple navbar block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/navbar-03/components/navbar")
        ),
        files: [
      { path: "components/navbar.tsx" },
      { path: "components/logo.tsx" },
      { path: "components/nav-menu.tsx" },
      { path: "components/navigation-sheet.tsx" },
      { path: "config/navbar.ts" },
    ]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/navbar-03/components/navbar")
        ),
        files: [
      { path: "components/navbar.tsx" },
      { path: "components/logo.tsx" },
      { path: "components/nav-menu.tsx" },
      { path: "components/navigation-sheet.tsx" },
      { path: "config/navbar.ts" },
    ]
      },
    },
    layout: NavbarLayout,
    categories: [categories.navbar],
  },
  {
    name: "navbar-04",
    title: "Navbar 04",
    description: "A simple navbar block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/navbar-04/components/navbar")
        ),
        files: [
      { path: "components/navbar.tsx" },
      { path: "components/logo.tsx" },
      { path: "components/nav-menu.tsx" },
      { path: "components/navigation-sheet.tsx" },
    ]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/navbar-04/components/navbar")
        ),
        files: [
      { path: "components/navbar.tsx" },
      { path: "components/logo.tsx" },
      { path: "components/nav-menu.tsx" },
      { path: "components/navigation-sheet.tsx" },
    ]
      },
    },
    layout: NavbarLayout,
    categories: [categories.navbar],
  },
  {
    name: "navbar-05",
    title: "Navbar 05",
    description: "A simple navbar block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/navbar-05/components/navbar")
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
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/footer-01/components/footer")
        ),
        files: [{ path: "components/footer.tsx" }]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/footer-01/components/footer")
        ),
        files: [{ path: "components/footer.tsx" }]
      },
    },
    categories: [categories.footer],
  },
  {
    name: "footer-02",
    title: "Footer 02",
    description: "A simple footer block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/footer-02/components/footer")
        ),
        files: [{ path: "components/footer.tsx" }]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/footer-02/components/footer")
        ),
        files: [{ path: "components/footer.tsx" }]
      },
    },
    categories: [categories.footer],
  },
  {
    name: "footer-03",
    title: "Footer 03",
    description: "A simple footer block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/footer-03/components/footer")
        ),
        files: [{ path: "components/footer.tsx" }]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/footer-03/components/footer")
        ),
        files: [{ path: "components/footer.tsx" }]
      },
    },
    categories: [categories.footer],
  },
  {
    name: "footer-04",
    title: "Footer 04",
    description: "A simple footer block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/footer-04/components/footer")
        ),
        files: [{ path: "components/footer.tsx" }]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/footer-04/components/footer")
        ),
        files: [{ path: "components/footer.tsx" }]
      },
    },
    categories: [categories.footer],
  },
  {
    name: "footer-05",
    title: "Footer 05",
    description: "A simple footer block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/footer-05/components/footer")
        ),
        files: [{ path: "components/footer.tsx" }]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/footer-05/components/footer")
        ),
        files: [{ path: "components/footer.tsx" }]
      },
    },
    categories: [categories.footer],
  },
  {
    name: "footer-06",
    title: "Footer 06",
    description: "A simple footer block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/footer-06/components/footer")
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
      () => import("@/registry/blocks/shared/footer-07/components/footer")
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
      () => import("@/registry/blocks/shared/logo-cloud-01/components/logo-cloud")
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
      () => import("@/registry/blocks/shared/logo-cloud-02/components/logo-cloud")
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
      () => import("@/registry/blocks/shared/logo-cloud-03/components/logo-cloud")
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
      () => import("@/registry/blocks/shared/logo-cloud-04/components/logo-cloud")
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
      () => import("@/registry/blocks/shared/logo-cloud-05/components/logo-cloud")
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
      () => import("@/registry/blocks/shared/logo-cloud-06/components/logo-cloud")
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
      () => import("@/registry/blocks/shared/logo-cloud-07/components/logo-cloud")
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
      () => import("@/registry/blocks/shared/logo-cloud-08/components/logo-cloud")
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
      () => import("@/registry/blocks/shared/logo-cloud-09/components/logo-cloud")
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
      () => import("@/registry/blocks/shared/logo-cloud-10/components/logo-cloud")
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
      () => import("@/registry/blocks/shared/logo-cloud-11/components/logo-cloud")
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
      () => import("@/registry/blocks/shared/logo-cloud-12/components/logo-cloud")
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
      () => import("@/registry/blocks/shared/logo-cloud-13/components/logo-cloud")
    ),
    categories: [categories.logoCloud],
    files: [
      { path: "components/logo-cloud.tsx" },
      { path: "components/logos.tsx" },
      { path: "components/magicui/marquee.tsx" },
    ],
  },
  {
    name: "logo-cloud-14",
    title: "Logo Cloud 14",
    description: "A simple logo cloud block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/logo-cloud-14/components/logo-cloud")
    ),
    categories: [categories.logoCloud],
    files: [
      { path: "components/logo-cloud.tsx" },
      { path: "components/logos.tsx" },
    ],
  },
  {
    name: "logo-cloud-15",
    title: "Logo Cloud 15",
    description: "A simple logo cloud block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/logo-cloud-15/components/logo-cloud")
    ),
    categories: [categories.logoCloud],
    files: [
      { path: "components/logo-cloud.tsx" },
      { path: "components/logos.tsx" },
      { path: "components/ui/marquee.tsx" },
      { path: "components/magicui/border-beam.tsx" },
    ],
  },
  // Stats Blocks
  {
    name: "stats-01",
    title: "Stats 01",
    description: "A simple stats block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/stats-01/components/stats")
    ),
    categories: [categories.stats],
    files: [{ path: "components/stats.tsx" }],
  },
  {
    name: "stats-02",
    title: "Stats 02",
    description: "A simple stats block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/stats-02/components/stats")
    ),
    categories: [categories.stats],
    files: [{ path: "components/stats.tsx" }],
  },
  {
    name: "stats-03",
    title: "Stats 03",
    description: "A simple stats block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/stats-03/components/stats")
    ),
    categories: [categories.stats],
    files: [{ path: "components/stats.tsx" }],
  },
  {
    name: "stats-04",
    title: "Stats 04",
    description: "A simple stats block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/stats-04/components/stats")
    ),
    categories: [categories.stats],
    files: [{ path: "components/stats.tsx" }],
  },
  {
    name: "stats-05",
    title: "Stats 05",
    description: "A simple stats block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/stats-05/components/stats")
    ),
    categories: [categories.stats],
    files: [{ path: "components/stats.tsx" }],
  },
  {
    name: "stats-06",
    title: "Stats 06",
    description: "A simple stats block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/stats-06/components/stats")
    ),
    categories: [categories.stats],
    files: [{ path: "components/stats.tsx" }],
  },
  {
    name: "stats-07",
    title: "Stats 07",
    description: "A simple stats block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/stats-07/components/stats")
    ),
    categories: [categories.stats],
    files: [{ path: "components/stats.tsx" }],
  },
  {
    name: "stats-08",
    title: "Stats 08",
    description: "A simple stats block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/stats-08/components/stats")
    ),
    categories: [categories.stats],
    files: [{ path: "components/stats.tsx" }],
  },
  {
    name: "stats-09",
    title: "Stats 09",
    description: "A simple stats block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/stats-09/components/stats")
    ),
    categories: [categories.stats],
    files: [{ path: "components/stats.tsx" }],
  },
  {
    name: "stats-10",
    title: "Stats 10",
    description: "A simple stats block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/stats-10/components/stats")
    ),
    categories: [categories.stats],
    files: [{ path: "components/stats.tsx" }],
  },
  {
    name: "stats-11",
    title: "Stats 11",
    description: "A simple stats block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/stats-11/components/stats")
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
      () => import("@/registry/blocks/shared/contact-01/components/contact")
    ),
    categories: [categories.contact],
    files: [{ path: "components/contact.tsx" }],
  },
  {
    name: "contact-02",
    title: "Contact 02",
    description: "A simple contact block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/contact-02/components/contact")
        ),
        files: [{ path: "components/contact.tsx" }]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/contact-02/components/contact")
        ),
        files: [{ path: "components/contact.tsx" }]
      },
    },
    categories: [categories.contact],
  },
  {
    name: "contact-03",
    title: "Contact 03",
    description: "A simple contact block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/contact-03/components/contact")
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
      () => import("@/registry/blocks/shared/timeline-01/components/timeline")
    ),
    categories: [categories.timeline],
    files: [{ path: "components/timeline.tsx" }],
  },
  {
    name: "timeline-02",
    title: "Timeline 02",
    description: "A simple timeline block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/timeline-02/components/timeline")
    ),
    categories: [categories.timeline],
    files: [{ path: "components/timeline.tsx" }],
  },
  {
    name: "timeline-03",
    title: "Timeline 03",
    description: "A simple timeline block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/timeline-03/components/timeline")
    ),
    categories: [categories.timeline],
    files: [{ path: "components/timeline.tsx" }],
  },
  {
    name: "timeline-04",
    title: "Timeline 04",
    description: "A simple timeline block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/timeline-04/components/timeline")
    ),
    categories: [categories.timeline],
    files: [{ path: "components/timeline.tsx" }],
  },
  {
    name: "timeline-05",
    title: "Timeline 05",
    description: "A simple timeline block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/timeline-05/components/timeline")
    ),
    categories: [categories.timeline],
    files: [{ path: "components/timeline.tsx" }],
  },
  {
    name: "timeline-06",
    title: "Timeline 06",
    description: "A simple timeline block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/timeline-06/components/timeline")
    ),
    categories: [categories.timeline],
    files: [{ path: "components/timeline.tsx" }],
  },
  {
    name: "timeline-07",
    title: "Timeline 07",
    description: "A simple timeline block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/timeline-07/components/timeline")
    ),
    categories: [categories.timeline],
    files: [{ path: "components/timeline.tsx" }],
  },
  // Carousel Blocks
  {
    name: "carousel-block-01",
    title: "Carousel Block 01",
    description: "A simple carousel block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/carousel-block-01/components/carousel")
    ),
    categories: [categories.carousel],
    files: [{ path: "components/carousel.tsx" }],
  },
  {
    name: "carousel-block-02",
    title: "Carousel Block 02",
    description: "A simple carousel block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/carousel-block-02/components/carousel")
    ),
    categories: [categories.carousel],
    files: [{ path: "components/carousel.tsx" }],
  },
  // Changelog Blocks
  {
    name: "changelog-01",
    title: "Changelog 01",
    description: "A simple changelog block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/changelog-01/components/changelog")
        ),
        files: [{ path: "components/changelog.tsx" }]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/changelog-01/components/changelog")
        ),
        files: [{ path: "components/changelog.tsx" }]
      },
    },
    categories: [categories.changelog],
  },
  {
    name: "changelog-02",
    title: "Changelog 02",
    description: "A simple changelog block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/changelog-02/components/changelog")
        ),
        files: [{ path: "components/changelog.tsx" }]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/changelog-02/components/changelog")
        ),
        files: [{ path: "components/changelog.tsx" }]
      },
    },
    categories: [categories.changelog],
  },
  {
    name: "changelog-03",
    title: "Changelog 03",
    description: "A simple changelog block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/changelog-03/components/changelog")
        ),
        files: [{ path: "components/changelog.tsx" }]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/changelog-03/components/changelog")
        ),
        files: [{ path: "components/changelog.tsx" }]
      },
    },
    categories: [categories.changelog],
  },
  // Code Block Blocks
  {
    name: "code-block-01",
    title: "Code Block 01",
    description: "A simple code block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/code-block-01/components/code-block")
    ),
    categories: [categories.codeBlock],
    files: [{ path: "components/code-block.tsx" }],
  },
  {
    name: "code-block-02",
    title: "Code Block 02",
    description: "A simple code block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/code-block-02/components/code-block")
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
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/code-block-03/components/code-block")
        ),
        files: [{ path: "components/code-block.tsx" }]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/code-block-03/components/code-block")
        ),
        files: [{ path: "components/code-block.tsx" }]
      },
    },
    categories: [categories.codeBlock],
  },
  // Empty State Blocks
  {
    name: "empty-state-01",
    title: "Empty State 01",
    description: "A simple empty state block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/empty-state-01/components/empty-state")
    ),
    categories: [categories.emptyState],
    files: [{ path: "components/empty-state.tsx" }],
  },
  {
    name: "empty-state-02",
    title: "Empty State 02",
    description: "A simple empty state block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/empty-state-02/components/empty-state")
    ),
    categories: [categories.emptyState],
    files: [{ path: "components/empty-state.tsx" }],
  },
  {
    name: "empty-state-03",
    title: "Empty State 03",
    description: "A simple empty state block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/empty-state-03/components/empty-state")
        ),
        files: [{ path: "components/empty-state.tsx" }]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/empty-state-03/components/empty-state")
        ),
        files: [{ path: "components/empty-state.tsx" }]
      },
    },
    categories: [categories.emptyState],
  },
  {
    name: "empty-state-04",
    title: "Empty State 04",
    description: "A simple empty state block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/empty-state-04/components/empty-state")
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
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/invite-member-01/components/invite-member")
        ),
        files: [{ path: "components/invite-member.tsx" }],
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/invite-member-01/components/invite-member")
        ),
        files: [{ path: "components/invite-member.tsx" }],
      },
    },
    categories: [categories.inviteMember],
    layout: ({ children }: { children: React.ReactNode }) => (
      <div className="min-h-screen">{children}</div>
    ),
  },
  {
    name: "invite-member-02",
    title: "Invite Member 02",
    description: "A simple invite member block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/invite-member-02/components/invite-member")
        ),
        files: [{ path: "components/invite-member.tsx" }],
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/invite-member-02/components/invite-member")
        ),
        files: [{ path: "components/invite-member.tsx" }],
      },
    },
    categories: [categories.inviteMember],
    layout: ({ children }: { children: React.ReactNode }) => (
      <div className="min-h-screen">{children}</div>
    ),
  },
  {
    name: "invite-member-03",
    title: "Invite Member 03",
    description: "A simple invite member block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/invite-member-03/components/invite-member")
        ),
        files: [{ path: "components/invite-member.tsx" }],
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/invite-member-03/components/invite-member")
        ),
        files: [{ path: "components/invite-member.tsx" }],
      },
    },
    categories: [categories.inviteMember],
    layout: ({ children }: { children: React.ReactNode }) => (
      <div className="min-h-screen">{children}</div>
    ),
  },
  // Keyboard Shortcuts Blocks
  {
    name: "keyboard-shortcuts-01",
    title: "Keyboard Shortcuts 01",
    description: "A simple keyboard shortcuts block",
    component: React.lazy(
      () =>
        import(
          "@/registry/blocks/shared/keyboard-shortcuts-01/components/keyboard-shortcuts"
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
          "@/registry/blocks/shared/keyboard-shortcuts-02/components/keyboard-shortcuts"
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
          "@/registry/blocks/shared/keyboard-shortcuts-03/components/keyboard-shortcuts"
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
          "@/registry/blocks/shared/keyboard-shortcuts-04/components/keyboard-shortcuts"
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
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/members-01/components/members")
        ),
        files: [{ path: "components/members.tsx" }]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/members-01/components/members")
        ),
        files: [{ path: "components/members.tsx" }]
      },
    },
    categories: [categories.members],
  },
  {
    name: "members-02",
    title: "Members 02",
    description: "A simple members block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/members-02/components/members")
        ),
        files: [{ path: "components/members.tsx" }]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/members-02/components/members")
        ),
        files: [{ path: "components/members.tsx" }]
      },
    },
    categories: [categories.members],
  },
  {
    name: "members-03",
    title: "Members 03",
    description: "A simple members block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/members-03/components/members")
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
          "@/registry/blocks/shared/order-confirmation-01/components/order-confirmation"
        )
    ),
    categories: [categories.orderConfirmation],
    files: [{ path: "components/order-confirmation.tsx" }],
  },
  {
    name: "order-confirmation-02",
    title: "Order Confirmation 02",
    description: "A simple order confirmation block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/order-confirmation-02/components/order-confirmation")
        ),
        files: [{ path: "components/order-confirmation.tsx" }],
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/order-confirmation-02/components/order-confirmation")
        ),
        files: [{ path: "components/order-confirmation.tsx" }],
      },
    },
    categories: [categories.orderConfirmation],
  },
  // Profile Blocks
  {
    name: "profile-01",
    title: "Profile 01",
    description: "A simple profile block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/profile-01/components/profile")
        ),
        files: [{ path: "components/profile.tsx" }]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/profile-01/components/profile")
        ),
        files: [{ path: "components/profile.tsx" }]
      },
    },
    categories: [categories.profile],
  },
  {
    name: "profile-02",
    title: "Profile 02",
    description: "A simple profile block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/profile-02/components/profile")
        ),
        files: [{ path: "components/profile.tsx" }]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/profile-02/components/profile")
        ),
        files: [{ path: "components/profile.tsx" }]
      },
    },
    categories: [categories.profile],
  },
  {
    name: "profile-03",
    title: "Profile 03",
    description: "A simple profile block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/profile-03/components/profile")
        ),
        files: [{ path: "components/profile.tsx" }]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/profile-03/components/profile")
        ),
        files: [{ path: "components/profile.tsx" }]
      },
    },
    categories: [categories.profile],
  },
  {
    name: "profile-04",
    title: "Profile 04",
    description: "A simple profile block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/profile-04/components/profile")
        ),
        files: [{ path: "components/profile.tsx" }]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/profile-04/components/profile")
        ),
        files: [{ path: "components/profile.tsx" }]
      },
    },
    categories: [categories.profile],
  },
  // Setup Guide Blocks
  {
    name: "setup-guide-01",
    title: "Setup Guide 01",
    description: "A simple setup guide block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/setup-guide-01/components/setup-guide")
    ),
    categories: [categories.setupGuide],
    files: [{ path: "components/setup-guide.tsx" }],
  },
  {
    name: "setup-guide-02",
    title: "Setup Guide 02",
    description: "A simple setup guide block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/setup-guide-02/components/setup-guide")
        ),
        files: [{ path: "components/setup-guide.tsx" }]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/setup-guide-02/components/setup-guide")
        ),
        files: [{ path: "components/setup-guide.tsx" }]
      },
    },
    categories: [categories.setupGuide],
  },
  {
    name: "setup-guide-03",
    title: "Setup Guide 03",
    description: "A simple setup guide block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/setup-guide-03/components/setup-guide")
    ),
    categories: [categories.setupGuide],
    files: [{ path: "components/setup-guide.tsx" }],
  },
  {
    name: "setup-guide-04",
    title: "Setup Guide 04",
    description: "A simple setup guide block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/setup-guide-04/components/setup-guide")
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
      () => import("@/registry/blocks/shared/verification-01/components/verification")
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
      () => import("@/registry/blocks/shared/banner-01/components/banner")
    ),
    categories: [categories.banner],
    files: [{ path: "components/banner.tsx" }],
  },
  {
    name: "banner-02",
    title: "Banner 02",
    description: "A simple banner block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/banner-02/components/banner")
    ),
    categories: [categories.banner],
    files: [{ path: "components/banner.tsx" }],
  },
  {
    name: "banner-03",
    title: "Banner 03",
    description: "A simple banner block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/banner-03/components/banner")
    ),
    categories: [categories.banner],
    files: [{ path: "components/banner.tsx" }],
  },
  {
    name: "banner-04",
    title: "Banner 04",
    description: "A simple banner block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/banner-04/components/banner")
    ),
    categories: [categories.banner],
    files: [{ path: "components/banner.tsx" }],
  },
  // Blog Blocks
  {
    name: "blog-01",
    title: "Blog 01",
    description: "A simple blog block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/blog-01/components/blog")
        ),
        files: [{ path: "components/blog.tsx" }]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/blog-01/components/blog")
        ),
        files: [{ path: "components/blog.tsx" }]
      },
    },
    categories: [categories.blog],
  },
  {
    name: "blog-02",
    title: "Blog 02",
    description: "A simple blog block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/blog-02/components/blog")
        ),
        files: [{ path: "components/blog.tsx" }]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/blog-02/components/blog")
        ),
        files: [{ path: "components/blog.tsx" }]
      },
    },
    categories: [categories.blog],
  },
  {
    name: "blog-03",
    title: "Blog 03",
    description: "A simple blog block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/blog-03/components/blog")
    ),
    categories: [categories.blog],
    files: [{ path: "components/blog.tsx" }],
  },
  {
    name: "blog-04",
    title: "Blog 04",
    description: "A simple blog block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/blog-04/components/blog")
        ),
        files: [{ path: "components/blog.tsx" }]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/blog-04/components/blog")
        ),
        files: [{ path: "components/blog.tsx" }]
      },
    },
    categories: [categories.blog],
  },
  {
    name: "blog-05",
    title: "Blog 05",
    description: "A simple blog block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/blog-05/components/blog")
        ),
        files: [{ path: "components/blog.tsx" }]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/blog-05/components/blog")
        ),
        files: [{ path: "components/blog.tsx" }]
      },
    },
    categories: [categories.blog],
  },
  {
    name: "blog-06",
    title: "Blog 06",
    description: "A simple blog block",
    primitives: {
      radix: {
        component: React.lazy(
          () => import("@/registry/blocks/radix/blog-06/components/blog")
        ),
        files: [{ path: "components/blog.tsx" }]
      },
      base: {
        component: React.lazy(
          () => import("@/registry/blocks/base/blog-06/components/blog")
        ),
        files: [{ path: "components/blog.tsx" }]
      },
    },
    categories: [categories.blog],
  },
  // Not Found Blocks
  {
    name: "not-found-01",
    title: "Not Found 01",
    description: "A simple 404 not found block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/not-found-01/components/not-found")
    ),
    categories: [categories.notFound],
    files: [{ path: "components/not-found.tsx" }],
  },
  {
    name: "not-found-02",
    title: "Not Found 02",
    description:
      "A 404 not found block with big text, suggestions, and actions",
    component: React.lazy(
      () => import("@/registry/blocks/shared/not-found-02/components/not-found")
    ),
    categories: [categories.notFound],
    files: [{ path: "components/not-found.tsx" }],
  },
  {
    name: "not-found-03",
    title: "Not Found 03",
    description: "A 404 not found block with a split layout",
    component: React.lazy(
      () => import("@/registry/blocks/shared/not-found-03/components/not-found")
    ),
    categories: [categories.notFound],
    files: [{ path: "components/not-found.tsx" }],
  },
  {
    name: "not-found-04",
    title: "Not Found 04",
    description: "A 404 not found block with a search input",
    component: React.lazy(
      () => import("@/registry/blocks/shared/not-found-04/components/not-found")
    ),
    categories: [categories.notFound],
    files: [{ path: "components/not-found.tsx" }],
  },
  {
    name: "not-found-05",
    title: "Not Found 05",
    description: "A minimal 404 not found block",
    component: React.lazy(
      () => import("@/registry/blocks/shared/not-found-05/components/not-found")
    ),
    categories: [categories.notFound],
    files: [{ path: "components/not-found.tsx" }],
  },
  {
    name: "not-found-06",
    title: "Not Found 06",
    description: "A 404 not found block with popular page cards",
    component: React.lazy(
      () => import("@/registry/blocks/shared/not-found-06/components/not-found")
    ),
    categories: [categories.notFound],
    files: [{ path: "components/not-found.tsx" }],
  },
  {
    name: "not-found-07",
    title: "Not Found 07",
    description: "A humorous 404 not found block with a glitch effect",
    component: React.lazy(
      () => import("@/registry/blocks/shared/not-found-07/components/not-found")
    ),
    categories: [categories.notFound],
    files: [{ path: "components/not-found.tsx" }],
  },
  {
    name: "not-found-08",
    title: "Not Found 08",
    description: "A 404 not found block with a full-page background text",
    component: React.lazy(
      () => import("@/registry/blocks/shared/not-found-08/components/not-found")
    ),
    categories: [categories.notFound],
    files: [{ path: "components/not-found.tsx" }],
  },
];
