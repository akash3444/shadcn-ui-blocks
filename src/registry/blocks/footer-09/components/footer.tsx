import { Wheat } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const sections = [
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
    title: "Resources",
    links: [
      { title: "Docs", href: "/#docs" },
      { title: "Help Center", href: "/#help" },
      { title: "Community", href: "/#community" },
      { title: "Tutorials", href: "/#tutorials" },
      { title: "Status", href: "/#status" },
    ],
  },
  {
    title: "Legal",
    links: [
      { title: "Privacy Policy", href: "/#privacy" },
      { title: "Terms of Service", href: "/#terms" },
      { title: "Cookie Policy", href: "/#cookies" },
      { title: "Security", href: "/#security" },
      { title: "Licenses", href: "/#licenses" },
    ],
  },
  {
    title: "Social",
    links: [
      { title: "Twitter", href: "https://twitter.com" },
      { title: "LinkedIn", href: "https://linkedin.com" },
      { title: "GitHub", href: "https://github.com" },
      { title: "Discord", href: "https://discord.com" },
      { title: "YouTube", href: "https://youtube.com" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="border-t bg-background px-6 py-2">
      <div className="mx-auto max-w-screen-xl">
        <div className="grid grid-cols-2 gap-12 py-12 md:grid-cols-3 lg:grid-cols-5">
          {sections.map(({ title, links }) => (
            <div key={title}>
              <h3 className="font-semibold text-lg">{title}</h3>
              <ul className="mt-4 flex flex-col gap-2">
                {links.map(({ title, href }) => (
                  <li key={title}>
                    <Link href={href}>{title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Separator />
        <div className="flex flex-col items-center justify-center gap-4 px-2 pt-6 pb-4 sm:flex-row sm:justify-between">
          <Link className="flex items-center gap-2" href="/">
            <Wheat />
            <span className="font-bold text-xl">Bloxxee</span>
          </Link>
          <p className="font-medium text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Bloxxee. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
