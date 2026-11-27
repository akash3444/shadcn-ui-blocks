import { ArrowRightIcon, DownloadIcon, MailIcon } from "lucide-react";
import { Button } from "@/registry/ui/button";

const ButtonWithIconDemo = () => (
  <div className="flex flex-wrap items-center gap-2">
    <Button>
      <MailIcon data-icon="inline-start" /> Login with Email
    </Button>
    <Button variant="outline">
      <DownloadIcon data-icon="inline-start" /> Download
    </Button>
    <Button variant="secondary">
      Continue <ArrowRightIcon data-icon="inline-end" />
    </Button>
  </div>
);

export default ButtonWithIconDemo;
