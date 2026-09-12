export const getInstallationCommand = (
  packageManager: string,
  registryItem: string
) => {
  switch (packageManager) {
    case "npm":
    case "yarn":
      return `npx shadcn@latest add ${registryItem}`;
    case "pnpm":
      return `pnpm dlx shadcn@latest add ${registryItem}`;
    case "bun":
      return `bunx --bun shadcn@latest add ${registryItem}`;
    default:
      throw new Error(`Unsupported package manager: ${packageManager}`);
  }
};
