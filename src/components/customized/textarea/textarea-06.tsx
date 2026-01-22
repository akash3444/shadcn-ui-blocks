import { Label } from "@/registry/ui/label";
import { Textarea } from "@/registry/ui/textarea";

export default function TextareaWithHelperTextDemo() {
  return (
    <div className="flex w-full flex-col gap-2">
      <Label htmlFor="message">Message</Label>
      <Textarea id="message" placeholder="Type your message here." />
      <p className="text-muted-foreground text-sm">
        Your message will be copied to the support team.
      </p>
    </div>
  );
}
