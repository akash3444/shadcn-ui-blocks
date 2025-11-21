"use client";

import { Checkbox } from "@/registry/ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/ui/collapsible";
import { Input } from "@/registry/ui/input";
import { Label } from "@/registry/ui/label";
import { Slider } from "@/registry/ui/slider";
import {
  ChevronDown,
  CircleDollarSign,
  LucideIcon,
  Star,
  Tag,
} from "lucide-react";
import { ReactNode, useState } from "react";

type PriceRange = { from: number; to: number };

const CollapsibleFilters = () => {
  return (
    <div className="w-full max-w-xs divide-y-2">
      <PriceRangeFilter />
      <CategoryFilter />
      <RatingFilter />
    </div>
  );
};

const MIN_PRICE = 0;
const MAX_PRICE = 1000;
function PriceRangeFilter() {
  const [value, setValue] = useState<PriceRange>({
    from: MIN_PRICE,
    to: MAX_PRICE,
  });

  const handleChange = (newValue: PriceRange) => {
    setValue(newValue);
  };

  return (
    <CollapsibleFilter title="Price Range" icon={CircleDollarSign}>
      <div className="flex justify-between space-x-4">
        <Input
          type="number"
          value={value.from}
          onChange={(e) =>
            handleChange({ from: +e.target.value, to: value.to })
          }
          // onBlur={handleBlur}
          className="w-20"
        />
        <Input
          type="number"
          value={value.to}
          onChange={(e) =>
            handleChange({ from: value.from, to: +e.target.value })
          }
          // onBlur={handleBlur}
          className="w-20"
        />
      </div>
      <Slider
        min={MIN_PRICE}
        max={MAX_PRICE}
        step={10}
        value={[value.from, value.to]}
        onValueChange={([from, to]) => handleChange({ from, to })}
        className="w-full mt-4 mb-3"
      />
    </CollapsibleFilter>
  );
}

function RatingFilter() {
  const [rating, setRating] = useState<number | null>(null);
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);

  return (
    <CollapsibleFilter title="Rating" icon={Star}>
      <div className="flex space-x-1 mb-1">
        {[1, 2, 3, 4, 5].map((ratingValue) => (
          <Star
            key={ratingValue}
            className={`h-6 w-6 cursor-pointer ${
              (
                hoveredRating !== null
                  ? hoveredRating >= ratingValue
                  : rating !== null && rating >= ratingValue
              )
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300"
            }`}
            onMouseEnter={() => setHoveredRating(ratingValue)}
            onMouseLeave={() => setHoveredRating(null)}
            onClick={() =>
              setRating(ratingValue === rating ? null : ratingValue)
            }
          />
        ))}
      </div>
    </CollapsibleFilter>
  );
}

const categories = [
  "Electronics",
  "Clothing",
  "Books",
  "Home & Garden",
  "Toys",
];
function CategoryFilter() {
  return (
    <CollapsibleFilter title="Category" icon={Tag}>
      {categories.map((category) => (
        <div key={category} className="mb-2 flex items-center space-x-3">
          <Checkbox id={category} />
          <Label htmlFor={category}>{category}</Label>
        </div>
      ))}
    </CollapsibleFilter>
  );
}

const CollapsibleFilter = ({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon?: LucideIcon;
  children: ReactNode;
}) => (
  <Collapsible defaultOpen>
    <CollapsibleTrigger className="group flex w-full items-center justify-between py-3">
      <h3 className="flex items-center gap-2 text-sm font-semibold">
        {!!Icon && <Icon className="h-5 w-5" />} {title}
      </h3>
      <ChevronDown className="h-4 w-4 group-data-[state=open]:rotate-180 transition-transform text-muted-foreground" />
    </CollapsibleTrigger>
    <CollapsibleContent className="pt-1 pb-3">{children}</CollapsibleContent>
  </Collapsible>
);

export default CollapsibleFilters;
