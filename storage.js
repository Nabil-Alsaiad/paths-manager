let filePaths = [];
let filePathssObject = {};

function getFilePaths() {
    return filePaths;
}

function getFilePath(fileName) {
    return filePaths[filePathssObject[fileName]];
}

function getFilePathsInFolder(folderName) {
    return filePaths.filter(f => f.includes(folderName));
}

function getFilePathInFolder(fileName, folderName) {
    for (const filePath of getFilePathsInFolder(folderName)) {
        if (filePath.endsWith(fileName)) return filePath;
    }
    return null;
}

function setFiles(newFiles) {
    function getLastItem(path) {
        let index = path.lastIndexOf('\\');
        if (index === -1) index = path.lastIndexOf('/');
        return path.substring(index + 1);
    }

    filePaths = newFiles;
    if (filePaths) {
        for (const filePath in filePaths) {
            const fileName = getLastItem(filePaths[filePath]);
            filePathssObject[fileName] = filePath;
        }
    }
    // console.log('filePaths:', filePaths);
    // console.log('filePathssObject:', filePathssObject);
}

module.exports = {
    getFilePaths,
    getFilePath,

    getFilePathsInFolder,
    getFilePathInFolder,

    setFiles,
}