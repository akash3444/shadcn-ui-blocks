import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ChevronsRight, Component, Home, Route } from "lucide-react";

const BreadcrumbsSteps = () => {
  return (
    <Breadcrumb>
      <BreadcrumbList className="gap-5!">
        <BreadcrumbItem>
          <BreadcrumbLink href="#">
            <div className="flex flex-col items-center gap-1">
              <Home className="h-4 w-4" />
              Home
            </div>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronsRight />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="#/components">
            <div className="flex flex-col items-center gap-1">
              <Component className="h-4 w-4" />
              Components
            </div>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronsRight />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>
            <div className="flex flex-col items-center gap-1">
              <Route className="h-4 w-4" />
              Breadcrumb
            </div>
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbsSteps;
