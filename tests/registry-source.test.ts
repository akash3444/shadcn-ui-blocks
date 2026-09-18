import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { findRegistrySource } from "../src/lib/registry-source";

const registryItem = {
  files: [
    {
      path: "src/registry/blocks/radix/hero-01/components/hero.tsx",
      content: "export default function Hero() {}",
    },
  ],
};

describe("findRegistrySource", () => {
  it.each([
    [
      "Base block",
      "public/r/base/hero-01.json",
      "src/registry/blocks/base/hero-01/components/hero.tsx",
    ],
    [
      "Radix block",
      "public/r/radix/hero-01.json",
      "src/registry/blocks/radix/hero-01/components/hero.tsx",
    ],
    [
      "shared block",
      "public/r/radix/testimonials-10.json",
      "src/registry/blocks/shared/testimonials-10/components/testimonials.tsx",
    ],
    [
      "OG image",
      "public/r/og-01.json",
      "src/registry/og-images/og-01/route.tsx",
    ],
  ])("loads source for a published %s", (_, registryPath, filePath) => {
    const publishedItem = JSON.parse(
      readFileSync(join(process.cwd(), registryPath), "utf8")
    );

    expect(findRegistrySource(publishedItem, filePath)).toBeTruthy();
  });

  it("returns source for an exact registered path", () => {
    expect(
      findRegistrySource(
        registryItem,
        "src/registry/blocks/radix/hero-01/components/hero.tsx"
      )
    ).toBe("export default function Hero() {}");
  });

  it.each([
    "src/registry/blocks/base/hero-01/components/hero.tsx",
    "src/registry/blocks/radix/hero-01/components/unknown.tsx",
    "../../.env",
    "/etc/passwd",
  ])("rejects unregistered path %s", (filePath) => {
    expect(findRegistrySource(registryItem, filePath)).toBeUndefined();
  });
});
