import { Badge } from "@/registry/ui/badge";
import { CheckIcon, FlaskConicalIcon, SparklesIcon } from "lucide-react";

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
        <li key={feature.title} className="gap-2 flex items-center text-sm">
          <CheckIcon className="size-4" />
          {feature.title}
          {feature.isExperimental && <Badge variant="outline" className="ms-1 bg-amber-600/10 text-amber-600 dark:bg-amber-600/15 border-amber-600/30"><FlaskConicalIcon /> Experimental</Badge>}
          {feature.isNew && <Badge variant="outline" className="ms-1 bg-blue-600/10 text-blue-600 dark:text-blue-400 dark:bg-blue-600/20 border-blue-600/30"><SparklesIcon /> New</Badge>}
        </li>
      ))}
    </ul>
  );
};

export default PlanFeaturesWithBadge;
