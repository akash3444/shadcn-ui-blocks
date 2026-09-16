import { Eye } from "lucide-react";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import type { Template } from "@/description/templates";
import { GithubLogo } from "../ui/icons";
import GithubStarsAndForks from "./github-stars-and-forks";
import TemplatePreview from "./template-preview";

const TemplateCard = ({
  eager,
  template,
}: {
  eager: boolean;
  template: Template;
}) => {
  return (
    <article className="w-full rounded-2xl bg-muted p-1 pt-0">
      <div className="flex flex-col flex-wrap justify-between gap-x-4 gap-y-2 py-2 ps-2.5 pe-1 md:flex-row md:items-center">
        <h2 className="font-semibold text-lg">{template.name}</h2>
        <div className="flex flex-wrap items-center gap-4 max-sm:justify-between">
          <GithubStarsAndForks repo={template.repo} />
          <div className="flex items-center gap-1.5">
            <Link
              className={buttonVariants()}
              href={template.url}
              rel="noreferrer"
              target="_blank"
            >
              Live Preview <Eye data-icon="inline-end" />
            </Link>
            <Button
              nativeButton={false}
              render={
                <Link
                  href={`https://github.com/${template.repo}`}
                  rel="noreferrer"
                  target="_blank"
                />
              }
              variant="outline"
            >
              GitHub <GithubLogo data-icon="inline-end" />
            </Button>
          </div>
        </div>
      </div>
      <TemplatePreview eager={eager} template={template} />
    </article>
  );
};

export default TemplateCard;
