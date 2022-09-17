const { join } = require('node:path');
const { readdirSync } = require('fs');
const { myPath } = require('./paths-utillities.js');

const getAllFilesInFolder = (mainFolder) => {
    const readFolder = (folder) => {
        readdirSync(folder).forEach(file => {
            const filePath = join(folder, file);

            if (file.includes('.')) files.push(filePath);
            else readFolder(filePath);
        });
    };

    const files = [];
    readFolder(mainFolder);
    return files;
};

const getAllFilesInFolderWithDir = (mainFolder) => {
    const allFilePathsInFolder = getAllFilesInFolder(mainFolder);
    for (const index in allFilePathsInFolder) {
        allFilePathsInFolder[index] = join(myPath, allFilePathsInFolder[index]);
    }
    return allFilePathsInFolder;
};

module.exports = {
    getAllFilesInFolder,
    getAllFilesInFolderWithDir,
};