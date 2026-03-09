import { Wheat } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between border-t bg-background px-6 py-4">
      <Link className="flex items-center gap-2" href="/">
        <Wheat />
        <span className="font-bold text-xl">Bloxxee</span>
      </Link>

      <p className="font-medium text-muted-foreground text-sm">
        Copyright &copy; {new Date().getFullYear()} Bloxxee. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
