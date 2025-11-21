import { Label } from "@/registry/ui/label";
import { Textarea } from "@/registry/ui/textarea";

export default function TextareaWithLabelDemo() {
  return (
    <div className="w-full flex flex-col gap-2">
      <Label htmlFor="message">Message</Label>
      <Textarea id="message" placeholder="Type your message here." />
    </div>
  );
}
