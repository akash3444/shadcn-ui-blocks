import { Button } from "@/registry/ui/button";
import { ButtonGroup, ButtonGroupSeparator } from "@/registry/ui/button-group";

const GroupButtonDemo = () => (
  <ButtonGroup>
    <Button variant="secondary">Left</Button>
    <ButtonGroupSeparator />
    <Button variant="secondary">Middle</Button>
    <ButtonGroupSeparator />
    <Button variant="secondary">Right</Button>
  </ButtonGroup>
);

export default GroupButtonDemo;
