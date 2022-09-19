const fs = require('fs');
const { SetFilesList, GetFilesList } = require('./FilesList');

function getAllFilesInFolder (dir, allFilesList = []){
    const files = fs.readdirSync(dir);
    files.map(file => {
        const name = dir + '/' + file;
        if (fs.statSync(name).isDirectory()) { // check if subdirectory is present
            getAllFilesInFolder(name, allFilesList);     // do recursive execution for subdirectory
        } else {
            allFilesList.push(name);           // push filename into the array
        }
    })

    return allFilesList;
}

function prepareObject(dirs) {
    let filesList = [];
    for (let dir of dirs){
        filesList = getAllFilesInFolder(dir, filesList)
    }
    return filesList;
}

function getFilePath(file) {
    return GetFilesList().filter(f => f.endsWith(file))
}

function getFilePathByDir(file, dir) {
    return GetFilesList().filter(f => f.endsWith(file) && f.includes(dir))
}

console.log(getFilePath("path-finder.js"))

SetFilesList(prepareObject(['./rewrite', './my_modules']));

console.log(getFilePathByDir(".js", "rewrite"))