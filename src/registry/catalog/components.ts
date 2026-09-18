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
    title: "Outline Accordion",
    description: "An outline styled accordion",
    registryDependencies: ["accordion"],
    files: [
      {
        path: "src/components/customized/accordion/accordion-02.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "accordion",
      title: "Outline",
    },
  },
  {
    name: "accordion-03",
    type: "registry:component",
    title: "Box Accordion",
    description: "A box styled accordion",
    registryDependencies: ["accordion"],
    files: [
      {
        path: "src/components/customized/accordion/accordion-03.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "accordion",
      title: "Box",
    },
  },
  {
    name: "accordion-04",
    type: "registry:component",
    title: "Contained Accordion",
    description: "A contained accordion component",
    registryDependencies: ["accordion"],
    files: [
      {
        path: "src/components/customized/accordion/accordion-04.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "accordion",
      title: "Contained",
    },
  },
  {
    name: "accordion-05",
    type: "registry:component",
    title: "Box Contained Accordion",
    description: "A box-contained accordion component",
    registryDependencies: ["accordion"],
    files: [
      {
        path: "src/components/customized/accordion/accordion-05.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "accordion",
      title: "Box Contained",
    },
  },
  {
    name: "accordion-06",
    type: "registry:component",
    title: "Tabs Accordion",
    description: "A tabs-styled accordion component",
    registryDependencies: ["accordion"],
    files: [
      {
        path: "src/components/customized/accordion/accordion-06.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "accordion",
      title: "Tabs",
    },
  },
  {
    name: "accordion-07",
    type: "registry:component",
    title: "Highlight Active Item Accordion",
    description: "An accordion that highlights the active item",
    registryDependencies: ["accordion"],
    files: [
      {
        path: "src/components/customized/accordion/accordion-07.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "accordion",
      title: "Highlight Active Item",
    },
  },
  {
    name: "accordion-08",
    type: "registry:component",
    title: "Multiple Expanded at a time Accordion",
    description:
      "An accordion that allows multiple items to be expanded at once",
    registryDependencies: ["accordion"],
    files: [
      {
        path: "src/components/customized/accordion/accordion-08.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "accordion",
      title: "Multiple expanded at a time",
    },
  },
  {
    name: "accordion-09",
    type: "registry:component",
    title: "Expand Icon Accordion",
    description: "An accordion with a custom expand icon",
    dependencies: ["lucide-react", "radix-ui"],
    registryDependencies: ["accordion"],
    files: [
      {
        path: "src/components/customized/accordion/accordion-09.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "accordion",
      title: "Expand Icon",
    },
  },
  {
    name: "accordion-10",
    type: "registry:component",
    title: "Icon Accordion",
    description: "An accordion with icons",
    dependencies: ["lucide-react"],
    registryDependencies: ["accordion"],
    files: [
      {
        path: "src/components/customized/accordion/accordion-10.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "accordion",
      title: "Icon",
    },
  },
  {
    name: "accordion-11",
    type: "registry:component",
    title: "Media Content Accordion",
    description: "An accordion with media content",
    dependencies: ["lucide-react"],
    registryDependencies: ["accordion"],
    files: [
      {
        path: "src/components/customized/accordion/accordion-11.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "accordion",
      title: "Media Content",
    },
  },
  {
    name: "accordion-12",
    type: "registry:component",
    title: "Disabled Item Accordion",
    description: "An accordion with disabled items",
    dependencies: ["lucide-react"],
    registryDependencies: ["accordion"],
    files: [
      {
        path: "src/components/customized/accordion/accordion-12.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "accordion",
      title: "Disabled Item",
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
    title: "Success Alert",
    description: "A success alert component",
    dependencies: ["lucide-react"],
    registryDependencies: ["alert"],
    files: [
      {
        path: "src/components/customized/alert/alert-03.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "alert",
      title: "Success",
    },
  },
  {
    name: "alert-04",
    type: "registry:component",
    title: "Warning Alert",
    description: "A warning alert component",
    dependencies: ["lucide-react"],
    registryDependencies: ["alert"],
    files: [
      {
        path: "src/components/customized/alert/alert-04.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "alert",
      title: "Warning",
    },
  },
  {
    name: "alert-05",
    type: "registry:component",
    title: "Info Alert",
    description: "An info alert component",
    dependencies: ["lucide-react"],
    registryDependencies: ["alert"],
    files: [
      {
        path: "src/components/customized/alert/alert-05.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "alert",
      title: "Info",
    },
  },
  {
    name: "alert-06",
    type: "registry:component",
    title: "Alert With Background",
    description: "An alert with background component",
    dependencies: ["lucide-react"],
    registryDependencies: ["alert"],
    files: [
      {
        path: "src/components/customized/alert/alert-06.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "alert",
      title: "With background",
    },
  },
  {
    name: "alert-07",
    type: "registry:component",
    title: "Soft Alert",
    description: "A soft alert component",
    dependencies: ["lucide-react"],
    registryDependencies: ["alert"],
    files: [
      {
        path: "src/components/customized/alert/alert-07.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "alert",
      title: "Soft",
    },
  },
  {
    name: "alert-08",
    type: "registry:component",
    title: "Bootstrap Alert",
    description: "A bootstrap-styled alert component",
    dependencies: ["lucide-react"],
    registryDependencies: ["alert"],
    files: [
      {
        path: "src/components/customized/alert/alert-08.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "alert",
      title: "Bootstrap",
    },
  },
  {
    name: "alert-09",
    type: "registry:component",
    title: "Callout Alert",
    description: "A callout alert component",
    dependencies: ["lucide-react"],
    registryDependencies: ["alert"],
    files: [
      {
        path: "src/components/customized/alert/alert-09.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "alert",
      title: "Callout",
    },
  },
  {
    name: "alert-10",
    type: "registry:component",
    title: "Alert With Actions",
    description: "An alert with actions component",
    dependencies: ["lucide-react"],
    registryDependencies: ["alert", "button"],
    files: [
      {
        path: "src/components/customized/alert/alert-10.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "alert",
      title: "With actions",
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
    title: "Alert Dialog With Icon",
    description: "An alert dialog with icon component",
    dependencies: ["lucide-react"],
    registryDependencies: ["alert-dialog", "button"],
    files: [
      {
        path: "src/components/customized/alert-dialog/alert-dialog-02.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "alert-dialog",
      title: "With Icon",
    },
  },
  {
    name: "alert-dialog-03",
    type: "registry:component",
    title: "Destructive Alert Dialog",
    description: "A destructive alert dialog component",
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
      title: "Destructive",
    },
  },
  {
    name: "alert-dialog-04",
    type: "registry:component",
    title: "Info Alert Dialog",
    description: "An info alert dialog component",
    dependencies: ["lucide-react"],
    registryDependencies: ["alert-dialog", "button", "badge"],
    files: [
      {
        path: "src/components/customized/alert-dialog/alert-dialog-04.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "alert-dialog",
      title: "Info",
    },
  },
  {
    name: "alert-dialog-05",
    type: "registry:component",
    title: "Customized Header Alert Dialog",
    description: "An alert dialog with customized header",
    dependencies: ["lucide-react"],
    registryDependencies: ["alert-dialog", "button"],
    files: [
      {
        path: "src/components/customized/alert-dialog/alert-dialog-05.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "alert-dialog",
      title: "Customized Header",
    },
  },
  {
    name: "alert-dialog-06",
    type: "registry:component",
    title: "Customized Footer Alert Dialog",
    description: "An alert dialog with customized footer",
    dependencies: ["lucide-react"],
    registryDependencies: ["alert-dialog", "button"],
    files: [
      {
        path: "src/components/customized/alert-dialog/alert-dialog-06.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "alert-dialog",
      title: "Customized Footer",
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
    title: "Clickable Avatar",
    description: "A clickable avatar component",
    registryDependencies: ["avatar"],
    files: [
      {
        path: "src/components/customized/avatar/avatar-02.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "avatar",
      title: "Clickable",
    },
  },
  {
    name: "avatar-03",
    type: "registry:component",
    title: "Avatar with Tooltip",
    description: "An avatar with tooltip component",
    registryDependencies: ["avatar", "tooltip"],
    files: [
      {
        path: "src/components/customized/avatar/avatar-03.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "avatar",
      title: "Tooltip",
    },
  },
  {
    name: "avatar-04",
    type: "registry:component",
    title: "Avatar with Text",
    description: "An avatar with text component",
    registryDependencies: ["avatar"],
    files: [
      {
        path: "src/components/customized/avatar/avatar-04.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "avatar",
      title: "With Text",
    },
  },
  {
    name: "avatar-05",
    type: "registry:component",
    title: "Avatar with Hover Card",
    description: "An avatar with hover card component",
    dependencies: ["lucide-react"],
    registryDependencies: ["avatar", "hover-card"],
    files: [
      {
        path: "src/components/customized/avatar/avatar-05.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "avatar",
      title: "Hover Card",
    },
  },
  {
    name: "avatar-06",
    type: "registry:component",
    title: "Avatar Size",
    description: "Different sizes of avatar component",
    registryDependencies: ["avatar"],
    files: [
      {
        path: "src/components/customized/avatar/avatar-06.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "avatar",
      title: "Size",
    },
  },
  {
    name: "avatar-07",
    type: "registry:component",
    title: "Avatar Color",
    description: "Different colors of avatar component",
    registryDependencies: ["avatar"],
    files: [
      {
        path: "src/components/customized/avatar/avatar-07.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "avatar",
      title: "Color",
    },
  },
  {
    name: "avatar-08",
    type: "registry:component",
    title: "Avatar Shape",
    description: "Different shapes of avatar component",
    registryDependencies: ["avatar"],
    files: [
      {
        path: "src/components/customized/avatar/avatar-08.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "avatar",
      title: "Shape",
    },
  },
  {
    name: "avatar-09",
    type: "registry:component",
    title: "Avatar Fallback",
    description: "Avatar with fallback component",
    dependencies: ["lucide-react"],
    registryDependencies: ["avatar"],
    files: [
      {
        path: "src/components/customized/avatar/avatar-09.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "avatar",
      title: "Fallback",
    },
  },
  {
    name: "avatar-10",
    type: "registry:component",
    title: "Avatar with Ring",
    description: "Avatar with ring component",
    registryDependencies: ["avatar"],
    files: [
      {
        path: "src/components/customized/avatar/avatar-10.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "avatar",
      title: "With Ring",
    },
  },
  {
    name: "avatar-11",
    type: "registry:component",
    title: "Avatar Status",
    description: "Avatar with status indicator component",
    registryDependencies: ["avatar"],
    files: [
      {
        path: "src/components/customized/avatar/avatar-11.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "avatar",
      title: "Status",
    },
  },
  {
    name: "avatar-12",
    type: "registry:component",
    title: "Avatar Group",
    description: "Group of avatars component",
    registryDependencies: ["avatar"],
    files: [
      {
        path: "src/components/customized/avatar/avatar-12.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "avatar",
      title: "Group",
    },
  },
  {
    name: "avatar-13",
    type: "registry:component",
    title: "Avatar Group with Max",
    description: "Group of avatars with maximum limit component",
    registryDependencies: ["avatar"],
    files: [
      {
        path: "src/components/customized/avatar/avatar-13.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "avatar",
      title: "Group max avatar",
    },
  },
  {
    name: "avatar-14",
    type: "registry:component",
    title: "Avatar Group with Max",
    description: "Group of avatars with maximum limit component",
    dependencies: ["lucide-react"],
    registryDependencies: ["avatar"],
    files: [
      {
        path: "src/components/customized/avatar/avatar-14.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "avatar",
      title: "Badge",
    },
  },
  {
    name: "avatar-15",
    type: "registry:component",
    title: "Avatar Group with Max",
    description: "Group of avatars with maximum limit component",
    registryDependencies: ["avatar"],
    files: [
      {
        path: "src/components/customized/avatar/avatar-15.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "avatar",
      title: "Chat",
    },
  },
  {
    name: "avatar-16",
    type: "registry:component",
    title: "Avatar Dropdown Menu",
    description: "An avatar dropdown menu component",
    registryDependencies: ["avatar", "dropdown-menu"],
    files: [
      {
        path: "src/components/customized/avatar/avatar-16.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "avatar",
      title: "Dropdown Menu",
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
    title: "Outline Badge",
    description: "An outline badge component",
    registryDependencies: ["badge"],
    files: [
      {
        path: "src/components/customized/badge/badge-03.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "badge",
      title: "Outline",
    },
  },
  {
    name: "badge-04",
    type: "registry:component",
    title: "Destructive Badge",
    description: "A destructive badge component",
    registryDependencies: ["badge"],
    files: [
      {
        path: "src/components/customized/badge/badge-04.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "badge",
      title: "Destructive",
    },
  },
  {
    name: "badge-05",
    type: "registry:component",
    title: "Rounded Badge",
    description: "A rounded badge component",
    registryDependencies: ["badge"],
    files: [
      {
        path: "src/components/customized/badge/badge-05.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "badge",
      title: "Shapes",
    },
  },
  {
    name: "badge-06",
    type: "registry:component",
    title: "Gradient Badge",
    description: "A gradient badge component",
    registryDependencies: ["badge"],
    files: [
      {
        path: "src/components/customized/badge/badge-06.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "badge",
      title: "Gradient",
    },
  },
  {
    name: "badge-07",
    type: "registry:component",
    title: "Gradient Outline Badge",
    description: "A gradient outline badge component",
    registryDependencies: ["badge"],
    files: [
      {
        path: "src/components/customized/badge/badge-07.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "badge",
      title: "Gradient Outline",
    },
  },
  {
    name: "badge-08",
    type: "registry:component",
    title: "Soft Badge",
    description: "A soft badge component",
    registryDependencies: ["badge"],
    files: [
      {
        path: "src/components/customized/badge/badge-08.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "badge",
      title: "Soft",
    },
  },
  {
    name: "badge-09",
    type: "registry:component",
    title: "Status Badge",
    description: "A status badge component",
    registryDependencies: ["badge"],
    files: [
      {
        path: "src/components/customized/badge/badge-09.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "badge",
      title: "Status",
    },
  },
  {
    name: "badge-10",
    type: "registry:component",
    title: "Badge with Image",
    description: "A badge with image component",
    registryDependencies: ["badge"],
    files: [
      {
        path: "src/components/customized/badge/badge-10.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "badge",
      title: "With image",
    },
  },
  {
    name: "badge-11",
    type: "registry:component",
    title: "Badge with Icon",
    description: "A badge with icon component",
    dependencies: ["lucide-react"],
    registryDependencies: ["badge"],
    files: [
      {
        path: "src/components/customized/badge/badge-11.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "badge",
      title: "With icon",
    },
  },
  {
    name: "badge-12",
    type: "registry:component",
    title: "Clickable Badge",
    description: "A clickable badge component",
    registryDependencies: ["badge"],
    files: [
      {
        path: "src/components/customized/badge/badge-12.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "badge",
      title: "Clickable",
    },
  },
  {
    name: "badge-13",
    type: "registry:component",
    title: "Clickable Link Badge",
    description: "A clickable link badge component",
    registryDependencies: ["badge"],
    files: [
      {
        path: "src/components/customized/badge/badge-13.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "badge",
      title: "Clickable link",
    },
  },
  {
    name: "badge-14",
    type: "registry:component",
    title: "Badge with number",
    description: "A badge with number component",
    registryDependencies: ["badge"],
    files: [
      {
        path: "src/components/customized/badge/badge-14.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "badge",
      title: "With number",
    },
  },
  {
    name: "badge-15",
    type: "registry:component",
    title: "Plan features with badge",
    description: "A plan features with badge component",
    dependencies: ["lucide-react"],
    registryDependencies: ["badge"],
    files: [
      {
        path: "src/components/customized/badge/badge-15.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "badge",
      title: "Plan features with badge",
    },
  },
  {
    name: "badge-16",
    type: "registry:component",
    title: "Tabs with badge",
    description: "A tabs with badge component",
    registryDependencies: ["badge", "tabs"],
    files: [
      {
        path: "src/components/customized/badge/badge-16.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "badge",
      title: "Tabs with badge",
    },
  },
  {
    name: "badge-17",
    type: "registry:component",
    title: "Icon button",
    description: "An icon button component",
    dependencies: ["lucide-react"],
    registryDependencies: ["badge", "button"],
    files: [
      {
        path: "src/components/customized/badge/badge-17.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "badge",
      title: "Icon button",
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
    name: "button-17",
    type: "registry:component",
    title: "Full Width Button",
    description: "A full width button component",
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/customized/button/button-17.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "button",
      title: "Full Width",
    },
  },
  {
    name: "button-18",
    type: "registry:component",
    title: "Button Group",
    description: "A button group component",
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/customized/button/button-18.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "button",
      title: "Group",
    },
  },
  {
    name: "button-19",
    type: "registry:component",
    title: "Button Group 2",
    description: "Another button group component",
    dependencies: ["lucide-react"],
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/customized/button/button-19.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "button",
      title: "Group 2",
    },
  },
  {
    name: "button-22",
    type: "registry:component",
    title: "Button with Tooltip",
    description: "A button with tooltip component",
    registryDependencies: ["button", "tooltip"],
    files: [
      {
        path: "src/components/customized/button/button-22.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "button",
      title: "With tooltip",
    },
  },
  {
    name: "button-16",
    type: "registry:component",
    title: "Theme Toggle Button",
    description: "A theme toggle button component",
    dependencies: ["lucide-react", "next-themes"],
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/customized/button/button-16.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "button",
      title: "Theme Toggle",
    },
  },
  {
    name: "button-20",
    type: "registry:component",
    title: "Copy Button",
    description: "A copy button component",
    dependencies: ["lucide-react"],
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/customized/button/button-20.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "button",
      title: "Copy Button",
    },
  },
  {
    name: "button-14",
    type: "registry:component",
    title: "Rounded Button",
    description: "A rounded button component",
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/customized/button/button-14.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "button",
      title: "Rounded",
    },
  },
  {
    name: "button-15",
    type: "registry:component",
    title: "Toggle Button",
    description: "A toggle button component",
    dependencies: ["lucide-react"],
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/customized/button/button-15.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "button",
      title: "Toggle",
    },
  },
  {
    name: "button-11",
    type: "registry:component",
    title: "Social Button",
    description: "A social button component",
    dependencies: ["lucide-react"],
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/customized/button/button-11.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "button",
      title: "Social",
    },
  },
  {
    name: "button-12",
    type: "registry:component",
    title: "Social Login Button",
    description: "A social login button component",
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/customized/button/button-12.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "button",
      title: "Social Login",
    },
  },
  {
    name: "button-07",
    type: "registry:component",
    title: "Split Button",
    description: "A split button component",
    dependencies: ["lucide-react"],
    registryDependencies: ["button", "dropdown-menu"],
    files: [
      {
        path: "src/components/customized/button/button-07.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "button",
      title: "Split Button",
    },
  },
  {
    name: "button-06",
    type: "registry:component",
    title: "Loading Button",
    description: "A loading button component",
    dependencies: ["lucide-react"],
    registryDependencies: ["button"],
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
    name: "button-09",
    type: "registry:component",
    title: "Gradient Button",
    description: "A gradient button component",
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/customized/button/button-09.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "button",
      title: "Gradient",
    },
  },
  {
    name: "button-05",
    type: "registry:component",
    title: "Icon Button",
    description: "An icon button component",
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
    name: "button-13",
    type: "registry:component",
    title: "Neon Button",
    description: "A neon button component",
    dependencies: ["lucide-react"],
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/customized/button/button-13.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "button",
      title: "Neon",
    },
  },
  {
    name: "button-23",
    type: "registry:component",
    title: "Button with Tap Animation",
    description: "A button with tap animation component",
    dependencies: ["lucide-react", "framer-motion"],
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/customized/button/button-23.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "button",
      title: "With tap animation",
    },
  },
  {
    name: "button-10",
    type: "registry:component",
    title: "Link Button",
    description: "A link button component",
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/customized/button/button-10.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "button",
      title: "Link",
    },
  },
  {
    name: "button-21",
    type: "registry:component",
    title: "Button with Badge",
    description: "A button with badge component",
    dependencies: ["lucide-react"],
    registryDependencies: ["button"],
    files: [
      {
        path: "src/components/customized/button/button-21.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "button",
      title: "With badge",
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
    title: "Card with Background",
    description: "A card with background component",
    registryDependencies: ["card", "button", "input", "label", "select"],
    files: [
      {
        path: "src/components/customized/card/card-02.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "card",
      title: "With background",
    },
  },
  {
    name: "card-03",
    type: "registry:component",
    title: "Create Account Card",
    description: "A create account card component",
    registryDependencies: ["card", "button", "input", "label", "separator"],
    files: [
      {
        path: "src/components/customized/card/card-03.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "card",
      title: "Sign Up",
    },
  },
  {
    name: "card-07",
    type: "registry:component",
    title: "Product Card",
    description: "A product card component",
    dependencies: ["lucide-react"],
    registryDependencies: ["card", "button"],
    files: [
      {
        path: "src/components/customized/card/card-07.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "card",
      title: "Product",
    },
  },
  {
    name: "card-04",
    type: "registry:component",
    title: "Banner Card",
    description: "A banner card component",
    registryDependencies: ["card", "button"],
    files: [
      {
        path: "src/components/customized/card/card-04.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "card",
      title: "Banner",
      className: "col-span-2",
    },
  },
  {
    name: "card-05",
    type: "registry:component",
    title: "Pricing Card",
    description: "A pricing card component",
    dependencies: ["lucide-react"],
    registryDependencies: ["card", "button", "tooltip"],
    files: [
      {
        path: "src/components/customized/card/card-05.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "card",
      title: "Pricing",
    },
  },
  {
    name: "card-08",
    type: "registry:component",
    title: "Testimonial Card",
    description: "A testimonial card component",
    dependencies: ["lucide-react"],
    registryDependencies: ["card", "avatar"],
    files: [
      {
        path: "src/components/customized/card/card-08.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "card",
      title: "Testimonial",
    },
  },
  {
    name: "card-06",
    type: "registry:component",
    title: "Post Card",
    description: "A post card component",
    dependencies: ["lucide-react"],
    registryDependencies: ["card", "button", "separator"],
    files: [
      {
        path: "src/components/customized/card/card-06.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "card",
      title: "Post",
    },
  },
  {
    name: "checkbox-02",
    type: "registry:component",
    title: "Disabled Checkbox",
    description: "A disabled checkbox component",
    registryDependencies: ["checkbox"],
    files: [
      {
        path: "src/components/customized/checkbox/checkbox-02.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "checkbox",
      title: "Disabled",
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
    name: "checkbox-06",
    type: "registry:component",
    title: "Controlled Checkbox",
    description: "A controlled checkbox component",
    registryDependencies: ["checkbox"],
    files: [
      {
        path: "src/components/customized/checkbox/checkbox-06.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "checkbox",
      title: "Controlled",
    },
  },
  {
    name: "checkbox-03",
    type: "registry:component",
    title: "Indeterminate Checkbox",
    description: "An indeterminate checkbox component",
    dependencies: ["lucide-react"],
    registryDependencies: ["checkbox"],
    files: [
      {
        path: "src/components/customized/checkbox/checkbox-03.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "checkbox",
      title: "Indeterminate",
    },
  },
  {
    name: "checkbox-07",
    type: "registry:component",
    title: "Checkbox Colors",
    description: "Different colors of checkbox component",
    registryDependencies: ["checkbox"],
    files: [
      {
        path: "src/components/customized/checkbox/checkbox-07.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "checkbox",
      title: "Colors",
    },
  },
  {
    name: "checkbox-08",
    type: "registry:component",
    title: "Checkbox Sizes",
    description: "Different sizes of checkbox component",
    registryDependencies: ["checkbox"],
    files: [
      {
        path: "src/components/customized/checkbox/checkbox-08.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "checkbox",
      title: "Sizes",
    },
  },
  {
    name: "checkbox-04",
    type: "registry:component",
    title: "Horizontal Checkbox Group",
    description: "A horizontal checkbox group component",
    registryDependencies: ["checkbox", "label"],
    files: [
      {
        path: "src/components/customized/checkbox/checkbox-04.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "checkbox",
      title: "Horizontal Group",
    },
  },
  {
    name: "checkbox-09",
    type: "registry:component",
    title: "Icon Checkbox",
    description: "A checkbox with custom icon component",
    dependencies: ["lucide-react", "radix-ui"],
    files: [
      {
        path: "src/components/customized/checkbox/checkbox-09.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "checkbox",
      title: "Icon",
    },
  },
  {
    name: "checkbox-11",
    type: "registry:component",
    title: "Card Checkbox",
    description: "A card checkbox component",
    dependencies: ["lucide-react", "radix-ui"],
    files: [
      {
        path: "src/components/customized/checkbox/checkbox-11.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "checkbox",
      title: "Card",
    },
  },
  {
    name: "checkbox-10",
    type: "registry:component",
    title: "Multi Color Picker Checkbox",
    description: "A multi color picker checkbox component",
    dependencies: ["lucide-react", "radix-ui"],
    files: [
      {
        path: "src/components/customized/checkbox/checkbox-10.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "checkbox",
      title: "Multi Color Picker",
    },
  },
  {
    name: "checkbox-05",
    type: "registry:component",
    title: "Vertical Checkbox Group",
    description: "A vertical checkbox group component",
    dependencies: ["lucide-react"],
    registryDependencies: ["checkbox"],
    files: [
      {
        path: "src/components/customized/checkbox/checkbox-05.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "checkbox",
      title: "Vertical Group",
    },
  },
  {
    name: "checkbox-12",
    type: "registry:component",
    title: "Checkbox with Form",
    description: "A checkbox with form component",
    dependencies: ["react-hook-form", "zod", "@hookform/resolvers"],
    registryDependencies: ["checkbox", "form", "button"],
    files: [
      {
        path: "src/components/customized/checkbox/checkbox-12.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "checkbox",
      title: "With form",
    },
  },
  {
    name: "checkbox-13",
    type: "registry:component",
    title: "Roles",
    description: "A roles component",
    dependencies: ["lucide-react"],
    registryDependencies: ["checkbox"],
    files: [
      {
        path: "src/components/customized/checkbox/checkbox-13.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "checkbox",
      title: "Roles",
    },
  },
  {
    name: "checkbox-14",
    type: "registry:component",
    title: "Countries",
    description: "A countries component",
    registryDependencies: ["checkbox", "scroll-area", "label"],
    files: [
      {
        path: "src/components/customized/checkbox/checkbox-14.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "checkbox",
      title: "Countries",
    },
  },
  {
    name: "checkbox-15",
    type: "registry:component",
    title: "Working Days",
    description: "A working days component",
    dependencies: ["radix-ui"],
    registryDependencies: ["label"],
    files: [
      {
        path: "src/components/customized/checkbox/checkbox-15.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "checkbox",
      title: "Days",
    },
  },
  {
    name: "checkbox-16",
    type: "registry:component",
    title: "Notification Settings",
    description: "A notification settings component",
    dependencies: ["lucide-react"],
    registryDependencies: ["label", "scroll-area", "checkbox"],
    files: [
      {
        path: "src/components/customized/checkbox/checkbox-16.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "checkbox",
      title: "Filters",
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
    name: "dropdown-menu-03",
    type: "registry:component",
    title: "Dropdown Menu with Checkboxes",
    description: "A dropdown menu with checkboxes component",
    registryDependencies: ["dropdown-menu", "button"],
    files: [
      {
        path: "src/components/customized/dropdown-menu/dropdown-menu-03.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "dropdown-menu",
      title: "Checkboxes",
    },
  },
  {
    name: "dropdown-menu-02",
    type: "registry:component",
    title: "Dropdown Menu with Icon",
    description: "A dropdown menu with icon component",
    dependencies: ["lucide-react"],
    registryDependencies: ["dropdown-menu", "avatar"],
    files: [
      {
        path: "src/components/customized/dropdown-menu/dropdown-menu-02.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "dropdown-menu",
      title: "With Icon",
    },
  },
  {
    name: "dropdown-menu-04",
    type: "registry:component",
    title: "Dropdown Menu with Radio Group",
    description: "A dropdown menu with radio group component",
    dependencies: ["lucide-react"],
    registryDependencies: ["dropdown-menu", "button"],
    files: [
      {
        path: "src/components/customized/dropdown-menu/dropdown-menu-04.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "dropdown-menu",
      title: "Radio Group",
    },
  },
  {
    name: "dropdown-menu-05",
    type: "registry:component",
    title: "Dropdown Menu with Sub Menu",
    description: "A dropdown menu with sub menu component",
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
      title: "With Sub Menu",
    },
  },
  {
    name: "dropdown-menu-07",
    type: "registry:component",
    title: "Complex Dropdown Menu",
    description: "A complex dropdown menu component",
    dependencies: ["lucide-react"],
    registryDependencies: ["dropdown-menu", "avatar"],
    files: [
      {
        path: "src/components/customized/dropdown-menu/dropdown-menu-07.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "dropdown-menu",
      title: "Complex Menu",
    },
  },
  {
    name: "dropdown-menu-06",
    type: "registry:component",
    title: "Dropdown Menu with Shortcuts",
    description: "A dropdown menu with keyboard shortcuts component",
    dependencies: ["lucide-react"],
    registryDependencies: ["dropdown-menu", "button"],
    files: [
      {
        path: "src/components/customized/dropdown-menu/dropdown-menu-06.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "dropdown-menu",
      title: "With Shortcuts",
    },
  },
  {
    name: "dropdown-menu-08",
    type: "registry:component",
    title: "Workspace Switcher Dropdown Menu",
    description: "A workspace switcher dropdown menu component",
    dependencies: ["lucide-react"],
    registryDependencies: ["dropdown-menu", "avatar"],
    files: [
      {
        path: "src/components/customized/dropdown-menu/dropdown-menu-08.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "dropdown-menu",
      title: "Workspace Switcher",
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
    name: "input-03",
    type: "registry:component",
    title: "Filled Input",
    description: "A filled input component",
    registryDependencies: ["input"],
    files: [
      {
        path: "src/components/customized/input/input-03.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "input",
      title: "Filled",
    },
  },
  {
    name: "input-04",
    type: "registry:component",
    title: "Disabled Input",
    description: "A disabled input component",
    registryDependencies: ["input"],
    files: [
      {
        path: "src/components/customized/input/input-04.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "input",
      title: "Disabled",
    },
  },
  {
    name: "input-08",
    type: "registry:component",
    title: "Input with Helper Text",
    description: "An input with helper text component",
    registryDependencies: ["input", "label"],
    files: [
      {
        path: "src/components/customized/input/input-08.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "input",
      title: "With helper text",
    },
  },
  {
    name: "input-09",
    type: "registry:component",
    title: "Input with Error Message",
    description: "An input with error message component",
    registryDependencies: ["input", "label"],
    files: [
      {
        path: "src/components/customized/input/input-09.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "input",
      title: "With error message",
    },
  },
  {
    name: "input-11",
    type: "registry:component",
    title: "File Input",
    description: "A file input component",
    registryDependencies: ["input", "label"],
    files: [
      {
        path: "src/components/customized/input/input-11.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "input",
      title: "File input",
    },
  },
  {
    name: "input-12",
    type: "registry:component",
    title: "Dropzone Input",
    description: "A dropzone input component",
    dependencies: ["lucide-react", "react-dropzone"],
    registryDependencies: ["input", "label"],
    files: [
      {
        path: "src/components/customized/input/input-12.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "input",
      title: "Dropzone",
    },
  },
  {
    name: "input-02",
    type: "registry:component",
    title: "Ring Input",
    description: "A ring input component",
    registryDependencies: ["input"],
    files: [
      {
        path: "src/components/customized/input/input-02.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "input",
      title: "With ring",
    },
  },
  {
    name: "input-10",
    type: "registry:component",
    title: "Input with Form",
    description: "An input with form component",
    dependencies: ["@hookform/resolvers"],
    registryDependencies: ["input", "form", "button"],
    files: [
      {
        path: "src/components/customized/input/input-10.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "input",
      title: "With form",
    },
  },
  {
    name: "input-06",
    type: "registry:component",
    title: "Input with Button",
    description: "An input with button component",
    registryDependencies: ["input", "button"],
    files: [
      {
        path: "src/components/customized/input/input-06.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "input",
      title: "With button",
    },
  },
  {
    name: "input-07",
    type: "registry:component",
    title: "Input with Adornment",
    description: "An input with adornment component",
    dependencies: ["lucide-react"],
    registryDependencies: ["input", "button"],
    files: [
      {
        path: "src/components/customized/input/input-07.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "input",
      title: "With adornments",
    },
  },
  {
    name: "input-05",
    type: "registry:component",
    title: "Input with Label",
    description: "An input with label component",
    registryDependencies: ["input", "label"],
    files: [
      {
        path: "src/components/customized/input/input-05.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "input",
      title: "With label",
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
    name: "breadcrumb-05",
    type: "registry:component",
    title: "Breadcrumb with Icon",
    description: "A breadcrumb with icon component",
    dependencies: ["lucide-react"],
    registryDependencies: ["breadcrumb"],
    files: [
      {
        path: "src/components/customized/breadcrumb/breadcrumb-05.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "breadcrumb",
      title: "With Icon",
    },
  },
  {
    name: "breadcrumb-06",
    type: "registry:component",
    title: "Breadcrumb with Icon (Alternate)",
    description: "An alternate breadcrumb with icon component",
    dependencies: ["lucide-react"],
    registryDependencies: ["breadcrumb"],
    files: [
      {
        path: "src/components/customized/breadcrumb/breadcrumb-06.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "breadcrumb",
      title: "With Icon 2",
    },
  },
  {
    name: "breadcrumb-07",
    type: "registry:component",
    title: "Breadcrumb with Icon and Label",
    description: "A breadcrumb with icon and label component",
    dependencies: ["lucide-react"],
    registryDependencies: ["breadcrumb"],
    files: [
      {
        path: "src/components/customized/breadcrumb/breadcrumb-07.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "breadcrumb",
      title: "With Icon and Label",
    },
  },
  {
    name: "breadcrumb-08",
    type: "registry:component",
    title: "Breadcrumb with Icon and Label (Alternate)",
    description: "An alternate breadcrumb with icon and label component",
    dependencies: ["lucide-react"],
    registryDependencies: ["breadcrumb"],
    files: [
      {
        path: "src/components/customized/breadcrumb/breadcrumb-08.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "breadcrumb",
      title: "With Icon and Label 2",
    },
  },
  {
    name: "breadcrumb-13",
    type: "registry:component",
    title: "Breadcrumb with Dropdown",
    description: "A breadcrumb with dropdown component",
    dependencies: ["lucide-react"],
    registryDependencies: ["breadcrumb", "dropdown-menu"],
    files: [
      {
        path: "src/components/customized/breadcrumb/breadcrumb-13.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "breadcrumb",
      title: "With Dropdown",
    },
  },
  {
    name: "breadcrumb-10",
    type: "registry:component",
    title: "Breadcrumb with Tab Active",
    description: "A breadcrumb with tab active component",
    dependencies: ["lucide-react"],
    registryDependencies: ["breadcrumb", "badge"],
    files: [
      {
        path: "src/components/customized/breadcrumb/breadcrumb-10.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "breadcrumb",
      title: "Tab Active",
    },
  },
  {
    name: "breadcrumb-14",
    type: "registry:component",
    title: "Collapsed Breadcrumb",
    description: "A collapsed breadcrumb component",
    dependencies: ["lucide-react"],
    registryDependencies: ["breadcrumb", "dropdown-menu"],
    files: [
      {
        path: "src/components/customized/breadcrumb/breadcrumb-14.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "breadcrumb",
      title: "Collapsed",
    },
  },
  {
    name: "breadcrumb-09",
    type: "registry:component",
    title: "Breadcrumb with Background",
    description: "A breadcrumb with background component",
    dependencies: ["lucide-react"],
    registryDependencies: ["breadcrumb"],
    files: [
      {
        path: "src/components/customized/breadcrumb/breadcrumb-09.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "breadcrumb",
      title: "With Background",
    },
  },
  {
    name: "breadcrumb-11",
    type: "registry:component",
    title: "Tabs Breadcrumb",
    description: "A tabs breadcrumb component",
    dependencies: ["lucide-react"],
    registryDependencies: ["breadcrumb", "badge"],
    files: [
      {
        path: "src/components/customized/breadcrumb/breadcrumb-11.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "breadcrumb",
      title: "Tabs",
    },
  },
  {
    name: "breadcrumb-12",
    type: "registry:component",
    title: "Tabs Outline Breadcrumb",
    description: "A tabs outline breadcrumb component",
    dependencies: ["lucide-react"],
    registryDependencies: ["breadcrumb", "badge"],
    files: [
      {
        path: "src/components/customized/breadcrumb/breadcrumb-12.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "breadcrumb",
      title: "Tabs Outline",
    },
  },
  {
    name: "breadcrumb-15",
    type: "registry:component",
    title: "Steps Breadcrumb",
    description: "A steps breadcrumb component",
    dependencies: ["lucide-react"],
    registryDependencies: ["breadcrumb"],
    files: [
      {
        path: "src/components/customized/breadcrumb/breadcrumb-15.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "breadcrumb",
      title: "Steps",
    },
  },
  {
    name: "breadcrumb-03",
    type: "registry:component",
    title: "Breadcrumb with Chevrons Separator",
    description: "A breadcrumb with chevrons separator component",
    registryDependencies: ["breadcrumb"],
    files: [
      {
        path: "src/components/customized/breadcrumb/breadcrumb-03.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "breadcrumb",
      title: "Chevrons Separator",
    },
  },
  {
    name: "breadcrumb-04",
    type: "registry:component",
    title: "Breadcrumb with Dot Separator",
    description: "A breadcrumb with dot separator component",
    dependencies: ["lucide-react"],
    registryDependencies: ["breadcrumb"],
    files: [
      {
        path: "src/components/customized/breadcrumb/breadcrumb-04.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "breadcrumb",
      title: "Dot Separator",
    },
  },
  {
    name: "breadcrumb-02",
    type: "registry:component",
    title: "Breadcrumb with Slash Separator",
    description: "A breadcrumb with slash separator component",
    dependencies: ["lucide-react"],
    registryDependencies: ["breadcrumb"],
    files: [
      {
        path: "src/components/customized/breadcrumb/breadcrumb-02.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "breadcrumb",
      title: "Slash Separator",
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
    title: "Carousel with Multiple Slides",
    description: "A carousel displaying multiple slides at once",
    registryDependencies: ["carousel", "card"],
    files: [
      {
        path: "src/components/customized/carousel/carousel-02.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "carousel",
      title: "Multiple slides",
    },
  },
  {
    name: "carousel-03",
    type: "registry:component",
    title: "Vertical Carousel",
    description: "A vertical orientation carousel",
    registryDependencies: ["carousel", "card"],
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
    name: "carousel-04",
    type: "registry:component",
    title: "Carousel with Slide Status",
    description: "A carousel with slide status indicator",
    registryDependencies: ["carousel", "card"],
    files: [
      {
        path: "src/components/customized/carousel/carousel-04.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "carousel",
      title: "Slide Status",
    },
  },
  {
    name: "carousel-05",
    type: "registry:component",
    title: "Carousel with Slide Status (Alternate)",
    description: "An alternate carousel with slide status indicator",
    registryDependencies: ["carousel", "card"],
    files: [
      {
        path: "src/components/customized/carousel/carousel-05.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "carousel",
      title: "Slide Status 2",
    },
  },
  {
    name: "carousel-06",
    type: "registry:component",
    title: "Carousel with Pagination",
    description: "A carousel with pagination controls",
    registryDependencies: ["carousel", "card"],
    files: [
      {
        path: "src/components/customized/carousel/carousel-06.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "carousel",
      title: "Pagination",
    },
  },
  {
    name: "carousel-07",
    type: "registry:component",
    title: "Carousel with Footer",
    description: "A carousel with a footer section",
    registryDependencies: ["carousel", "card"],
    files: [
      {
        path: "src/components/customized/carousel/carousel-07.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "carousel",
      title: "Footer",
    },
  },
  {
    name: "carousel-08",
    type: "registry:component",
    title: "Carousel with Progress Bar",
    description: "A carousel with a progress bar indicator",
    registryDependencies: ["carousel", "card", "progress"],
    files: [
      {
        path: "src/components/customized/carousel/carousel-08.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "carousel",
      title: "Progress",
    },
  },
  {
    name: "carousel-09",
    type: "registry:component",
    title: "Carousel with Thumbnails",
    description: "A carousel with thumbnail navigation",
    registryDependencies: ["carousel", "card"],
    files: [
      {
        path: "src/components/customized/carousel/carousel-09.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "carousel",
      title: "Thumbs",
    },
  },
  {
    name: "carousel-10",
    type: "registry:component",
    title: "Carousel with Opacity Transition",
    description: "A carousel with opacity transition effects",
    registryDependencies: ["carousel", "card"],
    files: [
      {
        path: "src/components/customized/carousel/carousel-10.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "carousel",
      title: "Opacity",
    },
  },
  {
    name: "carousel-11",
    type: "registry:component",
    title: "Carousel with Scale Transition",
    description: "A carousel with scale transition effects",
    registryDependencies: ["carousel", "card"],
    files: [
      {
        path: "src/components/customized/carousel/carousel-11.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "carousel",
      title: "Scale",
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
    name: "collapsible-02",
    type: "registry:component",
    title: "Show More Collapsible",
    description: "A collapsible component with show more functionality",
    dependencies: ["lucide-react"],
    registryDependencies: ["collapsible", "button"],
    files: [
      {
        path: "src/components/customized/collapsible/collapsible-02.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "collapsible",
      title: "Show More",
    },
  },
  {
    name: "collapsible-03",
    type: "registry:component",
    title: "File Tree Collapsible",
    description: "A collapsible component for displaying file trees",
    dependencies: ["lucide-react"],
    registryDependencies: ["collapsible"],
    files: [
      {
        path: "src/components/customized/collapsible/collapsible-03.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "collapsible",
      title: "File Tree",
    },
  },
  {
    name: "collapsible-04",
    type: "registry:component",
    title: "Filters Collapsible",
    description: "A collapsible component for filter options",
    dependencies: ["lucide-react"],
    registryDependencies: [
      "collapsible",
      "input",
      "label",
      "slider",
      "checkbox",
    ],
    files: [
      {
        path: "src/components/customized/collapsible/collapsible-04.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "collapsible",
      title: "Filters",
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
    name: "input-otp-03",
    type: "registry:component",
    title: "Separated OTP Input",
    description: "An OTP input with separated input fields",
    registryDependencies: ["input-otp"],
    files: [
      {
        path: "src/components/customized/input-otp/input-otp-03.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "input-otp",
      title: "Separated",
    },
  },
  {
    name: "input-otp-04",
    type: "registry:component",
    title: "Separated OTP Input (Alternate)",
    description: "An alternate style of separated OTP input fields",
    registryDependencies: ["input-otp"],
    files: [
      {
        path: "src/components/customized/input-otp/input-otp-04.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "input-otp",
      title: "Separated 2",
    },
  },
  {
    name: "input-otp-05",
    type: "registry:component",
    title: "Secondary OTP Input",
    description: "An OTP input with secondary styling",
    registryDependencies: ["input-otp"],
    files: [
      {
        path: "src/components/customized/input-otp/input-otp-05.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "input-otp",
      title: "Secondary",
    },
  },
  {
    name: "input-otp-02",
    type: "registry:component",
    title: "OTP Input Without Separator",
    description: "An OTP input without separators between fields",
    registryDependencies: ["input-otp"],
    files: [
      {
        path: "src/components/customized/input-otp/input-otp-02.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "input-otp",
      title: "Without Separator",
    },
  },
  {
    name: "input-otp-06",
    type: "registry:component",
    title: "OTP Input with Custom Separator",
    description: "An OTP input with custom separator between fields",
    dependencies: ["lucide-react"],
    registryDependencies: ["input-otp"],
    files: [
      {
        path: "src/components/customized/input-otp/input-otp-06.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "input-otp",
      title: "Custom Separator",
    },
  },
  {
    name: "input-otp-07",
    type: "registry:component",
    title: "OTP Input with Inner Shadow",
    description: "An OTP input with inner shadow styling",
    registryDependencies: ["input-otp"],
    files: [
      {
        path: "src/components/customized/input-otp/input-otp-07.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "input-otp",
      title: "Inner Shadow",
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
    name: "navigation-menu-07",
    type: "registry:component",
    title: "Navigation Menu with Icons",
    description: "A navigation menu with icon elements",
    dependencies: ["lucide-react"],
    registryDependencies: ["navigation-menu", "button"],
    files: [
      {
        path: "src/components/customized/navigation-menu/navigation-menu-07.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "navigation-menu",
      title: "Icon",
    },
  },
  {
    name: "navigation-menu-04",
    type: "registry:component",
    title: "Navigation Menu with Active Item",
    description: "A navigation menu with active item styling",
    dependencies: ["lucide-react"],
    registryDependencies: ["navigation-menu"],
    files: [
      {
        path: "src/components/customized/navigation-menu/navigation-menu-04.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "navigation-menu",
      title: "Active Item",
    },
  },
  {
    name: "navigation-menu-05",
    type: "registry:component",
    title: "Underlined Navigation Menu",
    description: "A navigation menu with underlined styling",
    dependencies: ["lucide-react"],
    registryDependencies: ["navigation-menu"],
    files: [
      {
        path: "src/components/customized/navigation-menu/navigation-menu-05.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "navigation-menu",
      title: "Underlined",
    },
  },
  {
    name: "navigation-menu-08",
    type: "registry:component",
    title: "Mobile Navigation Menu",
    description: "A mobile-friendly navigation menu",
    dependencies: ["lucide-react"],
    registryDependencies: ["navigation-menu"],
    files: [
      {
        path: "src/components/customized/navigation-menu/navigation-menu-08.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "navigation-menu",
      title: "Mobile Navigation",
    },
  },
  {
    name: "navigation-menu-02",
    type: "registry:component",
    title: "Navigation Menu with Icon",
    description: "A navigation menu with icon integration",
    dependencies: ["lucide-react"],
    registryDependencies: ["navigation-menu"],
    files: [
      {
        path: "src/components/customized/navigation-menu/navigation-menu-02.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "navigation-menu",
      title: "With Icon",
    },
  },
  {
    name: "navigation-menu-06",
    type: "registry:component",
    title: "Rich Navigation Menu",
    description: "A feature-rich navigation menu with advanced styling",
    dependencies: ["lucide-react"],
    registryDependencies: ["navigation-menu"],
    files: [
      {
        path: "src/components/customized/navigation-menu/navigation-menu-06.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "navigation-menu",
      title: "Rich Navigation Menu",
      className: "col-span-full",
    },
  },
  {
    name: "navigation-menu-03",
    type: "registry:component",
    title: "Navigation Menu with Dropdown",
    description: "A navigation menu with dropdown functionality",
    registryDependencies: ["navigation-menu"],
    files: [
      {
        path: "src/components/customized/navigation-menu/navigation-menu-03.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "navigation-menu",
      title: "Dropdown",
      className: "col-span-full",
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
    name: "pagination-10",
    type: "registry:component",
    title: "Pagination with Icon and Label",
    description: "A pagination component with icons and labels",
    dependencies: ["lucide-react"],
    registryDependencies: ["pagination"],
    files: [
      {
        path: "src/components/customized/pagination/pagination-10.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "pagination",
      title: "With Icon and Label",
    },
  },
  {
    name: "pagination-05",
    type: "registry:component",
    title: "Pagination with Icon",
    description: "A pagination component with icons",
    registryDependencies: ["pagination"],
    files: [
      {
        path: "src/components/customized/pagination/pagination-05.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "pagination",
      title: "With Icon",
    },
  },
  {
    name: "pagination-07",
    type: "registry:component",
    title: "Bordered Pagination",
    description: "A pagination component with bordered styling",
    registryDependencies: ["pagination", "button"],
    files: [
      {
        path: "src/components/customized/pagination/pagination-07.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "pagination",
      title: "Bordered",
    },
  },
  {
    name: "pagination-04",
    type: "registry:component",
    title: "Pagination with Rounded Buttons",
    description: "A pagination component with rounded button styling",
    registryDependencies: ["pagination"],
    files: [
      {
        path: "src/components/customized/pagination/pagination-04.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "pagination",
      title: "Rounded Button",
    },
  },
  {
    name: "pagination-08",
    type: "registry:component",
    title: "Tabs Pagination",
    description: "A pagination component with tabs styling",
    registryDependencies: ["pagination", "button"],
    files: [
      {
        path: "src/components/customized/pagination/pagination-08.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "pagination",
      title: "Tabs",
    },
  },
  {
    name: "pagination-06",
    type: "registry:component",
    title: "Pagination with First/Last Page",
    description: "A pagination component with first and last page navigation",
    dependencies: ["lucide-react"],
    registryDependencies: ["pagination"],
    files: [
      {
        path: "src/components/customized/pagination/pagination-06.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "pagination",
      title: "First and Last Page Buttons",
    },
  },
  {
    name: "pagination-09",
    type: "registry:component",
    title: "Secondary Tabs Pagination",
    description: "A pagination component with secondary tabs styling",
    registryDependencies: ["pagination", "button"],
    files: [
      {
        path: "src/components/customized/pagination/pagination-09.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "pagination",
      title: "Tabs Secondary",
    },
  },
  {
    name: "pagination-11",
    type: "registry:component",
    title: "Numberless Pagination",
    description: "A pagination component without page numbers",
    registryDependencies: ["pagination"],
    files: [
      {
        path: "src/components/customized/pagination/pagination-11.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "pagination",
      title: "Numberless Pagination",
    },
  },
  {
    name: "pagination-12",
    type: "registry:component",
    title: "Numberless Pagination with Text",
    description: "A pagination component without numbers but with text",
    registryDependencies: ["pagination"],
    files: [
      {
        path: "src/components/customized/pagination/pagination-12.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "pagination",
      title: "Numberless with Text",
    },
  },
  {
    name: "pagination-13",
    type: "registry:component",
    title: "Pagination with Ellipsis",
    description: "A pagination component with ellipsis for long page ranges",
    registryDependencies: ["pagination"],
    files: [
      {
        path: "src/components/customized/pagination/pagination-13.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "pagination",
      title: "With ellipsis",
    },
  },
  {
    name: "pagination-14",
    type: "registry:component",
    title: "Table Pagination",
    description: "A pagination component designed for tables",
    dependencies: ["lucide-react"],
    registryDependencies: ["pagination", "button", "select", "label"],
    files: [
      {
        path: "src/components/customized/pagination/pagination-14.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "pagination",
      title: "Table Pagination",
    },
  },
  {
    name: "pagination-15",
    type: "registry:component",
    title: "Pagination with text",
    description: "A pagination component with text",
    dependencies: ["lucide-react"],
    registryDependencies: ["pagination"],
    files: [
      {
        path: "src/components/customized/pagination/pagination-15.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "pagination",
      title: "Pagination with text",
    },
  },
  {
    name: "pagination-02",
    type: "registry:component",
    title: "Pagination with Primary Buttons",
    description: "A pagination component with primary button styling",
    registryDependencies: ["pagination", "button"],
    files: [
      {
        path: "src/components/customized/pagination/pagination-02.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "pagination",
      title: "Primary Button",
    },
  },
  {
    name: "pagination-03",
    type: "registry:component",
    title: "Pagination with Secondary Buttons",
    description: "A pagination component with secondary button styling",
    registryDependencies: ["pagination", "button"],
    files: [
      {
        path: "src/components/customized/pagination/pagination-03.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "pagination",
      title: "Secondary Button",
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
    title: "Linear Progress with Label",
    description: "A linear progress component with label",
    registryDependencies: ["progress"],
    files: [
      {
        path: "src/components/customized/progress/progress-02.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "progress",
      title: "Linear with label",
    },
  },
  {
    name: "progress-04",
    type: "registry:component",
    title: "Rounded Progress",
    description: "A progress component with rounded styling",
    registryDependencies: ["progress"],
    files: [
      {
        path: "src/components/customized/progress/progress-04.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "progress",
      title: "Rounded progress indicator",
    },
  },
  {
    name: "progress-03",
    type: "registry:component",
    title: "Linear Progress with Custom Color",
    description: "A linear progress component with custom color",
    registryDependencies: ["progress"],
    files: [
      {
        path: "src/components/customized/progress/progress-03.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "progress",
      title: "Linear color",
    },
  },
  {
    name: "progress-07",
    type: "registry:component",
    title: "Circular Progress",
    description: "A circular progress component",
    files: [
      {
        path: "src/components/customized/progress/progress-07.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "progress",
      title: "Circular",
    },
  },
  {
    name: "progress-10",
    type: "registry:component",
    title: "Circular Progress with Custom Color",
    description: "A circular progress component with custom color",
    files: [
      {
        path: "src/components/customized/progress/progress-10.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "progress",
      title: "Circular color",
    },
  },
  {
    name: "progress-08",
    type: "registry:component",
    title: "Circular Progress with Label",
    description: "A circular progress component with label",
    files: [
      {
        path: "src/components/customized/progress/progress-08.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "progress",
      title: "Circular with label",
    },
  },
  {
    name: "progress-09",
    type: "registry:component",
    title: "Circular Progress with Custom Label",
    description: "A circular progress component with custom label",
    files: [
      {
        path: "src/components/customized/progress/progress-09.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "progress",
      title: "Circular with custom label",
    },
  },
  {
    name: "progress-11",
    type: "registry:component",
    title: "Circular Progress with Custom Shape",
    description: "A circular progress component with custom shape",
    files: [
      {
        path: "src/components/customized/progress/progress-11.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "progress",
      title: "Circular progress shape",
    },
  },
  {
    name: "progress-12",
    type: "registry:component",
    title: "Circular Progress with Custom Stroke Width",
    description: "A circular progress component with custom stroke width",
    files: [
      {
        path: "src/components/customized/progress/progress-12.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "progress",
      title: "Circular stroke width",
    },
  },
  {
    name: "progress-05",
    type: "registry:component",
    title: "Gradient Progress",
    description: "A progress component with gradient styling",
    registryDependencies: ["progress"],
    files: [
      {
        path: "src/components/customized/progress/progress-05.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "progress",
      title: "Gradient",
    },
  },
  {
    name: "progress-06",
    type: "registry:component",
    title: "Animated Progress",
    description: "A progress component with animation effects",
    dependencies: ["radix-ui"],
    files: [
      {
        path: "src/components/customized/progress/progress-06.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "progress",
      title: "Animation",
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
    name: "radio-group-03",
    type: "registry:component",
    title: "Disabled Radio Group",
    description: "A radio group component with disabled options",
    registryDependencies: ["radio-group", "label"],
    files: [
      {
        path: "src/components/customized/radio-group/radio-group-03.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "radio-group",
      title: "Disabled",
    },
  },
  {
    name: "radio-group-05",
    type: "registry:component",
    title: "Radio Group with Custom Size",
    description: "A radio group component with custom size options",
    registryDependencies: ["radio-group", "label"],
    files: [
      {
        path: "src/components/customized/radio-group/radio-group-05.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "radio-group",
      title: "Size",
    },
  },
  {
    name: "radio-group-07",
    type: "registry:component",
    title: "Radio Group with Cards (Style 1)",
    description: "A radio group component with card-style options (style 1)",
    registryDependencies: ["radio-group"],
    files: [
      {
        path: "src/components/customized/radio-group/radio-group-07.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "radio-group",
      title: "Cards 1",
    },
  },
  {
    name: "radio-group-08",
    type: "registry:component",
    title: "Radio Group with Cards (Style 2)",
    description: "A radio group component with card-style options (style 2)",
    dependencies: ["lucide-react", "radix-ui"],
    files: [
      {
        path: "src/components/customized/radio-group/radio-group-08.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "radio-group",
      title: "Cards 2",
    },
  },
  {
    name: "radio-group-09",
    type: "registry:component",
    title: "Radio Group with Cards (Style 3)",
    description: "A radio group component with card-style options (style 3)",
    registryDependencies: ["radio-group", "card", "label"],
    files: [
      {
        path: "src/components/customized/radio-group/radio-group-09.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "radio-group",
      title: "Cards 3",
    },
  },
  {
    name: "radio-group-02",
    type: "registry:component",
    title: "Horizontal Radio Group",
    description: "A radio group component with horizontal layout",
    registryDependencies: ["radio-group", "label"],
    files: [
      {
        path: "src/components/customized/radio-group/radio-group-02.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "radio-group",
      title: "Horizontal",
    },
  },
  {
    name: "radio-group-04",
    type: "registry:component",
    title: "Radio Group with Custom Colors",
    description: "A radio group component with custom color options",
    registryDependencies: ["radio-group", "label"],
    files: [
      {
        path: "src/components/customized/radio-group/radio-group-04.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "radio-group",
      title: "Color",
    },
  },
  {
    name: "radio-group-06",
    type: "registry:component",
    title: "Radio Group with Variant Styling",
    description: "A radio group component with variant styling options",
    registryDependencies: ["radio-group", "label"],
    files: [
      {
        path: "src/components/customized/radio-group/radio-group-06.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "radio-group",
      title: "Variant",
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
    name: "select-06",
    type: "registry:component",
    title: "Select with Icon",
    description: "A select component with icon integration",
    dependencies: ["lucide-react"],
    registryDependencies: ["select"],
    files: [
      {
        path: "src/components/customized/select/select-06.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "select",
      title: "With an icon",
    },
  },
  {
    name: "select-11",
    type: "registry:component",
    title: "Controlled Select",
    description: "A controlled select component",
    registryDependencies: ["select"],
    files: [
      {
        path: "src/components/customized/select/select-11.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "select",
      title: "Controlled",
    },
  },
  {
    name: "select-10",
    type: "registry:component",
    title: "Scrollable Select",
    description: "A select component with scrollable options",
    registryDependencies: ["select"],
    files: [
      {
        path: "src/components/customized/select/select-10.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "select",
      title: "Scrollable",
    },
  },
  {
    name: "select-09",
    type: "registry:component",
    title: "Select with Custom Menu Position",
    description: "A select component with custom menu position",
    registryDependencies: ["select", "label"],
    files: [
      {
        path: "src/components/customized/select/select-09.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "select",
      title: "Select menu position",
    },
  },
  {
    name: "select-04",
    type: "registry:component",
    title: "Select with Custom Dropdown Icon",
    description: "A select component with custom dropdown icon",
    dependencies: ["lucide-react"],
    registryDependencies: ["select"],
    files: [
      {
        path: "src/components/customized/select/select-04.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "select",
      title: "Custom dropdown icon",
    },
  },
  {
    name: "select-03",
    type: "registry:component",
    title: "Ghost Select",
    description: "A select component with ghost styling",
    registryDependencies: ["select"],
    files: [
      {
        path: "src/components/customized/select/select-03.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "select",
      title: "Ghost",
    },
  },
  {
    name: "select-05",
    type: "registry:component",
    title: "Select with Custom Shape",
    description: "A select component with custom shape styling",
    registryDependencies: ["select", "label"],
    files: [
      {
        path: "src/components/customized/select/select-05.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "select",
      title: "Shape",
    },
  },
  {
    name: "select-08",
    type: "registry:component",
    title: "Theme Selector Select",
    description: "A select component for theme selection",
    dependencies: ["lucide-react", "next-themes"],
    registryDependencies: ["select"],
    files: [
      {
        path: "src/components/customized/select/select-08.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "select",
      title: "Theme Selector",
    },
  },
  {
    name: "select-02",
    type: "registry:component",
    title: "Select with Background Color",
    description: "A select component with custom background color",
    registryDependencies: ["select"],
    files: [
      {
        path: "src/components/customized/select/select-02.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "select",
      title: "Background Color",
    },
  },
  {
    name: "select-07",
    type: "registry:component",
    title: "Select with Form Integration",
    description: "A select component integrated with form handling",
    dependencies: ["@hookform/resolvers", "zod"],
    registryDependencies: ["select", "form"],
    files: [
      {
        path: "src/components/customized/select/select-07.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "select",
      title: "With form",
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
    name: "separator-04",
    type: "registry:component",
    title: "Dashed Separator",
    description: "A dashed separator component",
    registryDependencies: ["separator", "card", "input", "label", "button"],
    files: [
      {
        path: "src/components/customized/separator/separator-04.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "separator",
      title: "Dashed",
    },
  },
  {
    name: "separator-05",
    type: "registry:component",
    title: "Vertical Separator",
    description: "A vertical separator component",
    registryDependencies: ["separator", "button", "input", "label"],
    files: [
      {
        path: "src/components/customized/separator/separator-05.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "separator",
      title: "Vertical",
    },
  },
  {
    name: "separator-03",
    type: "registry:component",
    title: "Horizontal Separator with Chip",
    description: "A horizontal separator with chip component",
    registryDependencies: ["separator", "button", "input", "label", "card"],
    files: [
      {
        path: "src/components/customized/separator/separator-03.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "separator",
      title: "Horizontal separator with chip",
    },
  },
  {
    name: "separator-06",
    type: "registry:component",
    title: "Vertical Separator with Chip",
    description: "A vertical separator with chip component",
    registryDependencies: ["separator", "button", "input", "label"],
    files: [
      {
        path: "src/components/customized/separator/separator-06.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "separator",
      title: "Vertical with chip",
    },
  },
  {
    name: "separator-02",
    type: "registry:component",
    title: "Horizontal Separator with Label",
    description: "A horizontal separator with label component",
    registryDependencies: ["separator", "button", "input", "label", "card"],
    files: [
      {
        path: "src/components/customized/separator/separator-02.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "separator",
      title: "Horizontal separator with label",
    },
  },
  {
    name: "separator-with-label-vertical",
    type: "registry:component",
    title: "Vertical Separator with Label",
    description: "A vertical separator with label component",
    registryDependencies: ["separator", "button", "input", "label", "card"],
    files: [
      {
        path: "src/components/customized/separator/with-label-vertical.tsx",
        type: "registry:component",
      },
    ],
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
    title: "Disabled Slider",
    description: "A disabled slider component",
    registryDependencies: ["slider"],
    files: [
      {
        path: "src/components/customized/slider/slider-02.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "slider",
      title: "Disabled",
    },
  },
  {
    name: "slider-03",
    type: "registry:component",
    title: "Slider Size",
    description: "A slider component with different sizes",
    registryDependencies: ["slider"],
    files: [
      {
        path: "src/components/customized/slider/slider-03.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "slider",
      title: "Size",
    },
  },
  {
    name: "slider-04",
    type: "registry:component",
    title: "Slider Color",
    description: "A slider component with different colors",
    dependencies: ["radix-ui"],
    files: [
      {
        path: "src/components/customized/slider/slider-04.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "slider",
      title: "Color",
    },
  },
  {
    name: "slider-05",
    type: "registry:component",
    title: "Slider Shape",
    description: "A slider component with different shapes",
    dependencies: ["radix-ui"],
    files: [
      {
        path: "src/components/customized/slider/slider-05.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "slider",
      title: "Shape",
    },
  },
  {
    name: "slider-06",
    type: "registry:component",
    title: "Slider with Label",
    description: "A slider component with a label",
    registryDependencies: ["slider"],
    files: [
      {
        path: "src/components/customized/slider/slider-06.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "slider",
      title: "With label",
    },
  },
  {
    name: "slider-13",
    type: "registry:component",
    title: "Vertical Slider",
    description: "A vertical slider component",
    dependencies: ["radix-ui"],
    files: [
      {
        path: "src/components/customized/slider/slider-13.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "slider",
      title: "Vertical",
    },
  },
  {
    name: "slider-07",
    type: "registry:component",
    title: "Slider with Thumb Icon",
    description: "A slider component with a custom thumb icon",
    dependencies: ["lucide-react", "radix-ui"],
    files: [
      {
        path: "src/components/customized/slider/slider-07.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "slider",
      title: "Thumb Icon",
    },
  },
  {
    name: "slider-08",
    type: "registry:component",
    title: "Audio Slider",
    description: "A slider component designed for audio controls",
    registryDependencies: ["slider"],
    files: [
      {
        path: "src/components/customized/slider/slider-08.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "slider",
      title: "Audio Slider",
    },
  },
  {
    name: "slider-09",
    type: "registry:component",
    title: "Slider with Marks",
    description: "A slider component with marks for specific values",
    registryDependencies: ["slider"],
    files: [
      {
        path: "src/components/customized/slider/slider-09.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "slider",
      title: "Marks",
    },
  },
  {
    name: "slider-10",
    type: "registry:component",
    title: "Slider with Sticky Label",
    description: "A slider component with a sticky label",
    dependencies: ["radix-ui"],
    registryDependencies: ["badge"],
    files: [
      {
        path: "src/components/customized/slider/slider-10.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "slider",
      title: "Sticky label",
    },
  },
  {
    name: "slider-11",
    type: "registry:component",
    title: "Slider with Sticky Label on Hover",
    description: "A slider component with a sticky label that appears on hover",
    dependencies: ["radix-ui"],
    registryDependencies: ["badge"],
    files: [
      {
        path: "src/components/customized/slider/slider-11.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "slider",
      title: "Sticky Label on Hover",
    },
  },
  {
    name: "slider-12",
    type: "registry:component",
    title: "Slider with Sticky Label Arrow",
    description: "A slider component with a sticky label with arrow",
    dependencies: ["radix-ui"],
    registryDependencies: ["badge"],
    files: [
      {
        path: "src/components/customized/slider/slider-12.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "slider",
      title: "Sticky Label with Arrow",
    },
  },
  {
    name: "slider-14",
    type: "registry:component",
    title: "Range Slider",
    description: "A range slider component",
    dependencies: ["radix-ui"],
    files: [
      {
        path: "src/components/customized/slider/slider-14.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "slider",
      title: "Range",
    },
  },
  {
    name: "slider-15",
    type: "registry:component",
    title: "Slider with Multiple Thumbs",
    description: "A slider component with multiple thumbs",
    dependencies: ["radix-ui"],
    files: [
      {
        path: "src/components/customized/slider/slider-15.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "slider",
      title: "Multiple Thumbs",
    },
  },
  {
    name: "spinner-01",
    type: "registry:component",
    title: "Default Spinner",
    description: "A default spinner component",
    dependencies: ["lucide-react"],
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
    title: "Circle Spinner",
    description: "A circular spinner component",
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/customized/spinner/spinner-02.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "spinner",
      title: "Circle",
    },
  },
  {
    name: "spinner-03",
    type: "registry:component",
    title: "Pinwheel Spinner",
    description: "A pinwheel spinner component",
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/customized/spinner/spinner-03.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "spinner",
      title: "Pinwheel",
    },
  },
  {
    name: "spinner-04",
    type: "registry:component",
    title: "Spinner Colors",
    description: "A spinner component with different colors",
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/customized/spinner/spinner-04.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "spinner",
      title: "Colors",
    },
  },
  {
    name: "spinner-05",
    type: "registry:component",
    title: "Spinner Sizes",
    description: "A spinner component with different sizes",
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/components/customized/spinner/spinner-05.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "spinner",
      title: "Sizes",
    },
  },
  {
    name: "spinner-06",
    type: "registry:component",
    title: "Swirling Effect Spinner",
    description: "A spinner component with swirling effect",
    files: [
      {
        path: "src/components/customized/spinner/spinner-06.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "spinner",
      title: "Swirling Effect",
      credit: {
        label: "fffuel",
        link: "https://www.fffuel.co/svg-spinner/",
      },
    },
  },
  {
    name: "spinner-07",
    type: "registry:component",
    title: "Spinner Circle 1",
    description: "A circle spinner component variation 1",
    files: [
      {
        path: "src/components/customized/spinner/spinner-07.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "spinner",
      title: "Spinner Circle 1",
    },
  },
  {
    name: "spinner-08",
    type: "registry:component",
    title: "Spinner Circle 2",
    description: "A circle spinner component variation 2",
    files: [
      {
        path: "src/components/customized/spinner/spinner-08.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "spinner",
      title: "Spinner Circle 2",
    },
  },
  {
    name: "spinner-09",
    type: "registry:component",
    title: "Spinner Circle 3",
    description: "A circle spinner component variation 3",
    files: [
      {
        path: "src/components/customized/spinner/spinner-09.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "spinner",
      title: "Spinner Circle 3",
    },
  },
  {
    name: "spinner-10",
    type: "registry:component",
    title: "Spinner Circle 4",
    description: "A circle spinner component variation 4",
    files: [
      {
        path: "src/components/customized/spinner/spinner-10.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "spinner",
      title: "Spinner Circle 4",
    },
  },
  {
    name: "spinner-11",
    type: "registry:component",
    title: "Spinner Circle 5",
    description: "A circle spinner component variation 5",
    files: [
      {
        path: "src/components/customized/spinner/spinner-11.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "spinner",
      title: "Spinner Circle 5",
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
    title: "Switch with Label",
    description: "A switch component with a label",
    registryDependencies: ["switch", "label"],
    files: [
      {
        path: "src/components/customized/switch/switch-02.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "switch",
      title: "With label",
    },
  },
  {
    name: "switch-03",
    type: "registry:component",
    title: "Disabled Switch",
    description: "A disabled switch component",
    registryDependencies: ["switch", "label"],
    files: [
      {
        path: "src/components/customized/switch/switch-03.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "switch",
      title: "Disabled",
    },
  },
  {
    name: "switch-04",
    type: "registry:component",
    title: "Switch Colors",
    description: "A switch component with different colors",
    registryDependencies: ["switch"],
    files: [
      {
        path: "src/components/customized/switch/switch-04.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "switch",
      title: "Colors",
    },
  },
  {
    name: "switch-05",
    type: "registry:component",
    title: "Switch Sizes",
    description: "A switch component with different sizes",
    dependencies: ["radix-ui"],
    files: [
      {
        path: "src/components/customized/switch/switch-05.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "switch",
      title: "Sizes",
    },
  },
  {
    name: "switch-06",
    type: "registry:component",
    title: "Controlled Switch",
    description: "A controlled switch component",
    registryDependencies: ["switch"],
    files: [
      {
        path: "src/components/customized/switch/switch-06.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "switch",
      title: "Controlled",
    },
  },
  {
    name: "switch-07",
    type: "registry:component",
    title: "Switch Customization",
    description: "A customized switch component",
    dependencies: ["lucide-react", "radix-ui"],
    files: [
      {
        path: "src/components/customized/switch/switch-07.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "switch",
      title: "Customization",
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
    name: "table-02",
    type: "registry:component",
    title: "Bordered Table",
    description: "A bordered table component",
    registryDependencies: ["table"],
    files: [
      {
        path: "src/components/customized/table/table-02.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "table",
      title: "Bordered",
    },
  },
  {
    name: "table-03",
    type: "registry:component",
    title: "Striped Rows Table",
    description: "A table with striped rows",
    registryDependencies: ["table"],
    files: [
      {
        path: "src/components/customized/table/table-03.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "table",
      title: "Striped rows",
    },
  },
  {
    name: "table-04",
    type: "registry:component",
    title: "Rounded Corners Table",
    description: "A table with rounded corners",
    registryDependencies: ["table"],
    files: [
      {
        path: "src/components/customized/table/table-04.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "table",
      title: "Rounded corners",
    },
  },
  {
    name: "table-05",
    type: "registry:component",
    title: "Table with Pagination",
    description: "A table with pagination",
    registryDependencies: ["table", "pagination"],
    files: [
      {
        path: "src/components/customized/table/table-05.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "table",
      title: "With pagination",
    },
  },
  {
    name: "table-06",
    type: "registry:component",
    title: "Sticky Header Table",
    description: "A table with sticky header",
    registryDependencies: ["table"],
    files: [
      {
        path: "src/components/customized/table/table-06.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "table",
      title: "Sticky header",
    },
  },
  {
    name: "table-07",
    type: "registry:component",
    title: "Sticky Columns Table",
    description: "A table with sticky columns",
    registryDependencies: ["table"],
    files: [
      {
        path: "src/components/customized/table/table-07.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "table",
      title: "Sticky columns",
    },
  },
  {
    name: "table-08",
    type: "registry:component",
    title: "Overflow Scroll Table",
    description: "A table with overflow scroll",
    registryDependencies: ["table"],
    files: [
      {
        path: "src/components/customized/table/table-08.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "table",
      title: "Overflow scroll",
    },
  },
  {
    name: "table-09",
    type: "registry:component",
    title: "Data Table",
    description: "A data table component",
    dependencies: ["@tanstack/react-table", "lucide-react"],
    registryDependencies: [
      "table",
      "dropdown-menu",
      "input",
      "button",
      "checkbox",
    ],
    files: [
      {
        path: "src/components/customized/table/table-09.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "table",
      title: "Data Table",
    },
  },
  {
    name: "table-10",
    type: "registry:component",
    title: "Data Table Density",
    description: "A data table with density controls",
    dependencies: ["@tanstack/react-table", "lucide-react"],
    registryDependencies: [
      "table",
      "select",
      "button",
      "checkbox",
      "dropdown-menu",
    ],
    files: [
      {
        path: "src/components/customized/table/table-10.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "table",
      title: "Data Table Density",
    },
  },
  {
    name: "table-11",
    type: "registry:component",
    title: "Columns Visibility Table",
    description: "A table with columns visibility control",
    dependencies: ["@tanstack/react-table", "lucide-react"],
    registryDependencies: [
      "table",
      "button",
      "checkbox",
      "dropdown-menu",
      "input",
    ],
    files: [
      {
        path: "src/components/customized/table/table-11.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "table",
      title: "Columns Visibility",
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
    title: "Underlined Tabs",
    description: "Tabs with underlined style",
    dependencies: ["lucide-react"],
    registryDependencies: ["tabs", "button"],
    files: [
      {
        path: "src/components/customized/tabs/tabs-02.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "tabs",
      title: "Underlined",
    },
  },
  {
    name: "tabs-03",
    type: "registry:component",
    title: "Separated Tabs",
    description: "Tabs with separated style",
    dependencies: ["lucide-react"],
    registryDependencies: ["tabs", "button"],
    files: [
      {
        path: "src/components/customized/tabs/tabs-03.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "tabs",
      title: "Separated",
    },
  },
  {
    name: "tabs-04",
    type: "registry:component",
    title: "Bordered Tabs",
    description: "Tabs with bordered style",
    dependencies: ["lucide-react"],
    registryDependencies: ["tabs", "button"],
    files: [
      {
        path: "src/components/customized/tabs/tabs-04.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "tabs",
      title: "Bordered",
    },
  },
  {
    name: "tabs-05",
    type: "registry:component",
    title: "Box Tabs",
    description: "Tabs with box style",
    dependencies: ["lucide-react"],
    registryDependencies: ["tabs", "button"],
    files: [
      {
        path: "src/components/customized/tabs/tabs-05.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "tabs",
      title: "Box",
    },
  },
  {
    name: "tabs-06",
    type: "registry:component",
    title: "Bootstrap Tabs",
    description: "Tabs with bootstrap style",
    dependencies: ["lucide-react"],
    registryDependencies: ["tabs", "button"],
    files: [
      {
        path: "src/components/customized/tabs/tabs-06.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "tabs",
      title: "Bootstrap",
    },
  },
  {
    name: "tabs-07",
    type: "registry:component",
    title: "Icon Tabs",
    description: "Tabs with icons",
    dependencies: ["lucide-react"],
    registryDependencies: ["tabs", "button"],
    files: [
      {
        path: "src/components/customized/tabs/tabs-07.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "tabs",
      title: "Icon",
    },
  },
  {
    name: "tabs-08",
    type: "registry:component",
    title: "Mobile Navigation Tabs",
    description: "Tabs designed for mobile navigation",
    registryDependencies: ["tabs"],
    files: [
      {
        path: "src/components/customized/tabs/tabs-08.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "tabs",
      title: "Mobile Navigation",
    },
  },
  {
    name: "tabs-09",
    type: "registry:component",
    title: "Tabs with Badge",
    description: "Tabs with badge indicators",
    dependencies: ["lucide-react"],
    registryDependencies: ["tabs", "button", "badge"],
    files: [
      {
        path: "src/components/customized/tabs/tabs-09.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "tabs",
      title: "With badge",
    },
  },
  {
    name: "tabs-10",
    type: "registry:component",
    title: "Sharp Tabs",
    description: "Tabs with sharp corners",
    dependencies: ["lucide-react"],
    registryDependencies: ["tabs", "button"],
    files: [
      {
        path: "src/components/customized/tabs/tabs-10.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "tabs",
      title: "Sharp",
    },
  },
  {
    name: "tabs-11",
    type: "registry:component",
    title: "Shadow Tabs",
    description: "Tabs with shadow effect",
    dependencies: ["lucide-react"],
    registryDependencies: ["tabs", "button"],
    files: [
      {
        path: "src/components/customized/tabs/tabs-11.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "tabs",
      title: "Shadow",
    },
  },
  {
    name: "tabs-12",
    type: "registry:component",
    title: "Skewed Tabs",
    description: "Tabs with skewed shape",
    dependencies: ["lucide-react"],
    registryDependencies: ["tabs", "button"],
    files: [
      {
        path: "src/components/customized/tabs/tabs-12.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "tabs",
      title: "Skewed",
    },
  },
  {
    name: "tabs-13",
    type: "registry:component",
    title: "Vertical Tabs",
    description: "Tabs with vertical orientation",
    registryDependencies: ["tabs"],
    files: [
      {
        path: "src/components/customized/tabs/tabs-13.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "tabs",
      title: "Vertical",
    },
  },
  {
    name: "tabs-14",
    type: "registry:component",
    title: "Vertical Left Bordered Tabs",
    description: "Vertical tabs with left border",
    dependencies: ["lucide-react"],
    registryDependencies: ["tabs"],
    files: [
      {
        path: "src/components/customized/tabs/tabs-14.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "tabs",
      title: "Vertical Left Bordered",
    },
  },
  {
    name: "tabs-15",
    type: "registry:component",
    title: "Vertical Separated Tabs",
    description: "Vertical tabs with separated style",
    dependencies: ["lucide-react"],
    registryDependencies: ["tabs"],
    files: [
      {
        path: "src/components/customized/tabs/tabs-15.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "tabs",
      title: "Vertical Separated",
    },
  },
  {
    name: "tabs-16",
    type: "registry:component",
    title: "Vertical Sharp Tabs",
    description: "Vertical tabs with sharp corners",
    dependencies: ["lucide-react"],
    registryDependencies: ["tabs"],
    files: [
      {
        path: "src/components/customized/tabs/tabs-16.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "tabs",
      title: "Vertical Sharp",
    },
  },
  {
    name: "tabs-17",
    type: "registry:component",
    title: "Vertical Bordered Tabs",
    description: "Vertical tabs with borders",
    dependencies: ["lucide-react"],
    registryDependencies: ["tabs"],
    files: [
      {
        path: "src/components/customized/tabs/tabs-17.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "tabs",
      title: "Vertical Bordered",
    },
  },
  {
    name: "tabs-18",
    type: "registry:component",
    title: "Animated Tabs",
    description: "Tabs with content animation",
    dependencies: ["lucide-react", "framer-motion"],
    registryDependencies: ["tabs", "button"],
    files: [
      {
        path: "src/components/customized/tabs/tabs-18.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "tabs",
      title: "Animated Content",
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
    title: "Textarea with Background Color",
    description: "A textarea component with background color",
    registryDependencies: ["textarea"],
    files: [
      {
        path: "src/components/customized/textarea/textarea-02.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "textarea",
      title: "With background",
    },
  },
  {
    name: "textarea-03",
    type: "registry:component",
    title: "Disabled Textarea",
    description: "A disabled textarea component",
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
    title: "Textarea with Label",
    description: "A textarea component with a label",
    registryDependencies: ["textarea", "label"],
    files: [
      {
        path: "src/components/customized/textarea/textarea-04.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "textarea",
      title: "With label",
    },
  },
  {
    name: "textarea-05",
    type: "registry:component",
    title: "Textarea with Rows",
    description: "A textarea component with custom rows",
    registryDependencies: ["textarea"],
    files: [
      {
        path: "src/components/customized/textarea/textarea-05.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "textarea",
      title: "Rows",
    },
  },
  {
    name: "textarea-06",
    type: "registry:component",
    title: "Textarea with Helper Text",
    description: "A textarea component with helper text",
    registryDependencies: ["textarea", "label"],
    files: [
      {
        path: "src/components/customized/textarea/textarea-06.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "textarea",
      title: "With helper text",
    },
  },
  {
    name: "textarea-07",
    type: "registry:component",
    title: "Controlled Textarea",
    description: "A controlled textarea component",
    registryDependencies: ["textarea"],
    files: [
      {
        path: "src/components/customized/textarea/textarea-07.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "textarea",
      title: "Controlled",
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
    title: "Tooltip with Arrow",
    description: "A tooltip component with an arrow",
    registryDependencies: ["tooltip", "button"],
    files: [
      {
        path: "src/components/customized/tooltip/tooltip-02.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "tooltip",
      title: "With arrow",
    },
  },
  {
    name: "tooltip-07",
    type: "registry:component",
    title: "Tooltip Portal",
    description: "A tooltip component using portal for rendering",
    registryDependencies: ["tooltip", "button"],
    files: [
      {
        path: "src/components/customized/tooltip/tooltip-07.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "tooltip",
      title: "Portal",
      description: "When used, portals the content part into the body.",
    },
  },
  {
    name: "tooltip-03",
    type: "registry:component",
    title: "Tooltip Directions",
    description: "A tooltip component with different directions",
    registryDependencies: ["tooltip", "button"],
    files: [
      {
        path: "src/components/customized/tooltip/tooltip-03.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "tooltip",
      title: "Directions",
    },
  },
  {
    name: "tooltip-05",
    type: "registry:component",
    title: "Tooltip with Delay",
    description: "A tooltip component with delay settings",
    registryDependencies: ["tooltip", "button", "input", "label"],
    files: [
      {
        path: "src/components/customized/tooltip/tooltip-05.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "tooltip",
      title: "With delay",
    },
  },
  {
    name: "tooltip-06",
    type: "registry:component",
    title: "Tooltip with Skip Delay Duration",
    description: "A tooltip component with skip delay duration settings",
    registryDependencies: ["tooltip", "button", "input", "label"],
    files: [
      {
        path: "src/components/customized/tooltip/tooltip-06.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "tooltip",
      title: "With skip delay",
      description:
        "How much time a user has to enter another trigger without incurring a delay again.",
    },
  },
  {
    name: "tooltip-04",
    type: "registry:component",
    title: "Tooltip with Disabled Hoverable Content",
    description: "A tooltip component with disabled hoverable content",
    registryDependencies: ["tooltip", "button"],
    files: [
      {
        path: "src/components/customized/tooltip/tooltip-04.tsx",
        type: "registry:component",
      },
    ],
    site: {
      group: "tooltip",
      title: "Disable Hoverable Content",
      description:
        "Prevents TooltipContent from remaining open when hovering. Disabling this has accessibility consequences.",
    },
  },
] as const satisfies readonly ComponentCatalogEntry[];
