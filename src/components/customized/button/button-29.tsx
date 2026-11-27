import { Button } from "@/registry/ui/button";
import { ButtonGroup } from "@/registry/ui/button-group";

const ButtonGroupDemo = () => (
  <ButtonGroup aria-label="Message actions">
    <Button variant="outline">Archive</Button>
    <Button variant="outline">Report</Button>
    <Button variant="outline">Snooze</Button>
  </ButtonGroup>
);

export default ButtonGroupDemo;
