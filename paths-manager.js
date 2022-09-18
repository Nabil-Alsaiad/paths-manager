const moduleFolderName = 'my_modules';

const { savePathsOfFolders } = require(`./${moduleFolderName}/paths-saver.js`);
const { getFullPathOf } = require(`./${moduleFolderName}/path-finder.js`);
const { getAllFilesInFolder, getAllFilesInFolderWithDir } = require(`./${moduleFolderName}/paths-finder.js`);

// TODO: Save all project main folder paths
// TODO: Get paths file path
// TODO: Clear all paths in file
// TODO: Clear some paths in the file
// TODO: Save paths in separate files
// FIXME: differentiate between files with same name but different root path
// FIXME: Save paths file in good place

module.exports = {
    savePathsOfFolders,
    getFullPathOf,
    getAllFilesInFolder,
    getAllFilesInFolderWithDir,
};