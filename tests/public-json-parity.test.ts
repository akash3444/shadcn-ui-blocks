import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import registry from "../registry.json";

const root = process.cwd();
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

const readPublished = (name: string): PublishedItem | null => {
  const path = join(root, "public/r", `${name}.json`);
  if (!existsSync(path)) {
    return null;
  }
  return JSON.parse(readFileSync(path, "utf8")) as PublishedItem;
};

describe("public registry parity", () => {
  it.each(
    registry.items.map((item) => [item.name, item] as const)
  )("publishes current metadata for %s", (name, item) => {
    const published = readPublished(name);
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
    registry.items.flatMap((item) =>
      item.files.map((file) => [item.name, file.path] as const)
    )
  )("publishes current source for %s:%s", (itemName, filePath) => {
    const published = readPublished(itemName);
    const publishedFile = published?.files.find(
      (file) => file.path === filePath
    );
    expect(publishedFile?.content).toBe(
      readFileSync(join(root, filePath), "utf8")
    );
  });
});
