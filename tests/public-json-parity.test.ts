import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import registry from "../registry.json";
import baseRegistry from "../registry-base.json";
import radixRegistry from "../registry-radix.json";

const root = process.cwd();
const publishedRegistries = [
  ["default", "public/r", registry],
  ["base", "public/r/base", baseRegistry],
  ["radix", "public/r/radix", radixRegistry],
] as const;

interface PublishedFile {
  path: string;
  content: string;
  type: string;
}

interface PublishedItem {
  name: string;
  type: string;
  files: PublishedFile[];
  dependencies?: string[];
  registryDependencies?: string[];
}

const readPublished = (
  directory: string,
  name: string
): PublishedItem | null => {
  const path = join(root, directory, `${name}.json`);
  if (!existsSync(path)) {
    return null;
  }
  return JSON.parse(readFileSync(path, "utf8")) as PublishedItem;
};

describe("public registry parity", () => {
  it.each(
    publishedRegistries.flatMap(([variant, directory, sourceRegistry]) =>
      sourceRegistry.items.map(
        (item) => [variant, directory, item.name, item] as const
      )
    )
  )("publishes current metadata for %s:%s", (_variant, directory, name, item) => {
    const published = readPublished(directory, name);
    expect(published).not.toBeNull();
    if (!published) {
      return;
    }

    expect(published.files.map((file) => file.path).sort()).toEqual(
      item.files.map((file) => file.path).sort()
    );
    expect([...(published.dependencies ?? [])].sort()).toEqual(
      [...("dependencies" in item ? (item.dependencies ?? []) : [])].sort()
    );
    expect([...(published.registryDependencies ?? [])].sort()).toEqual(
      [
        ...("registryDependencies" in item
          ? (item.registryDependencies ?? [])
          : []),
      ].sort()
    );
  });

  it.each(
    publishedRegistries.flatMap(([variant, directory, sourceRegistry]) =>
      sourceRegistry.items.flatMap((item) =>
        item.files.map(
          (file) => [variant, directory, item.name, file.path] as const
        )
      )
    )
  )("publishes current source for %s:%s:%s", (_variant, directory, itemName, filePath) => {
    const published = readPublished(directory, itemName);
    const publishedFile = published?.files.find(
      (file) => file.path === filePath
    );
    expect(publishedFile?.content).toBe(
      readFileSync(join(root, filePath), "utf8")
    );
  });
});
