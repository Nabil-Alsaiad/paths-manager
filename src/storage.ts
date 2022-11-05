const filePaths = new Map();

export function getFilePaths(): string[] | undefined {
  return [...filePaths.values()];
}

export function getFilePath(fileName: string): string | undefined {
  return filePaths.get(fileName);
}

export function getFilePathsInFolder(folderName: string): string[] | undefined {
  const paths = getFilePaths();

  if (paths)
    return paths.filter((p: string) => p.includes(folderName));

  return undefined;
}

export function getFilePathInFolder(fileName: string, folderName: string): string | undefined {
  const paths = getFilePathsInFolder(folderName);
  if (!paths) return undefined;

  for (const filePath of paths) {
    if (filePath.endsWith(fileName)) return filePath;
  }

  return undefined;
}

export function setFiles(newFiles: string[]): void {
  function getLastItem(path: string): string {
    let index: number = path.lastIndexOf("\\");
    if (index === -1) index = path.lastIndexOf("/");
    return path.substring(index + 1);
  };

  for (const filePath of newFiles) {
    const fileName: string = getLastItem(filePath);
    if (filePaths.has(fileName)) {
      console.warn(`Duplicate file name found, paths-manager already have a path with the file name ${fileName}`);
      continue;
    }
    filePaths.set(fileName, filePath);
  }
};