import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

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
          <div className="flex items-start space-x-2 mb-4">
            <RadioGroupItem value="free" id="free" />
            <Label htmlFor="free" className="flex flex-col items-start">
              <span className="font-semibold">Free</span>
              <span className="text-sm text-muted-foreground">
                Basic features, no cost
              </span>
            </Label>
          </div>
          <div className="flex items-start space-x-2 mb-4">
            <RadioGroupItem value="standard" id="standard" />
            <Label htmlFor="standard" className="flex flex-col items-start">
              <span className="font-semibold">Standard</span>
              <span className="text-sm text-muted-foreground">
                Advanced features, $9.99/month
              </span>
            </Label>
          </div>
          <div className="flex items-start space-x-2">
            <RadioGroupItem value="premium" id="premium" />
            <Label htmlFor="premium" className="flex flex-col items-start">
              <span className="font-semibold">Premium</span>
              <span className="text-sm text-muted-foreground">
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
