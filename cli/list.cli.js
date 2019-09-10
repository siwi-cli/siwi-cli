/**
 * @author [siwilizhao]
 * @email [siwilizhao@gmail.com]
 * @create date 2019-09-05 09:18:25
 * @modify date 2019-09-05 09:18:25
 * @desc [description]
 */
const fs = require('fs')
const os = require('os')
const path = require('path')
const homedir = os.homedir()
const DOT_SIWI_PATH = path.resolve(homedir, '.siwi')
const CUSTOM_TEMPLATES_PATH = path.resolve(DOT_SIWI_PATH, 'templates')
const CUSTOM_CONFIG_PATH = path.resolve(DOT_SIWI_PATH, 'config')
const config = require('../config')
class ListCli {
    async list() {
        let list = config.templates       
        if (fs.existsSync(CUSTOM_CONFIG_PATH)) {
            const customConfig = require(CUSTOM_CONFIG_PATH)
            list = Object.assign(list, customConfig.templates)
            console.log(list);
            
        }

        console.table(list)
    }
}
module.exports = ListCli