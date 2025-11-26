import { Textarea } from "@/registry/ui/textarea";

export default function TextareaWithBackgroundColorDemo() {
  return (
    <Textarea
      placeholder="Type your message here."
      className="bg-muted shadow-none"
    />
  );
}
