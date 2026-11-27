import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/ui/input-group";
import { Spinner } from "@/registry/ui/spinner";

const SpinnerInputGroupDemo = () => (
  <div className="flex w-full max-w-xs flex-col gap-4">
    <InputGroup>
      <InputGroupInput aria-label="Search" placeholder="Searching..." />
      <InputGroupAddon align="inline-end">
        <Spinner />
      </InputGroupAddon>
    </InputGroup>
    <InputGroup>
      <InputGroupInput aria-label="Username" defaultValue="calm-ui" />
      <InputGroupAddon align="inline-end">
        <Spinner />
        Checking
      </InputGroupAddon>
    </InputGroup>
  </div>
);

export default SpinnerInputGroupDemo;
