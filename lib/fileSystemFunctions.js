const fs = require('fs').promises;

// mkdirp - make a directory and all parent directories
async function mkdirp(path) {
    fs.mkdir(path, 'recursive');
}
// writeJSON - write an object to a file
async function writeJSON(path, jsonObj) {
    fs.writeFile(path, JSON.stringify(jsonObj));
}
// readJSON - read an object from a file
async function readJSON(path) {
    return false;
}
// readDirectoryJSON - read all files in a directory as objects
// updateJSON - update a files JSON
// deleteFile - delete a file

module.exports = {
    mkdirp,
    writeJSON,
    readJSON
};
