import { Dribbble, Github, Twitter, Wheat } from "lucide-react";
import Link from "next/link";

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
      <div className="mx-auto w-full max-w-screen-2xl divide-y">
        <div className="flex flex-col items-center justify-between gap-4 px-2 pt-3 pb-5 sm:flex-row">
          <Link className="flex items-center gap-2" href="/">
            <Wheat />
            <span className="font-bold text-xl">Bloxxee</span>
          </Link>

          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-medium text-sm">
            {links.map(({ title, href }) => (
              <li key={title}>
                <Link href={href}>{title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col-reverse items-center justify-between gap-4 px-2 pt-4 pb-2 sm:flex-row">
          <p className="font-medium text-muted-foreground text-sm">
            Copyright &copy; {new Date().getFullYear()} Bloxxee. All rights
            reserved.
          </p>

          <div className="flex items-center gap-4">
            <Link href="/">
              <Dribbble className="h-5 w-5 text-muted-foreground" />
            </Link>
            <Link href="/">
              <Twitter className="h-5 w-5 text-muted-foreground" />
            </Link>
            <Link href="/">
              <Github className="h-5 w-5 text-muted-foreground" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
