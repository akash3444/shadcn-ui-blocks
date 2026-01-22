import { CheckIcon, FlaskConicalIcon, SparklesIcon } from "lucide-react";
import { Badge } from "@/registry/ui/badge";

const features = [
  {
    title: "Unlimited Projects",
  },
  {
    title: "Custom Integrations",
    isNew: true,
  },
  {
    title: "Advanced Analytics",
    isExperimental: true,
  },
  {
    title: "Priority Support",
  },
  {
    title: "Team Collaboration",
  },
];

const PlanFeaturesWithBadge = () => {
  return (
    <ul className="space-y-2.5">
      {features.map((feature) => (
        <li className="flex items-center gap-2 text-sm" key={feature.title}>
          <CheckIcon className="size-4" />
          {feature.title}
          {feature.isExperimental && (
            <Badge
              className="ms-1 border-amber-600/30 bg-amber-600/10 text-amber-600 dark:bg-amber-600/15"
              variant="outline"
            >
              <FlaskConicalIcon /> Experimental
            </Badge>
          )}
          {feature.isNew && (
            <Badge
              className="ms-1 border-blue-600/30 bg-blue-600/10 text-blue-600 dark:bg-blue-600/20 dark:text-blue-400"
              variant="outline"
            >
              <SparklesIcon /> New
            </Badge>
          )}
        </li>
      ))}
    </ul>
  );
};

export default PlanFeaturesWithBadge;
