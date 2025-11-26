import { Label } from "@/registry/ui/label";
import { Textarea } from "@/registry/ui/textarea";

export default function TextareaWithHelperTextDemo() {
  return (
    <div className="w-full flex flex-col gap-2">
      <Label htmlFor="message">Message</Label>
      <Textarea id="message" placeholder="Type your message here." />
      <p className="text-sm text-muted-foreground">
        Your message will be copied to the support team.
      </p>
    </div>
  );
}
