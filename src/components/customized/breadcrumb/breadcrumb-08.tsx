import { IconPlaceholder } from "@/components/icon-placeholder";
import { getIconProps } from "@/lib/icon-map";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/registry/ui/breadcrumb";

const BreadcrumbsSteps = () => {
  return (
    <Breadcrumb>
      <BreadcrumbList className="gap-5!">
        <BreadcrumbItem>
          <BreadcrumbLink href="#">
            <div className="flex flex-col items-center gap-1">
              <IconPlaceholder {...getIconProps("Home")} className="h-4 w-4" />
              Home
            </div>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <IconPlaceholder {...getIconProps("ChevronsRight")} />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="#/components">
            <div className="flex flex-col items-center gap-1">
              <IconPlaceholder {...getIconProps("Component")} className="h-4 w-4" />
              Components
            </div>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <IconPlaceholder {...getIconProps("ChevronsRight")} />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>
            <div className="flex flex-col items-center gap-1">
              <IconPlaceholder {...getIconProps("Route")} className="h-4 w-4" />
              Breadcrumb
            </div>
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbsSteps;
