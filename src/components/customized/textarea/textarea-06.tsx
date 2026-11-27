import { ArrowUpIcon } from "lucide-react";
import { Field, FieldLabel } from "@/registry/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "@/registry/ui/input-group";

export default function TextareaWithButtonDemo() {
  return (
    <Field className="max-w-sm">
      <FieldLabel htmlFor="textarea-comment">Comment</FieldLabel>
      <InputGroup>
        <InputGroupTextarea
          id="textarea-comment"
          placeholder="Add a comment..."
        />
        <InputGroupAddon align="block-end">
          <InputGroupButton className="ml-auto" size="sm" variant="default">
            Post
            <ArrowUpIcon />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </Field>
  );
}
