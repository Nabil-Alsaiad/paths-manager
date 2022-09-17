const { join } = require('node:path');
const { myPath, dataFilePath, isNotEmptyString } = require('./paths-utillities.js');

function getFullPathOf(lookingFor, mainFolder) {
    let myPaths;
    try {
        myPaths = require(dataFilePath);
    } catch (e) {
        console.error(`Something went wrong with reading "all-paths.json" file, the error is: ${e.message}`);
    }

    if (!isNotEmptyString(lookingFor)) throw new Error('"lookingFor" must be a non-empty string');
    if (mainFolder && !isNotEmptyString(mainFolder)) throw new Error('"inFolder" must be a non-empty string');

    const getPathInside = (name, obj) => {
        const chooseAccordingToType = () => {
            if (name == lookingFor) return true;
            if (typeof obj !== 'object') return false;

            if (Array.isArray(obj)) {
                return obj.some(yes => getPathInside(yes));
            } else {
                for (const key in obj) {
                    if (getPathInside(key, obj[key])) {
                        return true;
                    }
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

    const pathSegments = [myPath];
    let currentLevel = 0;


    if (mainFolder && getPathInside(mainFolder, myPaths[mainFolder])) {
        return join(...pathSegments);
    } else {
        for (const key in myPaths) {
            if (getPathInside(key, myPaths[key])) return join(...pathSegments);
        }
    }
    return null;
}

module.exports = { getFullPathOf };