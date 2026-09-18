import { blockCategories } from "@/blocks";
import { blocks } from "@/config/registry";

const blocksByName = new Map(blocks.map((block) => [block.name, block]));
const categoriesByName = new Map(
  blockCategories.map((category) => [category.name, category])
);

export function getBlockByName(name: string) {
  return blocksByName.get(name);
}

export function getBlockCategoryByName(name: string) {
  return categoriesByName.get(name);
}
