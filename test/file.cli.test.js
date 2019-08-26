/**
 * @author [siwilizhao]
 * @email [siwilizhao@gmail.com]
 * @create date 2019-08-26 14:53:18
 * @modify date 2019-08-26 14:53:18
 * @desc [test for file cli]
 */

const expect = require('chai').expect
describe('cli/file.js', () => {
    it('config', () => {
        const FileCli = require('../cli/file.cli')
        const fileCli = new FileCli()
        fileCli.config()
    });
});