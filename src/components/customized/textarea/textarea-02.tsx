import { Textarea } from "@/registry/ui/textarea";

export default function TextareaWithBackgroundColorDemo() {
  return (
    <Textarea
      className="bg-muted shadow-none"
      placeholder="Type your message here."
    />
  );
}
