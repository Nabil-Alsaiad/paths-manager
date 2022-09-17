const { readdirSync } = require('fs');
const { join } = require('node:path');
const utils = require('./paths-manager-utils.js');

const getFullPathOf = (lookingFor, mainFolder) => {
    let myPaths;
    try {
        myPaths = require('./all-paths.json');
    } catch (e) {
        console.error(`Something went wrong with reading all-paths.json file, the error is: ${e.message}`);
    }

    if (!utils.isNotEmptyString(lookingFor)) throw new Error('"lookingFor" must be a non-empty string');
    if (mainFolder && !utils.isNotEmptyString(mainFolder)) throw new Error('"inFolder" must be a non-empty string');

    const getPathInside = (name, obj) => {
        const chooseAccordingToType = () => {
            if (obj === lookingFor) return true;
            if (typeof obj !== 'object') return false;

            if (Array.isArray(obj)) {
                return obj.some(yes => getPathInside({ obj: yes }));
            } else {
                for (const key in obj) {
                    if (getPathInside(key, obj[key])) return true;
                }

                return false;
            }
        };

        currentLevel++;

        const value = chooseAccordingToType();
        if (value) pathSegments[currentLevel] = name;

        currentLevel--;
        return value;
    };

    const pathSegments = [__dirname];
    let currentLevel = 0;

    if (mainFolder && getPathInside(mainFolder, myPaths[mainFolder])) {
        return join(...pathSegments);
    } else {
        for (const key in myPaths) {
            if (getPathInside(key, myPaths[key])) return join(...pathSegments);
        }
    }
    return null;
};

// ----------------------------------------------------------

const getAllFilesInFolder = (mainFolder) => {

    const readFolder = (folder) => {
        readdirSync(folder).forEach(file => {
            const filePath = join(folder, file);
            if (file.includes('.')) {
                files.push(filePath);
            }
            else {
                readFolder(filePath);
            }
        });
    };

    const files = [];
    readFolder(mainFolder);
    return files;
};

const getAllFilesInFolderWithDir = (mainFolder) => {
    const allFilePathsInFolder = getAllFilesInFolder(mainFolder);
    for (const index in allFilePathsInFolder) {
        allFilePathsInFolder[index] = join(__dirname, allFilePathsInFolder[index]);
    }
    return allFilePathsInFolder;
};

// const foundIt = getFullPathOf('bot-log');
// // const foundIt = getFullPathOfInFolder('ban.js', 'commands');

// if (foundIt) {
//     console.log(`Found it at level - [ ${segments.join(' | ')} ]`);
// } else {
//     console.log('Didn\'t find it');
// }

module.exports = {
    getFullPathOf,
    getAllFilesInFolder,
    getAllFilesInFolderWithDir,
};