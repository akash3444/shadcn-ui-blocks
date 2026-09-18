import { existsSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import baseRegistry from "../registry-base.json";
import radixRegistry from "../registry-radix.json";
import { blocks as blockCatalog } from "../src/registry/catalog/blocks";

const root = process.cwd();
const blocksDirectory = join(root, "src/registry/blocks");
const registries = [
  ["base", baseRegistry],
  ["radix", radixRegistry],
] as const;

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
  it.each(registries)("has unique names in the %s registry", (_, registry) => {
    const names = registry.items.map((item) => item.name);
    expect(new Set(names).size).toBe(names.length);
  });

  it("registers every block source directory", () => {
    const expected = {
      shared: new Set(
        blockCatalog
          .filter((block) => block.source === "shared")
          .map((block) => block.name)
      ),
      base: new Set(
        blockCatalog
          .filter((block) => block.source === "variants")
          .map((block) => block.name)
      ),
      radix: new Set(
        blockCatalog
          .filter((block) => block.source === "variants")
          .map((block) => block.name)
      ),
    };

    for (const source of ["shared", "base", "radix"] as const) {
      const actual = readdirSync(join(blocksDirectory, source)).filter((name) =>
        statSync(join(blocksDirectory, source, name)).isDirectory()
      );
      expect(new Set(actual)).toEqual(expected[source]);
    }
  });

  it.each(
    registries.flatMap(([primitive, registry]) =>
      registry.items.flatMap((item) =>
        item.files.map(
          (file) =>
            [primitive, item.name, file.path] as [string, string, string]
        )
      )
    )
  )("the %s registry file %s:%s exists", (_, _itemName, filePath) => {
    expect(existsSync(join(root, filePath))).toBe(true);
  });

  it.each(
    registries.flatMap(([primitive, registry]) =>
      registry.items
        .filter((item) => item.type === "registry:block")
        .flatMap((block) => {
          const source = block.files[0]?.path.split("/")[3];
          const directory = join(blocksDirectory, source, block.name);
          const registeredPaths = new Set(
            block.files.map((file) => join(root, file.path))
          );
          return getSourceFiles(directory).map(
            (file) =>
              [primitive, block.name, file, registeredPaths] as [
                string,
                string,
                string,
                Set<string>,
              ]
          );
        })
    )
  )("the %s registry lists source file %s:%s", (_primitive, _blockName, file, registeredPaths) => {
    expect(registeredPaths.has(file)).toBe(true);
  });

  it.each(
    registries
  )("uses valid file types in the %s registry", (_, registry) => {
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
