const { readdirSync } = require('node:fs');
const { join } = require('node:path');

//#region file path
let myPath = __dirname;
const index = myPath.indexOf('node_modules');
if (index !== -1) myPath = myPath.substring(0, index);

const dataFilePath = join(myPath, 'all-paths.json');
//#endregion

const getPathObj = (somePath, folderName) => {
    const aPath = join(somePath, folderName);
    const children = readdirSync(aPath);

    let isFilesDirectory = false;
    for (const file of children) {
        if (file.includes('.')) {
            isFilesDirectory = true;
            break;
        }
    }

    if (isFilesDirectory) {
        return children;
    } else {
        const obj = {};
        children.forEach(folder => { obj[folder] = getPathObj(aPath, folder); });
        return obj;
    }
};

const isNotEmptyString = (test) => {
    if (typeof test !== 'string') return false;
    if (test.length === 0) return false;
    return true;
};

module.exports = {
    myPath,
    dataFilePath,
    getPathObj,
    isNotEmptyString,
};