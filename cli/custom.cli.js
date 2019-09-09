/**
 * @author [siwilizhao]
 * @email [siwilizhao@gmail.com]
 * @create date 2019-09-09 11:41:47
 * @modify date 2019-09-09 11:41:47
 * @desc [custom.cli]
 */
const os = require('os')
const fs = require('fs')
const path = require('path')
const homedir = os.homedir()
const DOT_SIWI_PATH = path.resolve(homedir, '.siwi')
console.log(DOT_SIWI_PATH);

class CustomCli {
    async init() {
        if (!fs.existsSync(DOT_SIWI_PATH)) {
            fs.mkdirSync(DOT_SIWI_PATH)
        }
        return true
    }
}

module.exports = CustomCli