const fs = require('fs').promises;
const fsFuncs = require('../lib/fileSystemFunctions.js');

jest.mock('fsFuncs', () => ({
    promises: {
        mkdirp: jest.fn(() => Promise.resolve('./my-test-directory/child/more'))
    }
}));

describe('fileSystemFunctions tests', () => {
    it('will make a directory and all parent directories with mkdirp', () => {
        return fsFuncs.mkdirp('./my-test-directory/child/more')
            .then(() => {
                expect(fsFuncs.mkdirp).toHaveCalledWith('./my-test-directory/child/more');
            });
    });
});
