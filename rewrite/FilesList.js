let FilesList = [];

const SetFilesList = (files) => {
    FilesList = files;
}

const GetFilesList = () => {
    return FilesList;
}

module.exports = {SetFilesList, GetFilesList}