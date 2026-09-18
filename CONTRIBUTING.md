# Contributing to Shadcn UI Blocks

First off, thank you for taking the time to contribute! 🎉 Your contributions are what make this project great.

## How Can You Contribute?

You can contribute to this project in the following ways:

- **Adding New Blocks**: Submit new Shadcn UI component examples or blocks.
- **Improving Existing Blocks**: Enhance the styling, functionality, or documentation of existing blocks.
- **Fixing Issues**: Help us resolve bugs, UI inconsistencies, or broken links.
- **Suggesting Features**: Propose ideas to improve the website, such as new components, tools, or features.
- **Documentation Updates**: Improve this guide or the README for clarity and completeness.

## Getting Started

### 1. Clone the Repository

First, fork the repository (if applicable) and clone it to your local machine:

```bash
git clone https://github.com/akash3444/shadcn-ui-blocks.git

cd shadcn-ui-blocks
```

### 2. Install Dependencies

Install the required packages using Bun:

```bash
bun install
```

### 3. Run the Project Locally

Start the development server:

```bash
bun run dev
```

The website should now be accessible at `http://localhost:3000`.

### 4. Make Changes

- Add or edit blocks in the respective component directories.
- Update the matching entry in `src/registry/catalog` when registry metadata changes.
- Test your changes locally to ensure they work as expected.

### Registry catalog

`src/registry/catalog` is the source of truth for registry items, block previews, categories, and component gallery metadata. Do not edit `registry.json`, `registry-base.json`, `registry-radix.json`, `src/config/registry/index.tsx`, or `src/description/customized-components.ts` by hand.

Generate the derived files after editing the catalog:

```bash
bun run registry:generate
```

Check that generated files are current without changing them:

```bash
bun run registry:check
```

Build the public shadcn registry files with:

```bash
bun run registry:build
```

### 5. Commit and Push

Follow these steps to commit your changes:

1. Stage your changes:

   ```bash
   git add .
   ```

2. Write a clear and descriptive commit message:

   ```bash
   git commit -m "feat: add new block"
   ```

3. Push your changes:
   ```bash
   git push origin <your-branch-name>
   ```

### 6. Submit a Pull Request

Once your changes are pushed to your fork, open a pull request (PR) to the main repository. Please include the following in your PR:

- A clear description of the changes.
- Screenshots or previews of any visual updates (if applicable).
- The reasoning behind your contribution.

## Guidelines

To ensure a smooth contribution process, please follow these guidelines:

- Write clean, readable, and well-documented code.
- Use Biome for consistent formatting.
- Follow the existing folder and component structure.
- Test your changes before submitting a PR.

## Code of Conduct

This project follows a **Code of Conduct** to foster an inclusive and respectful environment. Be kind and respectful when interacting with others.

## Questions?

If you have any questions or need assistance, feel free to create an issue or contact the maintainers directly.

Thank you for contributing! 🚀

---

Let me know if you'd like to customize any specific sections!
