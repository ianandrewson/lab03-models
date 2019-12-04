const fs = require('fs').promises;

// mkdirp - make a directory and all parent directories
async function mkdirp(path) {
    fs.mkdir(path, 'recursive');
}
// writeJSON - write an object to a file
// readJSON - read an object from a file
// readDirectoryJSON - read all files in a directory as objects
// updateJSON - update a files JSON
// deleteFile - delete a file

module.exports = {
    mkdirp,

};
