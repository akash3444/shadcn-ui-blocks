import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import registry from "../registry.json";

const ROOT = process.cwd();
const PUBLIC_R_DIR = join(ROOT, "public/r");

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

function readPublished(name: string): PublishedItem | null {
	const jsonPath = join(PUBLIC_R_DIR, `${name}.json`);
	if (!existsSync(jsonPath)) return null;
	return JSON.parse(readFileSync(jsonPath, "utf-8")) as PublishedItem;
}

describe("Public JSON Parity", () => {
	describe("json file existence", () => {
		it.each(registry.items.map((item) => [item.name] as [string]))(
			'public/r/%s.json exists',
			(name) => {
				const jsonPath = join(PUBLIC_R_DIR, `${name}.json`);
				expect(
					existsSync(jsonPath),
					`Missing public/r/${name}.json — run "pnpm registry:build" to rebuild`,
				).toBe(true);
			},
		);
	});

	describe("file list parity", () => {
		it.each(registry.items.map((item) => [item.name, item] as [string, (typeof registry.items)[0]]))(
			'public/r/%s.json lists the same files as registry.json',
			(name, item) => {
				const published = readPublished(name);
				if (!published) return; // Caught by existence test

				const expected = item.files.map((f) => f.path).sort();
				const actual = (published.files ?? []).map((f) => f.path).sort();

				expect(
					actual,
					`File list mismatch in public/r/${name}.json — run "pnpm registry:build"`,
				).toEqual(expected);
			},
		);
	});

	describe("source content parity", () => {
		it.each(
			registry.items.flatMap((item) =>
				item.files
					.filter((f) => existsSync(join(ROOT, f.path)))
					.map((file) => [item.name, file.path] as [string, string]),
			),
		)(
			'source content of "%s" matches public/r/%s.json',
			(itemName, filePath) => {
				const published = readPublished(itemName);
				if (!published) return; // Caught by existence test

				const publishedFile = published.files?.find((f) => f.path === filePath);
				if (!publishedFile) return; // Caught by file list parity test

				const sourceContent = readFileSync(join(ROOT, filePath), "utf-8");
				expect(
					publishedFile.content,
					`Stale content for "${filePath}" in public/r/${itemName}.json — run "pnpm registry:build"`,
				).toBe(sourceContent);
			},
		);
	});

	describe("dependency parity", () => {
		it.each(registry.items.map((item) => [item.name, item] as [string, (typeof registry.items)[0]]))(
			'npm dependencies in public/r/%s.json match registry.json',
			(name, item) => {
				const published = readPublished(name);
				if (!published) return;

				const expected = [...(item.dependencies ?? [])].sort();
				const actual = [...(published.dependencies ?? [])].sort();

				expect(
					actual,
					`npm dependency mismatch for "${name}" — run "pnpm registry:build"`,
				).toEqual(expected);
			},
		);

		it.each(registry.items.map((item) => [item.name, item] as [string, (typeof registry.items)[0]]))(
			'registry dependencies in public/r/%s.json match registry.json',
			(name, item) => {
				const published = readPublished(name);
				if (!published) return;

				const expected = [...(item.registryDependencies ?? [])].sort();
				const actual = [...(published.registryDependencies ?? [])].sort();

				expect(
					actual,
					`Registry dependency mismatch for "${name}" — run "pnpm registry:build"`,
				).toEqual(expected);
			},
		);
	});
});
