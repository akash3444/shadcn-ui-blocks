import { notFound } from "next/navigation";
import ComponentBlock from "@/components/component-block";
import { DescriptionText, MainHeading } from "@/components/typography";
import { componentsMap } from "@/description/app-sidebar";
import { customizedComponents } from "@/description/customized-components";
import { constructMetadata } from "@/lib/metadata";
import { generateOgImageUrl } from "@/lib/og";
import { absoluteUrl, cn } from "@/lib/utils";

export const dynamicParams = false;

const formatPatternCount = (count: number) =>
  `${count} ${count === 1 ? "pattern" : "patterns"}`;

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
    notFound();
  }

  const patterns =
    customizedComponents[
      params.component as keyof typeof customizedComponents
    ] || [];
  const patternCount = formatPatternCount(patterns.length);

  const title = `${patternCount} for the shadcn/ui ${details.title} component`;
  const description = `Browse ${patternCount} built on the shadcn/ui ${details.title} component. Preview each pattern and copy the code into your project.`;

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
          alt: title,
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
  const patterns =
    customizedComponents[component as keyof typeof customizedComponents] || [];

  if (!details) {
    return notFound();
  }

  return (
    <div>
      <MainHeading className="mt-2">{details.title}</MainHeading>
      <DescriptionText className="mt-1.5">
        {details.description}
      </DescriptionText>

      <div
        className={cn(
          "mt-8 grid gap-4",
          {
            "lg:grid-cols-2": details.columns === 2,
            "sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3":
              details.columns === 3,
          },
          details.className
        )}
      >
        {patterns.map((pattern, index) => (
          <ComponentBlock
            index={index}
            key={`${pattern.title}-${index}`}
            {...pattern}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomizedComponentPage;
