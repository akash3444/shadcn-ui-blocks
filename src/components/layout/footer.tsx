import Link from "next/link";
import { blockCategories } from "@/blocks";
import { Separator } from "@/components/ui/separator";
import { config } from "@/config";
import { components } from "@/description/app-sidebar";
import { capitalize } from "@/lib/utils";
import { Logo } from "../logo";
import { GithubLogo, TwitterLogo } from "../ui/icons";

const footerSections = [
  {
    title: "Components",
    links: components.slice(0, components.length / 2).map(({ title, url }) => ({
      title,
      href: url,
    })),
  },
  {
    title: "Components",
    links: components.slice(components.length / 2).map(({ title, url }) => ({
      title,
      href: url,
    })),
  },
  {
    title: "Blocks",
    links: blockCategories.map(({ name }) => ({
      title: `${capitalize(name)} section`,
      href: `/blocks/categories/${name}`,
    })),
  },
  {
    className: "col-span-full xl:col-span-2",
    title: "Products",
    links: [
      {
        title: "Shadcn UI Blocks Pro",
        href: "https://pro.shadcnui-blocks.com/",
      },
      {
        title: "basecn",
        href: "https://basecn.dev/",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="border-t bg-muted/50">
      <div className="mx-auto max-w-(--breakpoint-xl)">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 px-6 py-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 xl:px-0">
          <div className="col-span-full lg:col-span-2">
            {/* Logo */}
            <Link className="flex items-center gap-2.5" href="/">
              <Logo />
              <span className="font-semibold text-lg tracking-tight">
                Shadcn UI Blocks
              </span>
            </Link>

            <p className="mt-4 text-muted-foreground">
              A collection of customized Shadcn UI blocks and components, ready
              for preview and copy.
            </p>
          </div>

          {footerSections.map(({ title, links, className }, index) => (
            <div className={className} key={index}>
              <h6 className="font-semibold">{title}</h6>
              <ul className="mt-6 space-y-4">
                {links.map(({ title, href }) => (
                  <li key={title}>
                    <Link
                      className="text-muted-foreground hover:text-foreground"
                      href={href}
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Separator />
        <div className="flex flex-col-reverse items-center justify-between gap-x-2 gap-y-5 px-6 py-8 sm:flex-row xl:px-0">
          {/* Copyright */}
          <span className="text-muted-foreground">
            &copy; {new Date().getFullYear()}{" "}
            <Link href="/" target="_blank">
              Shadcn UI Blocks
            </Link>
            . All rights reserved.
          </span>

          <div className="flex items-center gap-5 text-muted-foreground">
            <Link href={config.social.github} target="_blank">
              <GithubLogo className="h-5 w-5" />
            </Link>
            <Link href={config.social.twitter} target="_blank">
              <TwitterLogo className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
