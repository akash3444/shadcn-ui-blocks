import type { BlockCatalogEntry } from "./schema";

export const blocks = [
  {
    name: "blog-01",
    title: "Blog 01",
    description: "A simple blog post list",
    registryDependencies: ["badge", "card", "select"],
    files: [
      {
        path: "components/blog.tsx",
        type: "registry:component",
      },
    ],
    categories: ["blog"],
    source: "variants",
    preview: "components/blog",
  },
  {
    name: "blog-02",
    title: "Blog 02",
    description: "A simple blog post list",
    dependencies: ["lucide-react"],
    registryDependencies: ["badge", "button", "card", "select"],
    files: [
      {
        path: "components/blog.tsx",
        type: "registry:component",
      },
    ],
    categories: ["blog"],
    source: "variants",
    preview: "components/blog",
  },
  {
    name: "blog-03",
    title: "Blog 03",
    description: "A simple blog post list",
    dependencies: ["lucide-react"],
    registryDependencies: ["badge", "card"],
    files: [
      {
        path: "components/blog.tsx",
        type: "registry:component",
      },
    ],
    categories: ["blog"],
    source: "variants",
    preview: "components/blog",
  },
  {
    name: "contact-01",
    title: "Contact 01",
    description: "A simple contact form",
    dependencies: ["lucide-react"],
    files: [
      {
        path: "components/contact.tsx",
        type: "registry:component",
      },
    ],
    categories: ["contact"],
    source: "shared",
    preview: "components/contact",
  },
  {
    name: "contact-02",
    title: "Contact 02",
    description: "A simple contact form",
    dependencies: ["lucide-react"],
    registryDependencies: [
      "button",
      "card",
      "checkbox",
      "input",
      "label",
      "textarea",
    ],
    files: [
      {
        path: "components/contact.tsx",
        type: "registry:component",
      },
    ],
    categories: ["contact"],
    source: "variants",
    preview: "components/contact",
  },
  {
    name: "contact-03",
    title: "Contact 03",
    description: "A simple contact form",
    dependencies: ["lucide-react"],
    files: [
      {
        path: "components/contact.tsx",
        type: "registry:component",
      },
    ],
    categories: ["contact"],
    source: "shared",
    preview: "components/contact",
  },
  {
    name: "faq-01",
    title: "FAQ 01",
    description: "A simple FAQ component",
    registryDependencies: ["accordion"],
    files: [
      {
        path: "components/faq.tsx",
        type: "registry:component",
      },
    ],
    categories: ["faq"],
    source: "variants",
    preview: "components/faq",
  },
  {
    name: "faq-02",
    title: "FAQ 02",
    description: "A simple FAQ component",
    registryDependencies: ["accordion"],
    files: [
      {
        path: "components/faq.tsx",
        type: "registry:component",
      },
    ],
    categories: ["faq"],
    source: "variants",
    preview: "components/faq",
  },
  {
    name: "faq-03",
    title: "FAQ 03",
    description: "A simple FAQ component",
    dependencies: ["lucide-react", "radix-ui"],
    registryDependencies: ["accordion"],
    files: [
      {
        path: "components/faq.tsx",
        type: "registry:component",
      },
    ],
    categories: ["faq"],
    source: "variants",
    preview: "components/faq",
  },
  {
    name: "faq-04",
    title: "FAQ 04",
    description: "A simple FAQ component",
    dependencies: ["lucide-react"],
    files: [
      {
        path: "components/faq.tsx",
        type: "registry:component",
      },
    ],
    categories: ["faq"],
    source: "shared",
    preview: "components/faq",
  },
  {
    name: "faq-05",
    title: "FAQ 05",
    description: "A simple FAQ component",
    dependencies: ["lucide-react"],
    files: [
      {
        path: "components/faq.tsx",
        type: "registry:component",
      },
    ],
    categories: ["faq"],
    source: "shared",
    preview: "components/faq",
  },
  {
    name: "faq-06",
    title: "FAQ 06",
    description: "A simple FAQ component",
    dependencies: ["lucide-react"],
    files: [
      {
        path: "components/faq.tsx",
        type: "registry:component",
      },
    ],
    categories: ["faq"],
    source: "variants",
    preview: "components/faq",
  },
  {
    name: "faq-07",
    title: "FAQ 07",
    description: "A simple FAQ component",
    dependencies: ["lucide-react", "radix-ui"],
    registryDependencies: ["accordion"],
    files: [
      {
        path: "components/faq.tsx",
        type: "registry:component",
      },
    ],
    categories: ["faq"],
    source: "variants",
    preview: "components/faq",
  },
  {
    name: "features-01",
    title: "Features 01",
    description: "A simple features block",
    dependencies: ["lucide-react"],
    files: [
      {
        path: "components/features.tsx",
        type: "registry:component",
      },
    ],
    categories: ["features"],
    source: "shared",
    preview: "components/features",
  },
  {
    name: "features-02",
    title: "Features 02",
    description: "A simple features block",
    files: [
      {
        path: "components/features.tsx",
        type: "registry:component",
      },
    ],
    categories: ["features"],
    source: "shared",
    preview: "components/features",
  },
  {
    name: "features-03",
    title: "Features 03",
    description: "A simple features block",
    dependencies: ["lucide-react"],
    registryDependencies: ["button"],
    files: [
      {
        path: "components/features.tsx",
        type: "registry:component",
      },
    ],
    categories: ["features"],
    source: "variants",
    preview: "components/features",
  },
  {
    name: "features-04",
    title: "Features 04",
    description: "A simple features block",
    dependencies: ["lucide-react"],
    registryDependencies: ["accordion"],
    files: [
      {
        path: "components/features.tsx",
        type: "registry:component",
      },
    ],
    categories: ["features"],
    source: "variants",
    preview: "components/features",
  },
  {
    name: "features-05",
    title: "Features 05",
    description: "A simple features block",
    dependencies: ["lucide-react"],
    registryDependencies: ["card"],
    files: [
      {
        path: "components/features.tsx",
        type: "registry:component",
      },
    ],
    categories: ["features"],
    source: "variants",
    preview: "components/features",
  },
  {
    name: "features-06",
    title: "Features 06",
    description: "A simple features block",
    dependencies: ["lucide-react"],
    registryDependencies: ["button"],
    files: [
      {
        path: "components/features.tsx",
        type: "registry:component",
      },
    ],
    categories: ["features"],
    source: "shared",
    preview: "components/features",
  },
  {
    name: "features-07",
    title: "Features 07",
    description: "A simple features block",
    dependencies: ["lucide-react"],
    files: [
      {
        path: "components/features.tsx",
        type: "registry:component",
      },
    ],
    categories: ["features"],
    source: "shared",
    preview: "components/features",
  },
  {
    name: "footer-01",
    title: "Footer 01",
    description: "A simple footer block",
    registryDependencies: ["separator"],
    files: [
      {
        path: "components/footer.tsx",
        type: "registry:component",
      },
    ],
    categories: ["footer"],
    source: "variants",
    preview: "components/footer",
    layout: "footer",
  },
  {
    name: "footer-02",
    title: "Footer 02",
    description: "A simple footer block",
    dependencies: ["lucide-react"],
    registryDependencies: ["separator"],
    files: [
      {
        path: "components/footer.tsx",
        type: "registry:component",
      },
    ],
    categories: ["footer"],
    source: "variants",
    preview: "components/footer",
    layout: "footer",
  },
  {
    name: "footer-03",
    title: "Footer 03",
    description: "A simple footer block",
    dependencies: ["lucide-react"],
    registryDependencies: ["button", "input", "separator"],
    files: [
      {
        path: "components/footer.tsx",
        type: "registry:component",
      },
    ],
    categories: ["footer"],
    source: "variants",
    preview: "components/footer",
    layout: "footer",
  },
  {
    name: "footer-04",
    title: "Footer 04",
    description: "A simple footer block",
    dependencies: ["lucide-react"],
    registryDependencies: ["button", "input", "separator"],
    files: [
      {
        path: "components/footer.tsx",
        type: "registry:component",
      },
    ],
    categories: ["footer"],
    source: "variants",
    preview: "components/footer",
    layout: "footer",
  },
  {
    name: "footer-05",
    title: "Footer 05",
    description: "A simple footer block",
    dependencies: ["lucide-react"],
    registryDependencies: ["separator"],
    files: [
      {
        path: "components/footer.tsx",
        type: "registry:component",
      },
    ],
    categories: ["footer"],
    source: "variants",
    preview: "components/footer",
    layout: "footer",
  },
  {
    name: "hero-01",
    title: "Hero 01",
    description: "A simple hero block",
    dependencies: ["lucide-react"],
    registryDependencies: ["badge", "button"],
    files: [
      {
        path: "components/hero.tsx",
        type: "registry:component",
      },
    ],
    categories: ["hero"],
    source: "variants",
    preview: "components/hero",
  },
  {
    name: "hero-02",
    title: "Hero 02",
    description: "A simple hero block",
    dependencies: ["lucide-react"],
    registryDependencies: ["badge", "button"],
    files: [
      {
        path: "components/hero.tsx",
        type: "registry:component",
      },
    ],
    categories: ["hero"],
    source: "variants",
    preview: "components/hero",
  },
  {
    name: "hero-03",
    title: "Hero 03",
    description: "A simple hero block",
    dependencies: ["lucide-react", "motion", "@radix-ui/react-visually-hidden"],
    registryDependencies: ["badge", "button", "navigation-menu", "sheet"],
    files: [
      {
        path: "components/hero.tsx",
        type: "registry:component",
      },
      {
        path: "components/gradient-text.tsx",
        type: "registry:component",
      },
      {
        path: "components/navbar.tsx",
        type: "registry:component",
      },
      {
        path: "components/logo.tsx",
        type: "registry:component",
      },
      {
        path: "components/nav-menu.tsx",
        type: "registry:component",
      },
      {
        path: "components/navigation-sheet.tsx",
        type: "registry:component",
      },
    ],
    categories: ["hero"],
    source: "variants",
    preview: "components/hero",
  },
  {
    name: "hero-04",
    title: "Hero 04",
    description: "A simple hero block",
    dependencies: ["lucide-react"],
    registryDependencies: ["badge", "button"],
    files: [
      {
        path: "components/hero.tsx",
        type: "registry:component",
      },
    ],
    categories: ["hero"],
    source: "variants",
    preview: "components/hero",
  },
  {
    name: "hero-05",
    title: "Hero 05",
    description: "A simple hero block",
    dependencies: ["lucide-react"],
    registryDependencies: ["badge", "button"],
    files: [
      {
        path: "components/hero.tsx",
        type: "registry:component",
      },
    ],
    categories: ["hero"],
    source: "variants",
    preview: "components/hero",
  },
  {
    name: "hero-06",
    title: "Hero 06",
    description: "A simple hero block",
    dependencies: ["lucide-react", "next-themes"],
    registryDependencies: [
      "badge",
      "button",
      "https://www.shadcnui-blocks.com/r/dot-pattern.json",
      "https://www.shadcnui-blocks.com/r/particles.json",
    ],
    files: [
      {
        path: "components/hero.tsx",
        type: "registry:component",
      },
      {
        path: "components/background-pattern.tsx",
        type: "registry:component",
      },
      {
        path: "components/ui/dot-pattern.tsx",
        type: "registry:component",
      },
      {
        path: "components/ui/particles.tsx",
        type: "registry:component",
      },
    ],
    categories: ["hero"],
    source: "variants",
    preview: "components/hero",
  },
  {
    name: "hero-07",
    title: "Hero 07",
    description: "A simple hero block",
    dependencies: ["lucide-react"],
    registryDependencies: [
      "badge",
      "button",
      "https://www.shadcnui-blocks.com/r/animated-grid-pattern.json",
    ],
    files: [
      {
        path: "components/hero.tsx",
        type: "registry:component",
      },
      {
        path: "components/ui/animated-grid-pattern.tsx",
        type: "registry:component",
      },
    ],
    categories: ["hero"],
    source: "variants",
    preview: "components/hero",
  },
  {
    name: "login-01",
    title: "Login 01",
    description: "A simple login block",
    dependencies: ["react-hook-form", "zod", "@hookform/resolvers"],
    registryDependencies: ["button", "field", "input", "separator"],
    files: [
      {
        path: "components/login.tsx",
        type: "registry:component",
      },
      {
        path: "components/logo.tsx",
        type: "registry:component",
      },
    ],
    categories: ["login", "authentication"],
    source: "variants",
    preview: "components/login",
  },
  {
    name: "login-02",
    title: "Login 02",
    description: "A simple login block",
    dependencies: ["react-hook-form", "zod", "@hookform/resolvers"],
    registryDependencies: ["button", "field", "input", "separator"],
    files: [
      {
        path: "components/login.tsx",
        type: "registry:component",
      },
      {
        path: "components/logo.tsx",
        type: "registry:component",
      },
    ],
    categories: ["login", "authentication"],
    source: "variants",
    preview: "components/login",
  },
  {
    name: "login-03",
    title: "Login 03",
    description: "A simple login block",
    dependencies: ["react-hook-form", "zod", "@hookform/resolvers"],
    registryDependencies: ["button", "field", "input", "separator"],
    files: [
      {
        path: "components/login.tsx",
        type: "registry:component",
      },
      {
        path: "components/logo.tsx",
        type: "registry:component",
      },
    ],
    categories: ["login", "authentication"],
    source: "variants",
    preview: "components/login",
  },
  {
    name: "login-04",
    title: "Login 04",
    description: "A simple login block",
    dependencies: ["react-hook-form", "zod", "@hookform/resolvers"],
    registryDependencies: ["button", "field", "input", "separator"],
    files: [
      {
        path: "components/login.tsx",
        type: "registry:component",
      },
      {
        path: "components/logo.tsx",
        type: "registry:component",
      },
    ],
    categories: ["login", "authentication"],
    source: "variants",
    preview: "components/login",
  },
  {
    name: "login-05",
    title: "Login 05",
    description: "A simple login block",
    dependencies: [
      "@hookform/resolvers",
      "lucide-react",
      "react-hook-form",
      "zod",
    ],
    registryDependencies: ["button", "field", "input", "separator"],
    files: [
      {
        path: "components/login.tsx",
        type: "registry:component",
      },
      {
        path: "components/logo.tsx",
        type: "registry:component",
      },
    ],
    categories: ["login", "authentication"],
    source: "variants",
    preview: "components/login",
  },
  {
    name: "logo-cloud-01",
    title: "Logo Cloud 01",
    description: "A simple logos block",
    files: [
      {
        path: "components/logo-cloud.tsx",
        type: "registry:component",
      },
      {
        path: "components/logos.tsx",
        type: "registry:component",
      },
    ],
    categories: ["logoCloud"],
    source: "shared",
    preview: "components/logo-cloud",
  },
  {
    name: "logo-cloud-02",
    title: "Logo Cloud 02",
    description: "A simple logos block",
    files: [
      {
        path: "components/logo-cloud.tsx",
        type: "registry:component",
      },
      {
        path: "components/logos.tsx",
        type: "registry:component",
      },
    ],
    categories: ["logoCloud"],
    source: "shared",
    preview: "components/logo-cloud",
  },
  {
    name: "logo-cloud-03",
    title: "Logo Cloud 03",
    description: "A simple logos block",
    files: [
      {
        path: "components/logo-cloud.tsx",
        type: "registry:component",
      },
      {
        path: "components/logos.tsx",
        type: "registry:component",
      },
    ],
    categories: ["logoCloud"],
    source: "shared",
    preview: "components/logo-cloud",
  },
  {
    name: "logo-cloud-04",
    title: "Logo Cloud 04",
    description: "A simple logos block",
    files: [
      {
        path: "components/logo-cloud.tsx",
        type: "registry:component",
      },
      {
        path: "components/logos.tsx",
        type: "registry:component",
      },
    ],
    categories: ["logoCloud"],
    source: "shared",
    preview: "components/logo-cloud",
  },
  {
    name: "logo-cloud-05",
    title: "Logo Cloud 05",
    description: "A simple logos block",
    files: [
      {
        path: "components/logo-cloud.tsx",
        type: "registry:component",
      },
      {
        path: "components/logos.tsx",
        type: "registry:component",
      },
    ],
    categories: ["logoCloud"],
    source: "shared",
    preview: "components/logo-cloud",
  },
  {
    name: "logo-cloud-06",
    title: "Logo Cloud 06",
    description: "A simple logos block",
    registryDependencies: ["https://www.shadcnui-blocks.com/r/marquee.json"],
    files: [
      {
        path: "components/logo-cloud.tsx",
        type: "registry:component",
      },
      {
        path: "components/logos.tsx",
        type: "registry:component",
      },
      {
        path: "components/ui/marquee.tsx",
        type: "registry:component",
      },
    ],
    categories: ["logoCloud"],
    source: "variants",
    preview: "components/logo-cloud",
  },
  {
    name: "logo-cloud-07",
    title: "Logo Cloud 07",
    description: "A simple logos block",
    registryDependencies: ["https://www.shadcnui-blocks.com/r/marquee.json"],
    files: [
      {
        path: "components/logo-cloud.tsx",
        type: "registry:component",
      },
      {
        path: "components/logos.tsx",
        type: "registry:component",
      },
      {
        path: "components/ui/marquee.tsx",
        type: "registry:component",
      },
    ],
    categories: ["logoCloud"],
    source: "variants",
    preview: "components/logo-cloud",
  },
  {
    name: "navbar-01",
    title: "Navbar 01",
    description: "A simple navbar block",
    dependencies: ["lucide-react", "@radix-ui/react-visually-hidden"],
    registryDependencies: ["button", "navigation-menu", "sheet"],
    files: [
      {
        path: "components/navbar.tsx",
        type: "registry:component",
      },
      {
        path: "components/logo.tsx",
        type: "registry:component",
      },
      {
        path: "components/nav-menu.tsx",
        type: "registry:component",
      },
      {
        path: "components/navigation-sheet.tsx",
        type: "registry:component",
      },
    ],
    categories: ["navbar"],
    source: "variants",
    preview: "components/navbar",
    layout: "navbar",
  },
  {
    name: "navbar-02",
    title: "Navbar 02",
    description: "A simple navbar block",
    dependencies: ["lucide-react", "@radix-ui/react-visually-hidden"],
    registryDependencies: ["button", "navigation-menu", "sheet"],
    files: [
      {
        path: "components/navbar.tsx",
        type: "registry:component",
      },
      {
        path: "components/logo.tsx",
        type: "registry:component",
      },
      {
        path: "components/nav-menu.tsx",
        type: "registry:component",
      },
      {
        path: "components/navigation-sheet.tsx",
        type: "registry:component",
      },
    ],
    categories: ["navbar"],
    source: "variants",
    preview: "components/navbar",
    layout: "navbar",
  },
  {
    name: "navbar-03",
    title: "Navbar 03",
    description: "A simple navbar block",
    dependencies: ["lucide-react", "@radix-ui/react-visually-hidden"],
    registryDependencies: ["button", "navigation-menu", "sheet"],
    files: [
      {
        path: "components/navbar.tsx",
        type: "registry:component",
      },
      {
        path: "components/logo.tsx",
        type: "registry:component",
      },
      {
        path: "components/nav-menu.tsx",
        type: "registry:component",
      },
      {
        path: "components/navigation-sheet.tsx",
        type: "registry:component",
      },
      {
        path: "config/navbar.ts",
        type: "registry:file",
        target: "config/navbar.ts",
      },
    ],
    categories: ["navbar"],
    source: "variants",
    preview: "components/navbar",
    layout: "navbar",
  },
  {
    name: "navbar-04",
    title: "Navbar 04",
    description: "A simple navbar block",
    dependencies: ["lucide-react", "@radix-ui/react-visually-hidden"],
    registryDependencies: ["button", "navigation-menu", "sheet"],
    files: [
      {
        path: "components/navbar.tsx",
        type: "registry:component",
      },
      {
        path: "components/logo.tsx",
        type: "registry:component",
      },
      {
        path: "components/nav-menu.tsx",
        type: "registry:component",
      },
      {
        path: "components/navigation-sheet.tsx",
        type: "registry:component",
      },
    ],
    categories: ["navbar"],
    source: "variants",
    preview: "components/navbar",
    layout: "navbar",
  },
  {
    name: "navbar-05",
    title: "Navbar 05",
    description: "A simple navbar block",
    dependencies: ["lucide-react"],
    registryDependencies: ["button", "input"],
    files: [
      {
        path: "components/navbar.tsx",
        type: "registry:component",
      },
      {
        path: "components/logo.tsx",
        type: "registry:component",
      },
    ],
    categories: ["navbar"],
    source: "variants",
    preview: "components/navbar",
    layout: "navbar",
  },
  {
    name: "pricing-01",
    title: "Pricing 01",
    description: "A simple pricing block",
    dependencies: ["lucide-react"],
    registryDependencies: ["button", "separator"],
    files: [
      {
        path: "components/pricing.tsx",
        type: "registry:component",
      },
    ],
    categories: ["pricing"],
    source: "variants",
    preview: "components/pricing",
  },
  {
    name: "pricing-02",
    title: "Pricing 02",
    description: "A simple pricing block",
    dependencies: ["lucide-react"],
    registryDependencies: ["badge", "button", "separator"],
    files: [
      {
        path: "components/pricing.tsx",
        type: "registry:component",
      },
    ],
    categories: ["pricing"],
    source: "variants",
    preview: "components/pricing",
  },
  {
    name: "pricing-03",
    title: "Pricing 03",
    description: "A simple pricing block",
    dependencies: ["lucide-react", "@number-flow/react"],
    registryDependencies: ["badge", "button", "separator", "tabs", "tooltip"],
    files: [
      {
        path: "components/pricing.tsx",
        type: "registry:component",
      },
    ],
    categories: ["pricing"],
    source: "variants",
    preview: "components/pricing",
  },
  {
    name: "pricing-04",
    title: "Pricing 04",
    description: "A simple pricing block",
    dependencies: ["lucide-react", "@number-flow/react"],
    registryDependencies: ["badge", "button", "separator", "tabs", "tooltip"],
    files: [
      {
        path: "components/pricing.tsx",
        type: "registry:component",
      },
    ],
    categories: ["pricing"],
    source: "variants",
    preview: "components/pricing",
  },
  {
    name: "pricing-05",
    title: "Pricing 05",
    description: "A simple pricing block",
    dependencies: ["lucide-react"],
    registryDependencies: ["badge", "button", "separator"],
    files: [
      {
        path: "components/pricing.tsx",
        type: "registry:component",
      },
    ],
    categories: ["pricing"],
    source: "variants",
    preview: "components/pricing",
  },
  {
    name: "pricing-06",
    title: "Pricing 06",
    description: "A simple pricing block",
    dependencies: ["lucide-react"],
    registryDependencies: ["badge", "button", "separator"],
    files: [
      {
        path: "components/pricing.tsx",
        type: "registry:component",
      },
    ],
    categories: ["pricing"],
    source: "variants",
    preview: "components/pricing",
  },
  {
    name: "signup-01",
    title: "Signup 01",
    description: "A simple signup block",
    dependencies: ["@hookform/resolvers", "react-hook-form", "zod"],
    registryDependencies: ["button", "field", "input", "separator"],
    files: [
      {
        path: "components/signup.tsx",
        type: "registry:component",
      },
      {
        path: "components/logo.tsx",
        type: "registry:component",
      },
    ],
    categories: ["signup", "authentication"],
    source: "variants",
    preview: "components/signup",
  },
  {
    name: "signup-02",
    title: "Signup 02",
    description: "A simple signup block",
    dependencies: ["@hookform/resolvers", "react-hook-form", "zod"],
    registryDependencies: ["button", "field", "input", "separator"],
    files: [
      {
        path: "components/signup.tsx",
        type: "registry:component",
      },
      {
        path: "components/logo.tsx",
        type: "registry:component",
      },
    ],
    categories: ["signup", "authentication"],
    source: "variants",
    preview: "components/signup",
  },
  {
    name: "signup-03",
    title: "Signup 03",
    description: "A simple signup block",
    dependencies: ["@hookform/resolvers", "react-hook-form", "zod"],
    registryDependencies: ["button", "field", "input", "separator"],
    files: [
      {
        path: "components/signup.tsx",
        type: "registry:component",
      },
      {
        path: "components/logo.tsx",
        type: "registry:component",
      },
    ],
    categories: ["signup", "authentication"],
    source: "variants",
    preview: "components/signup",
  },
  {
    name: "signup-04",
    title: "Signup 04",
    description: "A simple signup block",
    dependencies: ["@hookform/resolvers", "react-hook-form", "zod"],
    registryDependencies: ["button", "field", "input", "separator"],
    files: [
      {
        path: "components/signup.tsx",
        type: "registry:component",
      },
      {
        path: "components/logo.tsx",
        type: "registry:component",
      },
    ],
    categories: ["signup", "authentication"],
    source: "variants",
    preview: "components/signup",
  },
  {
    name: "signup-05",
    title: "Signup 05",
    description: "A simple signup block",
    dependencies: [
      "@hookform/resolvers",
      "lucide-react",
      "react-hook-form",
      "zod",
    ],
    registryDependencies: ["button", "field", "input", "separator"],
    files: [
      {
        path: "components/signup.tsx",
        type: "registry:component",
      },
      {
        path: "components/logo.tsx",
        type: "registry:component",
      },
    ],
    categories: ["signup", "authentication"],
    source: "variants",
    preview: "components/signup",
  },
  {
    name: "stats-01",
    title: "Stats 01",
    description: "A simple stats block",
    files: [
      {
        path: "components/stats.tsx",
        type: "registry:component",
      },
    ],
    categories: ["stats"],
    source: "shared",
    preview: "components/stats",
  },
  {
    name: "stats-02",
    title: "Stats 02",
    description: "A simple stats block",
    files: [
      {
        path: "components/stats.tsx",
        type: "registry:component",
      },
    ],
    categories: ["stats"],
    source: "shared",
    preview: "components/stats",
  },
  {
    name: "team-01",
    title: "Team 01",
    description: "A simple team block",
    files: [
      {
        path: "components/team.tsx",
        type: "registry:component",
      },
    ],
    categories: ["team"],
    source: "shared",
    preview: "components/team",
  },
  {
    name: "team-02",
    title: "Team 02",
    description: "A simple team block",
    files: [
      {
        path: "components/team.tsx",
        type: "registry:component",
      },
    ],
    categories: ["team"],
    source: "shared",
    preview: "components/team",
  },
  {
    name: "team-03",
    title: "Team 03",
    description: "A simple team block",
    dependencies: ["lucide-react"],
    registryDependencies: ["button"],
    files: [
      {
        path: "components/team.tsx",
        type: "registry:component",
      },
    ],
    categories: ["team"],
    source: "variants",
    preview: "components/team",
  },
  {
    name: "team-04",
    title: "Team 04",
    description: "A simple team block",
    dependencies: ["lucide-react"],
    registryDependencies: ["button"],
    files: [
      {
        path: "components/team.tsx",
        type: "registry:component",
      },
    ],
    categories: ["team"],
    source: "variants",
    preview: "components/team",
  },
  {
    name: "team-05",
    title: "Team 05",
    description: "A simple team block",
    dependencies: ["lucide-react"],
    registryDependencies: ["button"],
    files: [
      {
        path: "components/team.tsx",
        type: "registry:component",
      },
    ],
    categories: ["team"],
    source: "variants",
    preview: "components/team",
  },
  {
    name: "testimonials-01",
    title: "Testimonials 01",
    description: "A simple testimonial block",
    registryDependencies: ["avatar", "button"],
    files: [
      {
        path: "components/testimonials.tsx",
        type: "registry:component",
      },
    ],
    categories: ["testimonials"],
    source: "variants",
    preview: "components/testimonials",
  },
  {
    name: "testimonials-02",
    title: "Testimonials 02",
    description: "A simple testimonial block",
    registryDependencies: ["avatar", "button"],
    files: [
      {
        path: "components/testimonials.tsx",
        type: "registry:component",
      },
    ],
    categories: ["testimonials"],
    source: "variants",
    preview: "components/testimonials",
  },
  {
    name: "testimonials-03",
    title: "Testimonials 03",
    description: "A simple testimonial block",
    registryDependencies: ["avatar"],
    files: [
      {
        path: "components/testimonials.tsx",
        type: "registry:component",
      },
    ],
    categories: ["testimonials"],
    source: "variants",
    preview: "components/testimonials",
  },
  {
    name: "testimonials-04",
    title: "Testimonials 04",
    description: "A simple testimonial block",
    registryDependencies: [
      "avatar",
      "button",
      "https://www.shadcnui-blocks.com/r/marquee.json",
    ],
    files: [
      {
        path: "components/testimonials.tsx",
        type: "registry:component",
      },
      {
        path: "components/ui/marquee.tsx",
        type: "registry:component",
      },
    ],
    categories: ["testimonials"],
    source: "variants",
    preview: "components/testimonials",
  },
  {
    name: "testimonials-05",
    title: "Testimonials 05",
    description: "A simple testimonial block",
    dependencies: ["lucide-react"],
    registryDependencies: ["avatar"],
    files: [
      {
        path: "components/testimonials.tsx",
        type: "registry:component",
      },
    ],
    categories: ["testimonials"],
    source: "variants",
    preview: "components/testimonials",
  },
  {
    name: "testimonials-06",
    title: "Testimonials 06",
    description: "A simple testimonial block",
    dependencies: ["lucide-react"],
    registryDependencies: ["avatar", "carousel"],
    files: [
      {
        path: "components/testimonials.tsx",
        type: "registry:component",
      },
    ],
    categories: ["testimonials"],
    source: "variants",
    preview: "components/testimonials",
  },
  {
    name: "timeline-01",
    title: "Timeline 01",
    description: "A simple timeline block with vertically spaced dots",
    dependencies: ["lucide-react"],
    registryDependencies: ["badge"],
    files: [
      {
        path: "components/timeline.tsx",
        type: "registry:component",
      },
    ],
    categories: ["timeline"],
    source: "variants",
    preview: "components/timeline",
  },
  {
    name: "timeline-02",
    title: "Timeline 02",
    description: "A simple timeline block with icons",
    dependencies: ["lucide-react"],
    registryDependencies: ["badge"],
    files: [
      {
        path: "components/timeline.tsx",
        type: "registry:component",
      },
    ],
    categories: ["timeline"],
    source: "variants",
    preview: "components/timeline",
  },
  {
    name: "timeline-03",
    title: "Timeline 03",
    description: "A simple timeline with custom elements",
    dependencies: ["lucide-react"],
    registryDependencies: ["badge"],
    files: [
      {
        path: "components/timeline.tsx",
        type: "registry:component",
      },
    ],
    categories: ["timeline"],
    source: "variants",
    preview: "components/timeline",
  },
  {
    name: "timeline-04",
    title: "Timeline 04",
    description: "A simple timeline block for process steps",
    files: [
      {
        path: "components/timeline.tsx",
        type: "registry:component",
      },
    ],
    categories: ["timeline"],
    source: "shared",
    preview: "components/timeline",
  },
  {
    name: "timeline-05",
    title: "Timeline 05",
    description:
      "A simple timeline block for process steps with completion status",
    dependencies: ["lucide-react"],
    files: [
      {
        path: "components/timeline.tsx",
        type: "registry:component",
      },
    ],
    categories: ["timeline"],
    source: "shared",
    preview: "components/timeline",
  },
  {
    name: "timeline-06",
    title: "Timeline 06",
    description: "A simple timeline block with changelog",
    files: [
      {
        path: "components/timeline.tsx",
        type: "registry:component",
      },
    ],
    categories: ["timeline"],
    source: "shared",
    preview: "components/timeline",
  },
  {
    name: "banner-01",
    title: "Banner 01",
    description: "A simple banner block",
    files: [
      {
        path: "components/banner.tsx",
        type: "registry:component",
      },
    ],
    categories: ["banner"],
    source: "shared",
    preview: "components/banner",
  },
  {
    name: "banner-02",
    title: "Banner 02",
    description: "A simple banner block",
    dependencies: ["lucide-react"],
    registryDependencies: ["button"],
    files: [
      {
        path: "components/banner.tsx",
        type: "registry:component",
      },
    ],
    categories: ["banner"],
    source: "variants",
    preview: "components/banner",
  },
  {
    name: "banner-03",
    title: "Banner 03",
    description: "A simple banner block",
    dependencies: ["lucide-react"],
    registryDependencies: ["button"],
    files: [
      {
        path: "components/banner.tsx",
        type: "registry:component",
      },
    ],
    categories: ["banner"],
    source: "variants",
    preview: "components/banner",
  },
  {
    name: "banner-04",
    title: "Banner 04",
    description: "A simple banner block",
    dependencies: ["lucide-react"],
    registryDependencies: ["button"],
    files: [
      {
        path: "components/banner.tsx",
        type: "registry:component",
      },
    ],
    categories: ["banner"],
    source: "variants",
    preview: "components/banner",
  },
  {
    name: "cta-01",
    title: "CTA 01",
    description: "A simple CTA block",
    registryDependencies: ["button"],
    files: [
      {
        path: "components/cta.tsx",
        type: "registry:component",
      },
    ],
    categories: ["cta"],
    source: "variants",
    preview: "components/cta",
  },
  {
    name: "cta-02",
    title: "CTA 02",
    description: "A simple CTA block",
    dependencies: ["lucide-react"],
    registryDependencies: ["button"],
    files: [
      {
        path: "components/cta.tsx",
        type: "registry:component",
      },
    ],
    categories: ["cta"],
    source: "variants",
    preview: "components/cta",
  },
  {
    name: "cta-03",
    title: "CTA 03",
    description: "A simple CTA block",
    dependencies: ["lucide-react"],
    registryDependencies: ["button"],
    files: [
      {
        path: "components/cta.tsx",
        type: "registry:component",
      },
    ],
    categories: ["cta"],
    source: "variants",
    preview: "components/cta",
  },
  {
    name: "cta-04",
    title: "CTA 04",
    description: "A simple CTA block",
    dependencies: ["lucide-react"],
    registryDependencies: ["button"],
    files: [
      {
        path: "components/cta.tsx",
        type: "registry:component",
      },
    ],
    categories: ["cta"],
    source: "variants",
    preview: "components/cta",
  },
  {
    name: "cta-05",
    title: "CTA 05",
    description: "A simple CTA block",
    dependencies: ["lucide-react"],
    registryDependencies: ["button"],
    files: [
      {
        path: "components/cta.tsx",
        type: "registry:component",
      },
    ],
    categories: ["cta"],
    source: "variants",
    preview: "components/cta",
  },
  {
    name: "cta-06",
    title: "CTA 06",
    description: "A simple CTA block",
    dependencies: ["lucide-react", "@paper-design/shaders-react"],
    registryDependencies: ["button"],
    files: [
      {
        path: "components/cta.tsx",
        type: "registry:component",
      },
    ],
    categories: ["cta"],
    source: "variants",
    preview: "components/cta",
  },
  {
    name: "cta-07",
    title: "CTA 07",
    description: "A simple CTA block",
    registryDependencies: ["button"],
    files: [
      {
        path: "components/cta.tsx",
        type: "registry:component",
      },
    ],
    categories: ["cta"],
    source: "variants",
    preview: "components/cta",
  },
  {
    name: "carousel-block-01",
    title: "Carousel Block 01",
    description: "A simple carousel block",
    registryDependencies: ["carousel", "button"],
    files: [
      {
        path: "components/carousel.tsx",
        type: "registry:component",
      },
    ],
    categories: ["carousel"],
    source: "variants",
    preview: "components/carousel",
  },
  {
    name: "carousel-block-02",
    title: "Carousel Block 02",
    description: "A simple carousel block",
    registryDependencies: ["carousel"],
    files: [
      {
        path: "components/carousel.tsx",
        type: "registry:component",
      },
    ],
    categories: ["carousel"],
    source: "variants",
    preview: "components/carousel",
  },
  {
    name: "changelog-01",
    title: "Changelog 01",
    description: "A simple changelog block",
    files: [
      {
        path: "components/changelog.tsx",
        type: "registry:component",
      },
    ],
    categories: ["changelog"],
    source: "variants",
    preview: "components/changelog",
  },
  {
    name: "changelog-02",
    title: "Changelog 02",
    description: "A simple changelog block",
    files: [
      {
        path: "components/changelog.tsx",
        type: "registry:component",
      },
    ],
    categories: ["changelog"],
    source: "variants",
    preview: "components/changelog",
  },
  {
    name: "changelog-03",
    title: "Changelog 03",
    description: "A simple changelog block",
    files: [
      {
        path: "components/changelog.tsx",
        type: "registry:component",
      },
    ],
    categories: ["changelog"],
    source: "variants",
    preview: "components/changelog",
  },
  {
    name: "code-block-01",
    title: "Code Block 01",
    description: "A simple code block",
    dependencies: ["shiki"],
    files: [
      {
        path: "components/code-block.tsx",
        type: "registry:component",
      },
    ],
    categories: ["codeBlock"],
    source: "shared",
    preview: "components/code-block",
  },
  {
    name: "code-block-02",
    title: "Code Block 02",
    description: "A simple code block",
    dependencies: ["shiki"],
    files: [
      {
        path: "components/code-block.tsx",
        type: "registry:component",
      },
      {
        path: "components/code-block-header.tsx",
        type: "registry:component",
      },
      {
        path: "hooks/use-copy-to-clipboard.tsx",
        type: "registry:component",
      },
    ],
    categories: ["codeBlock"],
    source: "variants",
    preview: "components/code-block",
  },
  {
    name: "code-block-03",
    title: "Code Block 03",
    description: "A simple code block",
    dependencies: ["shiki"],
    registryDependencies: ["scroll-area", "tabs"],
    files: [
      {
        path: "components/code-block.tsx",
        type: "registry:component",
      },
    ],
    categories: ["codeBlock"],
    source: "variants",
    preview: "components/code-block",
  },
  {
    name: "empty-state-01",
    title: "Empty State 01",
    description: "A simple empty state block",
    dependencies: ["lucide-react"],
    registryDependencies: ["card", "button"],
    files: [
      {
        path: "components/empty-state.tsx",
        type: "registry:component",
      },
    ],
    categories: ["emptyState"],
    source: "variants",
    preview: "components/empty-state",
  },
  {
    name: "empty-state-02",
    title: "Empty State 02",
    description: "A simple empty state block",
    dependencies: ["lucide-react"],
    registryDependencies: ["table", "button"],
    files: [
      {
        path: "components/empty-state.tsx",
        type: "registry:component",
      },
    ],
    categories: ["emptyState"],
    source: "variants",
    preview: "components/empty-state",
  },
  {
    name: "empty-state-03",
    title: "Empty State 03",
    description: "A simple empty state block",
    dependencies: ["lucide-react"],
    registryDependencies: ["tabs", "button"],
    files: [
      {
        path: "components/empty-state.tsx",
        type: "registry:component",
      },
    ],
    categories: ["emptyState"],
    source: "variants",
    preview: "components/empty-state",
  },
  {
    name: "empty-state-04",
    title: "Empty State 04",
    description: "A simple empty state block",
    dependencies: ["lucide-react"],
    registryDependencies: ["button"],
    files: [
      {
        path: "components/empty-state.tsx",
        type: "registry:component",
      },
      {
        path: "components/magicui/marquee.tsx",
        type: "registry:component",
      },
    ],
    categories: ["emptyState"],
    source: "variants",
    preview: "components/empty-state",
  },
  {
    name: "invite-member-01",
    title: "Invite Member 01",
    description: "A simple invite member block",
    dependencies: [
      "react-hook-form",
      "@hookform/resolvers",
      "zod",
      "lucide-react",
    ],
    registryDependencies: ["button", "dialog", "field", "input", "select"],
    files: [
      {
        path: "components/invite-member.tsx",
        type: "registry:component",
      },
    ],
    categories: ["inviteMember"],
    source: "variants",
    preview: "components/invite-member",
    layout: "full-height",
  },
  {
    name: "invite-member-02",
    title: "Invite Member 02",
    description: "A simple invite member block",
    dependencies: ["lucide-react"],
    registryDependencies: [
      "avatar",
      "button",
      "dialog",
      "scroll-area",
      "tooltip",
    ],
    files: [
      {
        path: "components/invite-member.tsx",
        type: "registry:component",
      },
    ],
    categories: ["inviteMember"],
    source: "variants",
    preview: "components/invite-member",
    layout: "full-height",
  },
  {
    name: "invite-member-03",
    title: "Invite Member 03",
    description: "A simple invite member block",
    dependencies: ["lucide-react"],
    registryDependencies: [
      "avatar",
      "button",
      "dialog",
      "scroll-area",
      "tooltip",
    ],
    files: [
      {
        path: "components/invite-member.tsx",
        type: "registry:component",
      },
    ],
    categories: ["inviteMember"],
    source: "variants",
    preview: "components/invite-member",
    layout: "full-height",
  },
  {
    name: "keyboard-shortcuts-01",
    title: "Keyboard Shortcuts 01",
    description: "A simple keyboard shortcuts block",
    registryDependencies: ["card", "kbd"],
    files: [
      {
        path: "components/keyboard-shortcuts.tsx",
        type: "registry:component",
      },
    ],
    categories: ["keyboardShortcuts"],
    source: "variants",
    preview: "components/keyboard-shortcuts",
  },
  {
    name: "keyboard-shortcuts-02",
    title: "Keyboard Shortcuts 02",
    description: "A simple keyboard shortcuts block",
    dependencies: ["lucide-react"],
    registryDependencies: ["card", "kbd"],
    files: [
      {
        path: "components/keyboard-shortcuts.tsx",
        type: "registry:component",
      },
    ],
    categories: ["keyboardShortcuts"],
    source: "variants",
    preview: "components/keyboard-shortcuts",
  },
  {
    name: "keyboard-shortcuts-03",
    title: "Keyboard Shortcuts 03",
    description: "A simple keyboard shortcuts block",
    registryDependencies: ["kbd"],
    files: [
      {
        path: "components/keyboard-shortcuts.tsx",
        type: "registry:component",
      },
    ],
    categories: ["keyboardShortcuts"],
    source: "variants",
    preview: "components/keyboard-shortcuts",
  },
  {
    name: "keyboard-shortcuts-04",
    title: "Keyboard Shortcuts 04",
    description: "A simple keyboard shortcuts block",
    registryDependencies: ["kbd"],
    files: [
      {
        path: "components/keyboard-shortcuts.tsx",
        type: "registry:component",
      },
    ],
    categories: ["keyboardShortcuts"],
    source: "variants",
    preview: "components/keyboard-shortcuts",
  },
  {
    name: "members-01",
    title: "Members 01",
    description: "A simple members block",
    dependencies: ["lucide-react"],
    registryDependencies: ["avatar", "button", "table"],
    files: [
      {
        path: "components/members.tsx",
        type: "registry:component",
      },
    ],
    categories: ["members"],
    source: "variants",
    preview: "components/members",
  },
  {
    name: "members-02",
    title: "Members 02",
    description: "A simple members block",
    dependencies: ["lucide-react"],
    registryDependencies: ["avatar", "button", "table"],
    files: [
      {
        path: "components/members.tsx",
        type: "registry:component",
      },
    ],
    categories: ["members"],
    source: "variants",
    preview: "components/members",
  },
  {
    name: "members-03",
    title: "Members 03",
    description: "A simple members block",
    dependencies: ["lucide-react"],
    registryDependencies: ["button"],
    files: [
      {
        path: "components/members.tsx",
        type: "registry:component",
      },
    ],
    categories: ["members"],
    source: "variants",
    preview: "components/members",
  },
  {
    name: "order-confirmation-01",
    title: "Order Confirmation 01",
    description: "A simple order confirmation block",
    dependencies: ["lucide-react"],
    registryDependencies: ["button"],
    files: [
      {
        path: "components/order-confirmation.tsx",
        type: "registry:component",
      },
    ],
    categories: ["orderConfirmation"],
    source: "variants",
    preview: "components/order-confirmation",
  },
  {
    name: "order-confirmation-02",
    title: "Order Confirmation 02",
    description: "A simple order confirmation block",
    dependencies: ["lucide-react"],
    registryDependencies: ["separator"],
    files: [
      {
        path: "components/order-confirmation.tsx",
        type: "registry:component",
      },
    ],
    categories: ["orderConfirmation"],
    source: "variants",
    preview: "components/order-confirmation",
  },
  {
    name: "profile-01",
    title: "Profile 01",
    description: "A simple profile block",
    dependencies: ["lucide-react"],
    registryDependencies: ["button", "avatar", "tooltip", "dropdown-menu"],
    files: [
      {
        path: "components/profile.tsx",
        type: "registry:component",
      },
    ],
    categories: ["profile"],
    source: "variants",
    preview: "components/profile",
  },
  {
    name: "profile-02",
    title: "Profile 02",
    description: "A simple profile block",
    dependencies: ["lucide-react"],
    registryDependencies: ["button", "avatar", "tooltip", "dropdown-menu"],
    files: [
      {
        path: "components/profile.tsx",
        type: "registry:component",
      },
    ],
    categories: ["profile"],
    source: "variants",
    preview: "components/profile",
  },
  {
    name: "profile-03",
    title: "Profile 03",
    description: "A simple profile block",
    dependencies: ["lucide-react"],
    registryDependencies: [
      "button",
      "avatar",
      "tooltip",
      "dropdown-menu",
      "tabs",
    ],
    files: [
      {
        path: "components/profile.tsx",
        type: "registry:component",
      },
    ],
    categories: ["profile"],
    source: "variants",
    preview: "components/profile",
  },
  {
    name: "profile-04",
    title: "Profile 04",
    description: "A simple profile block",
    dependencies: ["lucide-react"],
    registryDependencies: [
      "button",
      "avatar",
      "tooltip",
      "dropdown-menu",
      "tabs",
    ],
    files: [
      {
        path: "components/profile.tsx",
        type: "registry:component",
      },
    ],
    categories: ["profile"],
    source: "variants",
    preview: "components/profile",
  },
  {
    name: "setup-guide-01",
    title: "Setup Guide 01",
    description: "A simple setup guide block",
    files: [
      {
        path: "components/setup-guide.tsx",
        type: "registry:component",
      },
    ],
    categories: ["setupGuide"],
    source: "variants",
    preview: "components/setup-guide",
  },
  {
    name: "setup-guide-02",
    title: "Setup Guide 02",
    description: "A simple setup guide block",
    files: [
      {
        path: "components/setup-guide.tsx",
        type: "registry:component",
      },
    ],
    categories: ["setupGuide"],
    source: "variants",
    preview: "components/setup-guide",
  },
  {
    name: "setup-guide-03",
    title: "Setup Guide 03",
    description: "A simple setup guide block",
    files: [
      {
        path: "components/setup-guide.tsx",
        type: "registry:component",
      },
    ],
    categories: ["setupGuide"],
    source: "variants",
    preview: "components/setup-guide",
  },
  {
    name: "setup-guide-04",
    title: "Setup Guide 04",
    description: "A simple setup guide block",
    files: [
      {
        path: "components/setup-guide.tsx",
        type: "registry:component",
      },
    ],
    categories: ["setupGuide"],
    source: "variants",
    preview: "components/setup-guide",
  },
  {
    name: "verification-01",
    title: "Verification 01",
    description: "A simple verification block",
    files: [
      {
        path: "components/verification.tsx",
        type: "registry:component",
      },
    ],
    categories: ["verification"],
    source: "variants",
    preview: "components/verification",
  },
  {
    name: "hero-08",
    title: "Hero 08",
    description: "A simple hero block",
    files: [
      {
        path: "components/hero.tsx",
        type: "registry:component",
      },
      {
        path: "components/navbar.tsx",
        type: "registry:component",
      },
      {
        path: "components/nav-menu.tsx",
        type: "registry:component",
      },
      {
        path: "components/logos.tsx",
        type: "registry:component",
      },
    ],
    categories: ["hero"],
    source: "variants",
    preview: "components/hero",
    previewFiles: [
      "components/hero.tsx",
      "components/logos.tsx",
      "components/navbar.tsx",
      "components/nav-menu.tsx",
    ],
  },
  {
    name: "features-08",
    title: "Features 08",
    description: "A simple features block",
    files: [
      {
        path: "components/features.tsx",
        type: "registry:component",
      },
    ],
    categories: ["features"],
    source: "shared",
    preview: "components/features",
  },
  {
    name: "features-09",
    title: "Features 09",
    description: "A simple features block",
    files: [
      {
        path: "components/features.tsx",
        type: "registry:component",
      },
    ],
    categories: ["features"],
    source: "shared",
    preview: "components/features",
  },
  {
    name: "features-10",
    title: "Features 10",
    description: "A simple features block",
    files: [
      {
        path: "components/features.tsx",
        type: "registry:component",
      },
      {
        path: "components/stats-card.tsx",
        type: "registry:component",
      },
    ],
    categories: ["features"],
    source: "variants",
    preview: "components/features",
  },
  {
    name: "features-11",
    title: "Features 11",
    description: "A simple features block",
    files: [
      {
        path: "components/features.tsx",
        type: "registry:component",
      },
    ],
    categories: ["features"],
    source: "variants",
    preview: "components/features",
  },
  {
    name: "features-12",
    title: "Features 12",
    description: "A simple features block",
    files: [
      {
        path: "components/features.tsx",
        type: "registry:component",
      },
    ],
    categories: ["features"],
    source: "variants",
    preview: "components/features",
  },
  {
    name: "features-13",
    title: "Features 13",
    description: "A simple features block",
    files: [
      {
        path: "components/features.tsx",
        type: "registry:component",
      },
    ],
    categories: ["features"],
    source: "shared",
    preview: "components/features",
  },
  {
    name: "features-14",
    title: "Features 14",
    description: "A simple features block",
    files: [
      {
        path: "components/features.tsx",
        type: "registry:component",
      },
    ],
    categories: ["features"],
    source: "variants",
    preview: "components/features",
  },
  {
    name: "features-15",
    title: "Features 15",
    description: "A simple features block",
    files: [
      {
        path: "components/features.tsx",
        type: "registry:component",
      },
    ],
    categories: ["features"],
    source: "shared",
    preview: "components/features",
  },
  {
    name: "features-16",
    title: "Features 16",
    description: "A simple features block",
    files: [
      {
        path: "components/features.tsx",
        type: "registry:component",
      },
    ],
    categories: ["features"],
    source: "shared",
    preview: "components/features",
  },
  {
    name: "features-17",
    title: "Features 17",
    description: "A simple features block",
    dependencies: ["lucide-react"],
    registryDependencies: ["button"],
    files: [
      {
        path: "components/features.tsx",
        type: "registry:component",
      },
    ],
    categories: ["features"],
    source: "variants",
    preview: "components/features",
  },
  {
    name: "features-18",
    title: "Features 18",
    description: "A simple features block",
    dependencies: ["lucide-react"],
    registryDependencies: ["button"],
    files: [
      {
        path: "components/features.tsx",
        type: "registry:component",
      },
    ],
    categories: ["features"],
    source: "variants",
    preview: "components/features",
  },
  {
    name: "features-19",
    title: "Features 19",
    description: "A contained features block with a call to action",
    dependencies: ["lucide-react"],
    registryDependencies: ["button"],
    files: [
      {
        path: "components/features.tsx",
        type: "registry:component",
      },
    ],
    categories: ["features"],
    source: "variants",
    preview: "components/features",
  },
  {
    name: "faq-08",
    title: "FAQ 08",
    description: "A simple FAQ block",
    files: [
      {
        path: "components/faq.tsx",
        type: "registry:component",
      },
    ],
    categories: ["faq"],
    source: "variants",
    preview: "components/faq",
  },
  {
    name: "faq-09",
    title: "FAQ 09",
    description: "A simple FAQ block",
    files: [
      {
        path: "components/faq.tsx",
        type: "registry:component",
      },
    ],
    categories: ["faq"],
    source: "variants",
    preview: "components/faq",
  },
  {
    name: "faq-10",
    title: "FAQ 10",
    description: "A simple FAQ block",
    files: [
      {
        path: "components/faq.tsx",
        type: "registry:component",
      },
    ],
    categories: ["faq"],
    source: "variants",
    preview: "components/faq",
  },
  {
    name: "faq-11",
    title: "FAQ 11",
    description: "A simple FAQ block",
    files: [
      {
        path: "components/faq.tsx",
        type: "registry:component",
      },
    ],
    categories: ["faq"],
    source: "variants",
    preview: "components/faq",
  },
  {
    name: "faq-12",
    title: "FAQ 12",
    description: "A simple FAQ block",
    dependencies: ["lucide-react"],
    files: [
      {
        path: "components/faq.tsx",
        type: "registry:component",
      },
    ],
    categories: ["faq"],
    source: "shared",
    preview: "components/faq",
  },
  {
    name: "faq-13",
    title: "FAQ 13",
    description: "A simple FAQ block",
    files: [
      {
        path: "components/faq.tsx",
        type: "registry:component",
      },
    ],
    categories: ["faq"],
    source: "shared",
    preview: "components/faq",
  },
  {
    name: "faq-14",
    title: "FAQ 14",
    description: "A simple FAQ block",
    dependencies: ["lucide-react"],
    registryDependencies: ["accordion"],
    files: [
      {
        path: "components/faq.tsx",
        type: "registry:component",
      },
    ],
    categories: ["faq"],
    source: "variants",
    preview: "components/faq",
  },
  {
    name: "footer-06",
    title: "Footer 06",
    description: "A simple footer block",
    files: [
      {
        path: "components/footer.tsx",
        type: "registry:component",
      },
    ],
    categories: ["footer"],
    source: "shared",
    preview: "components/footer",
    layout: "footer",
  },
  {
    name: "footer-07",
    title: "Footer 07",
    description: "A simple footer block",
    files: [
      {
        path: "components/footer.tsx",
        type: "registry:component",
      },
    ],
    categories: ["footer"],
    source: "shared",
    preview: "components/footer",
    layout: "footer",
  },
  {
    name: "login-06",
    title: "Login 06",
    description: "A simple login block",
    dependencies: [
      "react-hook-form",
      "@hookform/resolvers",
      "zod",
      "lucide-react",
    ],
    registryDependencies: ["button", "field", "input", "separator"],
    files: [
      {
        path: "components/login.tsx",
        type: "registry:component",
      },
      {
        path: "components/login-form.tsx",
        type: "registry:component",
      },
      {
        path: "components/icons.tsx",
        type: "registry:component",
      },
      {
        path: "components/logo.tsx",
        type: "registry:component",
      },
    ],
    categories: ["login", "authentication"],
    source: "variants",
    preview: "components/login",
  },
  {
    name: "login-07",
    title: "Login 07",
    description: "A simple login block",
    dependencies: [
      "react-hook-form",
      "@hookform/resolvers",
      "zod",
      "lucide-react",
    ],
    registryDependencies: ["button", "field", "input", "separator"],
    files: [
      {
        path: "components/login.tsx",
        type: "registry:component",
      },
      {
        path: "components/login-form.tsx",
        type: "registry:component",
      },
      {
        path: "components/icons.tsx",
        type: "registry:component",
      },
      {
        path: "components/testimonials.tsx",
        type: "registry:component",
      },
      {
        path: "components/logo.tsx",
        type: "registry:component",
      },
    ],
    categories: ["login", "authentication"],
    source: "variants",
    preview: "components/login",
  },
  {
    name: "login-08",
    title: "Login 08",
    description: "A simple login block",
    dependencies: [
      "react-hook-form",
      "@hookform/resolvers",
      "zod",
      "lucide-react",
    ],
    registryDependencies: ["button", "field", "input", "separator"],
    files: [
      {
        path: "components/login.tsx",
        type: "registry:component",
      },
      {
        path: "components/login-form.tsx",
        type: "registry:component",
      },
      {
        path: "components/icons.tsx",
        type: "registry:component",
      },
      {
        path: "components/logo.tsx",
        type: "registry:component",
      },
    ],
    categories: ["login", "authentication"],
    source: "variants",
    preview: "components/login",
  },
  {
    name: "logo-cloud-08",
    title: "Logo Cloud 08",
    description: "A simple logo cloud block",
    files: [
      {
        path: "components/logo-cloud.tsx",
        type: "registry:component",
      },
      {
        path: "components/logos.tsx",
        type: "registry:component",
      },
    ],
    categories: ["logoCloud"],
    source: "shared",
    preview: "components/logo-cloud",
  },
  {
    name: "logo-cloud-09",
    title: "Logo Cloud 09",
    description: "A simple logo cloud block",
    files: [
      {
        path: "components/logo-cloud.tsx",
        type: "registry:component",
      },
      {
        path: "components/logos.tsx",
        type: "registry:component",
      },
    ],
    categories: ["logoCloud"],
    source: "shared",
    preview: "components/logo-cloud",
  },
  {
    name: "logo-cloud-10",
    title: "Logo Cloud 10",
    description: "A simple logo cloud block",
    files: [
      {
        path: "components/logo-cloud.tsx",
        type: "registry:component",
      },
      {
        path: "components/logos.tsx",
        type: "registry:component",
      },
      {
        path: "components/magicui/marquee.tsx",
        type: "registry:component",
      },
    ],
    categories: ["logoCloud"],
    source: "shared",
    preview: "components/logo-cloud",
  },
  {
    name: "logo-cloud-11",
    title: "Logo Cloud 11",
    description: "A simple logo cloud block",
    files: [
      {
        path: "components/logo-cloud.tsx",
        type: "registry:component",
      },
      {
        path: "components/logos.tsx",
        type: "registry:component",
      },
    ],
    categories: ["logoCloud"],
    source: "shared",
    preview: "components/logo-cloud",
  },
  {
    name: "logo-cloud-12",
    title: "Logo Cloud 12",
    description: "A simple logo cloud block",
    files: [
      {
        path: "components/logo-cloud.tsx",
        type: "registry:component",
      },
      {
        path: "components/logos.tsx",
        type: "registry:component",
      },
    ],
    categories: ["logoCloud"],
    source: "shared",
    preview: "components/logo-cloud",
  },
  {
    name: "logo-cloud-13",
    title: "Logo Cloud 13",
    description: "A simple logo cloud block",
    files: [
      {
        path: "components/logo-cloud.tsx",
        type: "registry:component",
      },
      {
        path: "components/logos.tsx",
        type: "registry:component",
      },
      {
        path: "components/magicui/marquee.tsx",
        type: "registry:component",
      },
    ],
    categories: ["logoCloud"],
    source: "shared",
    preview: "components/logo-cloud",
  },
  {
    name: "logo-cloud-14",
    title: "Logo Cloud 14",
    description: "A simple logo cloud block",
    files: [
      {
        path: "components/logo-cloud.tsx",
        type: "registry:component",
      },
      {
        path: "components/logos.tsx",
        type: "registry:component",
      },
    ],
    categories: ["logoCloud"],
    source: "shared",
    preview: "components/logo-cloud",
  },
  {
    name: "logo-cloud-15",
    title: "Logo Cloud 15",
    description: "A simple logo cloud block",
    files: [
      {
        path: "components/logo-cloud.tsx",
        type: "registry:component",
      },
      {
        path: "components/logos.tsx",
        type: "registry:component",
      },
      {
        path: "components/ui/marquee.tsx",
        type: "registry:component",
      },
      {
        path: "components/magicui/border-beam.tsx",
        type: "registry:component",
      },
    ],
    categories: ["logoCloud"],
    source: "variants",
    preview: "components/logo-cloud",
  },
  {
    name: "pricing-07",
    title: "Pricing 07",
    description: "A simple pricing block",
    dependencies: ["@number-flow/react"],
    files: [
      {
        path: "components/pricing.tsx",
        type: "registry:component",
      },
    ],
    categories: ["pricing"],
    source: "variants",
    preview: "components/pricing",
  },
  {
    name: "pricing-08",
    title: "Pricing 08",
    description: "A simple pricing block",
    files: [
      {
        path: "components/pricing.tsx",
        type: "registry:component",
      },
    ],
    categories: ["pricing"],
    source: "variants",
    preview: "components/pricing",
  },
  {
    name: "pricing-09",
    title: "Pricing 09",
    description: "A simple pricing block",
    files: [
      {
        path: "components/pricing.tsx",
        type: "registry:component",
      },
      {
        path: "components/magicui/border-beam.tsx",
        type: "registry:component",
      },
    ],
    categories: ["pricing"],
    source: "variants",
    preview: "components/pricing",
  },
  {
    name: "pricing-10",
    title: "Pricing 10",
    description: "A simple pricing block",
    dependencies: ["lucide-react"],
    registryDependencies: ["badge", "button"],
    files: [
      {
        path: "components/pricing.tsx",
        type: "registry:component",
      },
    ],
    categories: ["pricing"],
    source: "variants",
    preview: "components/pricing",
  },
  {
    name: "signup-06",
    title: "Signup 06",
    description: "A simple signup block",
    dependencies: [
      "react-hook-form",
      "@hookform/resolvers",
      "zod",
      "lucide-react",
    ],
    registryDependencies: ["button", "field", "input", "separator"],
    files: [
      {
        path: "components/signup.tsx",
        type: "registry:component",
      },
      {
        path: "components/signup-form.tsx",
        type: "registry:component",
      },
      {
        path: "components/icons.tsx",
        type: "registry:component",
      },
      {
        path: "components/logo.tsx",
        type: "registry:component",
      },
    ],
    categories: ["signup", "authentication"],
    source: "variants",
    preview: "components/signup",
  },
  {
    name: "signup-07",
    title: "Signup 07",
    description: "A simple signup block",
    dependencies: [
      "react-hook-form",
      "@hookform/resolvers",
      "zod",
      "lucide-react",
    ],
    registryDependencies: ["button", "field", "input", "separator"],
    files: [
      {
        path: "components/signup.tsx",
        type: "registry:component",
      },
      {
        path: "components/signup-form.tsx",
        type: "registry:component",
      },
      {
        path: "components/icons.tsx",
        type: "registry:component",
      },
      {
        path: "components/testimonials.tsx",
        type: "registry:component",
      },
      {
        path: "components/logo.tsx",
        type: "registry:component",
      },
    ],
    categories: ["signup", "authentication"],
    source: "variants",
    preview: "components/signup",
  },
  {
    name: "signup-08",
    title: "Signup 08",
    description: "A simple signup block",
    dependencies: [
      "react-hook-form",
      "@hookform/resolvers",
      "zod",
      "lucide-react",
    ],
    registryDependencies: ["button", "field", "input", "separator"],
    files: [
      {
        path: "components/signup.tsx",
        type: "registry:component",
      },
      {
        path: "components/signup-form.tsx",
        type: "registry:component",
      },
      {
        path: "components/icons.tsx",
        type: "registry:component",
      },
      {
        path: "components/logo.tsx",
        type: "registry:component",
      },
    ],
    categories: ["signup", "authentication"],
    source: "variants",
    preview: "components/signup",
  },
  {
    name: "stats-03",
    title: "Stats 03",
    description: "A simple stats block",
    files: [
      {
        path: "components/stats.tsx",
        type: "registry:component",
      },
    ],
    categories: ["stats"],
    source: "shared",
    preview: "components/stats",
  },
  {
    name: "stats-04",
    title: "Stats 04",
    description: "A simple stats block",
    files: [
      {
        path: "components/stats.tsx",
        type: "registry:component",
      },
    ],
    categories: ["stats"],
    source: "shared",
    preview: "components/stats",
  },
  {
    name: "stats-05",
    title: "Stats 05",
    description: "A simple stats block",
    files: [
      {
        path: "components/stats.tsx",
        type: "registry:component",
      },
    ],
    categories: ["stats"],
    source: "shared",
    preview: "components/stats",
  },
  {
    name: "stats-06",
    title: "Stats 06",
    description: "A simple stats block",
    files: [
      {
        path: "components/stats.tsx",
        type: "registry:component",
      },
    ],
    categories: ["stats"],
    source: "shared",
    preview: "components/stats",
  },
  {
    name: "stats-07",
    title: "Stats 07",
    description: "A simple stats block",
    files: [
      {
        path: "components/stats.tsx",
        type: "registry:component",
      },
    ],
    categories: ["stats"],
    source: "shared",
    preview: "components/stats",
  },
  {
    name: "stats-08",
    title: "Stats 08",
    description: "A simple stats block",
    files: [
      {
        path: "components/stats.tsx",
        type: "registry:component",
      },
    ],
    categories: ["stats"],
    source: "shared",
    preview: "components/stats",
  },
  {
    name: "stats-09",
    title: "Stats 09",
    description: "A simple stats block",
    files: [
      {
        path: "components/stats.tsx",
        type: "registry:component",
      },
    ],
    categories: ["stats"],
    source: "shared",
    preview: "components/stats",
  },
  {
    name: "stats-10",
    title: "Stats 10",
    description: "A simple stats block",
    files: [
      {
        path: "components/stats.tsx",
        type: "registry:component",
      },
    ],
    categories: ["stats"],
    source: "variants",
    preview: "components/stats",
  },
  {
    name: "stats-11",
    title: "Stats 11",
    description: "A simple stats block",
    files: [
      {
        path: "components/stats.tsx",
        type: "registry:component",
      },
    ],
    categories: ["stats"],
    source: "shared",
    preview: "components/stats",
  },
  {
    name: "team-06",
    title: "Team 06",
    description: "A simple team block",
    files: [
      {
        path: "components/team.tsx",
        type: "registry:component",
      },
    ],
    categories: ["team"],
    source: "shared",
    preview: "components/team",
  },
  {
    name: "team-07",
    title: "Team 07",
    description: "A simple team block",
    files: [
      {
        path: "components/team.tsx",
        type: "registry:component",
      },
    ],
    categories: ["team"],
    source: "shared",
    preview: "components/team",
  },
  {
    name: "team-08",
    title: "Team 08",
    description: "A simple team block",
    files: [
      {
        path: "components/team.tsx",
        type: "registry:component",
      },
    ],
    categories: ["team"],
    source: "shared",
    preview: "components/team",
  },
  {
    name: "team-09",
    title: "Team 09",
    description: "A simple team block",
    files: [
      {
        path: "components/team.tsx",
        type: "registry:component",
      },
    ],
    categories: ["team"],
    source: "shared",
    preview: "components/team",
  },
  {
    name: "team-10",
    title: "Team 10",
    description: "A simple team block",
    files: [
      {
        path: "components/team.tsx",
        type: "registry:component",
      },
    ],
    categories: ["team"],
    source: "variants",
    preview: "components/team",
  },
  {
    name: "team-11",
    title: "Team 11",
    description: "A simple team block",
    files: [
      {
        path: "components/team.tsx",
        type: "registry:component",
      },
    ],
    categories: ["team"],
    source: "shared",
    preview: "components/team",
  },
  {
    name: "team-12",
    title: "Team 12",
    description: "A simple team block",
    files: [
      {
        path: "components/team.tsx",
        type: "registry:component",
      },
    ],
    categories: ["team"],
    source: "shared",
    preview: "components/team",
  },
  {
    name: "team-13",
    title: "Team 13",
    description: "A simple team block",
    files: [
      {
        path: "components/team.tsx",
        type: "registry:component",
      },
    ],
    categories: ["team"],
    source: "shared",
    preview: "components/team",
  },
  {
    name: "testimonials-07",
    title: "Testimonials 07",
    description: "A simple testimonials block",
    files: [
      {
        path: "components/testimonials.tsx",
        type: "registry:component",
      },
    ],
    categories: ["testimonials"],
    source: "variants",
    preview: "components/testimonials",
  },
  {
    name: "testimonials-08",
    title: "Testimonials 08",
    description: "A simple testimonials block",
    files: [
      {
        path: "components/testimonials.tsx",
        type: "registry:component",
      },
    ],
    categories: ["testimonials"],
    source: "variants",
    preview: "components/testimonials",
  },
  {
    name: "testimonials-09",
    title: "Testimonials 09",
    description: "A simple testimonials block",
    files: [
      {
        path: "components/testimonials.tsx",
        type: "registry:component",
      },
    ],
    categories: ["testimonials"],
    source: "shared",
    preview: "components/testimonials",
  },
  {
    name: "testimonials-10",
    title: "Testimonials 10",
    description: "A simple testimonials block",
    files: [
      {
        path: "components/testimonials.tsx",
        type: "registry:component",
      },
    ],
    categories: ["testimonials"],
    source: "shared",
    preview: "components/testimonials",
  },
  {
    name: "testimonials-11",
    title: "Testimonials 11",
    description: "A simple testimonials block",
    files: [
      {
        path: "components/testimonials.tsx",
        type: "registry:component",
      },
    ],
    categories: ["testimonials"],
    source: "variants",
    preview: "components/testimonials",
  },
  {
    name: "testimonials-12",
    title: "Testimonials 12",
    description: "A simple testimonials block",
    files: [
      {
        path: "components/testimonials.tsx",
        type: "registry:component",
      },
    ],
    categories: ["testimonials"],
    source: "shared",
    preview: "components/testimonials",
  },
  {
    name: "testimonials-13",
    title: "Testimonials 13",
    description: "A simple testimonials block",
    files: [
      {
        path: "components/testimonials.tsx",
        type: "registry:component",
      },
      {
        path: "components/ui/marquee.tsx",
        type: "registry:component",
      },
    ],
    categories: ["testimonials"],
    source: "variants",
    preview: "components/testimonials",
  },
  {
    name: "blog-04",
    title: "Blog 04",
    description: "A simple blog block",
    files: [
      {
        path: "components/blog.tsx",
        type: "registry:component",
      },
    ],
    categories: ["blog"],
    source: "variants",
    preview: "components/blog",
  },
  {
    name: "blog-05",
    title: "Blog 05",
    description: "A simple blog block",
    files: [
      {
        path: "components/blog.tsx",
        type: "registry:component",
      },
    ],
    categories: ["blog"],
    source: "variants",
    preview: "components/blog",
  },
  {
    name: "blog-06",
    title: "Blog 06",
    description: "A simple blog block",
    files: [
      {
        path: "components/blog.tsx",
        type: "registry:component",
      },
    ],
    categories: ["blog"],
    source: "variants",
    preview: "components/blog",
  },
  {
    name: "not-found-01",
    title: "Not Found 01",
    description: "A simple 404 not found block",
    registryDependencies: ["button"],
    files: [
      {
        path: "components/not-found.tsx",
        type: "registry:component",
      },
    ],
    categories: ["notFound"],
    source: "variants",
    preview: "components/not-found",
  },
  {
    name: "not-found-02",
    title: "Not Found 02",
    description:
      "A 404 not found block with big text, suggestions, and actions",
    dependencies: ["lucide-react"],
    registryDependencies: ["button"],
    files: [
      {
        path: "components/not-found.tsx",
        type: "registry:component",
      },
    ],
    categories: ["notFound"],
    source: "variants",
    preview: "components/not-found",
  },
  {
    name: "not-found-03",
    title: "Not Found 03",
    description: "A 404 not found block with a split layout",
    dependencies: ["lucide-react"],
    registryDependencies: ["button"],
    files: [
      {
        path: "components/not-found.tsx",
        type: "registry:component",
      },
    ],
    categories: ["notFound"],
    source: "variants",
    preview: "components/not-found",
  },
  {
    name: "not-found-04",
    title: "Not Found 04",
    description: "A 404 not found block with a search input",
    dependencies: ["lucide-react"],
    registryDependencies: ["button", "input"],
    files: [
      {
        path: "components/not-found.tsx",
        type: "registry:component",
      },
    ],
    categories: ["notFound"],
    source: "variants",
    preview: "components/not-found",
  },
  {
    name: "not-found-05",
    title: "Not Found 05",
    description: "A minimal 404 not found block",
    dependencies: ["lucide-react"],
    registryDependencies: ["button"],
    files: [
      {
        path: "components/not-found.tsx",
        type: "registry:component",
      },
    ],
    categories: ["notFound"],
    source: "variants",
    preview: "components/not-found",
  },
  {
    name: "not-found-06",
    title: "Not Found 06",
    description: "A 404 not found block with popular page cards",
    dependencies: ["lucide-react"],
    registryDependencies: ["button"],
    files: [
      {
        path: "components/not-found.tsx",
        type: "registry:component",
      },
    ],
    categories: ["notFound"],
    source: "variants",
    preview: "components/not-found",
  },
  {
    name: "not-found-07",
    title: "Not Found 07",
    description: "A humorous 404 not found block with a glitch effect",
    registryDependencies: ["button"],
    cssVars: {
      theme: {
        "--animate-glitch-after":
          "glitch var(--after-duration) infinite linear alternate-reverse",
        "--animate-glitch-before":
          "glitch var(--before-duration) infinite linear alternate-reverse",
      },
    },
    css: {
      "@keyframes glitch": {
        "0%": {
          "clip-path": "inset(20% 0 50% 0)",
        },
        "5%": {
          "clip-path": "inset(10% 0 60% 0)",
        },
        "10%": {
          "clip-path": "inset(15% 0 55% 0)",
        },
        "15%": {
          "clip-path": "inset(25% 0 35% 0)",
        },
        "20%": {
          "clip-path": "inset(30% 0 40% 0)",
        },
        "25%": {
          "clip-path": "inset(40% 0 20% 0)",
        },
        "30%": {
          "clip-path": "inset(10% 0 60% 0)",
        },
        "35%": {
          "clip-path": "inset(15% 0 55% 0)",
        },
        "40%": {
          "clip-path": "inset(25% 0 35% 0)",
        },
        "45%": {
          "clip-path": "inset(30% 0 40% 0)",
        },
        "50%": {
          "clip-path": "inset(20% 0 50% 0)",
        },
        "55%": {
          "clip-path": "inset(10% 0 60% 0)",
        },
        "60%": {
          "clip-path": "inset(15% 0 55% 0)",
        },
        "65%": {
          "clip-path": "inset(25% 0 35% 0)",
        },
        "70%": {
          "clip-path": "inset(30% 0 40% 0)",
        },
        "75%": {
          "clip-path": "inset(40% 0 20% 0)",
        },
        "80%": {
          "clip-path": "inset(20% 0 50% 0)",
        },
        "85%": {
          "clip-path": "inset(10% 0 60% 0)",
        },
        "90%": {
          "clip-path": "inset(15% 0 55% 0)",
        },
        "95%": {
          "clip-path": "inset(25% 0 35% 0)",
        },
        "100%": {
          "clip-path": "inset(30% 0 40% 0)",
        },
      },
    },
    files: [
      {
        path: "components/not-found.tsx",
        type: "registry:component",
      },
      {
        path: "components/glitch-text.tsx",
        type: "registry:component",
      },
    ],
    categories: ["notFound"],
    source: "variants",
    preview: "components/not-found",
  },
  {
    name: "not-found-08",
    title: "Not Found 08",
    description: "A 404 not found block with a full-page background text",
    registryDependencies: ["button"],
    files: [
      {
        path: "components/not-found.tsx",
        type: "registry:component",
      },
    ],
    categories: ["notFound"],
    source: "variants",
    preview: "components/not-found",
  },
  {
    name: "integrations-01",
    title: "Integrations 01",
    description: "A simple integrations block",
    files: [
      {
        path: "components/integrations.tsx",
        type: "registry:component",
      },
    ],
    categories: ["integrations"],
    source: "variants",
    preview: "components/integrations",
  },
  {
    name: "integrations-02",
    title: "Integrations 02",
    description: "A simple integrations block",
    files: [
      {
        path: "components/integrations.tsx",
        type: "registry:component",
      },
    ],
    categories: ["integrations"],
    source: "variants",
    preview: "components/integrations",
  },
  {
    name: "integrations-03",
    title: "Integrations 03",
    description: "A simple integrations block",
    files: [
      {
        path: "components/integrations.tsx",
        type: "registry:component",
      },
    ],
    categories: ["integrations"],
    source: "variants",
    preview: "components/integrations",
  },
  {
    name: "integrations-04",
    title: "Integrations 04",
    description: "A simple integrations block",
    files: [
      {
        path: "components/integrations.tsx",
        type: "registry:component",
      },
    ],
    categories: ["integrations"],
    source: "shared",
    preview: "components/integrations",
  },
  {
    name: "integrations-05",
    title: "Integrations 05",
    description: "A simple integrations block",
    files: [
      {
        path: "components/integrations.tsx",
        type: "registry:component",
      },
    ],
    categories: ["integrations"],
    source: "shared",
    preview: "components/integrations",
  },
] as const satisfies readonly BlockCatalogEntry[];
