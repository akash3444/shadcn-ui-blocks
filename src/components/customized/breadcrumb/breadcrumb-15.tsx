import { Package, ShoppingCart, Store, Truck } from "lucide-react";
import { Fragment } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/registry/ui/breadcrumb";

const steps = [
  {
    label: "Store",
    href: "#/store",
    icon: Store,
  },
  {
    label: "Delivery Tracking",
    href: "#/delivery-tracking",
    icon: Truck,
  },
  {
    label: "Cart",
    href: "#/cart",
    icon: ShoppingCart,
  },
  {
    label: "Package",
    href: "#/package",
    icon: Package,
    active: true,
  },
];

const BreadcrumbsSteps = () => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {steps.map((step, index) => (
          <Fragment key={index}>
            <BreadcrumbItem>
              {step.active ? (
                <BreadcrumbPage>
                  <step.icon className="h-5 w-5" />
                </BreadcrumbPage>
              ) : (
                <BreadcrumbLink href={step.href}>
                  <step.icon className="h-5 w-5" />
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
            {index !== steps.length - 1 && (
              <li
                aria-hidden="true"
                className="inline-block h-[2px] w-[40px] bg-muted"
                role="presentation"
              />
            )}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbsSteps;
