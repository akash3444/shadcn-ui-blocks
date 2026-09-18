import "server-only";

import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

export const getNumberOfFilesInsideDirectory = async (
  directoryPath: string
) => {
  try {
    const directoryFullPath = path.join(process.cwd(), directoryPath);
    const files = await readdir(directoryFullPath, { withFileTypes: true });

    return files.filter((file) => file.isFile()).length;
  } catch (error) {
    console.error("error :", error);
    return 0;
  }
};

export const getFileContent = (filePath: string) => readFile(filePath, "utf8");
