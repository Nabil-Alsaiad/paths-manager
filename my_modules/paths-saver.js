const { writeFileSync } = require('node:fs');
const { myPath, dataFilePath, getPathObj } = require('./paths-utillities.js');

function savePathsOfFolders(mainFolders) {
    if (!Array.isArray(mainFolders)) throw new Error('Expecting "mainFolders" as array of folders as strings');

    const allPaths = {};
    mainFolders.forEach(folder => allPaths[folder] = getPathObj(myPath, folder));

    let jsonValue = '';
    try {
        jsonValue = JSON.stringify(allPaths, null, 2);
    } catch (e) {
        console.error(e);
    }

    if (jsonValue.length > 0) {
        writeFileSync(dataFilePath, jsonValue);
    } else {
        console.error('json value is null');
    }

    console.log(`done saving all paths inside [${mainFolders}]`);
}

module.exports = { savePathsOfFolders };