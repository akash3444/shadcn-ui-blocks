import { CustomizedComponentsFAQ } from "@/components/customized/customized-components-faq";
import { MainHeading, SubHeading } from "@/components/typography";
import { constructMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/utils";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = constructMetadata({
  title: "Introduction to Customized Shadcn UI Components",
  description:
    "Customized Shadcn UI components are pre-designed components that you can preview, copy, and implement directly into your projects.",
  alternates: {
    canonical: absoluteUrl("/components/introduction"),
  },
});

const Introduction = () => {
  return (
    <div>
      <div className="prose prose-headings:text-foreground prose-p:text-foreground/80 prose-h2:mb-4 prose-strong:text-foreground prose-p:text-[17px] prose-h2:text-2xl prose-blockquote:text-foreground prose-blockquote:not-italic prose-blockquote:bg-primary/5 prose-blockquote:p-3 prose-blockquote:border-l-primary/20! prose-blockquote:rounded">
        <MainHeading>Introduction</MainHeading>
        <p>
          Welcome to our collection of customized Shadcn UI components—designed
          to bring flexibility, style, and ease to your projects.
        </p>
        <p>
          <strong>
            This is neither a component library nor an alternative to Shadcn UI.
          </strong>{" "}
          It&apos;s a collection of customized components that you can preview,
          copy and paste into your apps.
        </p>
        <SubHeading>Why Shadcn UI customized components?</SubHeading>
        <p>
          Shadcn UI is a powerful design system offering reusable components and
          utilities to build cohesive designs. However, its many customization
          options can sometimes feel overwhelming. That&apos;s why we created
          this a list of pre-customized components, enabling you to preview,
          copy, and implement them directly.
        </p>
        <blockquote>
          Shadcn UI Blocks complements Shadcn UI by providing ready-made,
          customizable components that maintain the flexibility of Shadcn
          UI&apos;s design system while extending its possibilities.
        </blockquote>
      </div>

      <div className="mt-12 max-w-prose">
        <CustomizedComponentsFAQ />
      </div>
    </div>
  );
};

export default Introduction;
