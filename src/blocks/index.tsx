import { blocks, categories as registryCategories, type RegistryBlock } from "@/config/registry";

const getBlocksData = () => {
  const categories = [];
  const categorizedBlocks: Record<string, RegistryBlock[]> = {};

  // Group blocks by category
  blocks.forEach((block) => {
    // Categorize blocks
    block.categories.forEach((category) => {
      if (!categorizedBlocks[category.name]) {
        categorizedBlocks[category.name] = [];
      }
      categorizedBlocks[category.name].push(block);
    });
  });

  // Generate categories
  for (const category in categorizedBlocks) {
    const categoryBlocks = categorizedBlocks[category];
    const registryCategory = registryCategories[category as keyof typeof registryCategories];
    const title = registryCategory?.title ?? category;
    categories.push({ name: category, title, totalBlocks: categoryBlocks.length });
  }

  const alphabeticallySortedCategories = categories.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return { categories: alphabeticallySortedCategories, categorizedBlocks };
};

export const { categories: blockCategories, categorizedBlocks } =
  getBlocksData();
