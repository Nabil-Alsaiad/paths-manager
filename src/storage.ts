let filePaths: string[] = [];
const filePathsObject: any = {};

export function getFilePaths(): string[] {
  return filePaths;
}

export function getFilePath(fileName: string): string {
  return filePaths[filePathsObject[fileName]];
}

export function getFilePathsInFolder(folderName: string): string[] {
  return filePaths.filter((f: string) => f.includes(folderName));
}

export function getFilePathInFolder(fileName: string, folderName: string): string | null {
  for (const filePath of getFilePathsInFolder(folderName)) {
    if (filePath.endsWith(fileName)) return filePath;
  }
  return null;
}

export function setFiles(newFiles: string[]): void {
  function getLastItem(path: string): string {
    let index: number = path.lastIndexOf('\\');
    if (index === -1) index = path.lastIndexOf('/');
    return path.substring(index + 1);
  }

  filePaths = newFiles;
  if (filePaths) {
    for (const filePath in filePaths) {
      if (filePaths.hasOwnProperty(filePath)) {
        const fileName: string = getLastItem(filePaths[filePath]);
        filePathsObject[fileName] = filePath;
      }
    }
  }
}
