const { getPathObj } = require('./paths-manager-utils.js');

const savePathsOfFolders = (mainFolders) => {
    if (!Array.isArray(mainFolders)) throw new Error('Expecting "mainFolders" as array of folders as strings');
    const { writeFileSync } = require('node:fs');
    const dataFilePath = './all-paths.json';

    const allPaths = {};
    mainFolders.forEach(folder => {
        //FIXME: This must be the actual workspace directoryPath
        allPaths[folder] = getPathObj(__dirname, folder);
    });

    // console.log(`allPaths: ${allPaths}`);

    let jsonValue = '';
    try {
        jsonValue = JSON.stringify(allPaths, null, 2);
    } catch (e) {
        console.error(e);
    }

    // console.log(`jsonValue: ${jsonValue}`);

    if (jsonValue.length > 0) {
        writeFileSync(dataFilePath, jsonValue);
    } else {
        console.error('jsonValue is null');
    }

    console.log(`done saving all paths inside [${mainFolders}]`);
};

module.exports = {
    savePathsOfFolders,
};