const saver = require('./saver.js');
const storage = require('./storage.js');


module.exports = {
    // saver.js
    saveMainFolders: saver.saveMainFolders,

    // storage.js
    getFilePaths: storage.getFilePaths,
    getFilePath: storage.getFilePath,

    getFilePathsInFolder: storage.getFilePathsInFolder,
    getFilePathInFolder: storage.getFilePathInFolder,
}