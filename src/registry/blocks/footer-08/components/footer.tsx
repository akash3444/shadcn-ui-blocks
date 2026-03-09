import { Dribbble, Github, TwitterIcon } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const links = [
  {
    title: "About",
    href: "/#about",
  },
  {
    title: "Contact",
    href: "/#contact",
  },
  {
    title: "Terms of Service",
    href: "/#terms",
  },
  {
    title: "Privacy Policy",
    href: "/#privacy",
  },
];

const Footer = () => {
  return (
    <footer className="border-t bg-background px-6 py-2">
      <div className="mx-auto max-w-screen-xl">
        <div className="flex flex-col items-center justify-start py-12">
          {/* Logo */}
          <span className="font-bold text-2xl">Bloxxee</span>

          <ul className="mt-6 flex flex-wrap items-center gap-4">
            {links.map(({ title, href }) => (
              <li key={title}>
                <Link
                  className="font-medium text-muted-foreground hover:text-foreground"
                  href={href}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Separator />
        <div className="flex flex-col-reverse items-center justify-between gap-x-2 gap-y-5 px-6 pt-6 pb-4 sm:flex-row xl:px-0">
          {/* Copyright */}
          <span className="text-muted-foreground tracking-[0.01em]">
            &copy; {new Date().getFullYear()}{" "}
            <Link href="/" target="_blank">
              Bloxxee
            </Link>
            . All rights reserved.
          </span>

          <div className="flex items-center gap-5 text-muted-foreground">
            <Link href="#" target="_blank">
              <TwitterIcon className="h-5 w-5" />
            </Link>
            <Link href="#" target="_blank">
              <Dribbble className="h-5 w-5" />
            </Link>
            <Link href="#" target="_blank">
              <Github className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
