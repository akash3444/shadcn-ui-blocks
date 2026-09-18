import { z } from "zod";

export const registryFileSchema = z
  .object({
    path: z.string().min(1),
    type: z.string().min(1),
    target: z.string().min(1).optional(),
  })
  .passthrough();

export const registryItemSchema = z
  .object({
    name: z.string().min(1),
    type: z.string().min(1),
    title: z.string().min(1),
    description: z.string().min(1),
    dependencies: z.array(z.string().min(1)).optional(),
    registryDependencies: z.array(z.string().min(1)).optional(),
    files: z.array(registryFileSchema).min(1),
  })
  .passthrough();

export const categorySchema = z.object({
  key: z.string().min(1),
  name: z.string().min(1),
  title: z.string().min(1),
  blockOrder: z.number().int().nonnegative().optional(),
});

export const blockCatalogItemSchema = z
  .object({
    name: z.string().min(1),
    title: z.string().min(1),
    description: z.string().min(1),
    dependencies: z.array(z.string().min(1)).optional(),
    registryDependencies: z.array(z.string().min(1)).optional(),
    files: z.array(registryFileSchema).min(1),
    categories: z.array(z.string().min(1)).min(1),
    source: z.enum(["shared", "variants"]),
    preview: z.string().min(1),
    previewFiles: z.array(z.string().min(1)).optional(),
    layout: z.enum(["navbar", "footer", "full-height"]).optional(),
  })
  .passthrough();

export const componentCatalogItemSchema = registryItemSchema.extend({
  type: z.literal("registry:component"),
  site: z
    .object({
      group: z.string().min(1),
      title: z.string().min(1),
      className: z.string().min(1).optional(),
      credit: z
        .object({ label: z.string().min(1), link: z.string().url() })
        .optional(),
      description: z.string().min(1).optional(),
    })
    .optional(),
});

export interface RegistryFileCatalogEntry {
  path: string;
  type: string;
  target?: string;
  [key: string]: unknown;
}

export interface RegistryItemCatalogEntry {
  name: string;
  type: string;
  title: string;
  description: string;
  dependencies?: readonly string[];
  registryDependencies?: readonly string[];
  files: readonly RegistryFileCatalogEntry[];
  [key: string]: unknown;
}

export interface ComponentCatalogEntry extends RegistryItemCatalogEntry {
  type: "registry:component";
  site?: {
    group: string;
    title: string;
    className?: string;
    credit?: { label: string; link: string };
    description?: string;
  };
}

export interface BlockCatalogEntry {
  name: string;
  title: string;
  description: string;
  dependencies?: readonly string[];
  registryDependencies?: readonly string[];
  files: readonly RegistryFileCatalogEntry[];
  categories: readonly string[];
  source: "shared" | "variants";
  preview: string;
  previewFiles?: readonly string[];
  layout?: "navbar" | "footer" | "full-height";
  [key: string]: unknown;
}

export interface CategoryCatalogEntry {
  key: string;
  name: string;
  title: string;
  blockOrder?: number;
}
