const { savePathsOfFolders } = require('./paths-manager.js');
const { getFullPathOf } = require('./path-finder.js');

const args = process.argv;
const mainFolders = ['commands', 'events'];

for (let index = 2; index < args.length; index++) {
    mainFolders.push(args[index]);
}

savePathsOfFolders(mainFolders);

const lookingFor = 'example-1.js';
const value = getFullPathOf(lookingFor);
console.log(`path of ${lookingFor} is: ${value}`);