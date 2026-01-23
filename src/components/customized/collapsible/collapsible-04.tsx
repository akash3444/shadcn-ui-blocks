"use client";

import {
  ChevronDown,
  CircleDollarSign,
  type LucideIcon,
  Star,
  Tag,
} from "lucide-react";
import { type ReactNode, useState } from "react";
import { Checkbox } from "@/registry/ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/ui/collapsible";
import { Input } from "@/registry/ui/input";
import { Label } from "@/registry/ui/label";
import { Slider } from "@/registry/ui/slider";

interface PriceRange {
  from: number;
  to: number;
}

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
    <CollapsibleFilter icon={CircleDollarSign} title="Price Range">
      <div className="flex justify-between space-x-4">
        <Input
          className="w-20"
          onChange={(e) =>
            handleChange({ from: +e.target.value, to: value.to })
          }
          type="number"
          // onBlur={handleBlur}
          value={value.from}
        />
        <Input
          className="w-20"
          onChange={(e) =>
            handleChange({ from: value.from, to: +e.target.value })
          }
          type="number"
          // onBlur={handleBlur}
          value={value.to}
        />
      </div>
      <Slider
        className="mt-4 mb-3 w-full"
        max={MAX_PRICE}
        min={MIN_PRICE}
        onValueChange={([from, to]) => handleChange({ from, to })}
        step={10}
        value={[value.from, value.to]}
      />
    </CollapsibleFilter>
  );
}

function RatingFilter() {
  const [rating, setRating] = useState<number | null>(null);
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);

  return (
    <CollapsibleFilter icon={Star} title="Rating">
      <div className="mb-1 flex space-x-1">
        {[1, 2, 3, 4, 5].map((ratingValue) => (
          <Star
            className={`h-6 w-6 cursor-pointer ${
              (
                hoveredRating !== null
                  ? hoveredRating >= ratingValue
                  : rating !== null && rating >= ratingValue
              )
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            }`}
            key={ratingValue}
            onClick={() =>
              setRating(ratingValue === rating ? null : ratingValue)
            }
            onMouseEnter={() => setHoveredRating(ratingValue)}
            onMouseLeave={() => setHoveredRating(null)}
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
    <CollapsibleFilter icon={Tag} title="Category">
      {categories.map((category) => (
        <div className="mb-2 flex items-center space-x-3" key={category}>
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
      <h3 className="flex items-center gap-2 font-semibold text-sm">
        {!!Icon && <Icon className="h-5 w-5" />} {title}
      </h3>
      <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform group-data-[state=open]:rotate-180" />
    </CollapsibleTrigger>
    <CollapsibleContent className="pt-1 pb-3">{children}</CollapsibleContent>
  </Collapsible>
);

export default CollapsibleFilters;
