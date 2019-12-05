const fs = require('fs').promises;
const fsFuncs = require('../lib/fileSystemFunctions.js');

const mockPath = './my-test-directory/child/more';
const mockFile = './my-test-directory/child/more/dog';
const mockAnotherFile = './my-test-directory/child/more/person';

const mockDogJson = {
    name: 'spot',
    age: 8,
    weight: '20 lbs'
};
const mockDogNewAge = {
    age: 10,
    weight: '30 lbs'
};

const mockArray = [mockFile, mockAnotherFile];

jest.mock('fs', () => ({
    promises: {
        mkdir: jest.fn(() => Promise.resolve(mockPath)),
        writeFile: jest.fn(() => Promise.resolve(mockFile, mockDogJson)),
        readFile: jest.fn(() => Promise.resolve(JSON.stringify(mockDogJson))),
        readdir: jest.fn(() => Promise.resolve(mockArray))
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
            .then(response => {
                expect(fs.readFile).toHaveBeenLastCalledWith(mockFile, 'utf8');
                expect(response).toEqual(mockDogJson);
            });
    });
    it('will read JSON from all files in a directory', () => {
        return fsFuncs.readDirectoryJSON(mockPath)
            .then(response => {
                expect(fs.readdir).toHaveBeenLastCalledWith(mockPath);
                expect(response.length).toEqual(2);
                expect(response[1].name).toBe('spot');
            });
    });
    it('will update the JSON within a file', () => {
        return fsFuncs.updateJSON(mockFile, mockDogNewAge)
            .then(response => {
                expect(response.age).toEqual(10);
                expect(response.name).toEqual('spot');
                expect(response.weight).toEqual('30 lbs');
            });
    });
    it('will delete a file at the specified path', () => {
        return fsFuncs.deleteFile(mockFile)
            .then(() => {
                expect(mockFile).toBeFalsey();
            });
    });
});
