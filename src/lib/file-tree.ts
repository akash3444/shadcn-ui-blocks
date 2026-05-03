import { pathToTree } from "to-path-tree";
import type { blocks as registryBlocks } from "@/config/registry";

export const getFileTree = (
  block: (typeof registryBlocks)[number],
  primitive: "radix" | "base" = "radix"
) => {
  const files = block.primitives
    ? block.primitives[primitive].files
    : (block.files ?? []);

  return pathToTree(files.map((file) => file.path));
};
