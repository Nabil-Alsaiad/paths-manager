const { readdirSync, statSync } = require('fs');
const { resolve } = require('node:path');

function saveMainFolders(folderNames) {
    function getMainFolders() {
        const index = __dirname.lastIndexOf('node_modules');
        const myPath = __dirname.substring(0, index);

        const folderNames = readdirSync(myPath)
            .filter(dir => !ignoredFolders.some(name => dir === name) && statSync(dir).isDirectory());

        return folderNames;
    }
    function getAllFilesInFolder(folder, allFiles = []) {
        const files = readdirSync(folder);
        files.forEach(file => {
            if (!ignoredFolders.some(name => file === name)) {
                const path = resolve(folder, file);
                if (statSync(path).isDirectory()) getAllFilesInFolder(path, allFiles);
                else allFiles.push(path);
            }
        })

        return allFiles;
    }

    const ignoredFolders = require('./ignored-folders.json');
    if (!folderNames) folderNames = getMainFolders();

    const files = [];
    for (const folderName of folderNames) {
        files.push(...getAllFilesInFolder(folderName));
    }

    console.log('folderNames:', folderNames);
    console.log('files:', files);
    const storage = require('./storage.js');
    storage.setFiles(files);
}

module.exports = {
    saveMainFolders,
}