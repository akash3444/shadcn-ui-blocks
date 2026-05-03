import { existsSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import registry from "../registry.json";

const ROOT = process.cwd();
const BLOCKS_DIR = join(ROOT, "src/registry/blocks");

function getFilesInDir(dir: string): string[] {
	const results: string[] = [];
	for (const entry of readdirSync(dir)) {
		const fullPath = join(dir, entry);
		if (statSync(fullPath).isDirectory()) {
			results.push(...getFilesInDir(fullPath));
		} else if (entry.endsWith(".tsx") || entry.endsWith(".ts")) {
			results.push(fullPath);
		}
	}
	return results;
}

const blocks = registry.items.filter((item) => item.type === "registry:block");
const blockDirNames = readdirSync(BLOCKS_DIR);

describe("Registry Integrity", () => {
	describe("unique names", () => {
		it("all registry item names are unique", () => {
			const seen = new Map<string, string>();
			for (const item of registry.items) {
				const existing = seen.get(item.name);
				expect(
					existing,
					`Duplicate name "${item.name}": found as "${existing}" and "${item.type}"`,
				).toBeUndefined();
				seen.set(item.name, item.type);
			}
		});
	});

	describe("block count", () => {
		it("block count in registry matches block folders on disk", () => {
			expect(blocks.length).toBe(blockDirNames.length);
		});
	});

	describe("block registration", () => {
		it.each(blockDirNames)(
			'block folder "%s" has a matching entry in registry.json',
			(dir) => {
				const registeredNames = new Set(blocks.map((b) => b.name));
				expect(
					registeredNames.has(dir),
					`Block directory "${dir}" is not registered in registry.json`,
				).toBe(true);
			},
		);

		it.each(blocks.map((b) => [b.name] as [string]))(
			'registered block "%s" has a matching folder on disk',
			(name) => {
				const blockDir = join(BLOCKS_DIR, name);
				expect(
					existsSync(blockDir),
					`Block "${name}" is in registry.json but has no folder in src/registry/blocks/`,
				).toBe(true);
			},
		);
	});

	describe("block fields", () => {
		it.each(blocks.map((b) => [b.name, b] as [string, (typeof blocks)[0]]))(
			'block "%s" has all required fields',
			(name, block) => {
				expect(block.title, `Block "${name}" is missing a title`).toBeTruthy();
				expect(
					block.description,
					`Block "${name}" is missing a description`,
				).toBeTruthy();
				expect(
					block.files?.length,
					`Block "${name}" has no files registered`,
				).toBeGreaterThan(0);
			},
		);
	});

	describe("file existence", () => {
		it.each(
			registry.items.flatMap((item) =>
				item.files.map((file) => [item.name, file.path] as [string, string]),
			),
		)(
			'file "%s" referenced in "%s" exists on disk',
			(itemName, filePath) => {
				const fullPath = join(ROOT, filePath);
				expect(
					existsSync(fullPath),
					`File "${filePath}" is referenced in registry.json for "${itemName}" but missing on disk`,
				).toBe(true);
			},
		);
	});

	describe("block folder completeness", () => {
		it.each(
			blocks
				.filter((b) => existsSync(join(BLOCKS_DIR, b.name)))
				.flatMap((block) => {
					const blockDir = join(BLOCKS_DIR, block.name);
					const registeredPaths = new Set(
						block.files.map((f) => join(ROOT, f.path)),
					);
					return getFilesInDir(blockDir).map(
						(actualFile) =>
							[block.name, actualFile, registeredPaths] as [
								string,
								string,
								Set<string>,
							],
					);
				}),
		)(
			'file "%s" in block "%s" is listed in registry.json',
			(blockName, actualFile, registeredPaths) => {
				const relativePath = actualFile.replace(`${ROOT}/`, "");
				expect(
					registeredPaths.has(actualFile),
					`File "${relativePath}" exists in block "${blockName}" folder but is not listed in registry.json`,
				).toBe(true);
			},
		);
	});

	describe("file types", () => {
		const validTypes = new Set([
			"registry:component",
			"registry:ui",
			"registry:block",
			"registry:hook",
			"registry:lib",
			"registry:page",
			"registry:file",
		]);

		it.each(
			registry.items.flatMap((item) =>
				item.files.map(
					(file) => [file.path, file.type] as [string, string],
				),
			),
		)('file "%s" has a valid type "%s"', (filePath, fileType) => {
			expect(
				validTypes.has(fileType),
				`File "${filePath}" has unrecognized type "${fileType}"`,
			).toBe(true);
		});
	});
});
