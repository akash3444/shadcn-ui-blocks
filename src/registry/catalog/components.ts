import type { ComponentCatalogEntry } from "./schema";

export const components = [
  {
    name: "accordion-01",
    type: "registry:component",
    title: "Default Accordion",
    description: "A default accordion component",
    registryDependencies: ["accordion"],
    files: [
      {
        path: "src/components/customized/accordion/accordion-01.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "accordion",
      title: "Default",
    },
  },
  {
    name: "accordion-02",
    type: "registry:component",
    title: "Multiple Accordion",
    description: "An accordion that can open several items at once",
    registryDependencies: ["accordion"],
    files: [
      {
        path: "src/components/customized/accordion/accordion-02.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "accordion",
      title: "Multiple",
    },
  },
  {
    name: "accordion-03",
    type: "registry:component",
    title: "Disabled Accordion Item",
    description: "An accordion with a disabled item",
    registryDependencies: ["accordion"],
    files: [
      {
        path: "src/components/customized/accordion/accordion-03.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "accordion",
      title: "Disabled",
    },
  },
  {
    name: "alert-01",
    type: "registry:component",
    title: "Primary Alert",
    description: "A primary alert component",
    dependencies: ["lucide-react"],
    registryDependencies: ["alert"],
    files: [
      {
        path: "src/components/customized/alert/alert-01.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "alert",
      title: "Primary",
    },
  },
  {
    name: "alert-02",
    type: "registry:component",
    title: "Destructive Alert",
    description: "A destructive alert component",
    dependencies: ["lucide-react"],
    registryDependencies: ["alert"],
    files: [
      {
        path: "src/components/customized/alert/alert-02.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "alert",
      title: "Destructive",
    },
  },
  {
    name: "alert-03",
    type: "registry:component",
    title: "Alert with Action",
    description: "An alert with an action button",
    dependencies: ["lucide-react"],
    registryDependencies: ["alert", "button"],
    files: [
      {
        path: "src/components/customized/alert/alert-03.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "alert",
      title: "With action",
    },
  },
  {
    name: "alert-dialog-01",
    type: "registry:component",
    title: "Default Alert Dialog",
    description: "A default alert dialog component",
    registryDependencies: ["alert-dialog", "button"],
    files: [
      {
        path: "src/components/customized/alert-dialog/alert-dialog-01.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "alert-dialog",
      title: "Default",
    },
  },
  {
    name: "alert-dialog-02",
    type: "registry:component",
    title: "Small Alert Dialog",
    description: "A compact alert dialog",
    registryDependencies: ["alert-dialog", "button"],
    files: [
      {
        path: "src/components/customized/alert-dialog/alert-dialog-02.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "alert-dialog",
      title: "Small",
    },
  },
  {
    name: "alert-dialog-03",
    type: "registry:component",
    title: "Alert Dialog with Media",
    description: "An alert dialog with an icon and a destructive action",
    dependencies: ["lucide-react"],
    registryDependencies: ["alert-dialog", "button"],
    files: [
      {
        path: "src/components/customized/alert-dialog/alert-dialog-03.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "alert-dialog",
      title: "With media",
    },
  },
  {
    name: "avatar-01",
    type: "registry:component",
    title: "Default Avatar",
    description: "A default avatar component",
    registryDependencies: ["avatar"],
    files: [
      {
        path: "src/components/customized/avatar/avatar-01.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "avatar",
      title: "Default",
    },
  },
  {
    name: "avatar-02",
    type: "registry:component",
    title: "Avatar Sizes",
    description: "Avatars in every available size",
    registryDependencies: ["avatar"],
    files: [
      {
        path: "src/components/customized/avatar/avatar-02.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "avatar",
      title: "Sizes",
    },
  },
  {
    name: "avatar-03",
    type: "registry:component",
    title: "Avatar Fallback",
    description: "Avatars showing initials and icon fallbacks",
    dependencies: ["lucide-react"],
    registryDependencies: ["avatar"],
    files: [
      {
        path: "src/components/customized/avatar/avatar-03.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "avatar",
      title: "Fallback",
    },
  },
  {
    name: "avatar-04",
    type: "registry:component",
    title: "Avatar with Badge",
    description: "An avatar with a status badge",
    registryDependencies: ["avatar"],
    files: [
      {
        path: "src/components/customized/avatar/avatar-04.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "avatar",
      title: "With badge",
    },
  },
  {
    name: "avatar-05",
    type: "registry:component",
    title: "Avatar with Ring",
    description: "Avatars with a ring around them",
    registryDependencies: ["avatar"],
    files: [
      {
        path: "src/components/customized/avatar/avatar-05.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "avatar",
      title: "With ring",
    },
  },
  {
    name: "avatar-06",
    type: "registry:component",
    title: "Avatar with Number Badge",
    description: "Avatars with a number badge in the corner",
    registryDependencies: ["avatar", "badge"],
    files: [
      {
        path: "src/components/customized/avatar/avatar-06.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "avatar",
      title: "With number badge",
    },
  },
  {
    name: "avatar-07",
    type: "registry:component",
    title: "Avatar Shapes",
    description: "Circle, rounded and square avatars",
    registryDependencies: ["avatar"],
    files: [
      {
        path: "src/components/customized/avatar/avatar-07.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "avatar",
      title: "Shapes",
    },
  },
  {
    name: "avatar-08",
    type: "registry:component",
    title: "Avatar Group",
    description: "A stacked group of avatars with a count",
    registryDependencies: ["avatar"],
    files: [
      {
        path: "src/components/customized/avatar/avatar-08.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "avatar",
      title: "Group",
    },
  },
  {
    name: "badge-01",
    type: "registry:component",
    title: "Default Badge",
    description: "A default badge component",
    registryDependencies: ["badge"],
    files: [
      {
        path: "src/components/customized/badge/badge-01.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "badge",
      title: "Default",
    },
  },
  {
    name: "badge-02",
    type: "registry:component",
    title: "Secondary Badge",
    description: "A secondary badge component",
    registryDependencies: ["badge"],
    files: [
      {
        path: "src/components/customized/badge/badge-02.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "badge",
      title: "Secondary",
    },
  },
  {
    name: "badge-03",
    type: "registry:component",
    title: "Destructive Badge",
    description: "A destructive badge component",
    registryDependencies: ["badge"],
    files: [
      {
        path: "src/components/customized/badge/badge-03.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "badge",
      title: "Destructive",
    },
  },
  {
    name: "badge-04",
    type: "registry:component",
    title: "Outline Badge",
    description: "A outline badge component",
    registryDependencies: ["badge"],
    files: [
      {
        path: "src/components/customized/badge/badge-04.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "badge",
      title: "Outline",
    },
  },
  {
    name: "badge-05",
    type: "registry:component",
    title: "Ghost Badge",
    description: "A ghost badge component",
    registryDependencies: ["badge"],
    files: [
      {
        path: "src/components/customized/badge/badge-05.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "badge",
      title: "Ghost",
    },
  },
  {
    name: "badge-06",
    type: "registry:component",
    title: "Link Badge",
    description: "A badge rendered as a link",
    dependencies: ["lucide-react"],
    registryDependencies: ["badge"],
    files: [
      {
        path: "src/components/customized/badge/badge-06.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "badge",
      title: "Link",
    },
  },
  {
    name: "badge-07",
    type: "registry:component",
    title: "Badge with Icon",
    description: "Badges with leading and trailing icons",
    dependencies: ["lucide-react"],
    registryDependencies: ["badge", "spinner"],
    files: [
      {
        path: "src/components/customized/badge/badge-07.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "badge",
      title: "With icon",
    },
  },
  {
    name: "button-01",
    type: "registry:component",
    title: "Primary Button",
    description: "A primary button component",
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/customized/button/button-01.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "button",
      title: "Primary",
    },
  },
  {
    name: "button-02",
    type: "registry:component",
    title: "Secondary Button",
    description: "A secondary button component",
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/customized/button/button-02.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "button",
      title: "Secondary",
    },
  },
  {
    name: "button-03",
    type: "registry:component",
    title: "Destructive Button",
    description: "A destructive button component",
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/customized/button/button-03.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "button",
      title: "Destructive",
    },
  },
  {
    name: "button-04",
    type: "registry:component",
    title: "Outline Button",
    description: "An outline button component",
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/customized/button/button-04.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "button",
      title: "Outline",
    },
  },
  {
    name: "button-08",
    type: "registry:component",
    title: "Ghost Button",
    description: "A ghost button component",
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/customized/button/button-08.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "button",
      title: "Ghost",
    },
  },
  {
    name: "button-24",
    type: "registry:component",
    title: "Link Button",
    description: "A button styled as a link",
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/customized/button/button-24.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "button",
      title: "Link",
    },
  },
  {
    name: "button-25",
    type: "registry:component",
    title: "Button Sizes",
    description: "Buttons in every available size",
    dependencies: ["lucide-react"],
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/customized/button/button-25.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "button",
      title: "Sizes",
    },
  },
  {
    name: "button-05",
    type: "registry:component",
    title: "Icon Button",
    description: "Buttons with icons",
    dependencies: ["lucide-react"],
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/customized/button/button-05.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "button",
      title: "Icon",
    },
  },
  {
    name: "button-06",
    type: "registry:component",
    title: "Loading Button",
    description: "A button with a loading spinner",
    registryDependencies: ["button", "spinner"],
    files: [
      {
        path: "src/components/customized/button/button-06.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "button",
      title: "Loading",
    },
  },
  {
    name: "button-26",
    type: "registry:component",
    title: "Disabled Button",
    description: "Disabled buttons",
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/customized/button/button-26.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "button",
      title: "Disabled",
    },
  },
  {
    name: "button-27",
    type: "registry:component",
    title: "Link as Button",
    description: "An anchor rendered with button styles",
    dependencies: ["lucide-react"],
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/customized/button/button-27.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "button",
      title: "As link",
    },
  },
  {
    name: "card-01",
    type: "registry:component",
    title: "Default Card",
    description: "A default card component",
    registryDependencies: ["card", "button", "input", "label", "select"],
    files: [
      {
        path: "src/components/customized/card/card-01.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "card",
      title: "Default",
    },
  },
  {
    name: "card-02",
    type: "registry:component",
    title: "Small Card",
    description: "A compact card with an action",
    registryDependencies: ["card", "button"],
    files: [
      {
        path: "src/components/customized/card/card-02.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "card",
      title: "Small",
    },
  },
  {
    name: "card-03",
    type: "registry:component",
    title: "Card with Image",
    description: "A card with a cover image",
    registryDependencies: ["card", "button"],
    files: [
      {
        path: "src/components/customized/card/card-03.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "card",
      title: "With image",
    },
  },
  {
    name: "checkbox-01",
    type: "registry:component",
    title: "Checkbox with Text",
    description: "A checkbox with text component",
    registryDependencies: ["checkbox"],
    files: [
      {
        path: "src/components/customized/checkbox/checkbox-01.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "checkbox",
      title: "With Text",
    },
  },
  {
    name: "checkbox-02",
    type: "registry:component",
    title: "Checkbox with Description",
    description: "A checkbox with a label and description",
    registryDependencies: ["checkbox", "field"],
    files: [
      {
        path: "src/components/customized/checkbox/checkbox-02.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "checkbox",
      title: "With description",
    },
  },
  {
    name: "checkbox-03",
    type: "registry:component",
    title: "Disabled Checkbox",
    description: "Disabled checkboxes",
    registryDependencies: ["checkbox", "field"],
    files: [
      {
        path: "src/components/customized/checkbox/checkbox-03.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "checkbox",
      title: "Disabled",
    },
  },
  {
    name: "checkbox-04",
    type: "registry:component",
    title: "Invalid Checkbox",
    description: "A checkbox in an invalid state",
    registryDependencies: ["checkbox", "field"],
    files: [
      {
        path: "src/components/customized/checkbox/checkbox-04.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "checkbox",
      title: "Invalid",
    },
  },
  {
    name: "checkbox-05",
    type: "registry:component",
    title: "Indeterminate Checkbox",
    description: "A parent checkbox that reflects the state of nested checkboxes",
    registryDependencies: ["checkbox", "field"],
    files: [
      {
        path: "src/components/customized/checkbox/checkbox-05.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "checkbox",
      title: "Indeterminate",
    },
  },
  {
    name: "checkbox-06",
    type: "registry:component",
    title: "Horizontal Checkbox Group",
    description: "A group of checkboxes laid out in a row",
    registryDependencies: ["checkbox", "field"],
    files: [
      {
        path: "src/components/customized/checkbox/checkbox-06.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "checkbox",
      title: "Horizontal",
    },
  },
  {
    name: "dropdown-menu-01",
    type: "registry:component",
    title: "Default Dropdown Menu",
    description: "A default dropdown menu component",
    registryDependencies: ["dropdown-menu", "button"],
    files: [
      {
        path: "src/components/customized/dropdown-menu/dropdown-menu-01.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "dropdown-menu",
      title: "Default",
    },
  },
  {
    name: "dropdown-menu-02",
    type: "registry:component",
    title: "Dropdown Menu with Checkboxes",
    description: "A dropdown menu with checkbox items",
    registryDependencies: ["dropdown-menu", "button"],
    files: [
      {
        path: "src/components/customized/dropdown-menu/dropdown-menu-02.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "dropdown-menu",
      title: "Checkboxes",
    },
  },
  {
    name: "dropdown-menu-03",
    type: "registry:component",
    title: "Dropdown Menu with Radio Group",
    description: "A dropdown menu with radio items",
    registryDependencies: ["dropdown-menu", "button"],
    files: [
      {
        path: "src/components/customized/dropdown-menu/dropdown-menu-03.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "dropdown-menu",
      title: "Radio group",
    },
  },
  {
    name: "dropdown-menu-04",
    type: "registry:component",
    title: "Dropdown Menu with Submenu",
    description: "A dropdown menu with a nested submenu",
    registryDependencies: ["dropdown-menu", "button"],
    files: [
      {
        path: "src/components/customized/dropdown-menu/dropdown-menu-04.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "dropdown-menu",
      title: "Submenu",
    },
  },
  {
    name: "dropdown-menu-05",
    type: "registry:component",
    title: "Dropdown Menu with Shortcuts",
    description:
      "A dropdown menu with icons, keyboard shortcuts and a destructive item",
    dependencies: ["lucide-react"],
    registryDependencies: ["dropdown-menu", "button"],
    files: [
      {
        path: "src/components/customized/dropdown-menu/dropdown-menu-05.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "dropdown-menu",
      title: "Shortcuts & destructive",
    },
  },
  {
    name: "input-01",
    type: "registry:component",
    title: "Default Input",
    description: "A default input component",
    registryDependencies: ["input"],
    files: [
      {
        path: "src/components/customized/input/input-01.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "input",
      title: "Default",
    },
  },
  {
    name: "input-02",
    type: "registry:component",
    title: "Input with Label",
    description: "An input with a label and description",
    registryDependencies: ["input", "field"],
    files: [
      {
        path: "src/components/customized/input/input-02.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "input",
      title: "With label",
    },
  },
  {
    name: "input-03",
    type: "registry:component",
    title: "Disabled Input",
    description: "A disabled input",
    registryDependencies: ["input"],
    files: [
      {
        path: "src/components/customized/input/input-03.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "input",
      title: "Disabled",
    },
  },
  {
    name: "input-04",
    type: "registry:component",
    title: "Invalid Input",
    description: "An input with an error message",
    registryDependencies: ["input", "field"],
    files: [
      {
        path: "src/components/customized/input/input-04.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "input",
      title: "Invalid",
    },
  },
  {
    name: "input-05",
    type: "registry:component",
    title: "File Input",
    description: "A file input",
    registryDependencies: ["input", "field"],
    files: [
      {
        path: "src/components/customized/input/input-05.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "input",
      title: "File",
    },
  },
  {
    name: "input-06",
    type: "registry:component",
    title: "Input with Character Count",
    description: "An input with a live character count and limit",
    registryDependencies: ["field", "input-group"],
    files: [
      {
        path: "src/components/customized/input/input-06.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "input",
      title: "Character count",
    },
  },
  {
    name: "breadcrumb-01",
    type: "registry:component",
    title: "Default Breadcrumb",
    description: "A default breadcrumb component",
    registryDependencies: ["breadcrumb"],
    files: [
      {
        path: "src/components/customized/breadcrumb/breadcrumb-01.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "breadcrumb",
      title: "Default",
    },
  },
  {
    name: "breadcrumb-02",
    type: "registry:component",
    title: "Breadcrumb with Ellipsis",
    description: "A breadcrumb that collapses middle items",
    registryDependencies: ["breadcrumb"],
    files: [
      {
        path: "src/components/customized/breadcrumb/breadcrumb-02.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "breadcrumb",
      title: "With ellipsis",
    },
  },
  {
    name: "breadcrumb-03",
    type: "registry:component",
    title: "Breadcrumb with Custom Separator",
    description: "A breadcrumb with a custom separator",
    dependencies: ["lucide-react"],
    registryDependencies: ["breadcrumb"],
    files: [
      {
        path: "src/components/customized/breadcrumb/breadcrumb-03.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "breadcrumb",
      title: "Custom separator",
    },
  },
  {
    name: "carousel-01",
    type: "registry:component",
    title: "Default Carousel",
    description: "A default carousel component",
    registryDependencies: ["carousel", "card"],
    files: [
      {
        path: "src/components/customized/carousel/carousel-01.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "carousel",
      title: "Default",
    },
  },
  {
    name: "carousel-02",
    type: "registry:component",
    title: "Carousel with Multiple Items",
    description: "A carousel that shows several items at once",
    registryDependencies: ["carousel"],
    files: [
      {
        path: "src/components/customized/carousel/carousel-02.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "carousel",
      title: "Multiple items",
    },
  },
  {
    name: "carousel-03",
    type: "registry:component",
    title: "Vertical Carousel",
    description: "A carousel that scrolls vertically",
    registryDependencies: ["carousel"],
    files: [
      {
        path: "src/components/customized/carousel/carousel-03.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "carousel",
      title: "Vertical",
    },
  },
  {
    name: "collapsible-01",
    type: "registry:component",
    title: "Default Collapsible",
    description: "A default collapsible component",
    dependencies: ["lucide-react"],
    registryDependencies: ["collapsible", "button"],
    files: [
      {
        path: "src/components/customized/collapsible/collapsible-01.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "collapsible",
      title: "Default",
    },
  },
  {
    name: "input-otp-01",
    type: "registry:component",
    title: "Default OTP Input",
    description: "A default one-time password input component",
    registryDependencies: ["input-otp"],
    files: [
      {
        path: "src/components/customized/input-otp/input-otp-01.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "input-otp",
      title: "Default",
    },
  },
  {
    name: "input-otp-02",
    type: "registry:component",
    title: "Digits Only Input OTP",
    description: "An OTP input that only accepts digits",
    dependencies: ["input-otp"],
    registryDependencies: ["input-otp"],
    files: [
      {
        path: "src/components/customized/input-otp/input-otp-02.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "input-otp",
      title: "Digits only",
    },
  },
  {
    name: "input-otp-03",
    type: "registry:component",
    title: "Disabled Input OTP",
    description: "A disabled OTP input",
    registryDependencies: ["input-otp"],
    files: [
      {
        path: "src/components/customized/input-otp/input-otp-03.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "input-otp",
      title: "Disabled",
    },
  },
  {
    name: "navigation-menu-01",
    type: "registry:component",
    title: "Default Navigation Menu",
    description: "A default navigation menu component",
    registryDependencies: ["navigation-menu"],
    files: [
      {
        path: "src/components/customized/navigation-menu/navigation-menu-01.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "navigation-menu",
      title: "Default",
    },
  },
  {
    name: "pagination-01",
    type: "registry:component",
    title: "Default Pagination",
    description: "A default pagination component",
    registryDependencies: ["pagination"],
    files: [
      {
        path: "src/components/customized/pagination/pagination-01.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "pagination",
      title: "Default",
    },
  },
  {
    name: "progress-01",
    type: "registry:component",
    title: "Default Progress",
    description: "A default linear progress component",
    registryDependencies: ["progress"],
    files: [
      {
        path: "src/components/customized/progress/progress-01.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "progress",
      title: "Default",
    },
  },
  {
    name: "progress-02",
    type: "registry:component",
    title: "Progress with Label",
    description: "A progress bar with a label and value",
    registryDependencies: ["progress"],
    files: [
      {
        path: "src/components/customized/progress/progress-02.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "progress",
      title: "With label",
    },
  },
  {
    name: "radio-group-01",
    type: "registry:component",
    title: "Default Radio Group",
    description: "A default radio group component",
    registryDependencies: ["radio-group", "label"],
    files: [
      {
        path: "src/components/customized/radio-group/radio-group-01.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "radio-group",
      title: "Default",
    },
  },
  {
    name: "radio-group-02",
    type: "registry:component",
    title: "Disabled Radio Group",
    description: "A radio group with a disabled option",
    registryDependencies: ["radio-group", "label"],
    files: [
      {
        path: "src/components/customized/radio-group/radio-group-02.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "radio-group",
      title: "Disabled",
    },
  },
  {
    name: "radio-group-03",
    type: "registry:component",
    title: "Horizontal Radio Group",
    description: "Radio group options laid out in a row",
    registryDependencies: ["label", "radio-group"],
    files: [
      {
        path: "src/components/customized/radio-group/radio-group-03.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "radio-group",
      title: "Horizontal",
    },
  },
  {
    name: "select-01",
    type: "registry:component",
    title: "Default Select",
    description: "A default select component",
    registryDependencies: ["select"],
    files: [
      {
        path: "src/components/customized/select/select-01.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "select",
      title: "Default",
    },
  },
  {
    name: "select-02",
    type: "registry:component",
    title: "Small Select",
    description: "A select with a small trigger",
    registryDependencies: ["select"],
    files: [
      {
        path: "src/components/customized/select/select-02.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "select",
      title: "Small",
    },
  },
  {
    name: "select-03",
    type: "registry:component",
    title: "Select with Groups",
    description: "A select with labelled groups and a separator",
    registryDependencies: ["select"],
    files: [
      {
        path: "src/components/customized/select/select-03.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "select",
      title: "Groups",
    },
  },
  {
    name: "select-04",
    type: "registry:component",
    title: "Disabled Select",
    description: "A disabled select",
    registryDependencies: ["select"],
    files: [
      {
        path: "src/components/customized/select/select-04.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "select",
      title: "Disabled",
    },
  },
  {
    name: "select-05",
    type: "registry:component",
    title: "Select with Disabled Item",
    description: "A select with a disabled option",
    registryDependencies: ["select"],
    files: [
      {
        path: "src/components/customized/select/select-05.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "select",
      title: "Disabled item",
    },
  },
  {
    name: "separator-01",
    type: "registry:component",
    title: "Default Separator",
    description: "A default separator component",
    registryDependencies: ["separator"],
    files: [
      {
        path: "src/components/customized/separator/separator-01.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "separator",
      title: "Default",
    },
  },
  {
    name: "slider-01",
    type: "registry:component",
    title: "Default Slider",
    description: "A default slider component",
    registryDependencies: ["slider"],
    files: [
      {
        path: "src/components/customized/slider/slider-01.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "slider",
      title: "Default",
    },
  },
  {
    name: "slider-02",
    type: "registry:component",
    title: "Range Slider",
    description: "A slider with two thumbs",
    registryDependencies: ["slider"],
    files: [
      {
        path: "src/components/customized/slider/slider-02.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "slider",
      title: "Range",
    },
  },
  {
    name: "slider-03",
    type: "registry:component",
    title: "Vertical Slider",
    description: "A vertical slider",
    registryDependencies: ["slider"],
    files: [
      {
        path: "src/components/customized/slider/slider-03.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "slider",
      title: "Vertical",
    },
  },
  {
    name: "slider-04",
    type: "registry:component",
    title: "Disabled Slider",
    description: "A disabled slider",
    registryDependencies: ["slider"],
    files: [
      {
        path: "src/components/customized/slider/slider-04.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "slider",
      title: "Disabled",
    },
  },
  {
    name: "slider-05",
    type: "registry:component",
    title: "Slider with Label",
    description: "A slider with a label and its current value",
    registryDependencies: ["field", "slider"],
    files: [
      {
        path: "src/components/customized/slider/slider-05.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "slider",
      title: "With label",
    },
  },
  {
    name: "slider-06",
    type: "registry:component",
    title: "Slider with Steps",
    description: "A slider that snaps to fixed steps with value markers",
    registryDependencies: ["slider"],
    files: [
      {
        path: "src/components/customized/slider/slider-06.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "slider",
      title: "Steps",
    },
  },
  {
    name: "spinner-01",
    type: "registry:component",
    title: "Default Spinner",
    description: "A default spinner component",
    registryDependencies: ["spinner"],
    files: [
      {
        path: "src/components/customized/spinner/spinner-01.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "spinner",
      title: "Default",
    },
  },
  {
    name: "spinner-02",
    type: "registry:component",
    title: "Spinner Sizes",
    description: "Spinners in different sizes",
    registryDependencies: ["spinner"],
    files: [
      {
        path: "src/components/customized/spinner/spinner-02.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "spinner",
      title: "Sizes",
    },
  },
  {
    name: "spinner-03",
    type: "registry:component",
    title: "Spinner Colors",
    description: "Spinners in different colors",
    registryDependencies: ["spinner"],
    files: [
      {
        path: "src/components/customized/spinner/spinner-03.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "spinner",
      title: "Colors",
    },
  },
  {
    name: "spinner-04",
    type: "registry:component",
    title: "Spinner in Input Group",
    description: "Spinners inside input groups to show pending work",
    registryDependencies: ["input-group", "spinner"],
    files: [
      {
        path: "src/components/customized/spinner/spinner-04.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "spinner",
      title: "Input group",
    },
  },
  {
    name: "spinner-05",
    type: "registry:component",
    title: "Spinner Loading State",
    description: "A spinner in an empty state while content is processing",
    registryDependencies: ["button", "empty", "spinner"],
    files: [
      {
        path: "src/components/customized/spinner/spinner-05.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "spinner",
      title: "Loading state",
    },
  },
  {
    name: "switch-01",
    type: "registry:component",
    title: "Default Switch",
    description: "A default switch component",
    registryDependencies: ["switch"],
    files: [
      {
        path: "src/components/customized/switch/switch-01.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "switch",
      title: "Default",
    },
  },
  {
    name: "switch-02",
    type: "registry:component",
    title: "Small Switch",
    description: "A small switch",
    registryDependencies: ["switch"],
    files: [
      {
        path: "src/components/customized/switch/switch-02.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "switch",
      title: "Small",
    },
  },
  {
    name: "switch-03",
    type: "registry:component",
    title: "Switch with Label",
    description: "A switch with a label",
    registryDependencies: ["switch", "field"],
    files: [
      {
        path: "src/components/customized/switch/switch-03.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "switch",
      title: "With label",
    },
  },
  {
    name: "switch-04",
    type: "registry:component",
    title: "Switch with Label and Description",
    description:
      "A switch with a label and description in a bordered container",
    registryDependencies: ["switch", "field"],
    files: [
      {
        path: "src/components/customized/switch/switch-04.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "switch",
      title: "With label and description",
    },
  },
  {
    name: "switch-05",
    type: "registry:component",
    title: "Disabled Switch",
    description: "Disabled switches",
    registryDependencies: ["switch"],
    files: [
      {
        path: "src/components/customized/switch/switch-05.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "switch",
      title: "Disabled",
    },
  },
  {
    name: "table-01",
    type: "registry:component",
    title: "Default Table",
    description: "A default table component",
    registryDependencies: ["table"],
    files: [
      {
        path: "src/components/customized/table/table-01.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "table",
      title: "Default",
    },
  },
  {
    name: "tabs-01",
    type: "registry:component",
    title: "Default Tabs",
    description: "Default tabs component",
    dependencies: ["lucide-react"],
    registryDependencies: ["tabs", "button"],
    files: [
      {
        path: "src/components/customized/tabs/tabs-01.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "tabs",
      title: "Default",
    },
  },
  {
    name: "tabs-02",
    type: "registry:component",
    title: "Line Tabs",
    description: "Tabs with the line variant",
    registryDependencies: ["tabs"],
    files: [
      {
        path: "src/components/customized/tabs/tabs-02.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "tabs",
      title: "Line",
    },
  },
  {
    name: "tabs-03",
    type: "registry:component",
    title: "Vertical Tabs",
    description: "Tabs with a vertical list",
    registryDependencies: ["tabs"],
    files: [
      {
        path: "src/components/customized/tabs/tabs-03.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "tabs",
      title: "Vertical",
    },
  },
  {
    name: "tabs-04",
    type: "registry:component",
    title: "Disabled Tab",
    description: "Tabs with a disabled tab",
    registryDependencies: ["tabs"],
    files: [
      {
        path: "src/components/customized/tabs/tabs-04.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "tabs",
      title: "Disabled",
    },
  },
  {
    name: "textarea-01",
    type: "registry:component",
    title: "Default Textarea",
    description: "A default textarea component",
    registryDependencies: ["textarea"],
    files: [
      {
        path: "src/components/customized/textarea/textarea-01.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "textarea",
      title: "Default",
    },
  },
  {
    name: "textarea-02",
    type: "registry:component",
    title: "Textarea with Label",
    description: "A textarea with a label and description",
    registryDependencies: ["textarea", "field"],
    files: [
      {
        path: "src/components/customized/textarea/textarea-02.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "textarea",
      title: "With label",
    },
  },
  {
    name: "textarea-03",
    type: "registry:component",
    title: "Disabled Textarea",
    description: "A disabled textarea",
    registryDependencies: ["textarea"],
    files: [
      {
        path: "src/components/customized/textarea/textarea-03.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "textarea",
      title: "Disabled",
    },
  },
  {
    name: "textarea-04",
    type: "registry:component",
    title: "Invalid Textarea",
    description: "A textarea with an error message",
    registryDependencies: ["textarea", "field"],
    files: [
      {
        path: "src/components/customized/textarea/textarea-04.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "textarea",
      title: "Invalid",
    },
  },
  {
    name: "textarea-05",
    type: "registry:component",
    title: "Textarea with Character Count",
    description: "A textarea with a live character count and limit",
    registryDependencies: ["field", "input-group"],
    files: [
      {
        path: "src/components/customized/textarea/textarea-05.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "textarea",
      title: "Character count",
    },
  },
  {
    name: "tooltip-01",
    type: "registry:component",
    title: "Default Tooltip",
    description: "A default tooltip component",
    registryDependencies: ["tooltip", "button"],
    files: [
      {
        path: "src/components/customized/tooltip/tooltip-01.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "tooltip",
      title: "Default",
    },
  },
  {
    name: "tooltip-02",
    type: "registry:component",
    title: "Tooltip Sides",
    description: "Tooltips on every side",
    registryDependencies: ["tooltip", "button"],
    files: [
      {
        path: "src/components/customized/tooltip/tooltip-02.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "tooltip",
      title: "Sides",
    },
  },
] as const satisfies readonly ComponentCatalogEntry[];
