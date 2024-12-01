"use server";

import path from "path";
import fs from "fs";

export const getNumberOfFilesInsideDirectory = (directoryPath: string) => {
  try {
    const directoryFullPath = path.join(process.cwd(), directoryPath);

    const files = fs.readdirSync(directoryFullPath);
    const fileCount = files.filter((file) =>
      fs.statSync(path.join(directoryFullPath, file)).isFile()
    ).length;

    return fileCount;
  } catch (error) {
    console.error("error :", error);
    return 0;
  }
};

export const getFileContent = async (filePath: string) => {
  const files = fs.readdirSync(
    path.join(path.join(process.cwd()), "src/blocks/logos-06")
  );
  console.log("files :", files, null, 2);
  const joinedPath = path.join(process.cwd(), filePath);
  console.log("filePath :", filePath);
  console.log("joinedPath :", joinedPath);
  console.log("process.cwd() :", process.cwd());
  const content = fs.readFileSync(joinedPath, "utf8");

  return content;
};
