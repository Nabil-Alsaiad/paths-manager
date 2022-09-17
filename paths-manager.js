const moduleFolderName = 'my_modules';

const pathsSaver = require(`./${moduleFolderName}/paths-utillities.js`);
const pathFinder = require(`./${moduleFolderName}/path-finder.js`);
const pathsFinder = require(`./${moduleFolderName}/paths-finder.js`);

// TODO: Save all project main folder paths
// TODO: Get paths file path
// TODO: Clear all paths in file
// TODO: Clear some paths in the file
// TODO: Save paths in separate files
// FIXME: differentiate between files with same name but different root path
// FIXME: Save paths file in good place

module.exports = {
    pathsSaver,
    pathFinder,
    pathsFinder,
};