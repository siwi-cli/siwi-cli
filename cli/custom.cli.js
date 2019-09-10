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
const CUSTOM_TEMPLATES_PATH = path.resolve(DOT_SIWI_PATH, 'templates')
const CUSTOM_CONFIG_PATH = path.resolve(DOT_SIWI_PATH, 'config')


class CustomCli {
    constructor () {

    }
    
    /**
     * init
     *
     * @author (siwilizhao<siwilizhao@gmail.com>)
     * @returns
     * @memberof CustomCli
     */
    async init() {
        if (!fs.existsSync(DOT_SIWI_PATH)) {
            fs.mkdirSync(DOT_SIWI_PATH)
            console.log(DOT_SIWI_PATH)
        }
        if (!fs.existsSync(CUSTOM_TEMPLATES_PATH)) {
            fs.mkdirSync(CUSTOM_TEMPLATES_PATH)
            console.log(CUSTOM_TEMPLATES_PATH)
        }
        if (!fs.existsSync(CUSTOM_CONFIG_PATH)) {
            fs.mkdirSync(CUSTOM_CONFIG_PATH)
            console.log(CUSTOM_CONFIG_PATH)
        }
        return true
    }
}

module.exports = CustomCli