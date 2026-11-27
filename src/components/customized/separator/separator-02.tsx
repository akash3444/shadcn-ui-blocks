import { Separator } from "@/registry/ui/separator";

const links = [
  { label: "Blog", href: "#blog" },
  { label: "Docs", href: "#docs" },
  { label: "Changelog", href: "#changelog" },
  { label: "Source", href: "#source" },
];

export default function SeparatorVerticalDemo() {
  return (
    <nav aria-label="Resources" className="flex h-5 items-center gap-4 text-sm">
      {links.map((link, index) => (
        <div className="flex h-full items-center gap-4" key={link.label}>
          {index > 0 && <Separator orientation="vertical" />}
          <a
            className="text-muted-foreground hover:text-foreground"
            href={link.href}
          >
            {link.label}
          </a>
        </div>
      ))}
    </nav>
  );
}
