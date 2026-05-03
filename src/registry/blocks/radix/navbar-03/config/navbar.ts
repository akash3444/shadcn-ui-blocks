import {
  Backpack,
  CakeSlice,
  Coffee,
  Grape,
  Hotel,
  IceCream,
  MapPin,
  Package,
  Pizza,
  Plane,
  Sandwich,
  Smile,
} from "lucide-react";

export const foods = [
  {
    title: "Dessert",
    icon: CakeSlice,
    description: "Sweet treats to satisfy your cravings.",
  },
  {
    title: "Pizza",
    icon: Pizza,
    description: "Delicious, cheesy slices of goodness.",
  },
  {
    title: "Sandwich",
    icon: Sandwich,
    description: "Classic and hearty fast food options.",
  },
  {
    title: "Coffee",
    icon: Coffee,
    description: "Your go-to boost of caffeine.",
  },
  {
    title: "Ice Cream",
    icon: IceCream,
    description: "Cold, creamy delights for any mood.",
  },
  {
    title: "Fruit",
    icon: Grape,
    description: "Fresh and healthy natural snacks.",
  },
];

export const travelMenuItems = [
  {
    title: "Destinations",
    icon: MapPin,
    description: "Discover amazing places to visit.",
  },
  {
    title: "Hotels",
    icon: Hotel,
    description: "Find the best stays for your trips.",
  },
  {
    title: "Flights",
    icon: Plane,
    description: "Get deals and tips on air travel.",
  },
  {
    title: "Packing",
    icon: Package,
    description: "Essential checklists for stress-free packing.",
  },
  {
    title: "Activities",
    icon: Smile,
    description: "Exciting things to do wherever you go.",
  },
  {
    title: "Travel Tips",
    icon: Backpack,
    description: "Make every trip smooth and memorable.",
  },
];
