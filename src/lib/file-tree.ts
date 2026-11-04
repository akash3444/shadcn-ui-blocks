import { pathToTree } from "to-path-tree";
import type { blocks as registryBlocks } from "@/config/registry";

export const getFileTree = (block: (typeof registryBlocks)[number]) =>
  pathToTree(block.files.map((file) => file.path));
