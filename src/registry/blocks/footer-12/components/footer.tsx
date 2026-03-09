import { Dribbble, Github, Twitter, Wheat } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const sections = [
  {
    title: "Product",
    links: [
      { title: "Features", href: "/#features" },
      { title: "Pricing", href: "/#pricing" },
      { title: "Integrations", href: "/#integrations" },
      { title: "Demo", href: "/#demo" },
      { title: "FAQs", href: "/#faqs" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About", href: "/#about" },
      { title: "Careers", href: "/#careers" },
      { title: "Blog", href: "/#blog" },
      { title: "Press", href: "/#press" },
      { title: "Contact", href: "/#contact" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="border-t bg-background px-6 py-2">
      <div className="mx-auto max-w-screen-xl">
        <div className="pt-8 pb-12">
          <div className="mt-10 grid grid-cols-2 gap-12 sm:grid-cols-4 lg:grid-cols-6">
            <div className="col-span-full lg:col-span-2">
              <Link className="inline-flex items-center gap-2" href="/">
                <Wheat />
                <span className="font-bold text-2xl">Bloxxee</span>
              </Link>
              <p className="mt-1.5 text-muted-foreground">
                Beautify your website with our free and premium blocks.
              </p>
            </div>

            {sections.map(({ title, links }) => (
              <div key={title}>
                <h3 className="font-semibold text-lg">{title}</h3>
                <ul className="mt-4 flex flex-col gap-2">
                  {links.map(({ title, href }) => (
                    <li key={title}>
                      <Link className="hover:text-primary" href={href}>
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Newsletter sign up */}
            <div className="col-span-2 w-full">
              <p>
                Sign up to our newsletter and get all of the latest news and
                updates.
              </p>
              <div className="mt-4 flex flex-col gap-x-2 gap-y-3 sm:flex-row">
                <Input placeholder="Your email" />
                <Button className="h-10 rounded-lg">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
        <Separator />
        <div className="flex flex-col-reverse items-center justify-center gap-6 px-2 pt-6 pb-4 sm:flex-row sm:justify-between">
          <p className="font-medium text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Bloxxee. All rights reserved.
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
