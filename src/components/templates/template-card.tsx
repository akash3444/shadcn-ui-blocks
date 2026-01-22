import { Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Template } from "@/description/templates";
import { GithubLogo } from "../ui/icons";
import GithubStarsAndForks from "./github-stars-and-forks";

const TemplateCard = ({ template }: { template: Template }) => {
  return (
    <div
      className="overflow-hidden rounded-lg border bg-accent/30"
      key={template.slug}
    >
      <div className="relative aspect-square w-full">
        <Image
          alt={template.name}
          className="object-cover object-top transition-all duration-1000 ease-in-out hover:object-bottom"
          fill
          src={template.image}
        />
      </div>
      <div className="border-t p-4 pb-6">
        <h3 className="font-semibold text-xl">{template.name}</h3>
        <p className="mt-2 text-muted-foreground">{template.description}</p>
        <div className="mt-4">
          <GithubStarsAndForks repo={template.repo} />
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Button asChild>
              <Link href={template.url} target="_blank">
                Live Preview <Eye />
              </Link>
            </Button>
            <Button asChild>
              <Link
                href={`https://github.com/${template.repo}`}
                target="_blank"
              >
                Github <GithubLogo />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateCard;
