const fs = require('fs').promises;

// mkdirp - make a directory and all parent directories
async function mkdirp(path) {
    return fs.mkdir(path, 'recursive');
}
// writeJSON - write an object to a file
async function writeJSON(path, jsonObj) {
    return fs.writeFile(path, JSON.stringify(jsonObj));
}
// readJSON - read an object from a file
async function readJSON(path) {
    const content = await fs.readFile(path, 'utf8');
    return JSON.parse(content);
}
// readDirectoryJSON - read all files in a directory as objects
async function readDirectoryJSON(path) {
    const files = await fs.readdir(path);
    return Promise.all(files.map(file => {
        return readJSON(file);
    }));
}
// updateJSON - update a files JSON
async function updateJSON(path, newParams){
    const keys = Object.keys(newParams);
    const obj = await readJSON(path);
    keys.forEach(key => {
        obj[key] = newParams[key];
    });
    return obj;
}

// deleteFile - delete a file
async function deleteFile(){
    return true;
}

module.exports = {
    mkdirp,
    writeJSON,
    readJSON,
    readDirectoryJSON,
    updateJSON,
    deleteFile
};
