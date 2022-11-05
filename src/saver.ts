import { readdirSync, statSync } from "fs";
import { setFiles } from "./storage.js";
import { resolve } from "node:path";

const ignoredFolders = [
  "node_modules",
  ".git",
  ".vs",
  "ignore-me"
]

export async function saveMainFolders(folderNames: string[]) {
  function getMainFolders(): string[] {
    const index = __dirname.lastIndexOf("node_modules");
    const myPath = __dirname.substring(0, index);

    const myFolderNames: string[] = readdirSync(myPath).filter(
      (dir: string) => !ignoredFolders.some((name: string) => dir === name) && statSync(dir).isDirectory(),
    );

    return myFolderNames;
  }
  function getAllFilesInFolder(folder: string, allFiles: string[] = []): string[] {
    const myFiles: string[] = readdirSync(folder);
    myFiles.forEach((file: string) => {
      if (!ignoredFolders.some((name: string) => file === name)) {
        const path: string = resolve(folder, file);
        if (statSync(path).isDirectory()) getAllFilesInFolder(path, allFiles);
        else allFiles.push(path);
      }
    });

    return allFiles;
  }

  if (!folderNames) folderNames = getMainFolders();

  const files: string[] = [];
  for (const folderName of folderNames) {
    files.push(...getAllFilesInFolder(folderName));
  }

  setFiles(files);
}