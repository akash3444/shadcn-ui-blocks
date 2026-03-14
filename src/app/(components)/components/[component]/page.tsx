import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ComponentPreview } from "@/app/(components)/components/component-preview";
import { DescriptionText, MainHeading } from "@/components/typography";
import { componentsMap } from "@/description/app-sidebar";
import { constructMetadata } from "@/lib/metadata";
import { generateOgImageUrl } from "@/lib/og";
import { absoluteUrl } from "@/lib/utils";

export const dynamicParams = false;

export const generateStaticParams = async () => {
  return Object.keys(componentsMap).map((component) => ({
    component,
  }));
};

export const generateMetadata = async (props: {
  params: Promise<{ component: string }>;
}) => {
  const params = await props.params;
  const details = componentsMap[params.component as keyof typeof componentsMap];

  if (!details) {
    return {};
  }

  const title = `Customized Shadcn UI ${details.title} components`;
  const description = `Explore a curated collection of customized Shadcn UI ${details.title} components. Preview, customize, and copy ready-to-use code snippets to streamline your web development workflow.`;

  return constructMetadata({
    title,
    description,
    openGraph: {
      images: [
        {
          url: generateOgImageUrl({
            title,
            type: "Component",
          }),
          width: 1200,
          height: 630,
          alt: "Customized Shadcn UI Components",
        },
      ],
    },
    alternates: {
      canonical: absoluteUrl(`/components/${params.component}`),
    },
  });
};

const CustomizedComponentPage = async (props: {
  params: Promise<{ component: string }>;
}) => {
  const params = await props.params;
  const { component } = params;

  const details = componentsMap[component as keyof typeof componentsMap];

  if (!details) {
    return notFound();
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <MainHeading>{details.title}</MainHeading>
        <DescriptionText className="mt-2">{details.description}</DescriptionText>
      </div>

      <Suspense fallback={<div className="min-h-[600px] animate-pulse rounded-lg border bg-muted/50" />}>
        <ComponentPreview />
      </Suspense>
    </div>
  );
};

export default CustomizedComponentPage;
