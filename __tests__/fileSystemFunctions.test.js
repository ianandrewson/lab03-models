const fs = require('fs').promises;
const fsFuncs = require('../lib/fileSystemFunctions.js');

jest.mock('fs', () => ({
    promises: {
        mkdir: jest.fn(() => Promise.resolve('./my-test-directory/child/more'))
    }
}));

describe('fileSystemFunctions tests', () => {
    it('will make a directory and all parent directories with mkdirp', () => {
        return fsFuncs.mkdirp('./my-test-directory/child/more')
            .then(() => {
                expect(fs.mkdir).toHaveBeenLastCalledWith('./my-test-directory/child/more', 'recursive');
            });
    });
});
