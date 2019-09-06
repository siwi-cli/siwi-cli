/**
 * @author [siwilizhao]
 * @email [siwilizhao@gmail.com]
 * @create date 2019-09-06 21:39:25
 * @modify date 2019-09-06 21:39:25
 * @desc [test for index.lib.js]
 */

const expect = require('chai').expect
const IndexLib = require('../libs/index.lib')
const indexLib = new IndexLib()

describe('index.lib.js', () => {
    it('', () => {
        expect(indexLib).to.be.an('object')
    });
});