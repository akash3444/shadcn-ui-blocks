import { Fragment } from "react";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/registry/ui/breadcrumb";
import { Button } from "@/registry/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/ui/dropdown-menu";

const middlePages = [
  { label: "Documentation", href: "#/docs" },
  { label: "Components", href: "#/docs/components" },
];

const BreadcrumbResponsiveDemo = () => (
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger
            render={<Button aria-label="Show path" size="icon-sm" variant="ghost" />}
          >
            <BreadcrumbEllipsis />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-40">
            {middlePages.map((page) => (
              <DropdownMenuItem key={page.href} render={<a href={page.href} />}>
                {page.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </BreadcrumbItem>
      <BreadcrumbSeparator className="md:hidden" />
      {middlePages.map((page) => (
        <Fragment key={page.href}>
          <BreadcrumbItem className="hidden md:inline-flex">
            <BreadcrumbLink href={page.href}>{page.label}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="hidden md:inline-flex" />
        </Fragment>
      ))}
      <BreadcrumbItem>
        <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
);

export default BreadcrumbResponsiveDemo;
