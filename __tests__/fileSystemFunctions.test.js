const fs = require('fs').promises;
const fsFuncs = require('../lib/fileSystemFunctions.js');

const mockPath = './my-test-directory/child/more';

const mockFile = './my-test-directory/child/more/dog';

const mockDogJson = {
    name: 'spot',
    age: 8,
    weight: '20 lbs'
};

jest.mock('fs', () => ({
    promises: {
        mkdir: jest.fn(() => Promise.resolve(mockPath)),
        writeFile: jest.fn(() => Promise.resolve(mockFile, mockDogJson)),
        readFile: jest.fn(() => Promise.revolve(mockFile)),
        
    }
}));

describe('fileSystemFunctions tests', () => {
    it('will make a directory and all parent directories with mkdirp', () => {
        return fsFuncs.mkdirp(mockPath)
            .then(() => {
                expect(fs.mkdir).toHaveBeenLastCalledWith(mockPath, 'recursive');
            });
    });
    it('will write a JSON object to a file', () => {
        return fsFuncs.writeJSON(mockFile, mockDogJson)
            .then(() => {
                expect(fs.writeFile).toHaveBeenLastCalledWith(mockFile, JSON.stringify(mockDogJson));
            });
    });
    it('will read a JSON object from a file', () => {
        return fsFuncs.readJSON(mockFile)
            .then(() => {
                expect(fs.readFile).toHaveBeenLastCalledWith(mockFile);
            });
    });
});
