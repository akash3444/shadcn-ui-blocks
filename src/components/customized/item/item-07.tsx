import {
  BellIcon,
  ChevronRightIcon,
  CreditCardIcon,
  UserIcon,
} from "lucide-react";
import { Fragment } from "react";

import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/registry/ui/item";

const settings = [
  {
    id: "profile",
    title: "Profile",
    description: "Name, photo and public details",
    icon: UserIcon,
  },
  {
    id: "notifications",
    title: "Notifications",
    description: "Email, push and in-app alerts",
    icon: BellIcon,
  },
  {
    id: "billing",
    title: "Billing",
    description: "Plan, payment method and invoices",
    icon: CreditCardIcon,
  },
];

export default function ItemGroupDemo() {
  return (
    <ItemGroup className="w-full max-w-md gap-0">
      {settings.map((setting, index) => (
        <Fragment key={setting.id}>
          {index > 0 && <ItemSeparator className="my-1" />}
          <Item render={<a href={`#${setting.id}`} />}>
            <ItemMedia variant="icon">
              <setting.icon />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>{setting.title}</ItemTitle>
              <ItemDescription>{setting.description}</ItemDescription>
            </ItemContent>
            <ItemActions>
              <ChevronRightIcon className="size-4 text-muted-foreground" />
            </ItemActions>
          </Item>
        </Fragment>
      ))}
    </ItemGroup>
  );
}
