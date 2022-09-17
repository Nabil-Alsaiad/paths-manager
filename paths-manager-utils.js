const getPathObj = (somePath, folderName) => {
    const { readdirSync } = require('node:fs');
    const { join } = require('node:path');

    const aPath = join(somePath, folderName);
    const children = readdirSync(aPath);
    // console.log(`aPath: ${aPath}`);
    // console.log(`children.length: ${children.length}`);

    let isFilesDirectory = false;
    for (const file of children) {
        if (file.includes('.')) {
            isFilesDirectory = true;
            break;
        }
    }

    // console.log(`isFilesDirectory: ${isFilesDirectory}`);
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
    getPathObj,
    isNotEmptyString,
};