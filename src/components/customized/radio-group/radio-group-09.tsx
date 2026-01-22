import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/ui/card";
import { Label } from "@/registry/ui/label";
import { RadioGroup, RadioGroupItem } from "@/registry/ui/radio-group";

const RadioCardsDemo = () => {
  return (
    <Card className="max-w-xs shadow-xs">
      <CardHeader>
        <CardTitle>Plan Options</CardTitle>
        <CardDescription>
          Select your preferred subscription plan
        </CardDescription>
      </CardHeader>
      <CardContent>
        <RadioGroup defaultValue="standard">
          <div className="mb-4 flex items-start space-x-2">
            <RadioGroupItem id="free" value="free" />
            <Label className="flex flex-col items-start" htmlFor="free">
              <span className="font-semibold">Free</span>
              <span className="text-muted-foreground text-sm">
                Basic features, no cost
              </span>
            </Label>
          </div>
          <div className="mb-4 flex items-start space-x-2">
            <RadioGroupItem id="standard" value="standard" />
            <Label className="flex flex-col items-start" htmlFor="standard">
              <span className="font-semibold">Standard</span>
              <span className="text-muted-foreground text-sm">
                Advanced features, $9.99/month
              </span>
            </Label>
          </div>
          <div className="flex items-start space-x-2">
            <RadioGroupItem id="premium" value="premium" />
            <Label className="flex flex-col items-start" htmlFor="premium">
              <span className="font-semibold">Premium</span>
              <span className="text-muted-foreground text-sm">
                All features, $19.99/month
              </span>
            </Label>
          </div>
        </RadioGroup>
      </CardContent>
    </Card>
  );
};

export default RadioCardsDemo;
