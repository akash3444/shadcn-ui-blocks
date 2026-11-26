import { existsSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import registry from "../registry.json";
import { blocks as blockCatalog } from "../src/registry/catalog/blocks";

const root = process.cwd();
const blocksDirectory = join(root, "src/registry/blocks/base");

const getSourceFiles = (directory: string): string[] => {
  const results: string[] = [];
  for (const entry of readdirSync(directory)) {
    const path = join(directory, entry);
    if (statSync(path).isDirectory()) {
      results.push(...getSourceFiles(path));
    } else if (entry.endsWith(".tsx") || entry.endsWith(".ts")) {
      results.push(path);
    }
  }
  return results;
};

describe("registry integrity", () => {
  it("has unique registry item names", () => {
    const names = registry.items.map((item) => item.name);
    expect(new Set(names).size).toBe(names.length);
  });

  it("registers every block source directory", () => {
    const actual = readdirSync(blocksDirectory).filter((name) =>
      statSync(join(blocksDirectory, name)).isDirectory()
    );

    expect(new Set(actual)).toEqual(
      new Set(blockCatalog.map((block) => block.name))
    );
  });

  it.each(
    registry.items.flatMap((item) =>
      item.files.map((file) => [item.name, file.path] as [string, string])
    )
  )("registry file %s:%s exists", (_itemName, filePath) => {
    expect(existsSync(join(root, filePath))).toBe(true);
  });

  it.each(
    registry.items
      .filter((item) => item.type === "registry:block")
      .flatMap((block) => {
        const directory = join(blocksDirectory, block.name);
        const registeredPaths = new Set(
          block.files.map((file) => join(root, file.path))
        );
        return getSourceFiles(directory).map(
          (file) =>
            [block.name, file, registeredPaths] as [string, string, Set<string>]
        );
      })
  )("the registry lists source file %s:%s", (_blockName, file, registeredPaths) => {
    expect(registeredPaths.has(file)).toBe(true);
  });

  it("uses valid file types", () => {
    const validTypes = new Set([
      "registry:component",
      "registry:ui",
      "registry:block",
      "registry:hook",
      "registry:lib",
      "registry:page",
      "registry:file",
    ]);

    for (const item of registry.items) {
      expect(item.title).toBeTruthy();
      expect(item.description).toBeTruthy();
      expect(item.files.length).toBeGreaterThan(0);
      for (const file of item.files) {
        expect(validTypes.has(file.type)).toBe(true);
      }
    }
  });
});
