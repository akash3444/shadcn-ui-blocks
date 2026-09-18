interface RegistrySourceFile {
  path: string;
  content: string;
}

interface RegistrySourceItem {
  files?: RegistrySourceFile[];
}

interface GetRegistrySourceOptions {
  itemName: string;
  filePath: string;
  primitive?: "base" | "radix";
  signal?: AbortSignal;
}

export const findRegistrySource = (
  registryItem: RegistrySourceItem,
  filePath: string
) => registryItem.files?.find((file) => file.path === filePath)?.content;

export const getRegistrySource = async ({
  itemName,
  filePath,
  primitive,
  signal,
}: GetRegistrySourceOptions) => {
  const itemPath = `${encodeURIComponent(itemName)}.json`;
  const registryUrl = primitive
    ? `/r/${primitive}/${itemPath}`
    : `/r/${itemPath}`;
  const response = await fetch(registryUrl, { signal });

  if (!response.ok) {
    throw new Error(`Could not load registry item: ${itemName}`);
  }

  const registryItem = (await response.json()) as RegistrySourceItem;
  const source = findRegistrySource(registryItem, filePath);

  if (source === undefined) {
    throw new Error(`File is not registered in ${itemName}: ${filePath}`);
  }

  return source;
};
